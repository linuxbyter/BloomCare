import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Stories",
  description: "Updates, stories, and news from Bloom Care Foundation Kenya.",
};

const posts = [
  { title: "New Sensory Room Opens in Nairobi", date: "June 2026", excerpt: "A new sensory room has been established at a primary school in Nairobi, providing therapeutic support for over 30 children with developmental conditions.", cat: "Program Update", color: "var(--teal)" },
  { title: "Caregiver Training — 2026 Cohort", date: "May 2026", excerpt: "Fifty caregivers completed our latest training programme, gaining practical skills to support children with sensory and developmental needs at home.", cat: "Training", color: "var(--gold)" },
  { title: "Expanding Our Reach to Kisumu", date: "April 2026", excerpt: "Bloom Care Foundation has officially expanded operations to Kisumu County, bringing therapeutic services to western Kenya for the first time.", cat: "Milestone", color: "var(--purple)" },
  { title: "World Autism Awareness Day 2026", date: "April 2026", excerpt: "We joined communities across Kenya to raise awareness about autism spectrum disorder and the importance of early intervention.", cat: "Event", color: "var(--rose)" },
  { title: "Equipment Drive Results", date: "March 2026", excerpt: "Our equipment drive provided sensory tools and therapeutic aids to over 50 families across Nairobi and Kiambu counties.", cat: "Impact", color: "var(--navy)" },
  { title: "Healthcare Partnership in Mombasa", date: "February 2026", excerpt: "A new partnership with a Mombasa hospital will integrate our sensory therapy services into their paediatric care programme.", cat: "Partnership", color: "var(--teal)" },
];

export default function NewsPage() {
  return (
    <>
      {/* Hero */}
      <section style={{ background: "var(--navy)", padding: "5rem 0 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(43,174,142,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(43,174,142,0.035) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} aria-hidden="true" />
        <div className="container" style={{ position: "relative" }}>
          <p style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#7dffd6", marginBottom: "0.75rem" }}>News & Stories</p>
          <h1 style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(1.9rem, 3.5vw, 2.75rem)", color: "var(--white)", lineHeight: 1.15, marginBottom: "1rem" }}>Latest Updates</h1>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.8, maxWidth: 640 }}>
            Stories of impact, program updates, and news from Bloom Care Foundation Kenya.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="section" style={{ background: "var(--gray-50)" }}>
        <div className="container">
          <div className="programs-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1rem" }}>
            {posts.map((post) => (
              <article key={post.title} className="hover-lift" style={{ background: "var(--white)", border: "1px solid var(--gray-100)", borderRadius: "var(--radius-lg)", padding: "1.75rem 1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                  <span style={{ fontSize: "0.6875rem", fontWeight: 700, letterSpacing: "0.06em", color: post.color, background: `color-mix(in srgb, ${post.color} 10%, transparent)`, padding: "3px 10px", borderRadius: 50 }}>{post.cat}</span>
                  <span style={{ fontSize: "0.75rem", color: "var(--gray-200)" }}>&middot;</span>
                  <time style={{ fontSize: "0.75rem", color: "var(--gray-500)" }}>{post.date}</time>
                </div>
                <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: "1.125rem", color: "var(--navy)", marginBottom: "0.75rem", lineHeight: 1.3 }}>{post.title}</h2>
                <p style={{ fontSize: "0.8125rem", color: "var(--gray-500)", lineHeight: 1.7 }}>{post.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
