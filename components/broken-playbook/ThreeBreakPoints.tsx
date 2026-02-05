"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, Layers } from "lucide-react";

const breakPoints = [
  {
    number: "01",
    title: "Your Website",
    icon: Globe,
    enterprise: "Sites are optimized by conversion specialists running A/B tests monthly. Dedicated teams analyze user behavior, test variations, and iterate constantly.",
    reality: "Your site was built once, maybe updated quarterly, and you're guessing what works. No time for testing. No conversion specialist. Just hoping visitors become leads.",
    result: "1-2% conversion rates when 5-6% is achievable with the right fixes. That's 300+ lost opportunities yearly for a site with 10,000 visitors."
  },
  {
    number: "02",
    title: "Your Sales Process",
    icon: TrendingUp,
    enterprise: "Pipelines have automated stages, dedicated BDRs, and CRM admins monitoring every metric. Sales ops teams ensure nothing falls through cracks.",
    reality: "Your pipeline has manual data entry, inconsistent follow-up, and no one monitoring where deals die. Your sales team is also doing marketing, customer service, and operations.",
    result: "Deals stall at predictable stages but you don't have data on why. Follow-up is reactive, not systematic. Revenue opportunities slip away."
  },
  {
    number: "03",
    title: "Your Tech Stack",
    icon: Layers,
    enterprise: "Integration teams ensure all tools talk to each other. Dedicated admins manage each platform. Budget exists for whatever software is needed.",
    reality: "You have a collection of tools that don't talk to each other, forcing manual data transfer and creating errors. Every new tool adds complexity, not efficiency.",
    result: "Hours wasted weekly on manual data entry. Redundant software costs eating budget. Data living in silos. Errors from manual transfers."
  }
];

export function ThreeBreakPoints() {
  return (
    <section className="py-24 lg:py-32 bg-[#09121A]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-16 text-center leading-tight">
            <span className="font-light text-zinc-400">The Three Places</span>{" "}
            <span className="font-bold text-white">It Breaks Down</span>
          </h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {breakPoints.map((breakPoint, index) => {
              const Icon = breakPoint.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="pb-12 border-b border-white/10 last:border-0"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-highlight/10 border-2 border-highlight">
                      <span className="text-2xl font-bold text-highlight">
                        {breakPoint.number}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-highlight" />
                      <h3 className="text-2xl md:text-3xl font-semibold text-white">
                        {breakPoint.title}
                      </h3>
                    </div>
                  </div>

                  <div className="space-y-6">
                    {/* Enterprise Approach */}
                    <div className="bg-white/5 p-6 rounded-xl">
                      <h4 className="text-lg font-semibold text-white/80 mb-3">
                        Enterprise Approach:
                      </h4>
                      <p className="text-white/60 leading-relaxed">
                        {breakPoint.enterprise}
                      </p>
                    </div>

                    {/* Your Reality */}
                    <div className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r-xl">
                      <h4 className="text-lg font-semibold text-white/80 mb-3">
                        Your Reality:
                      </h4>
                      <p className="text-white/60 leading-relaxed">
                        {breakPoint.reality}
                      </p>
                    </div>

                    {/* The Result */}
                    <div className="bg-highlight/10 border-l-4 border-highlight p-6 rounded-r-xl">
                      <p className="text-white leading-relaxed">
                        <strong className="text-highlight">The Result:</strong>{" "}
                        {breakPoint.result}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Section Closing */}
          <div className="mt-16 max-w-4xl mx-auto text-center">
            <p className="text-xl text-white/70 leading-relaxed">
              The solution isn't "try harder" or "hire more people." It's using the right methodology 
              for your stage: <strong className="text-highlight">Diagnose what's broken, 
              prioritize by impact, fix surgically, optimize continuously.</strong>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
