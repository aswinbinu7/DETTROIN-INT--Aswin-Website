"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    // Check if the user has already seen the splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      setIsVisible(false);
    } else {
      // Show loader for 2 seconds, then hide and save to session
      const timer = setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("hasSeenSplash", "true");
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, []);

  // Prevent hydration mismatch errors by not rendering until mounted
  if (!isMounted) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="splash"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
        >
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-32 h-32 md:w-40 md:h-40 mb-8"
          >
            <Image 
              src="/KIS Logo.png" 
              alt="KIS Logo" 
              fill 
              className="object-contain" 
              priority 
            />
          </motion.div>

          {/* Spinning Loader Ring */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="w-10 h-10 border-4 border-[#f4f5f6] border-t-[#c8102e] rounded-full animate-spin"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}