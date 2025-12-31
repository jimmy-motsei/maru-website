"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NewYearCard() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0a192f] text-white selection:bg-[#3DD6D0] selection:text-black">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      {/* Glow Effects */}
      <div className="pointer-events-none absolute -top-40 -left-20 h-96 w-96 rounded-full bg-[#3DD6D0] opacity-10 blur-[128px]" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-[#3DD6D0] opacity-5 blur-[128px]" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-[#3DD6D0] opacity-10 blur-[128px]" />

      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 text-center">
        
        {/* Animated Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm font-medium uppercase tracking-widest text-[#3DD6D0] backdrop-blur-sm">
            Maru Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative text-6xl font-bold tracking-tight sm:text-8xl md:text-9xl font-outfit"
        >
          <span className="block text-white/90">Happy</span>
          <span className="block text-white/90">New Year</span>
          
          <motion.div
            animate={{
              y: [0, -10, 0],
              textShadow: [
                "0 0 20px rgba(61, 214, 208, 0.3)",
                "0 0 40px rgba(61, 214, 208, 0.5)",
                "0 0 20px rgba(61, 214, 208, 0.3)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="mt-2 block bg-gradient-to-b from-[#3DD6D0] to-[#2a9aa5] bg-clip-text text-transparent"
          >
            2026
          </motion.div>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8 max-w-2xl text-lg text-white/60 md:text-xl font-inter"
        >
          <p>
            Wishing you a year filled with innovation, growth, and extraordinary success.
            Thank you for being part of our journey.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12"
        >
          <Link 
            href="/"
            className="group flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-wider text-white/40 transition-colors hover:text-[#3DD6D0]"
          >
            Go to Homepage
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </main>

      {/* Decorative Sparkles/Particles concept - simpler CSS implementation for performance */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
             <motion.div
               key={i}
               className="absolute h-1 w-1 rounded-full bg-white/20"
               initial={{
                 x: Math.random() * 100 + "vw",
                 y: Math.random() * 100 + "vh",
                 scale: Math.random() * 0.5 + 0.5,
                 opacity: Math.random() * 0.3 + 0.1,
               }}
               animate={{
                 y: [null, Math.random() * -100 + "vh"],
                 opacity: [null, 0],
               }}
               transition={{
                 duration: Math.random() * 10 + 10,
                 repeat: Infinity,
                 ease: "linear",
                 delay: Math.random() * 5,
               }}
             />
          ))}
      </div>
    </div>
  );
}
