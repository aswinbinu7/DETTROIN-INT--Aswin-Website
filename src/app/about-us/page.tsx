"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function AboutUsPage() {
  const greatTraits = [
    { letter: "G", desc: "Giving and receiving the very best." },
    { letter: "R", desc: "Respecting ourselves, others and our surroundings." },
    { letter: "E", desc: "Excelling by setting high expectations and having a solid work ethic." },
    { letter: "A", desc: "Attitude of being open to learning." },
    { letter: "T", desc: "Thinking critically and creatively in a changing world." },
  ];

  return (
    <main className="flex flex-col w-full pt-16 md:pt-20">
      
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative w-full h-[45vh] md:h-[55vh] bg-[#00153f] overflow-hidden flex items-center justify-center">
        {/* Background Layer */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/a.jpg"
            alt="About Krishna International School"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30 mix-blend-luminosity scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00153f] via-[#00153f]/60 to-transparent"></div>
        </div>

        {/* Hero Text */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20"
          >
            <Image src="/KIS Logo.png" alt="Logo" width={40} height={40} className="object-contain" />
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            About <span className="text-[#00e58b] drop-shadow-[0_0_15px_rgba(0,229,139,0.4)]">K.I.S.</span>
          </motion.h1>
          
          <motion.p
            className="text-gray-300 text-sm md:text-lg font-medium max-w-2xl mt-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Dedicated to excellence, grounded in values, and committed to shaping the global citizens of tomorrow.
          </motion.p>
        </div>

        {/* Bottom Curved Separator */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
          <svg 
            className="relative block w-full h-[60px] md:h-[100px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
          >
            <path 
              d="M0,50 C250,130 450,130 750,50 C950,-10 1100,-10 1200,50 L1200,120 L0,120 Z" 
              className="fill-white"
            ></path>
          </svg>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. OVERVIEW & COLLAGE SECTION             */}
      {/* ========================================= */}
      <section className="relative w-full bg-white py-16 md:py-24 overflow-hidden z-0">
        
        {/* Decorative Background Elements */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-gray-50 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-10 left-[-100px] w-[300px] h-[300px] bg-[#00205b]/5 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            
            {/* Left Content (Text) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="w-12 h-1 bg-[#c8102e]"></span>
                <h3 className="text-[#c8102e] font-bold tracking-widest uppercase text-sm sm:text-base">
                  Our Story
                </h3>
              </div>
              <h2 className="text-[#00205b] text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[1.1] tracking-tighter mb-8">
                A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c8102e] to-[#ff4d6d]">Excellence</span>
              </h2>

              <div className="space-y-5 text-gray-600 md:text-lg leading-relaxed font-medium">
                <p>
                  We highly value connections with our parents and community. Building strong family and community partnerships enable us to maximize the learning and social experiences of our students.
                </p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00e58b]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#00e58b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-gray-700">Our warm, family-like environment where everyone counts!</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00e58b]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#00e58b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-gray-700">High expectations for our students to reach their full potential.</span>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#00e58b]/20 flex items-center justify-center shrink-0 mt-1">
                      <svg className="w-4 h-4 text-[#00e58b]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </div>
                    <span className="text-gray-700">Committed, dedicated staff making learning fun and meaningful.</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Right Content (Modern Image Collage) */}
            <motion.div
              className="relative w-full h-[500px] lg:h-[600px] flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            >
              {/* Image 1 (Top Right) */}
              <div className="absolute top-0 right-0 w-[65%] h-[60%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-white">
                <Image src="/a.jpg" alt="Campus Overview" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Image 2 (Bottom Left) */}
              <div className="absolute bottom-10 left-0 w-[60%] h-[55%] rounded-2xl overflow-hidden shadow-2xl z-20 border-[6px] border-white">
                <Image src="/student 1.jpg" alt="Students Learning" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>

              {/* Floating Badge */}
              <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#c8102e] rounded-full z-30 flex flex-col items-center justify-center text-white shadow-[0_10px_30px_rgba(200,16,46,0.4)] border-4 border-white animate-[bounce_4s_infinite]">
                <span className="text-3xl font-black">5</span>
                <span className="text-xs font-bold uppercase tracking-widest text-center mt-1">Acres of<br/>Campus</span>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. THE "GREAT" CITIZEN (Acronym Grid)     */}
      {/* ========================================= */}
      <section className="w-full bg-[#f4f5f6] py-20 relative">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-[#00205b] text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
              Building a{" "}
              {/* Group wrapper to trigger hover for all letters at once */}
              <span className="text-[#00e58b] group inline-flex perspective-[1000px] cursor-default">
                {"GREAT".split("").map((char, index) => (
                  <span
                    key={index}
                    // rotateY(180deg) creates the "mirror" effect on hover
                    className="inline-block transition-transform duration-500 group-hover:[transform:rotateY(180deg)]"
                    // Multiplies the delay so G flips first, then R, then E, etc.
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {char}
                  </span>
                ))}
              </span>{" "}
              Citizen
            </h2>
            <p className="text-gray-600 text-lg font-medium">
              We ensure our students are empowered to live successfully in their personal and global lives by embodying these core principles.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {greatTraits.map((item, index) => (
              <motion.div
                key={item.letter}
                className="bg-white w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] rounded-2xl p-6 shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-gray-100 hover:shadow-[0_10px_30px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.1, once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#00205b]/5 text-[#00205b] group-hover:bg-[#00205b] group-hover:text-white transition-colors duration-300 flex items-center justify-center mb-4">
                  <span className="text-3xl font-black">{item.letter}</span>
                </div>
                <p className="text-gray-600 font-medium text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================= */}
      {/* 4. MISSION & VISION (Dark Section)        */}
      {/* ========================================= */}
      <section className="w-full bg-[#00153f] py-24 relative overflow-hidden">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8102e] rounded-full mix-blend-overlay filter blur-[150px] opacity-40"></div>

        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Mission Card */}
            <motion.div 
              className="bg-white/5 backdrop-blur-md p-10 lg:p-14 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#00e58b] group-hover:w-3 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#00e58b]/20 rounded-xl flex items-center justify-center mb-8 text-[#00e58b]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed font-medium text-lg">
                  To foster a dynamic learning environment that nurtures intellectual curiosity, self-motivation, and an enduring love for learning. We aim to empower students with the knowledge, skills, and values necessary to become responsible global citizens.
                </p>
              </div>
            </motion.div>

            {/* Vision Card */}
            <motion.div 
              className="bg-white/5 backdrop-blur-md p-10 lg:p-14 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors duration-300 relative overflow-hidden group mt-0 md:mt-12"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ amount: 0.2, once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Left Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#c8102e] group-hover:w-3 transition-all duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 bg-[#c8102e]/20 rounded-xl flex items-center justify-center mb-8 text-[#ff4d6d]">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path></svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tight">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed font-medium text-lg">
                  To be recognized as a premier educational institution that builds confident, compassionate, and capable leaders of tomorrow, firmly grounded in our rich cultural heritage and dedicated to the pursuit of continuous excellence.
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </main>
  );
}