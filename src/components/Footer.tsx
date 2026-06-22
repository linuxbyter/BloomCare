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
        &nbsp;&middot;&nbsp;Public Benefit Organisation
        &nbsp;&middot;&nbsp;PBO Act No. 18 of 2013
      </p>
      <nav style={{ display: "flex", gap: "1.25rem" }} aria-label="Footer links">
        {["Privacy Policy", "Safeguarding", "Annual Report", "Constitution"].map((link) => (
          <a
            key={link}
            href="#"
            className="footer-link"
            style={{ fontSize: "0.75rem", fontWeight: 500 }}
          >
            {link}
          </a>
        ))}
      </nav>
    </footer>
  );
}
