"use client";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d1221",
        padding: "1.25rem var(--pad-x)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "0.75rem",
      }}
      role="contentinfo"
    >
      <p style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
        <strong style={{ color: "rgba(255,255,255,0.6)" }}>Bloom Care Foundation Kenya</strong>
        &nbsp;·&nbsp;Public Benefit Organisation
        &nbsp;·&nbsp;PBO Act No. 18 of 2013
      </p>
      <nav style={{ display: "flex", gap: "1.25rem" }} aria-label="Footer links">
        {["Privacy Policy", "Safeguarding", "Annual Report", "Constitution"].map((link) => (
          <a
            key={link}
            href="#"
            style={{
              fontSize: "0.75rem",
              color: "rgba(255,255,255,0.35)",
              transition: "color var(--transition)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--teal)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.35)")}
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}
