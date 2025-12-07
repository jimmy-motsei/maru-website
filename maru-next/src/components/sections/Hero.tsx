"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";


export function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-[#050505] text-white">
      
      {/* --- 1. Background Atmospheric Layers --- */}
      <AtmosphericBackground variant="hero" />


      {/* Content Layer - Z-index bumped to sit above all clouds */}
      <div className="container relative z-30 mx-auto flex min-h-screen flex-col justify-center px-6 md:px-12 lg:px-20 pb-20">
        
        {/* Optically centered, weighted slightly upwards */}
        <div className="max-w-4xl pt-0 md:-mt-20 backdrop-blur-[1px] rounded-3xl p-4 md:p-0">
          
          {/* Headline */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold leading-[1.1] tracking-tight mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-white">AI & Automation</span><br />
            <span className="text-white">Consultants</span>{" "}
            <span className="font-light text-zinc-400">for SMEs</span>
          </motion.h1>

          {/* Sub-paragraph */}
          <div className="flex flex-col items-start">
             <motion.p 
               className="text-lg md:text-xl text-zinc-400 font-light leading-relaxed max-w-[500px] mb-12"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
             >
               We deploy AI and automation to streamline operations, boost productivity, and grow revenue. Our expert team transforms complex manual processes into efficient, scalable systems that drive measurable business results.
             </motion.p>
          </div>

          {/* Conversion Zone (CTAs) */}
          <motion.div 
            className="flex flex-col sm:flex-row items-start sm:items-center gap-8 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            {/* Primary Button - Cyan Pill */}
            <Link 
              href="/ai-readiness" 
              className="group bg-[#22d3ee] text-black hover:bg-[#5cc5d1] transition-colors rounded-full pl-8 pr-2 py-2 flex items-center justify-between gap-4 font-bold tracking-tight text-sm md:text-base"
            >
              GET YOUR FREE AI READINESS ASSESSMENT
              <span className="bg-black/10 group-hover:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                 <ArrowRight size={18} className="text-black" />
              </span>
            </Link>

            {/* Secondary Link - Text Only */}
            <Link 
              href="/how-we-work" 
              className="flex items-center gap-3 text-white font-bold tracking-widest text-sm hover:text-[#22d3ee] transition-colors group"
            >
              HOW WE WORK
              <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] transition-colors">
                 <ArrowUpRight size={14} />
              </div>
            </Link>
          </motion.div>

        </div>
      </div>


      {/* --- 3. Peripheral UI (The Frame) --- */}

      {/* Bottom Left Vertical Label */}
{/* ScrollIndicator Removed */}

    </section>
  );
}
