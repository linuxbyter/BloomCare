import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News & Stories",
  description:
    "Updates, stories, and news from Bloom Care Foundation Kenya.",
};

const posts = [
  {
    slug: "sensory-room-launch-nairobi",
    title: "New Sensory Room Opens in Nairobi",
    date: "June 2026",
    excerpt:
      "A new sensory room has been established at a primary school in Nairobi, providing therapeutic support for over 30 children with developmental conditions.",
    category: "Program Update",
  },
  {
    slug: "caregiver-training-cohort-2026",
    title: "Caregiver Training — 2026 Cohort",
    date: "May 2026",
    excerpt:
      "Fifty caregivers completed our latest training programme, gaining practical skills to support children with sensory and developmental needs at home.",
    category: "Training",
  },
  {
    slug: "expansion-to-kisumu",
    title: "Expanding Our Reach to Kisumu",
    date: "April 2026",
    excerpt:
      "Bloom Care Foundation has officially expanded operations to Kisumu County, bringing therapeutic services to western Kenya for the first time.",
    category: "Milestone",
  },
  {
    slug: "world-autism-awareness-2026",
    title: "World Autism Awareness Day 2026",
    date: "April 2026",
    excerpt:
      "We joined communities across Kenya to raise awareness about autism spectrum disorder and the importance of early intervention.",
    category: "Event",
  },
  {
    slug: "equipment-drive-results",
    title: "Equipment Drive Results",
    date: "March 2026",
    excerpt:
      "Our equipment drive provided sensory tools and therapeutic aids to over 50 families across Nairobi and Kiambu counties.",
    category: "Impact",
  },
  {
    slug: "partnership-mombasa-hospital",
    title: "Healthcare Partnership in Mombasa",
    date: "February 2026",
    excerpt:
      "A new partnership with a Mombasa hospital will integrate our sensory therapy services into their paediatric care programme.",
    category: "Partnership",
  },
];

const categoryColors: Record<string, string> = {
  "Program Update": "var(--teal)",
  Training: "var(--gold)",
  Milestone: "var(--purple)",
  Event: "var(--rose)",
  Impact: "var(--navy)",
  Partnership: "var(--teal)",
};

export default function NewsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
          News & Stories
        </span>
        <h1 className="text-3xl md:text-[2.75rem] font-bold text-navy mb-5">
          Latest updates
        </h1>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
          Stories of impact, program updates, and news from Bloom Care
          Foundation Kenya.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    color: categoryColors[post.category] || "var(--teal)",
                    background: `color-mix(in srgb, ${categoryColors[post.category] || "var(--teal)"} 8%, transparent)`,
                  }}
                >
                  {post.category}
                </span>
                <span className="text-xs text-gray-300">·</span>
                <time className="text-xs text-gray-400">{post.date}</time>
              </div>
              <h2 className="text-lg font-bold text-navy mb-3 group-hover:text-teal transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
