"use client";

import { motion } from "framer-motion";

const STATS = [
  { label: "Trusted by", value: "50+ Businesses" },
  { label: "Revenue Delivered", value: "R45M+ ROI" },
  { label: "Client Retention", value: "92%" },
  { label: "Compliance", value: "100% POPIA" },
];

const LOGOS = [
  "Khulisa Consulting",
  "AfriStyle Online",
  "DataFlow Distribution",
  "Legal Partners Network",
  "HomeCraft Retail",
  "TechShield Security",
  "GrowthMetrics SA",
];

export function SocialProofBar() {
  return (
    <div className="w-full bg-[#0A1628] border-y border-white/5 py-8 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* TOP ROW: Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-8">
            {STATS.map((stat, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="text-center md:text-left"
                >
                    <div className="text-electric-cyan font-mono font-bold text-xl md:text-2xl mb-1">{stat.value}</div>
                    <div className="text-white/40 text-xs uppercase tracking-wider">{stat.label}</div>
                </motion.div>
            ))}
        </div>

        {/* BOTTOM ROW: Scrolling Logos */}
        <div className="relative">
            {/* Fade Edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0A1628] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0A1628] to-transparent z-10 pointer-events-none" />
            
            <div className="flex overflow-hidden">
                <motion.div 
                    className="flex gap-12 md:gap-20 items-center whitespace-nowrap"
                    animate={{
                        x: [0, -1000],
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30,
                            ease: "linear",
                        },
                    }}
                >
                    {[...LOGOS, ...LOGOS, ...LOGOS].map((logo, i) => (
                        <span key={i} className="text-white/30 font-bold text-lg md:text-xl font-sans hover:text-white/60 transition-colors uppercase tracking-widest cursor-default select-none">
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>

      </div>
    </div>
  );
}
