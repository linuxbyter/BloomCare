import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Bloom Care Foundation Kenya — our founding story, constitutional basis, and PBO status.",
};

const c4 = [
  "Provide therapeutic and sensory support services to children with developmental conditions",
  "Establish sensory rooms and therapeutic environments in schools and community spaces",
  "Train caregivers, parents, and community health workers in developmental support techniques",
  "Provide nutritional guidance and support for children with special dietary needs",
  "Facilitate access to therapeutic equipment for families unable to afford paid services",
];

const c5 = [
  "Enter into partnerships with government agencies, NGOs, and private sector organisations",
  "Receive and manage grants, donations, and contributions from local and international sources",
  "Conduct research and advocacy on developmental conditions and therapeutic interventions",
  "Collaborate with county governments across Kenya to expand service delivery",
  "Establish branches and operations in any county within Kenya",
];

const board = [
  { initials: "AK", name: "Agnes Nyawira Kionga", role: "Chairperson", bg: "var(--navy)" },
  { initials: "AM", name: "Alice Njeri Mukiri", role: "Secretary", bg: "var(--teal)" },
  { initials: "JM", name: "Julia Wanjiru Mukundi", role: "Treasurer", bg: "var(--purple)" },
  { initials: "EK", name: "Everline Wangari Kionga", role: "Director", bg: "var(--rose)" },
  { initials: "PM", name: "Peter Makau Musyoka", role: "Director", bg: "var(--gold)" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>About Us</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Our Story</h1>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640 }}>
            Bloom Care Foundation Kenya was born from a simple observation: too many children with developmental conditions in Kenya lack access to basic therapeutic support.
          </p>
        </div>
      </section>

      {/* Founding + PBO */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <p className="eyebrow">How It Began</p>
              <h2 className="section-title">From community to foundation</h2>
              <div style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.8 }}>
                <p style={{ marginBottom: "1rem" }}>
                  Founded in Kajiado-North, Kenya, Bloom Care Foundation started as a community initiative to support children with autism spectrum disorder, sensory processing disorder, developmental delays, and intellectual disabilities.
                </p>
                <p style={{ marginBottom: "1rem" }}>
                  Our founders saw that families in both urban and rural areas struggled to access affordable occupational therapy and sensory support. Many children were going without intervention during critical developmental windows.
                </p>
                <p>
                  Today, we operate across five counties — Nairobi, Kiambu, Nyeri, Mombasa, and Kisumu — providing direct therapy, caregiver training, sensory room establishment, nutritional guidance, and equipment access to hundreds of families.
                </p>
              </div>
            </div>
            <div>
              <p className="eyebrow">PBO Status</p>
              <h2 className="section-title">Registered & recognised</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Registration", value: "Public Benefit Organisation", sub: "PBO Act No. 18 of 2013" },
                  { label: "Registration Number", value: "NGO-7WULB5J", sub: "" },
                  { label: "Based In", value: "Kajiado-North, Kenya", sub: "" },
                ].map((item) => (
                  <div key={item.label} style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "1.25rem 1.5rem", background: "var(--white)" }}>
                    <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.375rem" }}>{item.label}</div>
                    <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)" }}>{item.value}</div>
                    {item.sub && <div style={{ fontSize: "0.8125rem", color: "var(--gray-500)", marginTop: 2 }}>{item.sub}</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constitution */}
      <section className="section" id="constitution">
        <div className="container">
          <p className="eyebrow">Constitution</p>
          <h2 className="section-title" style={{ marginBottom: "2rem" }}>Our Constitutional Framework</h2>
          <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
            <div style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "2rem", background: "var(--white)" }}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "1rem" }}>Clause 4 — Objects and Purposes</h3>
              <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", marginBottom: "1rem" }}>The objects of the Foundation are to:</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {c4.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7 }}>
                    <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "2rem", background: "var(--white)" }}>
              <h3 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "1rem" }}>Clause 5 — Powers</h3>
              <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", marginBottom: "1rem" }}>The Foundation shall have the power to:</p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                {c5.map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7 }}>
                    <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--purple)", marginTop: 7 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Board */}
      <section className="section section--alt" id="team">
        <div className="container">
          <p className="eyebrow">Governance</p>
          <h2 className="section-title">Our founding board</h2>
          <p className="section-lead">A committed team of Kenyan professionals constituted under the PBO Act No. 18 of 2013 and the PBO Regulations 2026.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }} role="list">
            {board.map((m) => (
              <div key={m.name} style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "1.5rem 1rem", textAlign: "center", background: "var(--white)" }} role="listitem">
                <div style={{ width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: "var(--white)", margin: "0 auto 0.875rem", background: m.bg }}>{m.initials}</div>
                <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)", fontFamily: "var(--font-inter)" }}>{m.name}</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--teal)", fontWeight: 600, marginTop: 3 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "4rem 0", textAlign: "center", borderTop: "3px solid var(--teal)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--white)", marginBottom: "0.75rem" }}>Ready to make a difference?</h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>Reach out to Bloom Care Foundation Kenya — every connection matters.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn--primary">Contact Us</Link>
            <Link href="/donate" className="btn btn--ghost">Support Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
