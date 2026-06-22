import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bloom Care Foundation Kenya — our founding story, constitutional basis, and PBO status.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
          About Us
        </span>
        <h1 className="text-3xl md:text-[2.75rem] font-bold text-navy mb-5 text-balance">
          Our Story
        </h1>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl text-balance">
          Bloom Care Foundation Kenya was born from a simple observation: too many
          children with developmental conditions in Kenya lack access to basic
          therapeutic support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        {/* Founding + PBO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-24">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-5">
              How it began
            </h2>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              <p>
                Founded in Kajiado-North, Kenya, Bloom Care Foundation started as
                a community initiative to support children with autism spectrum
                disorder, sensory processing disorder, developmental delays, and
                intellectual disabilities.
              </p>
              <p>
                Our founders saw that families in both urban and rural areas
                struggled to access affordable occupational therapy and sensory
                support. Many children were going without intervention during
                critical developmental windows.
              </p>
              <p>
                Today, we operate across five counties — Nairobi, Kiambu, Nyeri,
                Mombasa, and Kisumu — providing direct therapy, caregiver training,
                sensory room establishment, nutritional guidance, and equipment
                access to hundreds of families.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-5">
              PBO Status
            </h2>
            <div className="space-y-3">
              <div className="p-6 rounded-2xl border border-gray-100">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-2">
                  Registration
                </span>
                <span className="text-sm font-semibold text-navy block">
                  Public Benefit Organisation
                </span>
                <span className="text-sm text-gray-400">
                  PBO Act No. 18 of 2013
                </span>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-2">
                  Registration Number
                </span>
                <span className="text-sm font-semibold text-navy">
                  NGO-7WULB5J
                </span>
              </div>
              <div className="p-6 rounded-2xl border border-gray-100">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-2">
                  Based In
                </span>
                <span className="text-sm font-semibold text-navy">
                  Kajiado-North, Kenya
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Constitution */}
        <div id="constitution" className="mb-24">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
            Constitution
          </span>
          <h2 className="text-2xl font-bold text-navy mb-8">
            Our Constitutional Framework
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-navy mb-4">
                Clause 4 — Objects and Purposes
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                The objects of the Foundation are to:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Provide therapeutic and sensory support services to children with developmental conditions",
                  "Establish sensory rooms and therapeutic environments in schools and community spaces",
                  "Train caregivers, parents, and community health workers in developmental support techniques",
                  "Provide nutritional guidance and support for children with special dietary needs",
                  "Facilitate access to therapeutic equipment for families unable to afford paid services",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-navy mb-4">
                Clause 5 — Powers
              </h3>
              <p className="text-sm text-gray-400 mb-4">
                The Foundation shall have the power to:
              </p>
              <ul className="space-y-2.5">
                {[
                  "Enter into partnerships with government agencies, NGOs, and private sector organisations",
                  "Receive and manage grants, donations, and contributions from local and international sources",
                  "Conduct research and advocacy on developmental conditions and therapeutic interventions",
                  "Collaborate with county governments across Kenya to expand service delivery",
                  "Establish branches and operations in any county within Kenya",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-500 leading-relaxed">
                    <span className="w-1 h-1 rounded-full bg-purple mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Leadership */}
        <div id="team">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
            Leadership
          </span>
          <h2 className="text-2xl font-bold text-navy mb-8">
            Guided by purpose
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Agnes Nyawira Kionga",
                role: "Chairperson",
                bio: "Passionate advocate for children with developmental conditions. Leads the foundation's strategic vision and community partnerships.",
              },
              {
                name: "Board of Directors",
                role: "Governance",
                bio: "A dedicated team of professionals guiding Bloom Care Foundation's mission to provide accessible therapeutic support across Kenya.",
              },
              {
                name: "Therapy Team",
                role: "Program Delivery",
                bio: "Qualified occupational therapists and sensory specialists delivering evidence-based interventions to children and families.",
              },
            ].map((member) => (
              <article key={member.name} className="p-8 rounded-2xl border border-gray-100">
                <div className="w-12 h-12 rounded-full bg-navy flex items-center justify-center mb-5">
                  <span className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-base font-bold text-navy mb-1">
                  {member.name}
                </h3>
                <span className="text-xs font-semibold text-teal uppercase tracking-wider">
                  {member.role}
                </span>
                <p className="text-sm text-gray-400 leading-relaxed mt-3">
                  {member.bio}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
