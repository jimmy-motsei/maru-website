"use client";

import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { HeroDashboard } from "@/components/homepage/HeroDashboard";
import { ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/ui/SafeLink";

interface HeroProps {
  onLearnMore?: () => void;
}

export function Hero({ onLearnMore }: HeroProps) {
  return (
    <section className="relative bg-deep-navy min-h-screen flex items-center py-section overflow-hidden">
      <AtmosphericBackground variant="hero" />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="text-center lg:text-left relative order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0, 0, 0.3642, 1] }}
            >
              <span className="uppercase tracking-[2px] text-electric-cyan text-[12px] font-bold mb-6 block">
                AI Implementation Partner for South African Mid-Market
              </span>
              <h1 className="text-[34px] md:text-[58px] lg:text-[86px] leading-[1.2] font-thin text-white mb-8 font-sans">
                You've Invested in AI. <br />
                <span className="font-bold text-electric-cyan">Now Get the ROI.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0, 0, 0.3642, 1] }}
              className="text-[16px] md:text-[18px] text-white/70 font-light mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Most businesses have adopted AI marketing tools, but less than half see real revenue impact. We operationalize your investment with proven playbooks—without losing the human touch.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0, 0, 0.3642, 1] }}
              className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
            >
              {/* Primary CTA (Amber) */}
              <SafeLink
                href="/assessments/lead-score"
                className="w-full sm:w-auto inline-flex items-center justify-center bg-warm-amber hover:bg-orange-600 text-deep-navy font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                Get Your Free AI Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </SafeLink>

              {/* Secondary CTA (Cyan Border) */}
              <button
                onClick={onLearnMore}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent border border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10 font-medium text-base px-8 py-4 rounded-lg transition-all duration-300"
              >
                See Implementation Playbook
              </button>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Visual Dashboard */}
          <div className="relative order-1 lg:order-2 mb-10 lg:mb-0">
            <HeroDashboard />
          </div>

        </div>
      </div>
      
    </section>
  );
}
