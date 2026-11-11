import "dotenv/config";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import content from "./data/content.js";
import { addEnquiry, listEnquiries } from "./store.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 5000;
const isProd = process.env.NODE_ENV === "production";

app.use(helmet({ contentSecurityPolicy: false }));
app.use(
  cors({
    origin: (process.env.CLIENT_ORIGIN || "http://localhost:5173").split(",").map((s) => s.trim()),
  })
);
app.use(express.json({ limit: "20kb" }));

// ---------- helpers ----------
const clean = (v, max) => (typeof v === "string" ? v.trim().slice(0, max) : "");
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validateEnquiry(body = {}) {
  const data = {
    schoolName: clean(body.schoolName, 120),
    contactPerson: clean(body.contactPerson, 120),
    phone: clean(body.phone, 30),
    email: clean(body.email, 160),
    programme: clean(body.programme, 120),
    message: clean(body.message, 2000),
  };
  const errors = {};
  if (!data.schoolName) errors.schoolName = "Please enter your school name.";
  if (!data.contactPerson) errors.contactPerson = "Please enter a contact person.";
  if (!data.email && !data.phone) errors.email = "Please share an email or a phone number.";
  if (data.email && !EMAIL_RE.test(data.email)) errors.email = "That email doesn’t look right.";
  if (data.phone && data.phone.replace(/\D/g, "").length < 7) errors.phone = "That phone number looks too short.";
  return { data, errors };
}

// ---------- routes ----------
app.get("/api/health", (_req, res) => res.json({ ok: true }));

app.get("/api/content", (_req, res) => {
  res.set("Cache-Control", "public, max-age=60");
  res.json(content);
});

const enquiryLimiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many enquiries from this device. Please try again later." },
});

app.post("/api/enquiries", enquiryLimiter, async (req, res, next) => {
  try {
    // Honeypot: real users never fill this hidden field.
    if (req.body?.website) return res.status(201).json({ message: "Thanks! We’ll be in touch soon." });

    const { data, errors } = validateEnquiry(req.body);
    if (Object.keys(errors).length) {
      return res.status(400).json({ message: "Please fix the highlighted fields.", errors });
    }
    await addEnquiry(data);
    res.status(201).json({ message: "Thanks! We’ve received your enquiry and will get back to you soon." });
  } catch (err) {
    next(err);
  }
});

// Read enquiries (send header  x-admin-key: <ADMIN_KEY>)
app.get("/api/enquiries", async (req, res, next) => {
  try {
    const key = process.env.ADMIN_KEY;
    if (!key || req.get("x-admin-key") !== key) return res.status(401).json({ message: "Unauthorized" });
    res.json(await listEnquiries());
  } catch (err) {
    next(err);
  }
});

app.use("/api", (_req, res) => res.status(404).json({ message: "Not found" }));

// ---------- serve the built React app in production ----------
const dist = path.join(__dirname, "..", "client", "dist");
if (isProd && fs.existsSync(dist)) {
  app.use(express.static(dist));
  app.get("*", (_req, res) => res.sendFile(path.join(dist, "index.html")));
}

// ---------- errors ----------
// eslint-disable-next-line no-unused-vars
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ message: "Something went wrong on our side. Please try again." });
});

app.listen(PORT, () => console.log(`Stemora server running on http://localhost:${PORT}`));
