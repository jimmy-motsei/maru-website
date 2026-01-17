"use client";

import { motion } from "framer-motion";
import { Search, Target, Wrench, Rocket } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Diagnose Before Prescribing",
    icon: Search,
    description: "We don't pitch solutions in the first meeting. We analyze your data, identify specific problems, and show you the findings. You decide what to fix.",
    whyDifferent: "Most agencies quote you based on 30 minutes of discovery. We think you deserve to see the problems first."
  },
  {
    number: "02",
    title: "Prioritize by Revenue Impact",
    icon: Target,
    description: "Not every problem is worth fixing right now. We rank issues by: potential revenue increase, time to implement, cost to fix.",
    whyDifferent: "We're optimizing for your ROI, not padding our retainer."
  },
  {
    number: "03",
    title: "Surgical Fixes, Not Overhauls",
    icon: Wrench,
    description: "We fix what's broken without rebuilding everything. Website converting poorly? Optimize specific pages. Pipeline stalling? Automate specific stages.",
    whyDifferent: "Rip-and-replace is expensive and risky. Surgical fixes show results faster and cost less."
  },
  {
    number: "04",
    title: "Build for Your Stage",
    icon: Rocket,
    description: "We implement solutions sized for SME budgets and SME teams. No complex systems that require dedicated admins. No tools that need 6 months of \"getting used to.\"",
    whyDifferent: "We've actually worked at your scale. We know what works and what's overkill."
  }
];

export function SMEMethodology() {
  return (
    <section className="py-24 lg:py-32 bg-[#050505]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-16 text-center leading-tight">
            <span className="font-light text-zinc-400">The SME-Specific</span>{" "}
            <span className="font-bold text-white">Methodology</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-[var(--color-cyan-primary)]/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-[var(--color-cyan-primary)]/10 border-2 border-[var(--color-cyan-primary)]">
                      <span className="text-xl font-bold text-[var(--color-cyan-primary)]">
                        {principle.number}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-[var(--color-cyan-primary)]" />
                      <h3 className="text-2xl font-semibold text-white">
                        {principle.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-white/70 leading-relaxed mb-4 ml-[72px]">
                    {principle.description}
                  </p>

                  <div className="bg-[var(--color-cyan-primary)]/10 border-l-4 border-[var(--color-cyan-primary)] p-4 rounded-r-xl ml-[72px]">
                    <p className="text-white/80 text-sm">
                      <strong className="text-[var(--color-cyan-primary)]">Why It's Different:</strong>{" "}
                      {principle.whyDifferent}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
