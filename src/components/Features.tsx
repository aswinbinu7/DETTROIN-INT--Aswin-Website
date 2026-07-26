"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Features() {
  return (
    <section className="w-full flex flex-col relative bg-white">
      
     {/* ========================================= */}
      {/* 1. STATS STRIP SECTION                    */}
      {/* ========================================= */}
      <div className="w-full relative bg-white pb-8 z-20">
        <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Clean, Raised Card Container */}
          <div className="bg-white rounded-2xl shadow-[0_4px_24px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-100">
            
            {/* Stat 1 */}
            <div className="flex flex-col items-center justify-center py-6 px-4 flex-1 hover:bg-gray-50/50 transition-colors rounded-l-2xl">
              <h3 className="text-3xl md:text-4xl font-black text-[#00205b] inline-block transition-transform duration-300 hover:scale-110 cursor-default">
                6,000<span className="text-[#00e58b]">+</span>
              </h3>
              <p className="text-gray-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mt-1 text-center">
                Students & Faculties
              </p>
            </div>
            
            {/* Stat 2 */}
            <div className="flex flex-col items-center justify-center py-6 px-4 flex-1 hover:bg-gray-50/50 transition-colors">
              <h3 className="text-3xl md:text-4xl font-black text-[#00205b] inline-block transition-transform duration-300 hover:scale-110 cursor-default">
                60<span className="text-[#00e58b]">+</span>
              </h3>
              <p className="text-gray-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mt-1 text-center">
                National & Int. Awards
              </p>
            </div>
            
            {/* Stat 3 */}
            <div className="flex flex-col items-center justify-center py-6 px-4 flex-1 hover:bg-gray-50/50 transition-colors">
              <h3 className="text-3xl md:text-4xl font-black text-[#00205b] inline-block transition-transform duration-300 hover:scale-110 cursor-default">
                100<span className="text-[#00e58b]">%</span>
              </h3>
              <p className="text-gray-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mt-1 text-center">
                Parents Satisfaction
              </p>
            </div>
            
            {/* Stat 4 */}
            <div className="flex flex-col items-center justify-center py-6 px-4 flex-1 hover:bg-gray-50/50 transition-colors rounded-r-2xl">
              <h3 className="text-3xl md:text-4xl font-black text-[#00205b] tracking-wider inline-block transition-transform duration-300 hover:scale-110 cursor-default">
                CBSE
              </h3>
              <p className="text-gray-500 font-bold tracking-widest text-[10px] md:text-xs uppercase mt-1 text-center">
                Affiliated School
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================= */}
      {/* 2. EXPLORE CARDS SECTION                  */}
      {/* ========================================= */}
      <div className="relative w-full py-24 overflow-hidden z-0">
        
        {/* Top Left Decorative Lines */}
        <div 
          className="absolute top-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] pointer-events-none -z-10"
          style={{ 
            maskImage: 'radial-gradient(circle at top left, black 10%, transparent 65%)',
            WebkitMaskImage: 'radial-gradient(circle at top left, black 10%, transparent 65%)' 
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="diagonal-stripes-features" width="24" height="24" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="24" stroke="#9ca3af" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-stripes-features)" />
          </svg>
        </div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Card 1: Academics */}
            <motion.div 
              className="group flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: false }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image src="/feature 1.jpg" alt="Academics" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-black text-[#00205b] mb-4 uppercase tracking-tighter">Academics</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  Experience a comprehensive curriculum designed to foster critical thinking, creativity, and a lifelong passion for learning.
                </p>
                <Link href="/academics" className="inline-flex items-center justify-center w-full px-6 py-3 border border-[#c8102e] text-[#c8102e] font-bold uppercase tracking-wide text-xs hover:bg-[#c8102e] hover:text-white transition-colors duration-300">
                  Explore
                </Link>
              </div>
            </motion.div>

            {/* Card 2: Admission */}
            <motion.div 
              className="group flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: false }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image src="/feature 2.jpg" alt="Admission" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-black text-[#00205b] mb-4 uppercase tracking-tighter">Admission</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  Join our vibrant community. We offer a simple, transparent, and welcoming admission process for prospective students.
                </p>
                <Link href="/admission" className="inline-flex items-center justify-center w-full px-6 py-3 border border-[#c8102e] text-[#c8102e] font-bold uppercase tracking-wide text-xs hover:bg-[#c8102e] hover:text-white transition-colors duration-300">
                  Explore
                </Link>
              </div>
            </motion.div>

            {/* Card 3: Co-Curricular */}
            <motion.div 
              className="group flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: false }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image src="/feature 3.jpg" alt="Co-Curricular" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-black text-[#00205b] mb-4 uppercase tracking-tighter">Co-Curricular</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  Discover hidden talents and build character through our diverse extracurricular programs, sports, and performing arts.
                </p>
                <Link href="/co-curricular" className="inline-flex items-center justify-center w-full px-6 py-3 border border-[#c8102e] text-[#c8102e] font-bold uppercase tracking-wide text-xs hover:bg-[#c8102e] hover:text-white transition-colors duration-300">
                  Explore
                </Link>
              </div>
            </motion.div>

            {/* Card 4: Gallery */}
            <motion.div 
              className="group flex flex-col bg-white shadow-[0_4px_20px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 h-full"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.2, once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image src="/feature 4.jpg" alt="Gallery" fill sizes="(max-width: 768px) 100vw, 320px" className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="flex flex-col flex-grow p-8">
                <h3 className="text-2xl font-black text-[#00205b] mb-4 uppercase tracking-tighter">Gallery</h3>
                <p className="text-gray-600 font-medium text-sm leading-relaxed mb-8 flex-grow">
                  Take a visual tour of our campus, events, facilities, and the daily vibrant student life at Krishna International School.
                </p>
                <Link href="/gallery" className="inline-flex items-center justify-center w-full px-6 py-3 border border-[#c8102e] text-[#c8102e] font-bold uppercase tracking-wide text-xs hover:bg-[#c8102e] hover:text-white transition-colors duration-300">
                  Explore
                </Link>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}