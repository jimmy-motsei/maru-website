"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardCheck, Map, Settings, GraduationCap, Target, TrendingUp, Zap, RefreshCw } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IsometricProcess } from "./IsometricProcess";

const steps = [
  {
    number: "01",
    title: "Step 1 – Free Process Health Check",
    description: "Our consultants analyze your current performance, identifying optimization opportunities that unlock your next level of growth.",
    icon: ClipboardCheck,
    color: "bg-cyan-500",
  },
  {
    number: "02",
    title: "Step 2 – Personalised AI & Automation Roadmap",
    description: "We deliver a precision roadmap—prioritized by impact—showing you exactly where AI and automation will move the needle most.",
    icon: Map,
    color: "bg-purple-500",
  },
  {
    number: "03",
    title: "Step 3 – Implementation, Setup & Testing",
    description: "Once our automation engineers have the scope from the roadmap, they'll get busy automating your tasks and integrating your tech.",
    icon: Settings,
    color: "bg-amber-500",
  },
  {
    number: "04",
    title: "Step 4 – Ongoing Support & Updates",
    description: "We provide ongoing optimization and support to ensure your systems continue delivering marginal gains that compound into market leadership.",
    icon: GraduationCap,
    color: "bg-emerald-500",
  },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const }
  }
};

const staggerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const
    }
  }
};

const iconVariants = {
  rest: { scale: 1, rotate: 0 },
  hover: { 
    scale: 1.1, 
    rotate: 5,
    transition: { duration: 0.3, type: "spring" as const, stiffness: 300 }
  }
};

export function Process() {
  return (
    <section id="process" className="bg-dark py-12 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-zinc-400">Your 4-Steps to</span> Breakthrough Performance
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            A proven methodology that identifies opportunities and delivers precision execution
          </motion.p>
        </div>

        {/* Isometric Workflow Visualization */}
        <div className="mb-24 -mx-4 md:-mx-8 lg:-mx-16">
           <IsometricProcess />
        </div>




        {/* Why Choose Us Header */}
        <div className="max-w-4xl mx-auto text-center mt-32 mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-zinc-500">Why</span> Choose Us?
          </motion.h2>
        </div>

        {/* Footer Features Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainerVariants}
        >
          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            initial="rest"
            animate="rest"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30"
              variants={iconVariants}
              whileHover="hover"
            >
              <Target size={28} />
            </motion.div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Built for High-Performers</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                We partner with businesses that have proven their model and are ready to scale it. If you're already successful but hitting a ceiling, we help you break through.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            initial="rest"
            animate="rest"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30"
              variants={iconVariants}
              whileHover="hover"
            >
              <TrendingUp size={28} />
            </motion.div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Marginal Gains Philosophy</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                We obsess over the 5-10% improvements across your marketing and sales operations that compound into market leadership. Precision beats brute force.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            initial="rest"
            animate="rest"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30"
              variants={iconVariants}
              whileHover="hover"
            >
              <Zap size={28} />
            </motion.div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Data-Driven Precision</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                Every recommendation is backed by your data and our 20+ years of pattern recognition across growing businesses. No guesswork, just results.
              </p>
            </div>
          </motion.div>

          <motion.div 
            className="flex flex-col gap-6 bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full"
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            initial="rest"
            animate="rest"
          >
            <motion.div 
              className="w-14 h-14 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30"
              variants={iconVariants}
              whileHover="hover"
            >
              <RefreshCw size={28} />
            </motion.div>
            <div>
              <h4 className="font-bold mb-3 text-xl text-white">Ongoing Optimization</h4>
              <p className="text-base text-zinc-400 leading-relaxed">
                Success isn't a one-time implementation—it's continuous refinement. We provide training, support, and ongoing optimization to keep you ahead.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
