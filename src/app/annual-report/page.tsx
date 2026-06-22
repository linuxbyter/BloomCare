import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annual Report",
  description: "Bloom Care Foundation Kenya annual report — programme impact, governance, and financial summary.",
};

export default function AnnualReportPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Transparency</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Annual Report</h1>
          <p style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.5)" }}>Financial year 2025&ndash;2026</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 720 }}>
          <div style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.85 }}>
            <p style={{ marginBottom: "1.5rem" }}>
              In compliance with Section 25 of the Public Benefit Organisations Act, No. 18 of 2013 and the PBO Regulations 2026, Bloom Care Foundation Kenya publishes this annual report to provide transparency on our activities, governance, and financial position.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Organisation Overview</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "2rem" }}>
              {[
                { label: "Registration", value: "PBO Act No. 18 of 2013" },
                { label: "Reg. Number", value: "NGO-7WULB5J" },
                { label: "Year Established", value: "2026" },
                { label: "Counties", value: "Nairobi, Kiambu, Nyeri, Mombasa, Kisumu" },
              ].map((item) => (
                <div key={item.label} style={{ border: "1px solid var(--gray-100)", borderRadius: "var(--radius)", padding: "1rem 1.25rem", background: "var(--white)" }}>
                  <div style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--gray-500)", marginBottom: "0.25rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--navy)" }}>{item.value}</div>
                </div>
              ))}
            </div>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Programme Impact</h2>
            <p style={{ marginBottom: "1rem" }}>During the 2025&ndash;2026 financial year, Bloom Care Foundation Kenya delivered the following programme outcomes:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Occupational and sensory therapy sessions delivered across five counties",
                "Sensory rooms established in community spaces and schools",
                "Caregiver training programme completed by 50+ participants",
                "Nutritional support provided to families of children with special dietary needs",
                "Sensory and OT equipment supplied to families through loan and donation programmes",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Governance</h2>
            <p style={{ marginBottom: "1rem" }}>The Foundation is governed by a Board of Directors appointed in accordance with the PBO Act and the Foundation&apos;s Constitution:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Agnes Nyawira Kionga — Chairperson",
                "Alice Njeri Mukiri — Secretary",
                "Julia Wanjiru Mukundi — Treasurer",
                "Everline Wangari Kionga — Director",
                "Peter Makau Musyoka — Director",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Financial Summary</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The Foundation maintains transparent financial records in compliance with the PBO Act and applicable accounting standards. Detailed audited financial statements are available for inspection at our registered office and are filed with the Public Benefit Organizations Regulatory Authority (PBORA) as required.
            </p>
            <p style={{ marginBottom: "0.75rem" }}>Key financial activities include:</p>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {[
                "Programme expenditure on therapy services, equipment, and caregiver training",
                "Administrative costs maintained at minimum levels to maximise programme delivery",
                "Donations received through M-Pesa, bank transfers, and grant funding",
                "Compliance with PBORA filing requirements including annual returns (KES 2,000 filing fee)",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <span style={{ width: 6, height: 6, minWidth: 6, borderRadius: "50%", background: "var(--teal)", marginTop: 7 }} />
                  {item}
                </li>
              ))}
            </ul>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Looking Ahead</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              In the coming year, Bloom Care Foundation Kenya plans to expand therapeutic services to additional counties, strengthen partnerships with county governments, and deepen our caregiver training programmes. We remain committed to ensuring that no child is turned away due to inability to pay.
            </p>

            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.25rem", color: "var(--navy)", marginBottom: "1rem", marginTop: "2.5rem" }}>Request Full Report</h2>
            <p style={{ marginBottom: "1.5rem" }}>
              The complete annual report, including audited financial statements, is available upon request. To request a copy, please contact us at <a href="mailto:info@bloomcarekenya.org" style={{ color: "var(--teal)", fontWeight: 600 }}>info@bloomcarekenya.org</a> or visit our registered office.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
