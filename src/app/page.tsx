import Link from "next/link";
import Logo from "@/components/Logo";
import ContactForm from "@/components/ContactForm";

const programs = [
  {
    title: "Occupational & Sensory Therapy",
    description:
      "One-on-one and group sessions to improve sensory processing, motor skills, and daily living abilities.",
    color: "var(--teal)",
  },
  {
    title: "Sensory Room Establishment",
    description:
      "Purpose-built sensory environments in schools and community spaces for calming, stimulation, and engagement.",
    color: "var(--purple)",
  },
  {
    title: "Caregiver Training",
    description:
      "Equipping parents and guardians with practical skills to support children with developmental needs at home.",
    color: "var(--gold)",
  },
  {
    title: "Nutritional Support",
    description:
      "Specialised dietary guidance tailored to children with autism, sensory disorders, and developmental delays.",
    color: "var(--rose)",
  },
  {
    title: "Equipment Access",
    description:
      "Therapeutic equipment and sensory tools for families who cannot afford paid services.",
    color: "var(--navy)",
  },
];

const steps = [
  {
    number: "01",
    title: "Identify & Assess",
    text: "We identify children who need support and conduct thorough developmental assessments.",
  },
  {
    number: "02",
    title: "Design & Deliver",
    text: "Individualised therapy plans tailored to each child's unique needs and environment.",
  },
  {
    number: "03",
    title: "Train & Empower",
    text: "Caregivers gain the skills and confidence to continue therapeutic support at home.",
  },
  {
    number: "04",
    title: "Sustain & Scale",
    text: "Equipment access, sensory rooms, and ongoing support for lasting impact across counties.",
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
      {/* ============ HERO ============ */}
      <section className="bg-white relative overflow-hidden">
        {/* Subtle grid background */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(var(--navy) 1px, transparent 1px), linear-gradient(90deg, var(--navy) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-32 lg:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-muted mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-teal animate-pulse" />
              <span className="text-xs font-semibold text-teal tracking-wide uppercase">
                Registered PBO — Kenya
              </span>
            </div>

            <h1 className="text-[2.5rem] md:text-[3.25rem] lg:text-[4rem] font-bold text-navy leading-[1.08] mb-6 text-balance">
              Every child deserves the support to bloom
            </h1>

            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl text-balance">
              Therapeutic and sensory support for children with autism,
              sensory processing disorders, developmental delays, and
              intellectual disabilities across Kenya.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
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
              size={110}
            />
          </div>
        </div>
      </section>

      {/* ============ MISSION ============ */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
              Our Mission
            </span>
            <h2 className="text-2xl md:text-[2rem] font-bold text-navy leading-snug mb-5 text-balance">
              Accessible therapeutic support for every child
            </h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed text-balance">
              We empower families and communities across Kenya with the tools,
              knowledge, and resources every child needs to thrive — regardless
              of their circumstances.
            </p>
          </div>
        </div>
      </section>

      {/* ============ PROGRAMS ============ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
            Programs
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-navy mb-4">
            What we do
          </h2>
          <p className="text-base text-gray-400 mb-14 max-w-lg">
            Five core programs designed to support children and their families at
            every stage.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {programs.map((p) => (
              <article
                key={p.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300"
              >
                <div
                  className="w-2 h-8 rounded-full mb-5"
                  style={{ background: p.color }}
                />
                <h3 className="text-lg font-bold text-navy mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {p.description}
                </p>
              </article>
            ))}

            <article className="p-8 rounded-2xl bg-navy text-white flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold mb-2">
                  See the full picture
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  Detailed information on each program, how they work, and who
                  they serve.
                </p>
              </div>
              <Link
                href="/programs"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white hover:gap-3 transition-all duration-300"
              >
                View All Programs
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
            Process
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-navy mb-14">
            How we work
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {steps.map((s) => (
              <div key={s.number}>
                <span className="text-[11px] font-bold text-teal tabular-nums tracking-wider">
                  {s.number}
                </span>
                <div className="w-full h-px bg-gray-200 my-4" />
                <h3 className="text-base font-bold text-navy mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {s.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ IMPACT ============ */}
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
            Impact
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-navy mb-14">
            Our reach
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {stats.map((s) => (
              <div key={s.label} className="bg-white p-8 md:p-10">
                <span className="block text-3xl md:text-4xl font-bold text-navy mb-2">
                  {s.value}
                </span>
                <span className="text-sm text-gray-400">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ GET INVOLVED ============ */}
      <section className="bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
            Get involved
          </span>
          <h2 className="text-2xl md:text-[2rem] font-bold text-navy mb-14">
            Ways to support
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-gold-muted flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Donate</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Your contribution provides therapy, equipment, and support to
                children who need it most.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:gap-2.5 transition-all duration-300"
              >
                Make a donation
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-xl bg-teal-muted flex items-center justify-center mb-5">
                <svg className="w-5 h-5 text-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Volunteer</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Share your time and skills to help deliver programs in your
                community.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:gap-2.5 transition-all duration-300"
              >
                Get in touch
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-gray-100">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(123, 94, 167, 0.08)" }}>
                <svg className="w-5 h-5 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z" />
                </svg>
              </div>
              <h3 className="text-base font-bold text-navy mb-2">Partner</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">
                Schools, healthcare providers, and organisations — partner with
                us to expand our reach.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal hover:gap-2.5 transition-all duration-300"
              >
                Become a partner
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTACT ============ */}
      <section className="bg-white" id="contact">
        <div className="max-w-6xl mx-auto px-6 md:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
                Contact
              </span>
              <h2 className="text-2xl md:text-[2rem] font-bold text-navy mb-4">
                Get in touch
              </h2>
              <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-md">
                Have questions about our programs, want to refer a child, or
                interested in partnering? We&apos;d love to hear from you.
              </p>

              <div className="space-y-5">
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Email
                  </span>
                  <a
                    href="mailto:info@bloomcarefoundation.org"
                    className="text-sm text-navy font-medium hover:text-teal transition-colors"
                  >
                    info@bloomcarefoundation.org
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Location
                  </span>
                  <span className="text-sm text-navy font-medium">
                    Kajiado-North, Kenya
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-gray-400 mb-1">
                    Counties
                  </span>
                  <span className="text-sm text-navy font-medium">
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
