// Leave VITE_API_URL empty when the Express server serves the built site (or in dev via the Vite proxy).
const BASE = import.meta.env.VITE_API_URL || "";

export async function getContent() {
  const res = await fetch(`${BASE}/api/content`);
  if (!res.ok) throw new Error("Could not load content");
  return res.json();
}

export async function sendEnquiry(payload) {
  const res = await fetch(`${BASE}/api/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const json = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(json.message || "Something went wrong. Please try again.");
    err.errors = json.errors || {};
    throw err;
  }
  return json;
}
