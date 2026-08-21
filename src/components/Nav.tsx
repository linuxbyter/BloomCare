"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "Who We Help" },
  { href: "/about#team", label: "Governance" },
  { href: "/contact", label: "Get Involved" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 200,
        padding: scrolled ? "8px 0" : "16px 0",
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Desktop nav — floating pill */}
        <nav
          className="hidden md:flex"
          aria-label="Main navigation"
          style={{
            alignItems: "center",
            gap: 4,
            padding: "6px 8px 6px 16px",
            borderRadius: 50,
            background: scrolled
              ? "rgba(255,255,255,0.75)"
              : "rgba(255,255,255,0.12)",
            border: `1px solid ${
              scrolled ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,0.15)"
            }`,
            backdropFilter: "blur(24px) saturate(180%)",
            WebkitBackdropFilter: "blur(24px) saturate(180%)",
            boxShadow: scrolled
              ? "0 4px 24px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)"
              : "0 4px 24px rgba(0,0,0,0.15)",
            transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
            width: "100%",
            maxWidth: 720,
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              flexShrink: 0,
              marginRight: 8,
            }}
          >
            <img
              src="/images/logo.jpg"
              alt="Bloom Care"
              width={32}
              height={32}
              style={{
                borderRadius: "50%",
                objectFit: "cover",
              }}
            />
            <span
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: scrolled ? "var(--navy)" : "var(--white)",
                transition: "color 0.4s ease",
              }}
            >
              bloom<span style={{ color: "var(--teal)" }}>care</span>
            </span>
          </Link>

          <div
            style={{
              width: 1,
              height: 20,
              background: scrolled
                ? "rgba(0,0,0,0.1)"
                : "rgba(255,255,255,0.2)",
              margin: "0 4px",
              transition: "background 0.4s ease",
            }}
          />

          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.8125rem",
                fontWeight: 500,
                color: scrolled ? "var(--gray-700)" : "rgba(255,255,255,0.75)",
                padding: "6px 14px",
                borderRadius: 50,
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href="/donate"
            style={{
              marginLeft: "auto",
              background: "var(--teal)",
              color: "var(--white)",
              padding: "8px 20px",
              borderRadius: 50,
              fontSize: "0.8125rem",
              fontWeight: 600,
              boxShadow: "0 2px 8px rgba(43,174,142,0.25)",
              transition: "all 0.2s ease",
              flexShrink: 0,
            }}
          >
            Donate
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <div
          className="md:hidden"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Link
            href="/"
            style={{ display: "flex", alignItems: "center", gap: 8 }}
          >
            <img
              src="/images/logo.jpg"
              alt="Bloom Care"
              width={32}
              height={32}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <span
              style={{
                fontSize: "0.9375rem",
                fontWeight: 700,
                color: "var(--white)",
              }}
            >
              bloom<span style={{ color: "var(--teal)" }}>care</span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              cursor: "pointer",
              padding: 10,
              borderRadius: 12,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{
              overflow: "hidden",
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid var(--gray-100)",
            }}
          >
            <div className="container" style={{ padding: "1rem var(--pad-x)" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: "block",
                    padding: "0.75rem 0",
                    fontSize: "0.9375rem",
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
                  borderRadius: 50,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                Donate
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
