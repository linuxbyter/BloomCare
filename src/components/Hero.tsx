"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section
      style={{
        background: "var(--white)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 0,
          minHeight: "85vh",
          alignItems: "center",
        }}
      >
        {/* Text */}
        <div style={{ padding: "4rem 0", paddingRight: "3rem" }}>
          <p
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--teal)",
              marginBottom: "1.25rem",
            }}
          >
            Public Benefit Organisation · Kenya
          </p>
          <h1
            style={{
              fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)",
              fontWeight: 700,
              lineHeight: 1.1,
              color: "var(--navy)",
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Every child deserves the chance to bloom
          </h1>
          <p
            style={{
              fontSize: "1.0625rem",
              color: "var(--gray-500)",
              lineHeight: 1.75,
              marginBottom: "2rem",
              maxWidth: 480,
            }}
          >
            We provide therapy, caregiver training and sensory equipment for
            children with autism and developmental conditions — and their
            families — across Kenya.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: "2.5rem" }}>
            <Link href="/donate" className="btn btn--primary">
              Donate Now
            </Link>
            <Link href="/programs" className="btn btn--outline">
              See Our Programs
            </Link>
          </div>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              paddingTop: "2rem",
              borderTop: "1px solid var(--gray-100)",
            }}
          >
            {[
              { num: "5+", label: "Counties reached" },
              { num: "0", label: "Children turned away" },
              { num: "100%", label: "Free services" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: 700,
                    color: "var(--navy)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--gray-500)",
                    marginTop: 4,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div
          style={{
            position: "relative",
            height: "100%",
            minHeight: 500,
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "20px 0 0 20px",
              overflow: "hidden",
              background: "var(--gray-50)",
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="Bloom Care Foundation Kenya"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </div>
          {/* Floating stat card */}
          <div
            style={{
              position: "absolute",
              bottom: "2rem",
              left: "-2rem",
              background: "var(--white)",
              borderRadius: 12,
              padding: "1rem 1.25rem",
              boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
              display: "flex",
              alignItems: "center",
              gap: 12,
              zIndex: 2,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                borderRadius: 10,
                background: "rgba(43,174,142,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 20,
              }}
            >
              🌿
            </div>
            <div>
              <div style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--navy)" }}>
                PBO Registered
              </div>
              <div style={{ fontSize: "0.6875rem", color: "var(--gray-500)" }}>
                Act No. 18 of 2013
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
