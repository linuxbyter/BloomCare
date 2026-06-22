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
        &nbsp;·&nbsp;PBO Regulations 2026
      </p>
      <nav style={{ display: "flex", gap: "1.25rem" }} aria-label="Footer links">
        <a href="#" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", transition: "color var(--transition)" }}>Privacy Policy</a>
        <a href="#" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", transition: "color var(--transition)" }}>Safeguarding</a>
        <a href="#" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", transition: "color var(--transition)" }}>Annual Report</a>
        <a href="#" style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.35)", transition: "color var(--transition)" }}>Constitution</a>
      </nav>
    </footer>
  );
}
