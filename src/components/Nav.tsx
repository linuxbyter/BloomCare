"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/news", label: "Who We Help" },
  { href: "/about#team", label: "Governance" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 20);
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
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--gray-100)" : "1px solid transparent",
        transition: "all 0.3s ease",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* Desktop */}
        <div style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <img
              src="/images/logo.jpg"
              alt="Bloom Care"
              width={32}
              height={32}
              style={{ borderRadius: "50%", objectFit: "cover" }}
            />
            <span style={{ fontSize: "0.9375rem", fontWeight: 700, color: "var(--navy)" }}>
              bloom<span style={{ color: "var(--teal)" }}>care</span>
            </span>
          </Link>

          <nav className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "0.875rem",
                  fontWeight: 500,
                  color: "var(--gray-500)",
                  padding: "6px 14px",
                  borderRadius: 8,
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "var(--navy)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "var(--gray-500)"; }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Link href="/donate" className="hidden md:inline-flex btn btn--primary" style={{ padding: "8px 20px", fontSize: "0.8125rem" }}>
            Donate
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 8 }}
          >
            <svg width="20" height="20" fill="none" stroke="var(--navy)" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
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
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden", background: "var(--white)", borderBottom: "1px solid var(--gray-100)" }}
          >
            <div className="container" style={{ padding: "1rem var(--pad-x)" }}>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: "block", padding: "0.75rem 0", fontSize: "0.9375rem", fontWeight: 500, color: "var(--gray-700)", borderBottom: "1px solid var(--gray-100)" }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/donate"
                onClick={() => setMobileOpen(false)}
                style={{ display: "block", marginTop: "0.75rem", padding: "0.75rem", background: "var(--teal)", color: "white", borderRadius: 50, fontSize: "0.875rem", fontWeight: 600, textAlign: "center" }}
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
