import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Bloom Care Foundation Kenya.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Contact</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Get in touch</h1>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640 }}>
            Have questions about our programs, want to refer a child, or interested in partnering? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            {/* Info */}
            <div>
              <p className="eyebrow">Contact Details</p>
              {[
                { label: "Email", value: "info@bloomcarefoundation.org", href: "mailto:info@bloomcarefoundation.org" },
                { label: "Location", value: "Kajiado-North, Kenya", href: "" },
                { label: "Counties Served", value: "Nairobi, Kiambu, Nyeri, Mombasa, Kisumu", href: "" },
                { label: "Registration", value: "PBO Act No. 18 of 2013, Reg. No. NGO-7WULB5J", href: "" },
              ].map((item) => (
                <div key={item.label} style={{ marginBottom: "1.5rem" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.375rem" }}>{item.label}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy)" }}>{item.value}</a>
                  ) : (
                    <span style={{ fontSize: "0.9375rem", fontWeight: 600, color: "var(--navy)" }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Form */}
            <div style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "2rem", background: "var(--white)" }}>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
