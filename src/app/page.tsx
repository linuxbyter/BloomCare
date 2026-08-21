"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import AnimatedSection from "@/components/AnimatedSection";
import TiltCard from "@/components/TiltCard";
import TextMorph from "@/components/TextMorph";
import Scene3D from "@/components/Scene3D";

gsap.registerPlugin(ScrollTrigger);

const programs = [
  {
    icon: "🧠",
    bg: "rgba(43,174,142,0.08)",
    title: "Therapy Services",
    desc: "Occupational therapy, sensory integration, speech and language therapy, and behavioural support for children with developmental conditions.",
  },
  {
    icon: "🏠",
    bg: "rgba(123,94,167,0.08)",
    title: "Sensory Rooms",
    desc: "Equipping sensory rooms and safe therapeutic spaces in communities that cannot access private facilities.",
  },
  {
    icon: "📚",
    bg: "rgba(232,160,32,0.08)",
    title: "Caregiver Training",
    desc: "Practical skills-building for parents, teachers and community members — turning caregivers into confident champions.",
  },
  {
    icon: "🍱",
    bg: "rgba(212,82,122,0.08)",
    title: "Nutritional Support",
    desc: "Targeted nutritional assistance for families of children with disabilities, recognising the link to developmental outcomes.",
  },
  {
    icon: "🤝",
    bg: "rgba(58,154,62,0.08)",
    title: "Equipment Access",
    desc: "Sourcing sensory and OT equipment to families who cannot afford paid services — locally fabricated or donated.",
  },
];

const steps = [
  {
    num: "1",
    title: "Identify & Connect",
    desc: "Working with hospitals, schools and county health teams to identify children who need early intervention.",
  },
  {
    num: "2",
    title: "Assess & Plan",
    desc: "Holistic assessments and individual support plans grounded in occupational therapy best practice.",
  },
  {
    num: "3",
    title: "Deliver & Equip",
    desc: "Therapy, training, equipment and nutritional support. No child is turned away for inability to pay.",
  },
  {
    num: "4",
    title: "Empower & Sustain",
    desc: "Families leave with skills, tools and community connections to sustain progress long after their programme ends.",
  },
];

const team = [
  { initials: "AK", name: "Agnes Nyawira Kionga", role: "Chairperson", bg: "var(--navy)" },
  { initials: "AM", name: "Alice Njeri Mukiri", role: "Secretary", bg: "var(--teal)" },
  { initials: "JM", name: "Julia Wanjiru Mukundi", role: "Treasurer", bg: "var(--purple)" },
  { initials: "EK", name: "Everline Wangari Kionga", role: "Director", bg: "var(--rose)" },
  { initials: "PM", name: "Peter Makau Musyoka", role: "Director", bg: "var(--gold)" },
];

const involve = [
  {
    icon: "💛",
    title: "Donate",
    desc: "Fund therapy sessions, sensory equipment and nutritional support for a child who cannot afford care.",
    href: "/donate",
    btn: "Give Today",
  },
  {
    icon: "🙌",
    title: "Volunteer",
    desc: "Therapists, trainers, educators and community advocates — your skills can transform a family's life.",
    href: "/contact",
    btn: "Get Involved",
  },
  {
    icon: "🤝",
    title: "Partner",
    desc: "We welcome partnerships with corporates, hospitals, schools, Rotary clubs and international foundations.",
    href: "/contact",
    btn: "Contact Us",
  },
];

const impactStats = [
  { num: "5", label: "Counties reached at launch" },
  { num: "PBO", label: "Registered Public Benefit Organisation" },
  { num: "0", label: "Children turned away for inability to pay" },
  { num: "3", label: "Sixth Schedule categories served" },
];

