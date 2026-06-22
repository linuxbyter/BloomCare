import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Bloom Care Foundation Kenya collects, uses, and protects your personal data in compliance with the Kenya Data Protection Act, 2019.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Privacy Policy</h1>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>Effective date: June 2026 &middot; Last updated: 22 June 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "1.5rem" }}>
              Bloom Care Foundation Kenya (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a registered Public Benefit Organisation (Reg. No. NGO-7WULB5J) under the Public Benefit Organisations Act, No. 18 of 2013. We are committed to protecting your personal data in accordance with the Constitution of Kenya (Article 31) and the Data Protection Act, 2019 (Act No. 24 of 2019).
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>1. Data Controller</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Bloom Care Foundation Kenya is the data controller for all personal data collected through this website, our programmes, and our operations. Our registered address is P.O. Box 328-00206, Kenya. For data protection enquiries, contact us at <a href="mailto:info@bloomcarekenya.org" style={{ color: "var(--teal)", fontWeight: 600 }}>info@bloomcarekenya.org</a>.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>2. Data We Collect</h2>
            <p style={{ marginBottom: "0.75rem" }}>We may collect the following categories of personal data:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Contact information (name, email address, phone number) submitted through our contact or donation forms",
                "Donation information (phone number, transaction amount, M-Pesa reference) processed via IntaSend payment gateway",
                "Beneficiary data (names, ages, health information) collected for programme delivery with explicit consent",
                "Website usage data (IP address, browser type, pages visited) collected through analytics tools",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Purpose of Collection</h2>
            <p style={{ marginBottom: "0.75rem" }}>We process personal data for the following purposes:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Processing donations and issuing receipts",
                "Responding to enquiries and providing information about our programmes",
                "Delivering therapeutic, caregiver training, and nutritional support services",
                "Complying with legal obligations under the PBO Act and tax laws",
                "Improving our website and services through analytics",
                "Communicating programme updates and impact reports (with consent)",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>4. Lawful Basis for Processing</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We process personal data on the following lawful bases under Section 30 of the Data Protection Act, 2019: (a) your explicit consent; (b) performance of a contract or delivery of requested services; (c) compliance with a legal obligation; and (d) legitimate interests in advancing our charitable purposes.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>5. Data Sharing</h2>
            <p style={{ marginBottom: "0.75rem" }}>We may share personal data with:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "IntaSend (payment processor) for M-Pesa transaction processing",
                "Safaricom (M-Pesa) for STK Push payment delivery",
                "County governments and partner organisations for programme delivery",
                "The Public Benefit Organizations Regulatory Authority (PBORA) as required by law",
                "The Office of the Data Protection Commissioner (ODPC) where required",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>
            <p style={{ marginBottom: "1.5rem" }}>
              We do not sell, rent, or trade personal data. All third-party processors are contractually required to protect your data.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>6. Data Retention</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We retain personal data only for as long as necessary to fulfil the purpose for which it was collected. Donation records are retained for 7 years in compliance with Kenyan tax law. Beneficiary data is retained for the duration of programme participation and for 3 years thereafter. Contact form submissions are retained for 2 years.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>7. Your Rights</h2>
            <p style={{ marginBottom: "0.75rem" }}>Under the Data Protection Act, 2019, you have the right to:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Access your personal data and obtain a copy",
                "Correct inaccurate or incomplete data",
                "Request deletion of your data (subject to legal retention requirements)",
                "Object to processing of your data",
                "Withdraw consent at any time",
                "Lodge a complaint with the Office of the Data Protection Commissioner",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>8. Data Security</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We implement appropriate technical and organisational measures to protect personal data, including encryption of payment data, access controls, secure hosting, and regular security reviews. In the event of a data breach, we will notify the ODPC and affected data subjects as required by law.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>9. Children&apos;s Data</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              As an organisation working with children, we take special care to protect children&apos;s personal data. We collect beneficiary data only with the explicit consent of a parent or legal guardian. We do not knowingly collect personal data from children under 13 through this website.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>10. Cross-Border Transfers</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We do not transfer personal data outside Kenya unless adequate data protection safeguards are in place as required under Section 48 of the Data Protection Act, 2019.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>11. Changes to This Policy</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We may update this Privacy Policy from time to time. Material changes will be communicated through our website and, where appropriate, by email. The &ldquo;Last updated&rdquo; date at the top of this page reflects the most recent revision.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>12. Contact & Complaints</h2>
            <p style={{ marginBottom: "0.75rem" }}>
              To exercise your data protection rights or to make a complaint, contact us at:
            </p>
            <p style={{ marginBottom: "0.25rem" }}><strong>Bloom Care Foundation Kenya</strong></p>
            <p style={{ marginBottom: "0.25rem" }}>P.O. Box 328-00206, Kenya</p>
            <p style={{ marginBottom: "0.25rem" }}>Email: <a href="mailto:info@bloomcarekenya.org" style={{ color: "var(--teal)", fontWeight: 600 }}>info@bloomcarekenya.org</a></p>
            <p style={{ marginBottom: "1.5rem" }}>
              You may also lodge a complaint with the Office of the Data Protection Commissioner at <a href="https://www.odpc.go.ke" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)", fontWeight: 600 }}>www.odpc.go.ke</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
