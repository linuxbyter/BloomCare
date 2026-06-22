import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Bloom Care Foundation Kenya — our founding story, constitutional basis, and PBO status.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          About Us
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          Our Story
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
          Bloom Care Foundation Kenya was born from a simple observation: too many
          children with developmental conditions in Kenya lack access to basic
          therapeutic support.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-20 md:pb-28">
        {/* Founding Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              How it began
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Founded in Kajiado-North, Kenya, Bloom Care Foundation started as
              a community initiative to support children with autism spectrum
              disorder, sensory processing disorder, developmental delays, and
              intellectual disabilities.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Our founders saw that families in both urban and rural areas
              struggled to access affordable occupational therapy and sensory
              support. Many children were going without intervention during
              critical developmental windows.
            </p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Today, we operate across five counties — Nairobi, Kiambu, Nyeri,
              Mombasa, and Kisumu — providing direct therapy, caregiver training,
              sensory room establishment, nutritional guidance, and equipment
              access to hundreds of families.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              PBO Status
            </h2>
            <div className="space-y-4">
              <div className="border border-gray-100 rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Registration
                </p>
                <p className="text-sm text-navy font-medium">
                  Public Benefit Organisation
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  PBO Act No. 18 of 2013
                </p>
              </div>
              <div className="border border-gray-100 rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Registration Number
                </p>
                <p className="text-sm text-navy font-medium">
                  NGO-7WULB5J
                </p>
              </div>
              <div className="border border-gray-100 rounded-xl p-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">
                  Based In
                </p>
                <p className="text-sm text-navy font-medium">
                  Kajiado-North, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Constitution */}
        <div className="mb-24" id="constitution">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Constitution
          </p>
          <h2 className="text-2xl font-bold text-navy mb-6">
            Our Constitutional Framework
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-100 rounded-xl p-8">
              <h3 className="text-lg font-bold text-navy mb-3">
                Clause 4 — Objects and Purposes
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                The objects of the Foundation are to:
              </p>
              <ul className="text-sm text-gray-500 leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Provide therapeutic and sensory support services to children
                  with developmental conditions
                </li>
                <li>
                  Establish sensory rooms and therapeutic environments in schools
                  and community spaces
                </li>
                <li>
                  Train caregivers, parents, and community health workers in
                  developmental support techniques
                </li>
                <li>
                  Provide nutritional guidance and support for children with
                  special dietary needs
                </li>
                <li>
                  Facilitate access to therapeutic equipment for families unable
                  to afford paid services
                </li>
              </ul>
            </div>
            <div className="border border-gray-100 rounded-xl p-8">
              <h3 className="text-lg font-bold text-navy mb-3">
                Clause 5 — Powers
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-3">
                The Foundation shall have the power to:
              </p>
              <ul className="text-sm text-gray-500 leading-relaxed space-y-2 list-disc pl-5">
                <li>
                  Enter into partnerships with government agencies, NGOs, and
                  private sector organisations
                </li>
                <li>
                  Receive and manage grants, donations, and contributions from
                  local and international sources
                </li>
                <li>
                  Conduct research and advocacy on developmental conditions and
                  therapeutic interventions
                </li>
                <li>
                  Collaborate with county governments across Kenya to expand
                  service delivery
                </li>
                <li>
                  Establish branches and operations in any county within Kenya
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values */}
        <div id="team">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Leadership
          </p>
          <h2 className="text-2xl font-bold text-navy mb-6">
            Guided by purpose
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-bold text-navy mb-1">
                Agnes Nyawira Kionga
              </h3>
              <p className="text-xs font-medium text-teal mb-2">Chairperson</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Passionate advocate for children with developmental conditions.
                Leads the foundation&apos;s strategic vision and community
                partnerships.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-navy mb-1">
                Board of Directors
              </h3>
              <p className="text-xs font-medium text-teal mb-2">Governance</p>
              <p className="text-sm text-gray-500 leading-relaxed">
                A dedicated team of professionals guiding Bloom Care
                Foundation&apos;s mission to provide accessible therapeutic
                support across Kenya.
              </p>
            </div>
            <div>
              <h3 className="text-base font-bold text-navy mb-1">
                Therapy Team
              </h3>
              <p className="text-xs font-medium text-teal mb-2">
                Program Delivery
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                Qualified occupational therapists and sensory specialists
                delivering evidence-based interventions to children and
                families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
