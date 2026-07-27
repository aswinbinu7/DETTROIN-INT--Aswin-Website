"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent background scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // Handle Logo Click
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Handle Desktop Contact Click
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const footer = document.getElementById("contact");
    if (footer) {
      e.preventDefault();
      footer.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact");
    }
  };

  // Handle links inside the slide-out menu
  const handleMenuLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMenuOpen(false); // Close menu first
    if (href === "#contact") {
      e.preventDefault();
      // Slight delay to allow menu to close before scrolling
      setTimeout(() => {
        const footer = document.getElementById("contact");
        if (footer) {
          footer.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", "#contact");
        }
      }, 300);
    }
  };

  const navLinks = ['About Us', 'Academics', 'Admission', 'Contact Us', 'Login'];

  return (
    <>
      <header className="fixed top-0 z-40 w-full bg-white shadow-sm border-b border-gray-200 transition-all duration-300">
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-[#c8102e]"></div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* LEFT: Logo Section */}
            <Link
              href="/"
              onClick={handleLogoClick}
              className="flex-shrink-0 flex items-center gap-3 cursor-pointer py-1"
            >
              <div className="relative w-9 h-9 md:w-11 md:h-11 flex-shrink-0">
                <Image
                  src="/KIS Logo.png"
                  alt="Krishna International School Logo"
                  fill
                  sizes="(max-width: 768px) 36px, 44px"
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col justify-center">
                <span className="text-xl md:text-2xl font-serif text-[#00205b] uppercase leading-none tracking-wide">
                  Krishna
                </span>
                <span className="text-[0.65rem] md:text-[0.75rem] font-serif text-[#00205b] uppercase leading-tight tracking-[0.15em] mt-1">
                  International School
                </span>
                <span className="hidden sm:block text-[0.45rem] md:text-[0.55rem] text-gray-500 mt-1">
                  Affiliated to C.B.S.E. Delhi | An ISO 9001 : 2008 Certified School{" "}
                  <span className="font-semibold text-gray-700 text-[0.5rem] md:text-[0.6rem] ml-1">ALIGARH</span>
                </span>
              </div>
            </Link>

            {/* RIGHT: Navigation & Hamburger */}
            <div className="flex items-center">
              {/* Desktop Links (Hidden on Mobile/Tablet) */}
              <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 border-r border-gray-200 pr-8">
                {navLinks.map((item) => {
                  const isContact = item === 'Contact Us';
                  const targetHref = isContact ? '#contact' : `/${item.toLowerCase().replace(' ', '-')}`;

                  return (
                    <Link
                      key={item}
                      href={targetHref}
                      onClick={isContact ? handleContactClick : undefined}
                      className="group relative py-1.5 text-xs md:text-sm font-bold text-[#00205b] hover:text-[#c8102e] uppercase tracking-wide transition-colors"
                    >
                      {item}
                      {/* Bottom Animated Line */}
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#c8102e] transition-all duration-300 ease-out group-hover:w-full"></span>
                    </Link>
                  );
                })}
              </nav>

              {/* Hamburger Button (Always visible, positioned after links on desktop) */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="ml-4 lg:ml-8 flex items-center gap-2 group p-2 hover:bg-gray-50 rounded transition-colors"
                aria-label="Open menu"
              >
                <div className="flex flex-col gap-1.5 justify-center items-center w-6 h-6">
                  <span className="w-6 h-0.5 bg-[#00205b] group-hover:bg-[#c8102e] transition-colors"></span>
                  <span className="w-6 h-0.5 bg-[#00205b] group-hover:bg-[#c8102e] transition-colors"></span>
                  <span className="w-6 h-0.5 bg-[#00205b] group-hover:bg-[#c8102e] transition-colors"></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ========================================= */}
      {/* SLIDE OUT MENU OVERLAY                    */}
      {/* ========================================= */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Blurred Backdrop */}
            <div
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            ></div>

            {/* Right Side Panel */}
            <motion.div
              className="relative w-full md:w-[60vw] lg:w-[45vw] h-full bg-[#00205b] flex flex-col justify-between overflow-hidden shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeInOut" }}
            >
              {/* Decorative Geometric Background Accent */}
              <div className="absolute top-[20%] -left-[10%] w-[120%] h-40 bg-white/5 -rotate-[8deg] pointer-events-none"></div>
              <div className="absolute top-[22%] -left-[10%] w-[120%] h-4 bg-white/5 -rotate-[8deg] pointer-events-none"></div>

              {/* Close Button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#c8102e] hover:scale-110 transition-transform z-50 shadow-xl"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>

              {/* Links Container */}
              <div className="flex-grow flex flex-col justify-center items-end pr-16 md:pr-24 relative z-10 mt-12">
                {/* Vertical Line right next to links */}
                <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 h-[70%] w-[1px] bg-white/30"></div>

                {navLinks.map((item, idx) => {
                  const targetHref = item === 'Contact Us' ? '#contact' : `/${item.toLowerCase().replace(' ', '-')}`;

                  return (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 40 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.08 }}
                      className="w-full text-right"
                    >
                      <Link
                        href={targetHref}
                        onClick={(e) => handleMenuLinkClick(e, targetHref)}
                        className="inline-block text-white text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter hover:text-[#c8102e] transition-colors py-2 md:py-3"
                      >
                        {item}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Bottom Action Bar */}
              <div className="h-20 w-full bg-[#c8102e] flex relative z-10 mt-auto">
                {/* Admissions Button */}
                <Link
                  href="/admission"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex-1 flex items-center justify-center gap-2 text-white font-bold tracking-widest hover:bg-black/10 transition-colors border-r border-white/20 text-xs md:text-sm uppercase"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                  </svg>
                  Admissions
                </Link>

                {/* Give & Support Button */}
                <Link
                  href="#contact"
                  onClick={(e) => handleMenuLinkClick(e, "#contact")}
                  className="flex-1 flex items-center justify-center gap-2 text-white font-bold tracking-widest hover:bg-black/10 transition-colors text-xs md:text-sm uppercase"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                  </svg>
                  Give & Support
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}