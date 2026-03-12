"use client";

import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { ArrowRight } from "lucide-react";
import { SafeLink } from "@/components/ui/SafeLink";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

export function Hero() {
  return (
    <section className="relative bg-black min-h-screen flex items-end pb-section-tab lg:pb-section overflow-hidden">
      <AtmosphericBackground variant="hero" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Headline block — unconstrained width so large font sizes don't wrap */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0, 0, 0.3642, 1] }}
          className="mb-12"
        >
          <span className="uppercase tracking-[2px] text-action-primary text-[14px] font-medium mb-10 block">
            Trusted AI Implementation Partner for SMEs
          </span>
          <SplitHeadline
            as="h1"
            leadingText="You've Invested in AI."
            emphasisText="Now Get the ROI."
            breakBeforeEmphasis={true}
            breakClassName="block"
            className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[86px] text-text-inverse"
          />
        </motion.div>

        {/* Sub-content — capped at 640px so paragraph/list/CTA don't stretch wide */}
        <div className="max-w-[640px]">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0, 0, 0.3642, 1] }}
            className="text-lg leading-8 text-slate-400 font-sans font-normal mb-12"
          >
            We turn disconnected AI tools into one revenue system your team can run, measure, and scale.
          </motion.p>

          <ul className="mb-14 space-y-3">
            {[
              "Audit your current stack before buying anything new",
              "Prioritize revenue leaks by impact and implementation speed",
              "Operationalize AI with workflows your team can maintain",
            ].map((item) => (
              <li key={item} className="text-lg leading-8 text-slate-400 font-sans">
                {item}
              </li>
            ))}
          </ul>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0, 0, 0.3642, 1] }}
          >
            <SafeLink
              href="/ai-implementation-assessment"
              className="btn-primary-hero-cta group"
            >
              Get Your Free AI Implementation Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SafeLink>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
