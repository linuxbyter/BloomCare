"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "Who We Help" },
  { href: "/about#team", label: "Governance" },
  { href: "/contact", label: "Get Involved" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header>
      <nav
        className="sticky top-0 z-50"
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--gray-100)",
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "var(--max-w)",
            margin: "0 auto",
            padding: "0 var(--pad-x)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
          }}
        >
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                background: "var(--navy)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{ fontSize: 16, color: "white", fontWeight: 700, fontFamily: "var(--font-playfair)" }}
                aria-hidden="true"
              >
                B
              </span>
            </div>
            <div>
              <div style={{ fontSize: "1rem", fontWeight: 700, color: "var(--navy)", lineHeight: 1.15 }}>
                bloom<span style={{ color: "var(--teal)" }}>care</span>
              </div>
              <div
                style={{
                  fontSize: "0.6rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--gray-500)",
                }}
              >
                Foundation Kenya
              </div>
            </div>
          </Link>

          <ul className="hidden md:flex" style={{ alignItems: "center", gap: "0.25rem" }} role="list">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 500,
                    color: "var(--gray-700)",
                    padding: "6px 12px",
                    borderRadius: "var(--radius)",
                    transition: "all var(--transition)",
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/donate"
                className="hidden md:inline-flex"
                style={{
                  background: "var(--teal)",
                  color: "var(--white)",
                  padding: "7px 18px",
                  borderRadius: "50px",
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px rgba(43,174,142,0.2)",
                  transition: "all var(--transition)",
                }}
              >
                Donate
              </Link>
            </li>
          </ul>

          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          >
            <svg width="20" height="20" fill="none" stroke="var(--gray-700)" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div
          className="md:hidden"
          style={{
            background: "white",
            borderBottom: "1px solid var(--gray-100)",
            padding: "1rem var(--pad-x)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0",
                fontSize: "0.875rem",
                fontWeight: 500,
                color: "var(--gray-700)",
                borderBottom: "1px solid var(--gray-100)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/donate"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "block",
              marginTop: "0.75rem",
              padding: "0.75rem",
              background: "var(--teal)",
              color: "white",
              borderRadius: "50px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Donate
          </Link>
        </div>
      )}
    </header>
  );
}
