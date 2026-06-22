import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Programs",
  description:
    "Core programs at Bloom Care Foundation — occupational therapy, sensory rooms, caregiver training, nutritional support, and equipment access.",
};

const programs = [
  {
    id: "therapy",
    title: "Occupational & Sensory Therapy",
    description:
      "We provide one-on-one and group therapy sessions designed to improve sensory processing, fine and gross motor skills, and daily living abilities for children with developmental conditions.",
    details: [
      "Individualised assessment and therapy plans",
      "Sensory integration therapy",
      "Fine and gross motor skill development",
      "Social skills group sessions",
      "School-based therapy support",
    ],
    counties: "All five operational counties",
  },
  {
    id: "sensory-rooms",
    title: "Sensory Room Establishment",
    description:
      "We design and equip purpose-built sensory environments in schools, hospitals, and community spaces. These rooms provide controlled sensory input for calming, stimulation, and therapeutic engagement.",
    details: [
      "Needs assessment and room design",
      "Equipment procurement and installation",
      "Staff training on room usage",
      "Ongoing maintenance and support",
    ],
    counties: "Nairobi, Kiambu, Nyeri, Mombasa, Kisumu",
  },
  {
    id: "caregiver-training",
    title: "Caregiver Training",
    description:
      "We equip parents, guardians, and community health workers with knowledge and practical skills to support children with developmental needs at home and in the community.",
    details: [
      "Understanding developmental conditions",
      "Home-based therapy techniques",
      "Communication strategies",
      "Managing sensory needs daily",
      "Community awareness workshops",
    ],
    counties: "All five operational counties",
  },
  {
    id: "nutrition",
    title: "Nutritional Support",
    description:
      "We provide guidance on specialised diets and nutritional plans tailored to the needs of children with autism, sensory disorders, and developmental delays.",
    details: [
      "Nutritional assessment for each child",
      "Tailored dietary plans",
      "Parent education on meal planning",
      "Collaboration with healthcare providers",
    ],
    counties: "Nairobi, Kiambu, Nyeri",
  },
  {
    id: "equipment",
    title: "Equipment Access",
    description:
      "We provide therapeutic equipment and sensory tools to families who cannot afford paid services, ensuring no child is left without support due to financial barriers.",
    details: [
      "Assessment of equipment needs",
      "Provision of sensory tools and aids",
      "Loan programme for expensive equipment",
      "Training on equipment usage",
    ],
    counties: "All five operational counties",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-16">
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
          Programs
        </p>
        <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
          What we do
        </h1>
        <p className="text-base text-gray-500 leading-relaxed max-w-2xl">
          Five core programs designed to support children with developmental
          conditions and their families across Kenya.
        </p>
      </div>

      {/* Program List */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-20 md:pb-28">
        <div className="space-y-16">
          {programs.map((program, index) => (
            <section
              key={program.id}
              id={program.id}
              className="scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                <div className="lg:col-span-4">
                  <span className="text-xs font-semibold text-teal tabular-nums">
                    0{index + 1}
                  </span>
                  <h2 className="text-xl md:text-2xl font-bold text-navy mt-1 mb-3">
                    {program.title}
                  </h2>
                  <p className="text-xs text-gray-400">
                    Available in: {program.counties}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2">
                    {program.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < programs.length - 1 && (
                <hr className="mt-16 border-gray-100" />
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 pt-16 border-t border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">
            Interested in our programs?
          </h2>
          <p className="text-sm text-gray-500 mb-6 max-w-md mx-auto">
            Contact us to learn more about how you can access or support our
            programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Contact Us
            </Link>
            <Link href="/donate" className="btn-outline">
              Support Our Work
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
