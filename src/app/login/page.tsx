"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Login functionality connected successfully!");
    }, 1000);
  };

  return (
    <main className="min-h-screen w-full bg-[#f4f5f6] flex items-center justify-center overflow-hidden relative">
      
      {/* Main Card Wrapper */}
      <div className="w-full h-screen lg:h-[85vh] lg:max-w-[90rem] bg-white lg:rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 relative">
        
        {/* ========================================= */}
        {/* LEFT SIDE: Curved Graphic Panel           */}
        {/* ========================================= */}
        <div className="lg:col-span-6 bg-[#c8102e] relative overflow-hidden flex items-center p-12 lg:p-20 text-white">
          
          {/* Background Decorative Floral/Abstract Pattern Effect */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>

          {/* Panel Text Content */}
          <motion.div 
            className="relative z-10 space-y-3"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-white/80 font-bold tracking-widest uppercase text-xs md:text-sm block">
              My Dashboard
            </span>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-white drop-shadow-md">
              Admin Login
            </h1>
            <p className="text-white/90 text-sm md:text-base font-medium max-w-sm pt-2">
              Welcome to Krishna International School secure portal management system.
            </p>
          </motion.div>

          {/* Curved Wave Divider (Desktop Only) */}
          <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 pointer-events-none z-20">
            <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C60,30 60,70 0,100 Z" fill="#ffffff" />
            </svg>
          </div>
        </div>

        {/* ========================================= */}
        {/* RIGHT SIDE: Login Form Panel              */}
        {/* ========================================= */}
        <div className="lg:col-span-6 bg-white p-8 sm:p-12 lg:p-20 flex flex-col justify-between relative z-10">
          
          {/* Top Logo / Brand Header */}
          <div className="flex justify-end items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image src="/KIS Logo.png" alt="Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>

          {/* Center Form Section */}
          <motion.div 
            className="max-w-md w-full mx-auto my-auto py-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-[#00205b] text-2xl md:text-3xl font-black uppercase tracking-tight">
                Welcome Back!
              </h2>
              <p className="text-gray-500 text-xs md:text-sm font-medium mt-1">
                Please login to view your dashboard
              </p>
            </div>

            <form onSubmit={handleLogin} className="space-y-5">
              
              {/* User Name Input */}
              <div>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="User Name"
                  className="w-full bg-white border border-[#c8102e]/40 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8102e] transition-all font-medium text-sm shadow-sm"
                />
              </div>

              {/* Password Input */}
              <div>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full bg-white border border-[#c8102e]/40 rounded-md px-4 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#c8102e] transition-all font-medium text-sm shadow-sm"
                />
              </div>

              {/* Checkbox and Forgot Link row */}
              <div className="flex items-center justify-between text-xs font-medium text-gray-600 pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded border-gray-300 text-[#c8102e] focus:ring-[#c8102e]"
                  />
                  <span>Keep me logged in</span>
                </label>
                <a href="#" className="text-gray-600 hover:text-[#c8102e] transition-colors">
                  Forgot password? <span className="font-bold underline">Reset now</span>
                </a>
              </div>

              {/* Login Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 bg-[#c8102e] hover:bg-[#a50d25] text-white font-bold uppercase tracking-wider text-sm rounded shadow-md transition-all duration-300 cursor-pointer disabled:opacity-70 flex items-center justify-center"
                >
                  {isLoading ? (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                  ) : (
                    "LOGIN"
                  )}
                </button>
              </div>
            </form>

          </motion.div>

          {/* Bottom Legal / Terms Footer */}
          <div className="text-center text-[0.65rem] md:text-xs text-gray-400 font-medium max-w-lg mx-auto pt-6 border-t border-gray-100">
            By signing in you accept all our terms and conditions, privacy policy and cookie policy. We however do not use any third-party vendor to share your data and it's safe with us.
          </div>

        </div>

      </div>
    </main>
  );
}