export default function HomePage() {
  const impactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation for impact numbers
      gsap.from(".impact-num", {
        textContent: 0,
        duration: 1.5,
        ease: "power1.inOut",
        snap: { textContent: 1 },
        stagger: 0.15,
        scrollTrigger: {
          trigger: impactRef.current,
          start: "top 80%",
        },
      });
    }, impactRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Hero with 3D scene and GSAP scroll */}
      <div style={{ position: "relative" }}>
        <Scene3D />
        <Hero />
      </div>

      {/* Mission Bar */}
      <div
        style={{
          background: "linear-gradient(135deg, var(--teal), var(--teal-dk))",
          padding: "0.875rem var(--pad-x)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1.5rem",
        }}
        role="complementary"
        aria-label="Mission pillars"
      >
        {["Autism Awareness", "Special Needs Support", "Community Inclusion", "Empower · Include · Inspire"].map(
          (item, i) => (
            <span
              key={item}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "var(--white)",
                }}
              >
                {item}
              </span>
              {i < 3 && (
                <span
                  style={{
                    width: 1,
                    height: 14,
                    background: "rgba(255,255,255,0.3)",
                  }}
                  aria-hidden="true"
                />
              )}
            </span>
          )
        )}
      </div>

      {/* Programs */}
      <AnimatedSection
        className="section section--alt"
        id="programs"
        aria-labelledby="prog-title"
      >
        <div className="container">
          <div data-animate>
            <p className="eyebrow">What We Do</p>
            <h2 className="section-title" id="prog-title">
              Our Core Programs
            </h2>
            <p className="section-lead">
              Five interconnected programs covering the full cycle of need —
              from early diagnosis to long-term family empowerment.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1rem",
            }}
            role="list"
          >
            {programs.map((p) => (
              <TiltCard
                key={p.title}
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <article
                  data-animate
                  style={{
                    background: "var(--white)",
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.5rem 1.25rem",
                    height: "100%",
                    position: "relative",
                    zIndex: 1,
                  }}
                  role="listitem"
                >
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 22,
                      marginBottom: "1rem",
                      background: p.bg,
                    }}
                    aria-hidden="true"
                  >
                    {p.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--gray-500)",
                      lineHeight: 1.7,
                    }}
                  >
                    {p.desc}
                  </p>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* How We Work */}
      <AnimatedSection className="section" id="reach" aria-labelledby="how-title">
        <div className="container">
          <div data-animate>
            <p className="eyebrow">Our Approach</p>
            <h2 className="section-title" id="how-title">
              How we reach families
            </h2>
          </div>
          <div
            className="how-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "3rem",
              alignItems: "start",
            }}
          >
            {/* Steps */}
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
              role="list"
            >
              {steps.map((s) => (
                <div
                  key={s.num}
                  data-animate
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "flex-start",
                    padding: "1rem 1.25rem",
                    border: "1px solid var(--gray-100)",
                    borderLeft: "3px solid var(--teal)",
                    borderRadius: "var(--radius)",
                    background: "var(--white)",
                    transition: "all 0.3s ease",
                  }}
                  role="listitem"
                >
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      minWidth: 32,
                      background:
                        "linear-gradient(135deg, var(--teal), var(--teal-dk))",
                      color: "var(--white)",
                      borderRadius: "50%",
                      fontSize: "0.8125rem",
                      fontWeight: 700,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    aria-hidden="true"
                  >
                    {s.num}
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.9375rem",
                        fontWeight: 700,
                        color: "var(--navy)",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {s.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.8125rem",
                        color: "var(--gray-500)",
                        lineHeight: 1.65,
                      }}
                    >
                      {s.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Coverage box */}
            <div data-animate>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, var(--navy), var(--navy-dk))",
                  borderRadius: "var(--radius-lg)",
                  padding: "2rem",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: -40,
                    right: -40,
                    width: 140,
                    height: 140,
                    borderRadius: "50%",
                    background: "rgba(43,174,142,0.08)",
                    pointerEvents: "none",
                  }}
                  aria-hidden="true"
                />
                <h3
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "#7dffd6",
                    marginBottom: "1rem",
                    position: "relative",
                  }}
                >
                  Where we operate
                </h3>
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 8,
                    position: "relative",
                  }}
                >
                  {["Nairobi", "Kiambu", "Nyeri", "Mombasa", "Kisumu"].map(
                    (c) => (
                      <span
                        key={c}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--white)",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          padding: "5px 14px",
                          borderRadius: 50,
                        }}
                      >
                        {c}
                      </span>
                    )
                  )}
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      color: "#7dffd6",
                      background: "rgba(43,174,142,0.12)",
                      border: "1px solid rgba(43,174,142,0.3)",
                      padding: "5px 14px",
                      borderRadius: 50,
                    }}
                  >
                    + Expanding
                  </span>
                </div>
                <div
                  style={{
                    marginTop: "1.25rem",
                    paddingTop: "1.25rem",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    position: "relative",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.4)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Who we serve
                  </h4>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 8,
                    }}
                  >
                    {[
                      "Autism Spectrum",
                      "Sensory Processing",
                      "Developmental Delays",
                      "Intellectual Disabilities",
                      "Family Caregivers",
                      "OVC",
                    ].map((w) => (
                      <span
                        key={w}
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          color: "var(--white)",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          padding: "5px 14px",
                          borderRadius: 50,
                        }}
                      >
                        {w}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Impact */}
      <section
        ref={impactRef}
        style={{
          background: "linear-gradient(135deg, var(--navy), var(--navy-dk))",
          padding: "5rem 0",
          position: "relative",
          overflow: "hidden",
        }}
        aria-labelledby="impact-title"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 70% 50%, rgba(43,174,142,0.05) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div className="container" style={{ position: "relative" }}>
          <AnimatedSection>
            <div data-animate>
              <p
                style={{
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#7dffd6",
                  marginBottom: "0.75rem",
                }}
              >
                Our Commitment
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.6rem, 3vw, 2.25rem)",
                  fontWeight: 700,
                  lineHeight: 1.2,
                  color: "var(--white)",
                  marginBottom: "2.5rem",
                }}
                id="impact-title"
              >
                Building a Kenya where every child{" "}
                <TextMorph
                  words={["blooms", "thrives", "grows", "flourishes"]}
                  style={{ fontWeight: 700 }}
                />
              </h2>
            </div>
          </AnimatedSection>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1rem",
            }}
            role="list"
          >
            {impactStats.map((c) => (
              <div
                key={c.label}
                data-animate
                style={{
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--radius)",
                  padding: "1.25rem",
                  textAlign: "center",
                  background: "rgba(255,255,255,0.02)",
                  transition: "all 0.3s ease",
                }}
                role="listitem"
              >
                <div
                  className="impact-num"
                  style={{
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "#7dffd6",
                    lineHeight: 1,
                  }}
                >
                  {c.num}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "rgba(255,255,255,0.45)",
                    marginTop: 6,
                    lineHeight: 1.5,
                  }}
                >
                  {c.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance / Team */}
      <AnimatedSection
        className="section section--alt"
        id="team"
        aria-labelledby="team-title"
      >
        <div className="container">
          <div data-animate>
            <p className="eyebrow">Governance</p>
            <h2 className="section-title" id="team-title">
              Our founding board
            </h2>
            <p className="section-lead">
              A committed team of Kenyan professionals constituted under the
              PBO Act No. 18 of 2013 and the PBO Regulations 2026.
            </p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
            }}
            role="list"
          >
            {team.map((m) => (
              <TiltCard
                key={m.name}
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <div
                  data-animate
                  style={{
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "1.5rem 1rem",
                    textAlign: "center",
                    background: "var(--white)",
                    position: "relative",
                    zIndex: 1,
                  }}
                  role="listitem"
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--white)",
                      margin: "0 auto 0.875rem",
                      background: `linear-gradient(135deg, ${m.bg}, ${m.bg}dd)`,
                      boxShadow: `0 4px 16px ${m.bg}33`,
                    }}
                  >
                    {m.initials}
                  </div>
                  <h4
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    {m.name}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "var(--teal)",
                      fontWeight: 600,
                      marginTop: 3,
                    }}
                  >
                    {m.role}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Get Involved */}
      <AnimatedSection className="section" id="involve" aria-labelledby="involve-title">
        <div className="container">
          <div data-animate>
            <p className="eyebrow">Join Us</p>
            <h2 className="section-title" id="involve-title">
              How you can help
            </h2>
          </div>
          <div
            className="involve-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1rem",
            }}
            role="list"
          >
            {involve.map((item) => (
              <TiltCard
                key={item.title}
                style={{ borderRadius: "var(--radius-lg)" }}
              >
                <article
                  data-animate
                  style={{
                    border: "1px solid var(--gray-100)",
                    borderRadius: "var(--radius-lg)",
                    padding: "2rem 1.5rem",
                    background: "var(--white)",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                    height: "100%",
                    position: "relative",
                    zIndex: 1,
                  }}
                  role="listitem"
                >
                  <div
                    style={{ fontSize: "1.75rem", marginBottom: "0.5rem" }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "var(--navy)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.8125rem",
                      color: "var(--gray-500)",
                      lineHeight: 1.7,
                      flex: 1,
                    }}
                  >
                    {item.desc}
                  </p>
                  <Link
                    href={item.href}
                    className="btn btn--navy"
                    style={{ marginTop: "1rem", alignSelf: "flex-start" }}
                  >
                    {item.btn}
                  </Link>
                </article>
              </TiltCard>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Band */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--navy), var(--navy-dk))",
          padding: "4rem 0",
          textAlign: "center",
          borderTop: "3px solid var(--teal)",
          position: "relative",
          overflow: "hidden",
        }}
        id="contact"
        aria-labelledby="contact-title"
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(43,174,142,0.06) 0%, transparent 50%)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />
        <div className="container" style={{ position: "relative" }}>
          <AnimatedSection>
            <div data-animate>
              <h2
                style={{
                  fontFamily: "var(--font-playfair)",
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  color: "var(--white)",
                  marginBottom: "0.75rem",
                }}
                id="contact-title"
              >
                Ready to make a difference?
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.55)",
                  marginBottom: "2rem",
                }}
              >
                Reach out to Bloom Care Foundation Kenya — every connection
                matters.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <a
                  href="mailto:info@bloomcarekenya.org"
                  className="btn btn--primary"
                >
                  Send a Message
                </a>
                <Link href="/donate" className="btn btn--ghost">
                  Download Brochure
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  marginTop: "2.5rem",
                  paddingTop: "2rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  📮 P.O. Box 328-00206, Kenya
                </span>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  📍 Mashuria House, Kajiado-North
                </span>
                <span
                  style={{
                    fontSize: "0.8125rem",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  🏛 Reg. No. NGO-7WULB5J
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
