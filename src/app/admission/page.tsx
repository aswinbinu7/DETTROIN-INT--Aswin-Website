"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "@/components/Footer";

export default function AdmissionPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    studentName: "",
    fatherName: "",
    motherName: "",
    targetClass: "",
    age: "",
    previousPercentage: "",
    contactNumber: "",
    email: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="flex flex-col w-full pt-16 md:pt-20 bg-[#f4f5f6]">
      
      {/* ========================================= */}
      {/* 1. SPLIT-SCREEN ADMISSION CONTAINER       */}
      {/* ========================================= */}
      <section className="w-full max-w-[95rem] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT SIDE: Brand & Info Panel */}
          <motion.div 
            className="lg:col-span-5 bg-[#00153f] rounded-3xl p-8 md:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background Grid Pattern */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#c8102e] rounded-full mix-blend-overlay filter blur-[100px] opacity-50"></div>

            <div className="relative z-10 space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[#00e58b]/20 text-[#00e58b] font-bold text-xs uppercase tracking-widest rounded-full border border-[#00e58b]/30">
                Admissions Open 2026-27
              </span>
              <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight leading-none">
                Shape Your Child's <span className="text-[#00e58b]">Bright Future</span>
              </h1>
              <p className="text-gray-300 font-medium text-base leading-relaxed">
                Join Krishna International School, where holistic development meets world-class academic structure. Fill out the application form to begin your child’s journey.
              </p>
            </div>

            <div className="relative z-10 space-y-4 my-8">
              {[
                "Affiliated to C.B.S.E. Delhi",
                "5 Acres of Lush Green Campus",
                "Experiential & Skills-Based Learning",
                "100% Parent Satisfaction Track Record"
              ].map((perk, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#00e58b] text-[#00153f] flex items-center justify-center font-black text-xs shrink-0">
                    ✓
                  </div>
                  <span className="text-gray-200 font-medium text-sm">{perk}</span>
                </div>
              ))}
            </div>

            <div className="relative z-10 pt-6 border-t border-white/10 text-xs text-gray-400 font-medium">
              Need assistance with admission? Call our desk at <strong className="text-white">+91 (983-70-50000)</strong>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Interactive Form Panel */}
          <motion.div 
            className="lg:col-span-7 bg-white rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col justify-center relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <div className="mb-8">
                    <h2 className="text-[#00205b] text-2xl md:text-3xl font-black uppercase tracking-tight">
                      Student Registration Form
                    </h2>
                    <p className="text-gray-500 text-sm mt-1">
                      Please enter the student's academic and personal details accurately.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      
                      {/* Student Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Student's Full Name <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="text"
                          name="studentName"
                          required
                          value={formData.studentName}
                          onChange={handleChange}
                          placeholder="e.g. Aarav Sharma"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                      {/* Target Class */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Admission For Class <span className="text-[#c8102e]">*</span>
                        </label>
                        <select
                          name="targetClass"
                          required
                          value={formData.targetClass}
                          onChange={handleChange}
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        >
                          <option value="">Select Class</option>
                          <option value="Pre-Nursery">Pre-Nursery</option>
                          <option value="Nursery">Nursery</option>
                          <option value="KG">KG</option>
                          {Array.from({ length: 12 }, (_, i) => (
                            <option key={i + 1} value={`Class ${i + 1}`}>
                              Class {i + 1}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Father's Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Father's Name <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          required
                          value={formData.fatherName}
                          onChange={handleChange}
                          placeholder="e.g. Rajesh Sharma"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                      {/* Mother's Name */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Mother's Name <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          required
                          value={formData.motherName}
                          onChange={handleChange}
                          placeholder="e.g. Sunita Sharma"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                      {/* Age */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Student's Age (Years) <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="number"
                          name="age"
                          required
                          min="2"
                          max="20"
                          value={formData.age}
                          onChange={handleChange}
                          placeholder="e.g. 10"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                      {/* Previous School Mark Percentage */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Previous Mark Percentage (%) <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="number"
                          name="previousPercentage"
                          required
                          min="0"
                          max="100"
                          step="0.1"
                          value={formData.previousPercentage}
                          onChange={handleChange}
                          placeholder="e.g. 85.5"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                      {/* Contact Number */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Contact Number <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="tel"
                          name="contactNumber"
                          required
                          value={formData.contactNumber}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                      {/* Email Address */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#00205b] mb-1.5">
                          Email Address <span className="text-[#c8102e]">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. parent@example.com"
                          className="w-full bg-[#f8f9fa] border border-gray-200 rounded-xl px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#00205b] focus:bg-white transition-all font-medium text-sm"
                        />
                      </div>

                    </div>

                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full py-4 bg-[#00205b] hover:bg-[#00153f] text-white font-black uppercase tracking-wider text-sm rounded-xl shadow-[0_10px_25px_rgba(0,32,91,0.2)] transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                      >
                        Submit Admission Application
                      </button>
                    </div>
                  </form>
                </motion.div>
              ) : (
                <motion.div 
                  key="success"
                  className="text-center py-16 space-y-6"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-20 h-20 bg-[#00e58b]/20 text-[#00b06b] rounded-full flex items-center justify-center mx-auto text-3xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-3xl font-black text-[#00205b] uppercase">Application Successfully Submitted!</h3>
                  <p className="text-gray-600 max-w-md mx-auto font-medium">
                    Thank you for applying to Krishna International School. Our administrative team will review <span className="font-bold text-[#00205b]">{formData.studentName}'s</span> submission and get in touch with you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-8 py-3 bg-gray-100 hover:bg-gray-200 text-[#00205b] font-bold uppercase tracking-wider text-xs rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Application
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}