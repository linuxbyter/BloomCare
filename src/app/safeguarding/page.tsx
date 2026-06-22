import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Safeguarding Policy",
  description: "Bloom Care Foundation Kenya's commitment to safeguarding children and vulnerable persons in our programmes.",
};

export default function SafeguardingPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Governance</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Safeguarding Policy</h1>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>Last updated: 22 June 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Bloom Care Foundation Kenya is committed to safeguarding the welfare of all children and vulnerable persons who interact with our programmes, services, and staff. This policy outlines our zero-tolerance approach to abuse, exploitation, and neglect, and applies to all board members, staff, volunteers, partners, and representatives.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>1. Legal Framework</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This policy is informed by the Constitution of Kenya (Articles 53 and 56), the Children Act (2022), the Protection Against Domestic Violence Act (2015), the Sexual Offences Act (2006), and the Public Benefit Organisations Act (2013). It also aligns with international standards including the United Nations Convention on the Rights of the Child (UNCRC).
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>2. Definitions</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Child: Any person under the age of 18 years",
                "Vulnerable person: Any individual who may be at increased risk of harm due to age, disability, health condition, or social circumstances",
                "Safeguarding: The measures taken to protect the health, well-being, and human rights of individuals",
                "Abuse: Physical, emotional, sexual, or neglectful harm to a child or vulnerable person",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Our Commitments</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "We will not tolerate any form of abuse, exploitation, or neglect of children or vulnerable persons",
                "All personnel undergo background checks before engagement with our programmes",
                "Safeguarding training is mandatory for all staff and volunteers before working with beneficiaries",
                "We maintain clear reporting procedures for any safeguarding concerns",
                "We will act swiftly and appropriately on all safeguarding concerns and allegations",
                "We will cooperate fully with law enforcement and regulatory authorities on safeguarding matters",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>4. Codes of Conduct</h2>
            <p style={{ marginBottom: "0.75rem" }}>All personnel must:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Treat all children and vulnerable persons with dignity and respect",
                "Never engage in physical, emotional, or sexual abuse",
                "Never exploit or manipulate children or vulnerable persons",
                "Maintain professional boundaries at all times",
                "Report any safeguarding concerns immediately through the designated channels",
                "Not share personal contact information with children outside of approved programme channels",
                "Not photograph or record children without explicit consent from a parent or guardian and programme approval",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>5. Reporting Procedures</h2>
            <p style={{ marginBottom: "0.75rem" }}>Any safeguarding concern must be reported immediately to:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "The designated Safeguarding Lead (Board Chairperson or designated officer)",
                "By email to: safeguarding@bloomcarekenya.org",
                "By phone to the Foundation office",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginBottom: "0.75rem" }}>External reporting channels:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Kenya Police: 999 or 112",
                "Childline Kenya: 116",
                "Gender Violence Recovery Centre (GVRC): 0800-723-253",
                "Department of Children&apos;s Services (local DCS office)",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>6. Response Protocol</h2>
            <p style={{ marginBottom: "0.75rem" }}>Upon receiving a safeguarding concern:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "The concern will be recorded in writing using the Foundation&apos;s incident report form",
                "The Safeguarding Lead will assess the risk and determine appropriate immediate actions",
                "Where a child is in immediate danger, the police will be contacted without delay",
                "The Foundation will cooperate fully with any statutory investigation",
                "Support will be provided to the affected child or vulnerable person",
                "A thorough investigation will be conducted, with findings reported to the Board",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>7. Whistleblower Protection</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Any person who reports a safeguarding concern in good faith will be protected from retaliation. Confidentiality will be maintained to the greatest extent possible. False or malicious allegations are taken seriously and may result in disciplinary action.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>8. Policy Review</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This policy will be reviewed annually by the Board of Directors and updated as necessary to reflect changes in legislation, best practice, or organisational experience. All staff and volunteers will be notified of any material changes.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>9. Contact</h2>
            <p style={{ marginBottom: "0.25rem" }}><strong>Safeguarding Lead</strong></p>
            <p style={{ marginBottom: "0.25rem" }}>Bloom Care Foundation Kenya</p>
            <p style={{ marginBottom: "0.25rem" }}>Email: <a href="mailto:safeguarding@bloomcarekenya.org" style={{ color: "var(--teal)", fontWeight: 600 }}>safeguarding@bloomcarekenya.org</a></p>
            <p style={{ marginBottom: "0.25rem" }}>P.O. Box 328-00206, Kenya</p>
          </div>
        </div>
      </section>
    </>
  );
}
