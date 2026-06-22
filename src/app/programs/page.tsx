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
    color: "var(--teal)",
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
    color: "var(--purple)",
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
    color: "var(--gold)",
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
    color: "var(--rose)",
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
    color: "var(--navy)",
  },
];

export default function ProgramsPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-12 md:pt-24 md:pb-16">
        <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
          Programs
        </span>
        <h1 className="text-3xl md:text-[2.75rem] font-bold text-navy mb-5 text-balance">
          What we do
        </h1>
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-2xl">
          Five core programs designed to support children with developmental
          conditions and their families across Kenya.
        </p>
      </div>

      {/* Programs */}
      <div className="max-w-6xl mx-auto px-6 md:px-8 pb-24 md:pb-32">
        <div className="space-y-0">
          {programs.map((program, index) => (
            <section
              key={program.id}
              id={program.id}
              className="scroll-mt-24"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 py-12 md:py-16">
                <div className="lg:col-span-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-2 h-8 rounded-full"
                      style={{ background: program.color }}
                    />
                    <span className="text-[11px] font-bold text-gray-400 tabular-nums tracking-wider">
                      0{index + 1}
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy">
                    {program.title}
                  </h2>
                  <p className="text-xs text-gray-400 mt-2">
                    {program.counties}
                  </p>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">
                    {program.description}
                  </p>
                  <ul className="space-y-2.5">
                    {program.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-3 text-sm text-gray-600"
                      >
                        <span
                          className="w-1 h-1 rounded-full mt-2 shrink-0"
                          style={{ background: program.color }}
                        />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {index < programs.length - 1 && (
                <div className="h-px bg-gray-100" />
              )}
            </section>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 pt-16 border-t border-gray-100 text-center">
          <h2 className="text-2xl font-bold text-navy mb-3">
            Interested in our programs?
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-md mx-auto">
            Contact us to learn more about how you can access or support our
            programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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
