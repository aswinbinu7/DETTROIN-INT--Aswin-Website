"use client"; 

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // Gets the current active route

  // Function to handle clicking the Logo
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If we are already on the Home page, scroll smoothly to the top
    if (pathname === "/") {
      e.preventDefault(); 
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // If we are on any other page, we do nothing here and let the <Link> navigate to "/" normally
  };

  // Function to handle clicking "Contact Us"
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const footer = document.getElementById("contact");
    if (footer) {
      e.preventDefault(); 
      footer.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", "#contact"); 
    }
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-sm border-b border-gray-200 transition-all duration-300">
      
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
                Affiliated to C.B.S.E. Delhi | An ISO 9001 : 2008 Certified School <span className="font-semibold text-gray-700 text-[0.5rem] md:text-[0.6rem] ml-1">ALIGARH</span>
              </span>
            </div>
          </Link>

          {/* RIGHT: Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {['About Us', 'Academics', 'Admission', 'Contact Us', 'Login'].map((item) => {
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

          {/* RIGHT: Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 border border-gray-300 rounded hover:bg-gray-50 text-[#00205b]">
              <svg className="w-4 h-4 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
            <button className="flex items-center gap-1.5 px-2.5 py-1.5 border border-gray-300 rounded hover:bg-gray-50 transition-colors text-[#00205b]">
              <span className="text-xs font-bold">MENU</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}