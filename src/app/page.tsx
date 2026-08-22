"use client";

import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import Hero from "@/components/Hero";

const programs = [
  {
    icon: "🧠",
    title: "Therapy Services",
    desc: "Occupational therapy, sensory integration, speech therapy, and behavioural support for children with developmental conditions.",
  },
  {
    icon: "🏠",
    title: "Sensory Rooms",
    desc: "Equipping sensory rooms and safe therapeutic spaces in communities that cannot access private facilities.",
  },
  {
    icon: "📚",
    title: "Caregiver Training",
    desc: "Practical skills-building for parents and teachers — turning unpaid caregivers into confident champions.",
  },
  {
    icon: "🍱",
    title: "Nutritional Support",
    desc: "Targeted nutritional assistance for families of children with disabilities.",
  },
  {
    icon: "🤝",
    title: "Equipment Access",
    desc: "Sourcing sensory and OT equipment to families who cannot afford paid services.",
  },
];

const steps = [
  { num: "1", title: "Identify & Connect", desc: "Working with hospitals, schools and county health teams to find children who need early intervention." },
  { num: "2", title: "Assess & Plan", desc: "Holistic assessments and individual support plans grounded in occupational therapy best practice." },
  { num: "3", title: "Deliver & Equip", desc: "Therapy, training, equipment and nutritional support. No child is turned away for inability to pay." },
  { num: "4", title: "Empower & Sustain", desc: "Families leave with skills, tools and community connections to sustain progress." },
];

const stories = [
  {
    name: "Grace Wanjiku",
    location: "Nairobi",
    initials: "GW",
    color: "var(--teal)",
    quote: "Before Bloom Care, my son couldn't hold a spoon. After 6 months of therapy, he feeds himself and started school. They gave us hope when we had none.",
    program: "Occupational Therapy",
  },
  {
    name: "Peter Ochieng",
    location: "Kisumu",
    initials: "PO",
    color: "var(--navy)",
    quote: "The caregiver training changed everything. I learned how to work with my daughter at home, not just during sessions. She's making progress every week.",
    program: "Caregiver Training",
  },
  {
    name: "Mary Njeri",
    location: "Kiambu",
    initials: "MN",
    color: "var(--purple)",
    quote: "We couldn't afford sensory equipment. Bloom Care provided it free. My son now has a safe space to regulate and learn. No child was turned away from us.",
    program: "Sensory Equipment",
  },
];

