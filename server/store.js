import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const FILE = path.join(__dirname, "data", "enquiries.json");

// Serialise writes so two simultaneous enquiries can't corrupt the file.
let queue = Promise.resolve();

async function readAll() {
  try {
    return JSON.parse(await fs.readFile(FILE, "utf8"));
  } catch (err) {
    if (err.code === "ENOENT") return [];
    throw err;
  }
}

export function listEnquiries() {
  return readAll();
}

export function addEnquiry(entry) {
  const job = queue.then(async () => {
    const all = await readAll();
    const record = { id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6), createdAt: new Date().toISOString(), ...entry };
    all.push(record);
    await fs.writeFile(FILE, JSON.stringify(all, null, 2));
    return record;
  });
  queue = job.catch(() => {});
  return job;
}
