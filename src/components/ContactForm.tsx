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
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          className="form-input"
          placeholder="Your full name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          className="form-input"
          placeholder="you@example.com"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          className="form-input"
          placeholder="How can we help?"
          rows={5}
        />
      </div>

      {status === "sent" && (
        <p className="text-sm text-teal font-medium">Thank you. We will get back to you shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-rose font-medium">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
