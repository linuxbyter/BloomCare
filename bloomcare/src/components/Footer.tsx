import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-lg font-bold text-navy"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Bloom Care
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Therapeutic and sensory support for children with developmental
              conditions and their families.
            </p>
            <p className="text-xs text-gray-400 mt-4">
              PBO Act No. 18 of 2013 · Reg. No. NGO-7WULB5J
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              About
            </h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-gray-500 hover:text-navy transition-colors">Our Story</Link></li>
              <li><Link href="/about#constitution" className="text-sm text-gray-500 hover:text-navy transition-colors">Constitution</Link></li>
              <li><Link href="/about#team" className="text-sm text-gray-500 hover:text-navy transition-colors">Leadership</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Programs
            </h4>
            <ul className="space-y-3">
              <li><Link href="/programs#therapy" className="text-sm text-gray-500 hover:text-navy transition-colors">Occupational Therapy</Link></li>
              <li><Link href="/programs#sensory-rooms" className="text-sm text-gray-500 hover:text-navy transition-colors">Sensory Rooms</Link></li>
              <li><Link href="/programs#caregiver-training" className="text-sm text-gray-500 hover:text-navy transition-colors">Caregiver Training</Link></li>
              <li><Link href="/programs#nutrition" className="text-sm text-gray-500 hover:text-navy transition-colors">Nutritional Support</Link></li>
              <li><Link href="/programs#equipment" className="text-sm text-gray-500 hover:text-navy transition-colors">Equipment Access</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Connect
            </h4>
            <ul className="space-y-3">
              <li><Link href="/contact" className="text-sm text-gray-500 hover:text-navy transition-colors">Contact Us</Link></li>
              <li><Link href="/news" className="text-sm text-gray-500 hover:text-navy transition-colors">News & Stories</Link></li>
              <li><Link href="/donate" className="text-sm text-gray-500 hover:text-navy transition-colors">Donate</Link></li>
              <li><a href="mailto:info@bloomcarefoundation.org" className="text-sm text-gray-500 hover:text-navy transition-colors">Email Us</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bloom Care Foundation Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-400">
            <span>Nairobi · Kiambu · Nyeri · Mombasa · Kisumu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
