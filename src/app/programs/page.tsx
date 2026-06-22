import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Programs",
  description: "Core programs at Bloom Care Foundation — occupational therapy, sensory rooms, caregiver training, nutritional support, and equipment access.",
};

const programs = [
  {
    id: "therapy",
    icon: "\u{1F9E0}",
    color: "var(--teal)",
    title: "Occupational & Sensory Therapy",
    desc: "One-on-one and group therapy sessions designed to improve sensory processing, fine and gross motor skills, and daily living abilities for children with developmental conditions.",
    details: ["Individualised assessment and therapy plans", "Sensory integration therapy", "Fine and gross motor skill development", "Social skills group sessions", "School-based therapy support"],
    counties: "All five operational counties",
  },
  {
    id: "sensory-rooms",
    icon: "\u{1F3E0}",
    color: "var(--purple)",
    title: "Sensory Rooms & Spaces",
    desc: "We design and equip purpose-built sensory environments in schools, hospitals, and community spaces. These rooms provide controlled sensory input for calming, stimulation, and therapeutic engagement.",
    details: ["Needs assessment and room design", "Equipment procurement and installation", "Staff training on room usage", "Ongoing maintenance and support"],
    counties: "Nairobi, Kiambu, Nyeri, Mombasa, Kisumu",
  },
  {
    id: "caregiver-training",
    icon: "\u{1F4DA}",
    color: "var(--gold)",
    title: "Caregiver Training Centre",
    desc: "Practical skills-building for parents, teachers and community members — turning unpaid caregivers into confident, capable champions for children with developmental needs.",
    details: ["Understanding developmental conditions", "Home-based therapy techniques", "Communication strategies", "Managing sensory needs daily", "Community awareness workshops"],
    counties: "All five operational counties",
  },
  {
    id: "nutrition",
    icon: "\u{1F371}",
    color: "var(--rose)",
    title: "Nutritional Support",
    desc: "Targeted nutritional assistance for families of children with disabilities, recognising the critical link between nutrition and developmental outcomes.",
    details: ["Nutritional assessment for each child", "Tailored dietary plans", "Parent education on meal planning", "Collaboration with healthcare providers"],
    counties: "Nairobi, Kiambu, Nyeri",
  },
  {
    id: "equipment",
    icon: "\u{1F91D}",
    color: "var(--green)",
    title: "Equipment Access",
    desc: "Sourcing and supplying sensory and OT equipment to families who cannot afford paid services — locally fabricated or donated via partner networks.",
    details: ["Assessment of equipment needs", "Provision of sensory tools and aids", "Loan programme for expensive equipment", "Training on equipment usage"],
    counties: "All five operational counties",
  },
];

export default function ProgramsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Programs</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Our Core Programs</h1>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640 }}>
            Five interconnected programs covering the full cycle of need — from early diagnosis to long-term family empowerment.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {programs.map((p, i) => (
              <div key={p.id} id={p.id} style={{ scrollMarginTop: "5rem" }}>
                <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "3rem", padding: "3rem 0", borderBottom: i < programs.length - 1 ? "1px solid var(--gray-100)" : "none" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                      <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                      <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)" }}>0{i + 1}</span>
                    </div>
                    <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.375rem", color: "var(--navy)", marginBottom: "0.5rem" }}>{p.title}</h2>
                    <p style={{ fontSize: "0.75rem", color: "var(--gray-500)" }}>{p.counties}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.8, marginBottom: "1.5rem" }}>{p.desc}</p>
                    <ul style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
                      {p.details.map((d) => (
                        <li key={d} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", fontSize: "0.8125rem", color: "var(--gray-700)", lineHeight: 1.7 }}>
                          <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: p.color, marginTop: 7 }} />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--navy)", padding: "4rem 0", textAlign: "center", borderTop: "3px solid var(--teal)" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--white)", marginBottom: "0.75rem" }}>Interested in our programs?</h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>Contact us to learn more about how you can access or support our programs.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn--primary">Contact Us</Link>
            <Link href="/donate" className="btn btn--ghost">Support Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
