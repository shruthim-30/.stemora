import { useState } from "react";
import { sendEnquiry } from "../api.js";

const empty = { schoolName: "", contactPerson: "", phone: "", email: "", programme: "", message: "", website: "" };

function Field({ label, error, children }) {
  return (
    <label className="grid gap-1.5 text-sm font-bold">
      {label}
      {children}
      {error && <span className="text-[13px] font-semibold text-red-800">{error}</span>}
    </label>
  );
}

const inputCls = "w-full rounded-[10px] border-2.5 border-navy bg-white px-3.5 py-3 font-[inherit] font-normal";

export default function Contact({ info }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    setErrors({});
    setStatus({ type: "loading", message: "" });
    try {
      const res = await sendEnquiry(form);
      setForm(empty);
      setStatus({ type: "success", message: res.message });
    } catch (err) {
      setErrors(err.errors || {});
      setStatus({ type: "error", message: err.message });
    }
  };

  return (
    <section id="contact">
      <div className="wrap grid gap-9 md:grid-cols-2 md:gap-16">
        <div>
          <h2>Ready to bring Stemora to your school?</h2>
          <p className="mb-[26px] mt-4 text-lg text-mut">Request a callback or book a programme discussion.</p>
          {[
            ["Phone", info.phone],
            ["Email", info.email],
            ["Location", info.location],
          ].map(([k, v]) => (
            <div key={k} className="mb-2 flex items-center font-bold">
              <span className="mr-3 inline-block h-3 w-3 rounded-full border-2 border-navy bg-teal" />
              {k}: {v}
            </div>
          ))}
        </div>

        <form onSubmit={submit} noValidate className="grid gap-3.5 rounded-[20px] border-3 border-navy bg-gold p-[30px] shadow-hard8">
          <Field label="School name" error={errors.schoolName}><input className={inputCls} type="text" value={form.schoolName} onChange={set("schoolName")} /></Field>
          <Field label="Contact person" error={errors.contactPerson}><input className={inputCls} type="text" value={form.contactPerson} onChange={set("contactPerson")} /></Field>
          <Field label="Phone" error={errors.phone}><input className={inputCls} type="tel" value={form.phone} onChange={set("phone")} /></Field>
          <Field label="Email" error={errors.email}><input className={inputCls} type="email" value={form.email} onChange={set("email")} /></Field>
          <Field label="Programme interest"><input className={inputCls} type="text" placeholder="Robotics, RoboCircuit or Festival" value={form.programme} onChange={set("programme")} /></Field>
          <Field label="Message"><textarea className={`${inputCls} min-h-[84px] resize-y`} value={form.message} onChange={set("message")} /></Field>

          {/* Honeypot – hidden from people, bots tend to fill it */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" value={form.website} onChange={set("website")} />

          <button type="submit" disabled={status.type === "loading"} className="cursor-pointer rounded-full bg-navy p-4 font-[inherit] font-extrabold text-white hover:bg-tealD disabled:opacity-70">
            {status.type === "loading" ? "Sending…" : "Get in touch"}
          </button>

          {status.type === "success" && <p role="status" className="rounded-[10px] border-2.5 border-navy bg-white p-3 text-sm font-bold">✓ {status.message}</p>}
          {status.type === "error" && <p role="alert" className="rounded-[10px] border-2.5 border-navy bg-white p-3 text-sm font-bold text-red-800">{status.message}</p>}
        </form>
      </div>
    </section>
  );
}
