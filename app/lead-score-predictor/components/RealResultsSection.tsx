'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Building2, ArrowRight } from 'lucide-react';

const results = [
  {
    company: "TechStart Solutions",
    industry: "SaaS",
    beforeScore: 34,
    afterScore: 76,
    leadIncrease: 289
  },
  {
    company: "Growth Marketing Co",
    industry: "Agency",
    beforeScore: 28,
    afterScore: 79,
    leadIncrease: 412
  },
  {
    company: "Digital Dynamics",
    industry: "E-commerce",
    beforeScore: 45,
    afterScore: 83,
    leadIncrease: 267
  }
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function RealResultsSection() {
  return (
    <section id="real-results" className="bg-dark py-12 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - MARU Pattern */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.h2
            className="font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-zinc-500">Real B2B Companies,</span> Real Results
          </motion.h2>
          <motion.p
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            See how <span className="text-[#22d3ee] font-semibold">1,247+</span> companies transformed their lead generation in 90 days
          </motion.p>
        </div>

        {/* Results Grid - MARU Card Style */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {results.map((result) => (
            <motion.div
              key={result.company}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full flex flex-col">
                {/* Company Header */}
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30 mr-4">
                    <Building2 size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg">{result.company}</h3>
                    <p className="text-sm text-zinc-500">{result.industry}</p>
                  </div>
                </div>

                {/* Score Transformation */}
                <div className="mb-8 flex-grow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-center">
                      <span className="text-3xl md:text-4xl font-bold text-[#ef4444]">{result.beforeScore}</span>
                      <p className="text-xs text-zinc-500 mt-1">Before</p>
                    </div>
                    <div className="flex-1 mx-4 flex items-center justify-center">
                      <ArrowRight className="w-6 h-6 text-zinc-600" />
                    </div>
                    <div className="text-center">
                      <span className="text-3xl md:text-4xl font-bold text-[#22c55e]">{result.afterScore}</span>
                      <p className="text-xs text-zinc-500 mt-1">After</p>
                    </div>
                  </div>
                  
                  {/* Progress Bar - MARU Gradient */}
                  <div className="relative">
                    <div className="w-full bg-[#1a1a1a] rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-[#ef4444] via-[#eab308] to-[#22c55e] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${result.afterScore}%` }}
                      ></div>
                    </div>
                    {/* Before marker */}
                    <div 
                      className="absolute top-0 w-0.5 h-2 bg-[#ef4444]/50"
                      style={{ left: `${result.beforeScore}%` }}
                    ></div>
                  </div>
                  <p className="text-center text-sm text-zinc-500 mt-2">Lead Score</p>
                </div>

                {/* Lead Increase - Prominent */}
                <div className="text-center py-4 bg-[#22c55e]/10 rounded-xl border border-[#22c55e]/20">
                  <div className="text-4xl md:text-5xl font-bold text-[#22c55e] mb-1">
                    {result.leadIncrease}%
                  </div>
                  <div className="text-[#22c55e]/80 font-medium text-sm">more leads</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Curiosity Hook */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="text-center"
        >
          <p className="text-xl md:text-2xl text-zinc-400 font-light">
            What could <span className="text-[#22d3ee] font-bold">YOUR</span> results look like?
          </p>
        </motion.div>
      </div>
    </section>
  );
}
