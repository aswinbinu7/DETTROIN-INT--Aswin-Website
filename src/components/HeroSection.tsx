"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef } from "react";
import Footer from "./Footer";
import Features from "./Features";
import Link from "next/link";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = containerRef.current;
      const cardWidth = 336; // 320px min-width + 16px gap (gap-4)

      let targetScroll =
        direction === "left" ? scrollLeft - cardWidth : scrollLeft + cardWidth;

      // Infinite circular loop logic
      if (
        direction === "right" &&
        scrollLeft + clientWidth >= scrollWidth - 10
      ) {
        targetScroll = 0; // Wrap back to start
      } else if (direction === "left" && scrollLeft <= 0) {
        targetScroll = scrollWidth; // Wrap to end
      }

      containerRef.current.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };
  return (
    <main className="flex flex-col w-full">
      {/* ========================================= */}
      {/* 1. HERO SECTION                           */}
      {/* ========================================= */}
      <section className="relative w-full h-screen bg-gray-100 overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/a.jpg"
            alt="Students"
            fill
            priority
            sizes="100vw"
            className="object-fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        </div>

        <div className="absolute bottom-2 left-2 right-2 sm:bottom-4 sm:left-4 sm:right-4 md:bottom-8 md:left-8 md:right-8 lg:bottom-12 lg:left-12 lg:right-12 flex justify-end items-end z-10">
          <div className="text-center font-sans flex flex-col items-center max-w-3xl lg:max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white tracking-tight leading-[1.1] [text-shadow:_0_3px_10px_rgb(0_0_0_/_60%)] mb-4">
              <span className="text-[#00e58b]">Let's explore</span> the
              limitless possibilities of knowledge
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 font-light [text-shadow:_0_3px_8px_rgb(0_0_0_/_70%)] leading-relaxed">
              We are committed to providing high-quality teaching and developing
              intellectually curious, self-motivated, enthusiastic young
              children with an endearing love of learning.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. WELCOME SECTION (Scroll Animated)      */}
      {/* ========================================= */}
      <section className="relative w-full bg-white pt-16 pb-24 overflow-hidden z-0">
        {/* Top Right Decorative Lines */}
        <div
          className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] pointer-events-none -z-10"
          style={{
            maskImage:
              "radial-gradient(circle at top right, black 10%, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(circle at top right, black 10%, transparent 65%)",
          }}
        >
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="diagonal-stripes"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="24"
                  stroke="#9ca3af"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonal-stripes)" />
          </svg>
        </div>

        <div className="max-w-[90rem] mx-auto w-full">
          {/* TOP HEADER (On White Background) */}
          <motion.div
            className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10 relative mb-6"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.3, once: false }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-gray-600 font-bold tracking-widest uppercase text-sm sm:text-base mb-2">
              Welcome To
            </h3>
            <h2 className="text-[#00205b] text-5xl sm:text-7xl md:text-[6rem] font-black uppercase leading-none tracking-tighter">
              Krishna International School
            </h2>
          </motion.div>

          {/* GREY BACKGROUND WRAPPER (For Text + Cards) */}
          <div className="relative w-full pt-10">
            <div className="absolute top-0 bottom-[120px] left-[5%] md:left-[10%] right-0 bg-[#f4f5f6] -z-10">
              <div className="absolute top-0 bottom-0 left-0 w-32 bg-[#f4f5f6] -skew-x-[15deg] origin-bottom -translate-x-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
              {/* TEXT AND BUTTON */}
              <motion.div
                className="max-w-4xl"
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.3, once: false }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                <p className="text-gray-700 leading-relaxed md:text-[1.05rem] font-medium">
                  Amongst the best CBSE schools in Aligarh, the school is set
                  amidst 5 acres of land, away from the city's pollution. The
                  school provides an ideal environment for academic and
                  co-curricular excellence. The school has all facilities
                  required for the overall development of children. Facilities
                  such as an equipped library, theatre, science laboratories and
                  sports for students, so they excel in academics and enhance
                  their co-curricular skills and talents.
                </p>

                <p className="text-gray-700 leading-relaxed md:text-[1.05rem] font-medium mt-4">
                  The school is committed to the cause of promoting sound moral values, 
                  encouraging a scientific temperament and developing the overall 
                  personality of its students. Regular counselling of students gives 
                  them an insight into the competitive world ahead and encourages 
                  students to build a healthy spirit of competition.
                </p>

                <p className="text-gray-700 leading-relaxed md:text-[1.05rem] font-medium mt-4">
                  Under the canopy of the school motto, "dedicated to
                  excellence," the staff and the management of K.I.S. endeavour,
                  students not only excel in academics but gives opportunities
                  in different fields besides academics K.I.S. also imbue them
                  with social awareness, pride in their rich cultural heritage
                  and sense of responsibility towards the nation.
                </p>

                <div className="mt-8 flex items-center w-full max-w-4xl">
                  <Link href="about-us">
                  <button className="px-8 py-3 border border-[#c8102e] text-[#c8102e] font-bold uppercase tracking-wide text-xs hover:bg-[#c8102e] hover:text-white transition-colors duration-300 whitespace-nowrap bg-white">
                    Learn More
                  </button>
                  </Link>
                  <div className="h-[1px] bg-[#e5e7eb] flex-grow ml-4"></div>
                </div>
              </motion.div>

              {/* CAROUSEL */}
              <motion.div
                className="w-full flex flex-col lg:flex-row items-center lg:items-end gap-6 mt-16"
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ amount: 0.1, once: false }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              >
                <div className="flex lg:flex-col gap-3 z-10 pb-4 shrink-0">
                  <button
                    onClick={() => scroll("left")}
                    className="w-10 h-10 rounded-full bg-[#c8102e] text-white flex items-center justify-center hover:bg-[#a00c24] transition-colors shadow-lg"
                    aria-label="Scroll left"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M15 19l-7-7 7-7"
                      ></path>
                    </svg>
                  </button>
                  <button
                    onClick={() => scroll("right")}
                    className="w-10 h-10 rounded-full bg-[#c8102e] text-white flex items-center justify-center hover:bg-[#a00c24] transition-colors shadow-lg"
                    aria-label="Scroll right"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M9 5l7 7-7 7"
                      ></path>
                    </svg>
                  </button>
                </div>

                <div
                  ref={containerRef}
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none flex-grow pb-4 w-full items-end pt-12"
                >
                  {/* Card 1: Middle School (Normal position) */}
                  <div className="min-w-[280px] md:min-w-[320px] h-[450px] relative snap-start group overflow-hidden shadow-xl flex-shrink-0 cursor-pointer">
                    <Image
                      src="/student 1.jpg"
                      alt="Middle School"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                        Middle School
                      </h3>
                    </div>
                  </div>

                  {/* Card 2: High School (Shifted up to sit higher) */}
                  <div className="min-w-[280px] md:min-w-[320px] h-[450px] relative snap-start group overflow-hidden shadow-xl flex-shrink-0 cursor-pointer -translate-y-5">
                    <Image
                      src="/student 2.jpg"
                      alt="High School"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                        High School
                      </h3>
                    </div>
                  </div>

                  {/* Card 3: Collegiate Institute (Normal position) */}
                  <div className="min-w-[280px] md:min-w-[320px] h-[450px] relative snap-start group overflow-hidden shadow-xl flex-shrink-0 cursor-pointer">
                    <Image
                      src="/student 3.jpg"
                      alt="Collegiate Institute"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                        Collegiate Institute
                      </h3>
                    </div>
                  </div>

                  {/* Card 4: Future Ready (Shifted up to sit higher) */}
                  <div className="min-w-[280px] md:min-w-[320px] h-[450px] relative snap-start group overflow-hidden shadow-xl flex-shrink-0 cursor-pointer -translate-y-5">
                    <Image
                      src="/student 4.jpg"
                      alt="Future Ready"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                        Future Ready
                      </h3>
                    </div>
                  </div>

                  {/* Card 5: Passionate (Normal position) */}
                  <div className="min-w-[280px] md:min-w-[320px] h-[450px] relative snap-start group overflow-hidden shadow-xl flex-shrink-0 cursor-pointer">
                    <Image
                      src="/student 5.jpg"
                      alt="Passionate"
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/90 to-transparent flex items-end p-6">
                      <h3 className="text-white text-3xl font-black uppercase tracking-tighter">
                        Passionate
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Features />

      <Footer />
    </main>

    
  );
}
