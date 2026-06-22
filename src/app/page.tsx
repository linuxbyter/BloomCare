import Link from "next/link";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

const programs = [
  {
    title: "Occupational & Sensory Therapy",
    description:
      "One-on-one and group sessions to improve sensory processing, motor skills, and daily living abilities.",
  },
  {
    title: "Sensory Room Establishment",
    description:
      "Purpose-built sensory environments in schools and community spaces for calming, stimulation, and engagement.",
  },
  {
    title: "Caregiver Training",
    description:
      "Equipping parents and guardians with practical skills to support children with developmental needs at home.",
  },
  {
    title: "Nutritional Support",
    description:
      "Specialised dietary guidance tailored to children with autism, sensory disorders, and developmental delays.",
  },
  {
    title: "Equipment Access",
    description:
      "Therapeutic equipment and sensory tools for families who cannot afford paid services.",
  },
];

const steps = [
  {
    number: "01",
    title: "Identify & Assess",
    text: "We identify children who need support and conduct developmental assessments.",
  },
  {
    number: "02",
    title: "Design & Deliver",
    text: "Individualised therapy plans tailored to each child's unique needs.",
  },
  {
    number: "03",
    title: "Train & Empower",
    text: "Caregivers gain skills to continue therapeutic support at home.",
  },
  {
    number: "04",
    title: "Sustain & Scale",
    text: "Equipment access, sensory rooms, and ongoing support for lasting impact.",
  },
];

const stats = [
  { value: "500+", label: "Children Supported" },
  { value: "5", label: "Counties Reached" },
  { value: "50+", label: "Sensory Rooms Built" },
  { value: "1,000+", label: "Caregivers Trained" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-36 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-teal mb-6 tracking-wide">
              Registered PBO — Kenya
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-navy leading-[1.15] mb-6">
              Every child deserves the support to bloom
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-xl">
              Bloom Care Foundation provides therapeutic and sensory support for
              children with autism, sensory processing disorders, developmental
              delays, and intellectual disabilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate" className="btn-donate">
                Donate
              </Link>
              <Link href="/programs" className="btn-outline">
                Our Programs
              </Link>
            </div>
          </div>
          <div className="mt-16 md:mt-20">
            <Logo
              src="/images/IMG-20260604-WA0025.jpg"
              alt="Bloom Care Foundation Kenya logo"
              size={120}
            />
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Mission
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-navy leading-snug mb-4">
              Accessible therapeutic support for every child
            </h2>
            <p className="text-base text-gray-500 leading-relaxed">
              We empower families and communities across Kenya with the tools,
              knowledge, and resources every child needs to thrive — regardless
              of their circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Programs
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            What we do
          </h2>
          <p className="text-base text-gray-500 mb-12 max-w-xl">
            Five core programs designed to support children and their families at
            every stage.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 border border-gray-100 rounded-xl overflow-hidden">
            {programs.map((p) => (
              <article key={p.title} className="bg-white p-8">
                <h3 className="text-lg font-bold text-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {p.description}
                </p>
              </article>
            ))}
            <div className="bg-navy p-8 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-white mb-2">
                  See the full picture
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Detailed information on each program.
                </p>
              </div>
              <Link
                href="/programs"
                className="btn-primary mt-6 text-sm"
              >
                View All Programs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Process
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12">
            How we work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((s) => (
              <div key={s.number}>
                <span className="text-xs font-semibold text-teal tabular-nums">
                  {s.number}
                </span>
                <h3 className="text-base font-bold text-navy mt-2 mb-1">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Impact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12">
            Our reach
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <span className="block text-3xl md:text-4xl font-bold text-navy mb-1">
                  {s.value}
                </span>
                <span className="text-sm text-gray-500">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
            Get involved
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-12">
            Ways to support
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <h3 className="text-base font-bold text-navy mb-2">Donate</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Your contribution provides therapy, equipment, and support to
                children who need it most.
              </p>
              <Link href="/donate" className="text-sm font-semibold text-teal hover:underline">
                Make a donation →
              </Link>
            </div>
            <div>
              <h3 className="text-base font-bold text-navy mb-2">Volunteer</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Share your time and skills to help deliver programs in your
                community.
              </p>
              <Link href="/contact" className="text-sm font-semibold text-teal hover:underline">
                Get in touch →
              </Link>
            </div>
            <div>
              <h3 className="text-base font-bold text-navy mb-2">Partner</h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-4">
                Schools, healthcare providers, and organisations — partner with
                us to expand our reach.
              </p>
              <Link href="/contact" className="text-sm font-semibold text-teal hover:underline">
                Become a partner →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
                Contact
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
                Get in touch
              </h2>
              <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
                Have questions about our programs, want to refer a child, or
                interested in partnering? We&apos;d love to hear from you.
              </p>
              <div className="space-y-4 text-sm">
                <div>
                  <span className="block font-medium text-navy">Email</span>
                  <a href="mailto:info@bloomcarefoundation.org" className="text-gray-500 hover:text-navy transition-colors">
                    info@bloomcarefoundation.org
                  </a>
                </div>
                <div>
                  <span className="block font-medium text-navy">Location</span>
                  <span className="text-gray-500">Kajiado-North, Kenya</span>
                </div>
                <div>
                  <span className="block font-medium text-navy">Counties</span>
                  <span className="text-gray-500">
                    Nairobi · Kiambu · Nyeri · Mombasa · Kisumu
                  </span>
                </div>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
