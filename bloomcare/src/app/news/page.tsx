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

export default function NewsPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          News & Stories
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Latest updates
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
          Stories of impact, program updates, and news from Bloom Care
          Foundation Kenya.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-20 md:pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group border border-gray-100 rounded-xl p-6 hover:border-gray-200 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium text-teal">
                  {post.category}
                </span>
                <span className="text-xs text-gray-300">·</span>
                <time className="text-xs text-gray-400">{post.date}</time>
              </div>
              <h2 className="text-lg font-bold text-navy mb-2 group-hover:text-teal transition-colors">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                {post.excerpt}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
