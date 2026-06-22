import Link from "next/link";

export const metadata = {
  title: "Thank You | Bloom Care Foundation Kenya",
};

export default function DonateSuccessPage() {
  return (
    <>
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>Donate</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15 }}>Thank you for your generosity</h1>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 560, textAlign: "center" }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "rgba(43,174,142,0.1)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontSize: "2rem" }} aria-hidden="true">
            &#10003;
          </div>
          <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", color: "var(--navy)", marginBottom: "1rem" }}>Payment request sent</h2>
          <p style={{ fontSize: "0.9375rem", color: "var(--gray-500)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Check your phone for the M-Pesa prompt. Enter your PIN to complete the donation.
            You will receive an SMS confirmation once the payment is processed.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/" className="btn btn--outline" style={{ padding: "12px 28px" }}>
              Back to Home
            </Link>
            <Link href="/donate" className="btn btn--primary" style={{ padding: "12px 28px" }}>
              Make Another Donation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
