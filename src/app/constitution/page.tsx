import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Constitution",
  description: "Constitution of Bloom Care Foundation Kenya — objects, powers, and governance framework under the PBO Act.",
};

export default function ConstitutionPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Governance</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Constitution</h1>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>Prepared in accordance with Section 8(4) of the PBO Act, No. 18 of 2013</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.85 }}>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem" }}>Clause 1 — Name</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The name of the organisation is <strong style={{ color: "var(--navy)" }}>Bloom Care Foundation Kenya</strong>, hereinafter referred to as &ldquo;the Foundation.&rdquo;
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 2 — Registration</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The Foundation is registered as a Public Benefit Organisation under the Public Benefit Organisations Act, No. 18 of 2013, Registration Number NGO-7WULB5J.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 3 — Registered Office</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The registered office of the Foundation is at P.O. Box 328-00206, Mashuria House, Kajiado-North, Kenya.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 4 — Objects and Purposes</h2>
            <p style={{ marginBottom: "0.75rem" }}>The objects of the Foundation are to:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Provide therapeutic and sensory support services to children with developmental conditions",
                "Establish sensory rooms and therapeutic environments in schools and community spaces",
                "Train caregivers, parents, and community health workers in developmental support techniques",
                "Provide nutritional guidance and support for children with special dietary needs",
                "Facilitate access to therapeutic equipment for families unable to afford paid services",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 5 — Powers</h2>
            <p style={{ marginBottom: "0.75rem" }}>The Foundation shall have the power to:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Enter into partnerships with government agencies, NGOs, and private sector organisations",
                "Receive and manage grants, donations, and contributions from local and international sources",
                "Conduct research and advocacy on developmental conditions and therapeutic interventions",
                "Collaborate with county governments across Kenya to expand service delivery",
                "Establish branches and operations in any county within Kenya",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--purple)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 6 — Membership</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The Foundation shall be a non-membership organisation. The governance structure shall consist of a Board of Directors appointed in accordance with the PBO Act and these Clauses.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 7 — Board of Directors</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "The Foundation shall be governed by a Board of Directors of not fewer than five and not more than nine persons",
                "At least one-third of the Board members shall be Kenyan nationals resident in Kenya",
                "Board members shall serve for a term of three years and may be reappointed for one additional term",
                "The Board shall elect a Chairperson, Secretary, and Treasurer from among its members",
                "The Board shall meet at least quarterly to transact Foundation business",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 8 — Finances</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "The funds of the Foundation shall be derived from donations, grants, contributions, and any other lawful sources",
                "The Foundation shall maintain proper books of account and financial records",
                "The Foundation shall prepare annual audited financial statements",
                "The Foundation shall not distribute profits or surplus assets to directors, members, or associates",
                "Upon dissolution, remaining assets shall be transferred to a similar PBO with compatible objects",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 9 — Amendment</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              These Clauses may be amended by a two-thirds majority resolution of the Board of Directors, subject to approval by the Public Benefit Organizations Regulatory Authority as required under the PBO Act.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Clause 10 — Dissolution</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The Foundation may be dissolved by a resolution of two-thirds of the Board members, subject to compliance with the PBO Act. Upon dissolution, after settling all liabilities, remaining assets shall be transferred to another PBO with similar objects, as determined by the Board or the Authority.
            </p>

            <div style={{ marginTop: "3rem", padding: "1.5rem", border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", background: "var(--gray-50)" }}>
              <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7 }}>
                <strong style={{ color: "var(--navy)" }}>Note:</strong> This is a summary of the key clauses of the Constitution of Bloom Care Foundation Kenya. The full authenticated constitution, as filed with the Public Benefit Organizations Regulatory Authority, is available upon request. To request a copy, contact <a href="mailto:info@bloomcarekenya.org" style={{ color: "var(--teal)", fontWeight: 600 }}>info@bloomcarekenya.org</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
