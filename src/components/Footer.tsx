import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-20 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block mb-5">
              <span
                className="text-xl font-bold text-navy tracking-tight"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                Bloom Care Foundation
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed max-w-sm mb-6">
              Providing therapeutic and sensory support for children with
              developmental conditions and their families across Kenya.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-150">
              <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              <span className="text-xs font-medium text-gray-500">
                PBO Reg. No. NGO-7WULB5J
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5">
                About
              </h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Our Story</Link></li>
                <li><Link href="/about#constitution" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Constitution</Link></li>
                <li><Link href="/about#team" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Leadership</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Programs
              </h4>
              <ul className="space-y-3">
                <li><Link href="/programs#therapy" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Occupational Therapy</Link></li>
                <li><Link href="/programs#sensory-rooms" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Sensory Rooms</Link></li>
                <li><Link href="/programs#caregiver-training" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Caregiver Training</Link></li>
                <li><Link href="/programs#nutrition" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Nutrition</Link></li>
                <li><Link href="/programs#equipment" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Equipment</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-widest text-gray-400 mb-5">
                Connect
              </h4>
              <ul className="space-y-3">
                <li><Link href="/contact" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Contact Us</Link></li>
                <li><Link href="/news" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">News & Stories</Link></li>
                <li><Link href="/donate" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Donate</Link></li>
                <li><a href="mailto:info@bloomcarefoundation.org" className="text-sm text-gray-500 hover:text-navy transition-colors duration-200">Email</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Bloom Care Foundation Kenya. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5 text-xs text-gray-400">
            <span>Nairobi</span>
            <span className="text-gray-300">·</span>
            <span>Kiambu</span>
            <span className="text-gray-300">·</span>
            <span>Nyeri</span>
            <span className="text-gray-300">·</span>
            <span>Mombasa</span>
            <span className="text-gray-300">·</span>
            <span>Kisumu</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
