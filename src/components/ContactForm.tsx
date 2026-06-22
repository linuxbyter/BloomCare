"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ name: data.get("name"), email: data.get("email"), message: data.get("message") }) });
      if (res.ok) { setStatus("sent"); form.reset(); } else { setStatus("error"); }
    } catch { setStatus("error"); }
  }

  return (
    <form onSubmit={handleSubmit}>
      {[
        { id: "contact-name", label: "Name", type: "text", name: "name", placeholder: "Your full name", required: true },
        { id: "contact-email", label: "Email", type: "email", name: "email", placeholder: "you@example.com", required: true },
      ].map((f) => (
        <div key={f.id} style={{ marginBottom: "1.25rem" }}>
          <label htmlFor={f.id} style={{ display: "block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.5rem" }}>{f.label}</label>
          <input id={f.id} name={f.name} type={f.type} required={f.required} className="form-input" placeholder={f.placeholder} />
        </div>
      ))}
      <div style={{ marginBottom: "1.25rem" }}>
        <label htmlFor="contact-message" style={{ display: "block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.5rem" }}>Message</label>
        <textarea id="contact-message" name="message" required className="form-input" placeholder="How can we help?" rows={5} />
      </div>

      {status === "sent" && <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--teal)", marginBottom: "1rem" }}>Thank you. We will get back to you shortly.</p>}
      {status === "error" && <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--rose)", marginBottom: "1rem" }}>Something went wrong. Please try again.</p>}

      <button type="submit" disabled={status === "sending"} className="btn btn--primary" style={{ opacity: status === "sending" ? 0.4 : 1 }}>
        {status === "sending" ? "Sending\u2026" : "Send Message"}
      </button>
    </form>
  );
}
