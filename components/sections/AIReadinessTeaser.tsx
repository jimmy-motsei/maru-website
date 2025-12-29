"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { fadeUpVariants } from "@/lib/animations";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

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
            <span className="text-sm font-medium text-accent uppercase tracking-wider">Free AI-Powered Assessment Tool</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="text-4xl md:text-5xl lg:text-7xl text-white leading-tight mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-normal">Is Your Website</span>{" "}
            <span className="font-bold">Optimized for Leads?</span>
          </motion.h2>

          {/* Subheadline */}
          <motion.p
            className="text-lg md:text-xl text-[#B4BCC8] leading-relaxed mb-12 max-w-3xl mx-auto font-normal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Most B2B websites turn only 1-2 out of every 100 visitors into leads. Top performers get 5-6 leads from those same 100 visitors—Take our 5-minute analysis and discover your lead optimization score.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <CTAPrimary href="/lead-generation">
              GET YOUR FREE LEAD ANALYSIS
            </CTAPrimary>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-accent font-normal"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="flex items-center gap-2">
              5-Minute Assessment
            </span>
            <span className="text-accent">•</span>
            <span className="flex items-center gap-2">
              No Credit Card Required
            </span>
            <span className="text-accent">•</span>
            <span className="flex items-center gap-2">
              Free Summary Report
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
