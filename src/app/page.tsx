import Link from "next/link";

const programs = [
  { icon: "🧠", bg: "rgba(43,174,142,0.1)", title: "Therapy Services", desc: "Occupational therapy, sensory integration, speech and language therapy, and behavioural support for children with developmental conditions." },
  { icon: "🏠", bg: "rgba(123,94,167,0.1)", title: "Sensory Rooms & Spaces", desc: "Establishing and equipping sensory rooms and safe therapeutic spaces in communities that cannot access private facilities." },
  { icon: "📚", bg: "rgba(232,160,32,0.1)", title: "Caregiver Training Centre", desc: "Practical skills-building for parents, teachers and community members — turning unpaid caregivers into confident, capable champions." },
  { icon: "🍱", bg: "rgba(212,82,122,0.1)", title: "Nutritional Support", desc: "Targeted nutritional assistance for families of children with disabilities, recognising the link between nutrition and developmental outcomes." },
  { icon: "🤝", bg: "rgba(58,154,62,0.1)", title: "Equipment Access", desc: "Sourcing and supplying sensory and OT equipment to families who cannot afford paid services — locally fabricated or donated via partner networks." },
];

const steps = [
  { num: "1", title: "Identify & Connect", desc: "Working with hospitals, schools and county health teams to identify children who need early intervention and connect them to our services." },
  { num: "2", title: "Assess & Plan", desc: "Our team conducts holistic assessments and designs an individual support plan grounded in occupational therapy best practice." },
  { num: "3", title: "Deliver & Equip", desc: "We provide therapy, training, equipment and nutritional support. No child is turned away for inability to pay." },
  { num: "4", title: "Empower & Sustain", desc: "Families leave with skills, tools and community connections to sustain progress long after their programme ends." },
];

const team = [
  { initials: "AK", name: "Agnes Nyawira Kionga", role: "Chairperson", bg: "var(--navy)" },
  { initials: "AM", name: "Alice Njeri Mukiri", role: "Secretary", bg: "var(--teal)" },
  { initials: "JM", name: "Julia Wanjiru Mukundi", role: "Treasurer", bg: "var(--purple)" },
  { initials: "EK", name: "Everline Wangari Kionga", role: "Director", bg: "var(--rose)" },
  { initials: "PM", name: "Peter Makau Musyoka", role: "Director", bg: "var(--gold)" },
];

const involve = [
  { icon: "💛", title: "Donate", desc: "Fund therapy sessions, sensory equipment and nutritional support for a child who cannot afford care.", href: "/donate", btn: "Give Today" },
  { icon: "🙌", title: "Volunteer", desc: "Therapists, trainers, educators and community advocates — your skills can transform a family's life.", href: "/contact", btn: "Get Involved" },
  { icon: "🤝", title: "Partner with Us", desc: "We welcome partnerships with corporates, hospitals, schools, Rotary clubs and international foundations.", href: "/contact", btn: "Contact Us" },
];

