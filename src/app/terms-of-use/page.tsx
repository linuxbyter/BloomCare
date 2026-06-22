import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms and conditions governing the use of the Bloom Care Foundation Kenya website.",
};

export default function TermsOfUsePage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Legal</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Terms of Use</h1>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>Effective date: June 2026 &middot; Last updated: 22 June 2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "1.5rem" }}>
              These Terms of Use (&ldquo;Terms&rdquo;) govern your access to and use of the Bloom Care Foundation Kenya website (the &ldquo;Website&rdquo;). By accessing or using this Website, you agree to be bound by these Terms. If you do not agree, please do not use the Website.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>1. About Us</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Bloom Care Foundation Kenya is a registered Public Benefit Organisation (Reg. No. NGO-7WULB5J) established under the Public Benefit Organisations Act, No. 18 of 2013. Our registered office is at P.O. Box 328-00206, Kajiado-North, Kenya.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>2. Use of the Website</h2>
            <p style={{ marginBottom: "0.75rem" }}>You may use this Website for lawful purposes only. You agree not to:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Use the Website in any way that violates any applicable law or regulation",
                "Attempt to gain unauthorised access to any part of the Website",
                "Use the Website to transmit any harmful, fraudulent, or misleading content",
                "Interfere with or disrupt the operation of the Website",
                "Use automated systems to access or collect data from the Website without our written consent",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>3. Intellectual Property</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              All content on this Website, including text, images, logos, graphics, and design elements, is the property of Bloom Care Foundation Kenya or its content providers and is protected by Kenyan copyright law. You may view and download content for personal, non-commercial use. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>4. Donations</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Donations made through this Website are processed by IntaSend via M-Pesa STK Push. All donation transactions are final and non-refundable unless an error is clearly demonstrated. Bloom Care Foundation Kenya will issue donation receipts where requested. Donations are voluntary and do not entitle the donor to any specific benefit or return.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>5. Third-Party Links</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This Website may contain links to third-party websites. We are not responsible for the content, privacy practices, or accuracy of any third-party websites. Use of third-party websites is at your own risk.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>6. Disclaimer of Warranties</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              This Website is provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, whether express or implied. We do not warrant that the Website will be uninterrupted, error-free, or free from viruses. To the fullest extent permitted by Kenyan law, we disclaim all warranties regarding the accuracy or completeness of Website content.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>7. Limitation of Liability</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              To the maximum extent permitted by law, Bloom Care Foundation Kenya shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from your use of or inability to use this Website, including but not limited to loss of data, revenue, or goodwill.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>8. Indemnity</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              You agree to indemnify and hold harmless Bloom Care Foundation Kenya, its board members, staff, and volunteers from any claims, losses, or damages arising from your use of the Website or violation of these Terms.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>9. Governing Law</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              These Terms are governed by and construed in accordance with the laws of the Republic of Kenya. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Kenya.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>10. Amendments</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              We reserve the right to amend these Terms at any time. Changes will be posted on this page with an updated effective date. Continued use of the Website after changes are posted constitutes your acceptance of the revised Terms.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>11. Contact</h2>
            <p style={{ marginBottom: "0.25rem" }}><strong>Bloom Care Foundation Kenya</strong></p>
            <p style={{ marginBottom: "0.25rem" }}>P.O. Box 328-00206, Kenya</p>
            <p style={{ marginBottom: "0.25rem" }}>Email: <a href="mailto:info@bloomcarekenya.org" style={{ color: "var(--teal)", fontWeight: 600 }}>info@bloomcarekenya.org</a></p>
          </div>
        </div>
      </section>
    </>
  );
}
