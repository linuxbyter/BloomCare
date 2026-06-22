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
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Contact
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Get in touch
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Have questions about our programs, want to refer a child, or
              interested in partnering? We&apos;d love to hear from you.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-navy mb-1">Email</h3>
                <a
                  href="mailto:info@bloomcarefoundation.org"
                  className="text-sm text-gray-500 hover:text-navy transition-colors"
                >
                  info@bloomcarefoundation.org
                </a>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy mb-1">Location</h3>
                <p className="text-sm text-gray-500">Kajiado-North, Kenya</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy mb-1">Counties Served</h3>
                <p className="text-sm text-gray-500">
                  Nairobi · Kiambu · Nyeri · Mombasa · Kisumu
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-navy mb-1">
                  Registration
                </h3>
                <p className="text-sm text-gray-500">
                  PBO Act No. 18 of 2013 · Reg. No. NGO-7WULB5J
                </p>
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