export default function HomePage() {
  return (
    <>
      {/* ============================================================
           HERO — Dark navy, two-column, logo animation
           ============================================================ */}
      <section
        style={{
          background: "var(--navy)",
          padding: "5rem 0 4rem",
          overflow: "hidden",
          position: "relative",
        }}
        aria-label="Introduction"
      >
        {/* Grid texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        {/* Gradient fade at edges */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse at 30% 50%, rgba(43,174,142,0.06) 0%, transparent 60%)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            {/* Logo block */}
            <div className="hero-logo-block" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "1.25rem" }}>
              <div style={{ position: "relative", width: 200, height: 200, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
                {/* Pulse rings */}
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(43,174,142,0.4)", animation: "pulse-ring 2.8s cubic-bezier(0.4,0,0.6,1) infinite" }} aria-hidden="true" />
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px solid rgba(43,174,142,0.4)", animation: "pulse-ring 2.8s cubic-bezier(0.4,0,0.6,1) infinite 1.4s" }} aria-hidden="true" />
                <img
                  src="/images/logo.jpg"
                  alt="Bloom Care Foundation Kenya logo"
                  width={180}
                  height={180}
                  style={{
                    width: 180, height: 180, objectFit: "contain", borderRadius: "50%",
                    background: "white", padding: 10, position: "relative", zIndex: 2,
                    boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.2)",
                    opacity: 0, animation: "logo-reveal 1s cubic-bezier(0.22, 1, 0.36, 1) 0.3s forwards",
                  }}
                />
              </div>
              <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", opacity: 0, animation: "fade-up 0.8s ease 1.1s forwards" }}>
                {"Empower \u00b7 Include \u00b7 Inspire"}
              </div>
              <ul style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }} role="list">
                {["Autism Awareness", "Special Needs Support", "Community Inclusion"].map((pill) => (
                  <li key={pill} style={{ fontSize: "0.6875rem", fontWeight: 600, letterSpacing: "0.06em", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.12)", padding: "4px 12px", borderRadius: 50 }}>
                    {pill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hero text */}
            <div className="hero-text">
              <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem", opacity: 0, animation: "fade-up 0.6s ease 0.8s forwards" }}>
                Public Benefit Organisation · Kenya
              </p>
              <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1.25rem", opacity: 0, animation: "fade-up 0.7s ease 0.95s forwards" }}>
                Every child <em style={{ color: "#7dffd6", fontStyle: "normal" }}>deserves to bloom</em>
              </h1>
              <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, marginBottom: "2rem", opacity: 0, animation: "fade-up 0.7s ease 1.1s forwards" }}>
                Bloom Care Foundation Kenya provides therapeutic support, caregiver training and sensory equipment
                for children with developmental conditions — including autism, sensory processing disorder
                and intellectual disabilities — and their families across Kenya.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", opacity: 0, animation: "fade-up 0.6s ease 1.3s forwards" }}>
                <Link href="/programs" className="btn btn--primary">Our Programs</Link>
                <Link href="/contact" className="btn btn--ghost">Get Involved</Link>
              </div>

              {/* Stats */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: "2.5rem", opacity: 0, animation: "fade-up 0.7s ease 1.5s forwards" }} aria-label="Key facts">
                {[
                  { num: "5+", label: "Counties of operation", accent: true },
                  { num: "PBO", label: "Registered under PBO Act No. 18 of 2013", accent: false },
                  { num: "OT", label: "Occupational & sensory therapy", accent: false },
                  { num: "2026", label: "Year of registration", accent: true },
                ].map((s) => (
                  <div key={s.label} style={{ background: s.accent ? "rgba(43,174,142,0.08)" : "rgba(255,255,255,0.04)", border: `1px solid ${s.accent ? "rgba(43,174,142,0.3)" : "rgba(255,255,255,0.08)"}`, borderRadius: "var(--radius)", padding: "1rem 1.25rem", backdropFilter: "blur(4px)" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, color: s.accent ? "#7dffd6" : "var(--white)", lineHeight: 1 }}>{s.num}</div>
                    <div style={{ fontSize: "0.6875rem", color: "rgba(255,255,255,0.45)", marginTop: 4, lineHeight: 1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           MISSION BAR
           ============================================================ */}
      <div style={{ background: "var(--teal)", padding: "0.875rem var(--pad-x)", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap", gap: "1.5rem" }} role="complementary" aria-label="Mission pillars">
        {["Autism Awareness", "Special Needs Support", "Community Inclusion", "Empower · Include · Inspire"].map((item, i) => (
          <span key={item} style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <span style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--white)" }}>{item}</span>
            {i < 3 && <span style={{ width: 1, height: 14, background: "rgba(255,255,255,0.3)" }} aria-hidden="true" />}
          </span>
        ))}
      </div>

      {/* ============================================================
           PROGRAMS
           ============================================================ */}
      <section className="section section--alt" id="programs" aria-labelledby="prog-title">
        <div className="container">
          <p className="eyebrow">What We Do</p>
          <h2 className="section-title" id="prog-title">Our Core Programs</h2>
          <p className="section-lead">Five interconnected programs covering the full cycle of need — from early diagnosis to long-term family empowerment.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "1rem" }} role="list">
            {programs.map((p) => (
              <article key={p.title} style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "1.5rem 1.25rem", transition: "all var(--transition)" }} role="listitem"
              >
                <div style={{ width: 44, height: 44, borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: "1rem", background: p.bg }} aria-hidden="true">{p.icon}</div>
                <h3 style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy)", marginBottom: "0.5rem", fontFamily: "var(--font-inter)" }}>{p.title}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7 }}>{p.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           HOW WE WORK
           ============================================================ */}
      <section className="section" id="reach" aria-labelledby="how-title">
        <div className="container">
          <p className="eyebrow">Our Approach</p>
          <h2 className="section-title" id="how-title">How we reach families</h2>
          <div className="how-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "start" }}>
            {/* Steps */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }} role="list">
              {steps.map((s) => (
                <div key={s.num} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1rem 1.25rem", border: "1px solid var(--gray-100)", borderLeft: "3px solid var(--teal)", borderRadius: "var(--radius)", background: "var(--white)", transition: "all var(--transition)" }} role="listitem"
                >
                  <div style={{ width: 28, height: 28, minWidth: 28, background: "var(--teal)", color: "var(--white)", borderRadius: "50%", fontSize: "0.75rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }} aria-hidden="true">{s.num}</div>
                  <div>
                    <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)", marginBottom: "0.25rem", fontFamily: "var(--font-inter)" }}>{s.title}</h4>
                    <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.65 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage box */}
            <div>
              <div style={{ background: "var(--navy)", borderRadius: "var(--radius-lg)", padding: "2rem", position: "relative", overflow: "hidden" }}>
                {/* Subtle gradient */}
                <div style={{ position: "absolute", top: -40, right: -40, width: 120, height: 120, borderRadius: "50%", background: "rgba(43,174,142,0.08)", pointerEvents: "none" }} aria-hidden="true" />
                <h3 style={{ fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "1rem", fontFamily: "var(--font-inter)", position: "relative" }}>Where we operate</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8, position: "relative" }}>
                  {["Nairobi", "Kiambu", "Nyeri", "Mombasa", "Kisumu"].map((c) => (
                    <span key={c} style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--white)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "5px 14px", borderRadius: 50 }}>{c}</span>
                  ))}
                  <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "#7dffd6", background: "rgba(43,174,142,0.12)", border: "1px solid rgba(43,174,142,0.3)", padding: "5px 14px", borderRadius: 50 }}>+ Expanding</span>
                </div>
                <div style={{ marginTop: "1.25rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.08)", position: "relative" }}>
                  <h4 style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem", fontFamily: "var(--font-inter)" }}>Who we serve</h4>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                    {["Autism Spectrum", "Sensory Processing", "Developmental Delays", "Intellectual Disabilities", "Family Caregivers", "OVC"].map((w) => (
                      <span key={w} style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--white)", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", padding: "5px 14px", borderRadius: 50 }}>{w}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
           IMPACT
           ============================================================ */}
      <section style={{ background: "var(--navy)", padding: "5rem 0", position: "relative", overflow: "hidden" }} aria-labelledby="impact-title">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 70% 50%, rgba(43,174,142,0.05) 0%, transparent 50%)", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Our Commitment</p>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, lineHeight: 1.2, color: "var(--white)", marginBottom: "2.5rem" }} id="impact-title">Building a Kenya where every child blooms</h2>
          <div className="impact-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1rem" }} role="list">
            {[
              { num: "5", label: "Counties reached at launch" },
              { num: "PBO", label: "Registered Public Benefit Organisation" },
              { num: "0", label: "Children turned away for inability to pay" },
              { num: "3", label: "Sixth Schedule categories: Children · Disability · Health" },
            ].map((c) => (
              <div key={c.label} style={{ border: "1px solid rgba(255,255,255,0.08)", borderRadius: "var(--radius)", padding: "1.25rem", textAlign: "center", background: "rgba(255,255,255,0.02)" }} role="listitem">
                <div style={{ fontSize: "2rem", fontWeight: 700, color: "#7dffd6", lineHeight: 1 }}>{c.num}</div>
                <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.45)", marginTop: 6, lineHeight: 1.5 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           GOVERNANCE / TEAM
           ============================================================ */}
      <section className="section section--alt" id="team" aria-labelledby="team-title">
        <div className="container">
          <p className="eyebrow">Governance</p>
          <h2 className="section-title" id="team-title">Our founding board</h2>
          <p className="section-lead">A committed team of Kenyan professionals constituted under the PBO Act No. 18 of 2013 and the PBO Regulations 2026.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "1rem" }} role="list">
            {team.map((m) => (
              <div key={m.name} style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "1.5rem 1rem", textAlign: "center", background: "var(--white)", transition: "all var(--transition)" }} role="listitem"
              >
                <div style={{ width: 52, height: 52, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1rem", fontWeight: 700, color: "var(--white)", margin: "0 auto 0.875rem", background: m.bg }}>{m.initials}</div>
                <h4 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)", fontFamily: "var(--font-inter)" }}>{m.name}</h4>
                <p style={{ fontSize: "0.75rem", color: "var(--teal)", fontWeight: 600, marginTop: 3 }}>{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           GET INVOLVED
           ============================================================ */}
      <section className="section" id="involve" aria-labelledby="involve-title">
        <div className="container">
          <p className="eyebrow">Join Us</p>
          <h2 className="section-title" id="involve-title">How you can help</h2>
          <div className="involve-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem" }} role="list">
            {involve.map((item) => (
              <article key={item.title} style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "2rem 1.5rem", background: "var(--white)", display: "flex", flexDirection: "column", gap: "0.5rem", transition: "all var(--transition)" }} role="listitem"
              >
                <div style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }} aria-hidden="true">{item.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", fontFamily: "var(--font-inter)" }}>{item.title}</h3>
                <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7, flex: 1 }}>{item.desc}</p>
                <Link href={item.href} className="btn btn--navy" style={{ marginTop: "1rem", alignSelf: "flex-start" }}>{item.btn}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
           CONTACT BAND
           ============================================================ */}
      <section style={{ background: "var(--navy)", padding: "4rem 0", textAlign: "center", borderTop: "3px solid var(--teal)", position: "relative", overflow: "hidden" }} id="contact" aria-labelledby="contact-title">
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 0%, rgba(43,174,142,0.06) 0%, transparent 50%)", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.4rem, 2.5vw, 2rem)", color: "var(--white)", marginBottom: "0.75rem" }} id="contact-title">Ready to make a difference?</h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem" }}>Reach out to Bloom Care Foundation Kenya — every connection matters.</p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="mailto:info@bloomcarekenya.org" className="btn btn--primary">Send a Message</a>
            <Link href="/donate" className="btn btn--ghost">Download Our Brochure</Link>
          </div>
          <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap", marginTop: "2.5rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>📮 P.O. Box 328-00206, Kenya</span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>📍 Mashuria House, Kajiado-North</span>
            <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.4)", fontWeight: 500 }}>🏛 Reg. No. NGO-7WULB5J</span>
          </div>
        </div>
      </section>
    </>
  );
}
