"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { fadeUpVariants } from "@/lib/animations";

export function AIReadinessTeaser() {
  return (
    <section className="bg-black py-24 md:py-32 text-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm font-medium text-accent">Free Assessment Tool</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Is Your Business{" "}
            <span className="font-light text-white/60">AI-Ready?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-white/60 leading-relaxed mb-12 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Take our 2-minute assessment and discover your organization's AI readiness score. 
            Get personalized recommendations to accelerate your AI journey.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <Link
              href="/ai-readiness"
              className="group inline-flex items-center gap-4 bg-accent hover:bg-accent-dark text-black font-bold rounded-full pl-8 pr-3 py-4 transition-all duration-300"
            >
              <span className="text-sm tracking-widest uppercase">Get your free assessment</span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              5 Quick Questions
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Instant Results
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              Personalized Insights
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
