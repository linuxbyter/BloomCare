import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Bloom Care Foundation Kenya. Reach us by email or send a message through our contact form.",
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-teal mb-5 block">
              Contact
            </span>
            <h1 className="text-3xl md:text-[2.75rem] font-bold text-navy mb-5">
              Get in touch
            </h1>
            <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-md">
              Have questions about our programs, want to refer a child, or
              interested in partnering? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">
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
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">
                  Location
                </span>
                <span className="text-sm text-navy font-medium">
                  Kajiado-North, Kenya
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">
                  Counties Served
                </span>
                <span className="text-sm text-navy font-medium">
                  Nairobi · Kiambu · Nyeri · Mombasa · Kisumu
                </span>
              </div>
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 block mb-1.5">
                  Registration
                </span>
                <span className="text-sm text-navy font-medium">
                  PBO Act No. 18 of 2013 · Reg. No. NGO-7WULB5J
                </span>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