const team = [
  { initials: "AK", name: "Agnes Nyawira Kionga", role: "Chairperson", bg: "var(--navy)" },
  { initials: "AM", name: "Alice Njeri Mukiri", role: "Secretary", bg: "var(--teal)" },
  { initials: "JM", name: "Julia Wanjiru Mukundi", role: "Treasurer", bg: "var(--purple)" },
  { initials: "EK", name: "Everline Wangari Kionga", role: "Director", bg: "var(--rose)" },
  { initials: "PM", name: "Peter Makau Musyoka", role: "Director", bg: "var(--gold)" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Mission strip */}
      <div
        style={{
          background: "var(--gray-50)",
          borderTop: "1px solid var(--gray-100)",
          borderBottom: "1px solid var(--gray-100)",
          padding: "1rem var(--pad-x)",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "2rem",
            flexWrap: "wrap",
          }}
        >
          {["Autism Awareness", "Special Needs Support", "Community Inclusion", "Empower · Include · Inspire"].map(
            (item, i) => (
              <span key={item} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                <span style={{ fontSize: "0.8125rem", fontWeight: 600, color: "var(--gray-500)", letterSpacing: "0.02em" }}>
                  {item}
                </span>
                {i < 3 && <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gray-200)" }} />}
              </span>
            )
          )}
        </div>
      </div>

      {/* Programs */}
      <section className="section" id="programs" aria-labelledby="prog-title">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title" id="prog-title">Our Core Programs</h2>
            <p className="section-lead">
              Five interconnected programs covering the full cycle of need — from early
              diagnosis to long-term family empowerment.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1.25rem" }} role="list">
            {programs.map((p, i) => (
              <FadeIn key={p.title} delay={i * 0.08}>
                <article
                  style={{
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem 1.5rem",
                    background: "var(--white)",
                    height: "100%",
                    transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  }}
                  role="listitem"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
                    e.currentTarget.style.borderColor = "var(--gray-200)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--gray-100)";
                  }}
                >
                  <div style={{ fontSize: 28, marginBottom: "1rem" }}>{p.icon}</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem" }}>{p.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--gray-500)", lineHeight: 1.7 }}>{p.desc}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section section--alt" id="reach" aria-labelledby="how-title">
        <div className="container">
          <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
            <div>
              <FadeIn>
                <p className="eyebrow">Our Approach</p>
                <h2 className="section-title" id="how-title">How we reach families</h2>
              </FadeIn>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} role="list">
                {steps.map((s, i) => (
                  <FadeIn key={s.num} delay={i * 0.1}>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "flex-start",
                        padding: "1.25rem",
                        borderLeft: "3px solid var(--teal)",
                        background: "var(--white)",
                        borderRadius: "0 var(--radius) var(--radius) 0",
                      }}
                      role="listitem"
                    >
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          minWidth: 32,
                          background: "var(--teal)",
                          color: "var(--white)",
                          borderRadius: "50%",
                          fontSize: "0.8125rem",
                          fontWeight: 700,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {s.num}
                      </div>
                      <div>
                        <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy)", marginBottom: "0.25rem" }}>{s.title}</h4>
                        <p style={{ fontSize: "0.875rem", color: "var(--gray-500)", lineHeight: 1.65 }}>{s.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            <FadeIn delay={0.2}>
              <div style={{ background: "var(--navy)", borderRadius: "var(--radius-lg)", padding: "2.5rem", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -50, right: -50, width: 160, height: 160, borderRadius: "50%", background: "rgba(43,174,142,0.08)" }} />
                <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "1.25rem", position: "relative" }}>
                  Where we operate
                </h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, position: "relative" }}>
                  {["Nairobi", "Kiambu", "Nyeri", "Mombasa", "Kisumu"].map((c) => (
                    <span key={c} style={{ fontSize: "0.8125rem", fontWeight: 500, color: "var(--white)", background: "rgba(255,255,255,0.08)", padding: "6px 16px", borderRadius: 50 }}>
                      {c}
                    </span>
                  ))}
                  <span style={{ fontSize: "0.8125rem", fontWeight: 500, color: "#7dffd6", background: "rgba(43,174,142,0.15)", padding: "6px 16px", borderRadius: 50 }}>
                    + Expanding
                  </span>
                </div>
                <div style={{ marginTop: "1.5rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.1)", position: "relative" }}>
                  <h4 style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>
                    Who we serve
                  </h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Autism Spectrum", "Sensory Processing", "Developmental Delays", "Intellectual Disabilities", "Family Caregivers", "OVC"].map((w) => (
                      <span key={w} style={{ fontSize: "0.8125rem", fontWeight: 500, color: "rgba(255,255,255,0.7)", background: "rgba(255,255,255,0.06)", padding: "6px 16px", borderRadius: 50 }}>
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="section" aria-labelledby="impact-title">
        <div className="container" style={{ textAlign: "center", maxWidth: 800 }}>
          <FadeIn>
            <p className="eyebrow" style={{ justifyContent: "center" }}>Our Impact</p>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: "var(--navy)", marginBottom: "1.5rem" }} id="impact-title">
              Building a Kenya where every child blooms
            </h2>
            <p style={{ fontSize: "1.0625rem", color: "var(--gray-500)", lineHeight: 1.75, marginBottom: "3rem" }}>
              Since our registration in 2026, we have been working to ensure that no child with a developmental condition is left behind — regardless of their family&apos;s ability to pay.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem" }}>
            {[
              { num: "5", label: "Counties reached at launch" },
              { num: "PBO", label: "Registered Public Benefit Organisation" },
              { num: "0", label: "Children turned away for inability to pay" },
              { num: "3", label: "Sixth Schedule categories served" },
            ].map((c, i) => (
              <FadeIn key={c.label} delay={i * 0.1}>
                <div style={{ padding: "1.5rem 1rem" }}>
                  <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1 }}>{c.num}</div>
                  <div style={{ fontSize: "0.8125rem", color: "var(--gray-500)", marginTop: 8, lineHeight: 1.5 }}>{c.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stories */}
      <section className="section section--alt" id="stories" aria-labelledby="stories-title">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Real Stories</p>
            <h2 className="section-title" id="stories-title">Families we&apos;ve supported</h2>
            <p className="section-lead">
              Every family has a story. Here are some of the lives we&apos;ve been privileged to be part of.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }} role="list">
            {stories.map((s, i) => (
              <FadeIn key={s.name} delay={i * 0.1}>
                <article
                  style={{
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    background: "var(--white)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                  role="listitem"
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: "50%",
                        background: s.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.875rem",
                        fontWeight: 700,
                        color: "var(--white)",
                        flexShrink: 0,
                      }}
                    >
                      {s.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy)" }}>{s.name}</div>
                      <div style={{ fontSize: "0.75rem", color: "var(--gray-500)" }}>{s.location} · {s.program}</div>
                    </div>
                  </div>
                  <blockquote style={{ fontSize: "0.9375rem", color: "var(--gray-700)", lineHeight: 1.7, fontStyle: "italic", margin: 0, flex: 1 }}>
                    &ldquo;{s.quote}&rdquo;
                  </blockquote>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Governance */}
      <section className="section" id="team" aria-labelledby="team-title">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Governance</p>
            <h2 className="section-title" id="team-title">Our Founding Board</h2>
            <p className="section-lead">
              A committed team of Kenyan professionals constituted under the PBO Act No. 18 of 2013.
            </p>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem" }} role="list">
            {team.map((m, i) => (
              <FadeIn key={m.name} delay={i * 0.08}>
                <div
                  style={{
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.75rem 1rem",
                    textAlign: "center",
                    background: "var(--white)",
                  }}
                  role="listitem"
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      background: m.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      margin: "0 auto 1rem",
                    }}
                  >
                    {m.initials}
                  </div>
                  <h4 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy)" }}>{m.name}</h4>
                  <p style={{ fontSize: "0.8125rem", color: "var(--teal)", fontWeight: 600, marginTop: 4 }}>{m.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section section--alt" id="involve" aria-labelledby="involve-title">
        <div className="container">
          <FadeIn>
            <p className="eyebrow">Join Us</p>
            <h2 className="section-title" id="involve-title">How you can help</h2>
          </FadeIn>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.25rem" }} role="list">
            {[
              { icon: "💛", title: "Donate", desc: "Fund therapy sessions, sensory equipment and nutritional support for a child who cannot afford care.", href: "/donate", btn: "Give Today" },
              { icon: "🙌", title: "Volunteer", desc: "Therapists, trainers, educators and community advocates — your skills can transform a family's life.", href: "/contact", btn: "Get Involved" },
              { icon: "🤝", title: "Partner with Us", desc: "We welcome partnerships with corporates, hospitals, schools, Rotary clubs and international foundations.", href: "/contact", btn: "Contact Us" },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <article
                  style={{
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem",
                    background: "var(--white)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    height: "100%",
                  }}
                  role="listitem"
                >
                  <div style={{ fontSize: 28 }}>{item.icon}</div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--navy)" }}>{item.title}</h3>
                  <p style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
                  <Link href={item.href} className="btn btn--navy" style={{ marginTop: "0.5rem", alignSelf: "flex-start" }}>
                    {item.btn}
                  </Link>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section"
        style={{ background: "var(--navy)", textAlign: "center" }}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="container" style={{ maxWidth: 640 }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "var(--white)", marginBottom: "1rem" }} id="contact-title">
              Ready to make a difference?
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>
              Every connection matters. Reach out to Bloom Care Foundation Kenya.
            </p>
            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
              <a href="mailto:info@bloomcarekenya.org" className="btn btn--primary">
                Send a Message
              </a>
              <Link href="/donate" className="btn btn--ghost">
                Donate Now
              </Link>
            </div>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
              <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>P.O. Box 328-00206, Kenya</span>
              <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>Mashuria House, Kajiado-North</span>
              <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)" }}>Reg. No. NGO-7WULB5J</span>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
