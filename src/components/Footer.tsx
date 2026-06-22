import Link from "next/link";

const footerLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/safeguarding", label: "Safeguarding" },
  { href: "/constitution", label: "Constitution" },
  { href: "/annual-report", label: "Annual Report" },
];

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
        &nbsp;&middot;&nbsp;Reg. No. NGO-7WULB5J
      </p>
      <nav style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }} aria-label="Footer links">
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="footer-link"
            style={{ fontSize: "0.75rem", fontWeight: 500 }}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </footer>
  );
}
