import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="relative w-full bg-[#121212] text-gray-300 font-sans pt-16 pb-12 border-t border-gray-800">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TOP SECTION: Logo, Contact Info, Socials & QR Code */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pb-16 border-b border-gray-800 items-start">
          
          {/* Logo & School Name Column (Cols 1-4) */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-6 items-start">
            <div className="relative w-24 h-28 flex-shrink-0">
              <Image 
                src="/KIS Logo.png" 
                alt="Krishna International School Logo" 
                fill 
                sizes="96px"
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-2">
                Krishna International School
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                Delhi G.T. Road, Aligarh-202001 (U.P.) INDIA
              </p>
              <Link 
                href="/directions" 
                className="inline-block text-[#00e58b] text-sm font-semibold mt-3 hover:underline"
              >
                - View Direction
              </Link>
            </div>
          </div>

          {/* Contact Details & Social Icons (Cols 5-8) */}
          <div className="lg:col-span-8 flex flex-col gap-5 lg:items-end lg:text-right">
            <div className="space-y-3">
              <div className="flex items-center lg:justify-end gap-3 text-sm">
                <span className="text-white font-medium">+ (91) 983-70-50000</span>
                <span className="text-[#00e58b]">📞</span>
              </div>
              <div className="flex items-center lg:justify-end gap-3 text-sm">
                <span className="text-white font-medium">+ (91) 735-10-50000</span>
                <span className="text-[#00e58b]">📞</span>
              </div>
              <div className="flex items-center lg:justify-end gap-3 text-sm">
                <span className="text-white font-medium">info@kisaligarh.com</span>
                <span className="text-[#00e58b]">✉️</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center lg:justify-end gap-4 pt-2">
              <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#c8102e] transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#c8102e] transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </Link>
              <Link href="#" className="w-9 h-9 rounded-full bg-gray-800 flex items-center justify-center text-white hover:bg-[#c8102e] transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </Link>
            </div>
          </div>


        </div>

        {/* MIDDLE SECTION: Navigation Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 py-12 border-b border-gray-800 text-sm">
          
          {/* Column 1: About KIS */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">About KIS</h4>
            <ul className="space-y-2.5">
              <li><Link href="/about" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/school-features" className="hover:text-white transition-colors">School Features</Link></li>
              <li><Link href="/chairmans-message" className="hover:text-white transition-colors">Chairman's Message</Link></li>
            </ul>
          </div>

          {/* Column 2: Admission */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">Admission</h4>
            <ul className="space-y-2.5">
              <li><Link href="/admission" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/fee-payment" className="hover:text-white transition-colors">Fee Payment</Link></li>
              <li><Link href="/fee-structure" className="hover:text-white transition-colors">Fee Structure</Link></li>
            </ul>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">Academics</h4>
            <ul className="space-y-2.5">
              <li><Link href="/academics" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/academic-structure" className="hover:text-white transition-colors">Academic Structure</Link></li>
              <li><Link href="/partnership" className="hover:text-white transition-colors">Student Teacher Partnership</Link></li>
            </ul>
          </div>

          {/* Column 4: Co-Curricular */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">Co-Curricular</h4>
            <ul className="space-y-2.5">
              <li><Link href="/co-curricular" className="hover:text-white transition-colors">Overview</Link></li>
              <li><Link href="/sports-skills" className="hover:text-white transition-colors">Sports and Life Skills</Link></li>
              <li><Link href="/performing-arts" className="hover:text-white transition-colors">Performing Arts</Link></li>
            </ul>
          </div>

          {/* Column 5: School Events */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">School Events</h4>
            <ul className="space-y-2.5">
              <li><Link href="/events/recent" className="hover:text-white transition-colors">Recent</Link></li>
              <li><Link href="/events/upcoming" className="hover:text-white transition-colors">Upcoming</Link></li>
            </ul>
          </div>

          {/* Column 6: Join Us & App Download */}
          <div>
            <h4 className="text-white font-bold uppercase tracking-wider mb-4 text-xs">Join Us</h4>
            <ul className="space-y-2.5">
              <li><Link href="/vacancy" className="hover:text-white transition-colors">Vacancy</Link></li>
              <li><Link href="/online-registration" className="hover:text-white transition-colors">Online Student Registration</Link></li>
            </ul>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT / DISCLAIMER */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Krishna International School, Aligarh. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy-policy" className="hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">Terms of Use</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}