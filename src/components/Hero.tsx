"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const logoWrapRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const bgParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(logoWrapRef.current, {
        y: 40,
        opacity: 0,
        scale: 0.92,
        filter: "blur(8px)",
        duration: 1.2,
      })
        .from(
          ".hero-tagline",
          {
            y: 14,
            opacity: 0,
            letterSpacing: "0.35em",
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-pill",
          {
            x: -16,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
          },
          "-=0.4"
        )
        .from(
          headlineRef.current?.children ? Array.from(headlineRef.current.children) : [],
          {
            y: 30,
            opacity: 0,
            stagger: 0.12,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-stat-card",
          {
            y: 20,
            opacity: 0,
            stagger: 0.08,
            duration: 0.5,
          },
          "-=0.3"
        );

      // Parallax scroll on hero
      gsap.to(bgParallaxRef.current, {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.5,
        },
      });

      // Logo float on scroll
      gsap.to(logoWrapRef.current, {
        y: -60,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 0.3,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    { num: "5+", label: "Counties of operation", accent: true },
    { num: "PBO", label: "Registered under PBO Act", accent: false },
    { num: "OT", label: "Sensory & occupational therapy", accent: false },
    { num: "2026", label: "Year of registration", accent: true },
  ];

  return (
    <section
      ref={sectionRef}
      style={{
        background: "var(--navy)",
        padding: "6rem 0 5rem",
        overflow: "hidden",
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
      aria-label="Introduction"
    >
      {/* Parallax grid bg */}
      <div
        ref={bgParallaxRef}
        style={{
          position: "absolute",
          inset: "-20% 0",
          backgroundImage:
            "linear-gradient(rgba(43,174,142,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      {/* Gradient orbs */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(43,174,142,0.08) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          right: "10%",
          width: "30vw",
          height: "30vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,94,167,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
          }}
        >
          {/* Logo block */}
          <div
            className="hero-logo-block"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "1.25rem",
            }}
          >
            <div
              ref={logoWrapRef}
              style={{
                position: "relative",
                width: 200,
                height: 200,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
              }}
            >
              {/* Pulse rings */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(43,174,142,0.4)",
                  animation: "pulse-ring 2.8s cubic-bezier(0.4,0,0.6,1) infinite",
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(43,174,142,0.4)",
                  animation: "pulse-ring 2.8s cubic-bezier(0.4,0,0.6,1) infinite 1.4s",
                }}
                aria-hidden="true"
              />
              <img
                src="/images/logo.jpg"
                alt="Bloom Care Foundation Kenya logo"
                width={180}
                height={180}
                style={{
                  width: 180,
                  height: 180,
                  objectFit: "contain",
                  borderRadius: "50%",
                  background: "white",
                  padding: 10,
                  position: "relative",
                  zIndex: 2,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.3)",
                }}
              />
            </div>
            <div
              className="hero-tagline"
              style={{
                fontSize: "0.6875rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Empower&nbsp;&middot;&nbsp;Include&nbsp;&middot;&nbsp;Inspire
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, justifyContent: "center" }}>
              {["Autism Awareness", "Special Needs Support", "Community Inclusion"].map(
                (pill) => (
                  <span
                    key={pill}
                    className="hero-pill"
                    style={{
                      fontSize: "0.6875rem",
                      fontWeight: 600,
                      letterSpacing: "0.06em",
                      color: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "4px 12px",
                      borderRadius: 50,
                    }}
                  >
                    {pill}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Hero text */}
          <div ref={headlineRef}>
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
              Public Benefit Organisation &middot; Kenya
            </p>
            <h1
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--white)",
                lineHeight: 1.1,
                marginBottom: "1.25rem",
                letterSpacing: "-0.02em",
              }}
            >
              Every child{" "}
              <em
                style={{
                  fontStyle: "normal",
                  background: "linear-gradient(135deg, #7dffd6, #2BAE8E)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                deserves to bloom
              </em>
            </h1>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.8,
                marginBottom: "2rem",
                maxWidth: 480,
              }}
            >
              Therapeutic support, caregiver training and sensory equipment
              for children with developmental conditions — and their families
              across Kenya.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link href="/programs" className="btn btn--primary">
                Our Programs
              </Link>
              <Link href="/contact" className="btn btn--ghost">
                Get Involved
              </Link>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
                marginTop: "2.5rem",
              }}
              aria-label="Key facts"
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="hero-stat-card"
                  style={{
                    background: s.accent
                      ? "rgba(43,174,142,0.06)"
                      : "rgba(255,255,255,0.03)",
                    border: `1px solid ${
                      s.accent ? "rgba(43,174,142,0.25)" : "rgba(255,255,255,0.06)"
                    }`,
                    borderRadius: "var(--radius)",
                    padding: "1rem 1.25rem",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: s.accent ? "#7dffd6" : "var(--white)",
                      lineHeight: 1,
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: "0.6875rem",
                      color: "rgba(255,255,255,0.4)",
                      marginTop: 4,
                      lineHeight: 1.4,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
