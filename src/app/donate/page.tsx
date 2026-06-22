"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const presetAmounts = [500, 1000, 2500, 5000];

export default function DonatePage() {
  const router = useRouter();
  const [amount, setAmount] = useState<number | "">("");
  const [customAmount, setCustomAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const selectedAmount = amount || (customAmount ? Number(customAmount) : 0);

  function handlePreset(val: number) {
    setAmount(val);
    setCustomAmount("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!selectedAmount || !phone) { setStatus("error"); setMessage("Please enter a valid amount and phone number."); return; }
    setStatus("sending");
    try {
      const res = await fetch("/api/donate", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ phone, amount: selectedAmount, name: name || "Anonymous", email }) });
      const data = await res.json();
      if (res.ok) { router.push("/donate/success"); }
      else { setStatus("error"); setMessage(data.error || "Payment failed. Please try again."); }
    } catch { setStatus("error"); setMessage("Network error. Please try again."); }
  }

  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Donate</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Support a child&apos;s journey</h1>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640 }}>
            Your donation helps us provide therapy, equipment, and training to children with developmental conditions and their families across Kenya.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="section">
        <div className="container">
          <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Info */}
            <div>
              <p className="eyebrow">What your donation supports</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "0.5rem", marginBottom: "2rem" }}>
                {["Therapy sessions for children who cannot afford them", "Sensory room equipment and maintenance", "Caregiver training in underserved communities", "Nutritional support for children with special dietary needs"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.875rem", color: "var(--gray-500)", lineHeight: 1.7 }}>
                    <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "1.5rem", background: "var(--gray-50)" }}>
                <h3 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", fontFamily: "var(--font-inter)" }}>M-Pesa Payment</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7 }}>
                  Donations are processed via M-Pesa STK Push. You will receive a prompt on your phone to enter your M-Pesa PIN. All transactions are secure and handled by Safaricom.
                </p>
              </div>
            </div>

            {/* Form */}
            <div style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "2rem", background: "var(--white)" }}>
              <form onSubmit={handleSubmit}>
                {/* Amount */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ display: "block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.75rem" }}>Amount (KES)</label>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem", marginBottom: "0.75rem" }}>
                    {presetAmounts.map((val) => (
                      <button key={val} type="button" onClick={() => handlePreset(val)} style={{ padding: "14px", borderRadius: "var(--radius)", fontSize: "0.875rem", fontWeight: 600, cursor: "pointer", border: amount === val ? "none" : "1.5px solid var(--gray-100)", background: amount === val ? "var(--navy)" : "var(--gray-50)", color: amount === val ? "var(--white)" : "var(--gray-700)", transition: "all 200ms ease" }}>
                        {val.toLocaleString()}
                      </button>
                    ))}
                  </div>
                  <input type="number" min="100" placeholder="Custom amount" value={customAmount} onChange={(e) => { setCustomAmount(e.target.value); setAmount(""); }} className="form-input" />
                </div>

                {/* Phone */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="donate-phone" style={{ display: "block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.5rem" }}>M-Pesa Phone Number</label>
                  <input id="donate-phone" type="tel" placeholder="0700 000 000" value={phone} onChange={(e) => setPhone(e.target.value)} required className="form-input" />
                </div>

                {/* Name */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="donate-name" style={{ display: "block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.5rem" }}>Name <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional)</span></label>
                  <input id="donate-name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} className="form-input" />
                </div>

                {/* Email */}
                <div style={{ marginBottom: "1.5rem" }}>
                  <label htmlFor="donate-email" style={{ display: "block", fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.5rem" }}>Email <span style={{ fontWeight: 400, textTransform: "none", letterSpacing: 0 }}>(optional — for receipt)</span></label>
                  <input id="donate-email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} className="form-input" />
                </div>

                {message && <p style={{ fontSize: "0.875rem", fontWeight: 600, color: status === "sent" ? "var(--teal)" : "var(--rose)", marginBottom: "1rem" }}>{message}</p>}

                <button type="submit" disabled={status === "sending" || !selectedAmount || !phone} className="btn btn--primary" style={{ width: "100%", justifyContent: "center", opacity: status === "sending" || !selectedAmount || !phone ? 0.4 : 1, cursor: status === "sending" || !selectedAmount || !phone ? "not-allowed" : "pointer" }}>
                  {status === "sending" ? "Processing\u2026" : `Donate KES ${selectedAmount ? selectedAmount.toLocaleString() : ""}`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
