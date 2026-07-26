"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function AcademicsPage() {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "structure", label: "Academic Structure" },
    { id: "methodology", label: "Teaching Methodology" },
  ];

  return (
    <main className="flex flex-col w-full pt-16 md:pt-20 bg-white">
      
      {/* ========================================= */}
      {/* 1. EDITORIAL HERO SECTION                 */}
      {/* ========================================= */}
      <section className="relative w-full h-[40vh] md:h-[50vh] bg-[#f4f5f6] flex items-center">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00205b 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex justify-between items-center">
          <div className="max-w-2xl">
            <motion.div 
              className="flex items-center gap-4 mb-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="w-16 h-1 bg-[#c8102e]"></span>
              <span className="text-[#c8102e] font-bold tracking-widest uppercase text-sm">Academics at K.I.S.</span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-black text-[#00205b] uppercase tracking-tighter leading-none"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Shaping <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00205b] to-[#00e58b]">The Future</span>
            </motion.h1>
          </div>
          
          {/* Decorative Hero Image (Hidden on small screens) */}
          <motion.div 
            className="hidden lg:block relative w-[400px] h-[300px] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-2xl border-8 border-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image src="/student 3.jpg" alt="Students Learning" fill className="object-cover" />
          </motion.div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 2. MINIMALIST TAB NAVIGATION              */}
      {/* ========================================= */}
      <section className="w-full border-b border-gray-200 bg-white sticky top-16 md:top-20 z-40">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-none gap-8 md:gap-16">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative py-6 text-sm md:text-base font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-300 ${
                  activeTab === tab.id ? "text-[#00205b]" : "text-gray-400 hover:text-gray-800"
                }`}
              >
                {tab.label}
                {/* Animated Bottom Line */}
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="active-tab-line"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-[#c8102e]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================= */}
      {/* 3. DYNAMIC CONTENT AREA                   */}
      {/* ========================================= */}
      <section className="w-full bg-white py-16 md:py-24 min-h-[60vh]">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <AnimatePresence mode="wait">
            
            {/* ------------------------------------- */}
            {/* TAB 1: OVERVIEW (Split Editorial)     */}
            {/* ------------------------------------- */}
            {activeTab === "overview" && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch"
              >
                {/* Main Text Content */}
                <div className="lg:col-span-7 space-y-8 py-4">
                  <h2 className="text-[#00205b] text-3xl md:text-5xl font-black uppercase tracking-tight leading-[1.1]">
                    Education for the <br /> <span className="text-[#00e58b]">21st Century</span>
                  </h2>
                  
                  <div className="w-20 h-1 bg-gray-200"></div>

                  <p className="text-gray-600 md:text-lg leading-relaxed font-medium">
                    The key to learning in the twenty-first century is a skill. Children are taught social, cognitive, and emotional skills to prepare them for the future. In the past, the Indian education system did not prioritize information overload, exams, or grades. However, this has changed in recent years.
                  </p>
                  
                  <blockquote className="border-l-4 border-[#c8102e] pl-6 py-2 my-8 bg-gray-50/50 italic text-gray-700 md:text-xl font-serif">
                    "The Gurukul system, which served as the foundation for our education, needs to be updated to reflect contemporary values."
                  </blockquote>

                  <p className="text-gray-600 md:text-lg leading-relaxed font-medium">
                    The learning system is a unique pedagogy that is appropriate for the future because it empowers children with age-appropriate activities, skills-based learning, an assessment system that makes learning joyful and bridges learning gaps, experiential learning, exposure to practical project work, and most importantly, an interactive teaching-learning process.
                  </p>
                </div>

                {/* Solid Dark Blue Strengths Sidebar */}
                <div className="lg:col-span-5 bg-[#00205b] rounded-2xl p-10 md:p-12 text-white shadow-2xl relative overflow-hidden flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                  
                  <h3 className="text-3xl font-black uppercase mb-8 tracking-wide flex items-center gap-4 relative z-10">
                    <span className="w-10 h-10 bg-[#00e58b] flex items-center justify-center rounded text-[#00205b]">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                    </span>
                    Key Strengths
                  </h3>
                  
                  <ul className="space-y-6 relative z-10">
                    {[
                      "Collaborating to advance the school's shared objective of achieving greater excellence.",
                      "Continuous faculty growth through ongoing training and workshops.",
                      "Embracing innovative teaching and learning approaches.",
                      "Implementing creative strategies to yield outstanding results.",
                      "Integrating a mix of scholastic and co-scholastic activities to foster holistic student development."
                    ].map((strength, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="text-[#00e58b] text-xl leading-none mt-1">✦</span>
                        <span className="text-gray-300 font-medium leading-relaxed">{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* ------------------------------------- */}
            {/* TAB 2: ACADEMIC STRUCTURE (Timeline)  */}
            {/* ------------------------------------- */}
            {activeTab === "structure" && (
              <motion.div
                key="structure"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-5xl mx-auto"
              >
                <div className="text-center mb-16">
                  <span className="text-[#c8102e] font-bold tracking-widest uppercase text-sm mb-2 block">Guided by KIS Learning System</span>
                  <h2 className="text-[#00205b] text-3xl md:text-5xl font-black uppercase tracking-tight">
                    Academic Structure <br /> <span className="text-[#00e58b]">(NEP-2024)</span>
                  </h2>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l-4 border-gray-100 ml-4 md:ml-8 space-y-16 pb-8">
                  
                  {/* Stage 1 */}
                  <div className="relative pl-8 md:pl-16 group">
                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-[#00e58b] border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-150"></div>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b border-gray-100 pb-4">
                        <div>
                          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1">Learning System I</p>
                          <h3 className="text-2xl md:text-3xl font-black text-[#00205b] uppercase">Foundational Stage</h3>
                        </div>
                        <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-[#00e58b]/10 text-[#00b06b] font-bold text-sm uppercase rounded-full">5 Years | Age 3-8</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-4">The first part consists of a child's early school years. It consists of:</p>
                      <ul className="space-y-2 text-gray-600 font-medium">
                        <li className="flex gap-3"><span className="text-[#c8102e]">•</span> Three years of pre-primary education with an emphasis on interactive, lighthearted learning.</li>
                        <li className="flex gap-3"><span className="text-[#c8102e]">•</span> Grades 1 and 2 comprise the next two years, with a focus on basic literacy and numeracy.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Stage 2 */}
                  <div className="relative pl-8 md:pl-16 group">
                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-[#c8102e] border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-150"></div>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b border-gray-100 pb-4">
                        <div>
                          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1">Learning System II</p>
                          <h3 className="text-2xl md:text-3xl font-black text-[#00205b] uppercase">Preparatory Stage</h3>
                        </div>
                        <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-[#c8102e]/10 text-[#c8102e] font-bold text-sm uppercase rounded-full">3 Years | Age 8-11</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-4">Grades 3 through 5 are included in this three-year period. Subjects are integrated for a thorough learning experience through a multifaceted teaching strategy.</p>
                      <ul className="space-y-2 text-gray-600 font-medium">
                        <li className="flex gap-3"><span className="text-[#00e58b]">•</span> Exploration and discovery are given more weight.</li>
                        <li className="flex gap-3"><span className="text-[#00e58b]">•</span> The curriculum presents difficult ideas and moves away from memorization to foster comprehension and application.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Stage 3 */}
                  <div className="relative pl-8 md:pl-16 group">
                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-[#00205b] border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-150"></div>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b border-gray-100 pb-4">
                        <div>
                          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1">Learning System III</p>
                          <h3 className="text-2xl md:text-3xl font-black text-[#00205b] uppercase">Middle Stage</h3>
                        </div>
                        <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-[#00205b]/10 text-[#00205b] font-bold text-sm uppercase rounded-full">3 Years | Age 11-14</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-4">This group, which includes students in grades 6 through 8, goes more deeply into the topic:</p>
                      <ul className="space-y-2 text-gray-600 font-medium">
                        <li className="flex gap-3"><span className="text-[#c8102e]">•</span> A deeper examination of the material encourages critical thinking in the students.</li>
                        <li className="flex gap-3"><span className="text-[#c8102e]">•</span> The introduction of project-based learning guarantees that students obtain practical experience.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Stage 4 */}
                  <div className="relative pl-8 md:pl-16 group">
                    <div className="absolute -left-[14px] top-1 w-6 h-6 rounded-full bg-gray-800 border-4 border-white shadow-sm transition-transform duration-300 group-hover:scale-150"></div>
                    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 group-hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)] transition-shadow duration-300">
                      <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 border-b border-gray-100 pb-4">
                        <div>
                          <p className="text-gray-400 font-bold text-xs tracking-widest uppercase mb-1">Learning System IV</p>
                          <h3 className="text-2xl md:text-3xl font-black text-[#00205b] uppercase">Secondary Stage</h3>
                        </div>
                        <span className="inline-block mt-3 md:mt-0 px-4 py-1.5 bg-gray-100 text-gray-800 font-bold text-sm uppercase rounded-full">4 Years | Age 14-18</span>
                      </div>
                      <p className="text-gray-600 font-medium mb-4">The last section, which includes grades 9 through 12, gets pupils ready for their next steps, whether they are going to college or getting a job.</p>
                      <ul className="space-y-2 text-gray-600 font-medium">
                        <li className="flex gap-3"><span className="text-[#00e58b]">•</span> Pupils are free to select topics that interest them.</li>
                        <li className="flex gap-3"><span className="text-[#00e58b]">•</span> Real-world skills and abilities are prioritized, with an emphasis on holistic development.</li>
                      </ul>
                    </div>
                  </div>

                </div>
              </motion.div>
            )}

            {/* ------------------------------------- */}
            {/* TAB 3: TEACHING METHODOLOGY (Cards)   */}
            {/* ------------------------------------- */}
            {activeTab === "methodology" && (
              <motion.div
                key="methodology"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <div className="max-w-3xl mx-auto text-center mb-16">
                  <h2 className="text-[#00205b] text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
                    Our Teaching <span className="text-[#c8102e]">Methodology</span>
                  </h2>
                  <p className="text-gray-600 md:text-lg leading-relaxed font-medium">
                    Our teaching methodology ensures that students are being exposed to a holistic education experience in an active and dynamic learning environment, giving them the opportunity to achieve excellence by identifying and realizing their potential.
                  </p>
                </div>

                {/* Strategy Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  
                  {/* Card 1 */}
                  <div className="bg-white border-t-4 border-[#00205b] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="text-xl font-black text-[#00205b] uppercase mb-3">Active Learning</h4>
                    <p className="text-gray-500 font-medium text-sm">Instructional strategies are student-centered, keeping students engaged and directly involved in the learning process.</p>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white border-t-4 border-[#c8102e] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="text-xl font-black text-[#00205b] uppercase mb-3">Inquiry Based</h4>
                    <p className="text-gray-500 font-medium text-sm">Encouraging curiosity by asking questions, prompting students to investigate and construct their own knowledge.</p>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white border-t-4 border-[#00e58b] p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="text-xl font-black text-[#00205b] uppercase mb-3">Experience Based</h4>
                    <p className="text-gray-500 font-medium text-sm">Learning through doing. We provide exposure to practical project work to bridge the gap between theory and reality.</p>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white border-t-4 border-gray-800 p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-2 transition-transform duration-300">
                    <h4 className="text-xl font-black text-[#00205b] uppercase mb-3">Participative</h4>
                    <p className="text-gray-500 font-medium text-sm">Fostering cooperative learning activities where students work together, enhancing social and emotional skills.</p>
                  </div>

                </div>

                {/* Classroom Environment Banner */}
                <div className="bg-[#f4f5f6] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8 justify-between border border-gray-200">
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-black text-[#00205b] uppercase mb-2">Inside The Classroom</h3>
                    <p className="text-gray-600 font-medium">
                      Classroom teaching involves lively discussions, active interaction with students, engaging PowerPoint presentations, comprehensive worksheets, and an integrated <strong className="text-[#c8102e]">Smart Class Programme</strong>.
                    </p>
                  </div>
                  <div className="md:w-1/3 flex justify-end w-full">
                    <div className="flex gap-2">
                      <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#00205b] shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></span>
                      <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#c8102e] shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></span>
                      <span className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#00e58b] shadow-sm"><svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg></span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </section>

      <Footer />
    </main>
  );
}