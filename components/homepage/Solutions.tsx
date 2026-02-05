"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    title: "Revenue Signal & Intent Architecture",
    problem: "You're treating every lead the same, wasting time on low-intent looky-loos while high-intent buyers wait.",
    description: "We implement advanced tracking and scoring systems that distinguish between general interest and immediate buying intent.",
    benefit: "Focus your top talent only on the opportunities most likely to close."
  },
  {
    title: "Pipeline & Automation Infrastructure",
    problem: "Sales follow-ups are leaky, manual, and inconsistent across different team members.",
    description: "We build the digital scaffolding that ensures every prospect is nurtured, qualified, and moved forward automatically.",
    benefit: "Zero lead leakage and a consistent, professional experience for every prospect."
  },
  {
    title: "Revenue Visibility & System Control",
    problem: "You know you're making money, but you can't see precisely where you're losing it.",
    description: "We create unified dashboards that connect your marketing data to actual sales outcomes and revenue flow.",
    benefit: "Make allocation decisions based on system data, not agency reports."
  }
];

export function Solutions() {
  return (
    <section className="bg-zinc-900/20 py-24 lg:py-32 border-y border-zinc-zero/5">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-h2 font-medium text-white mb-14 leading-[1.2]">
              How We <span className="font-thin">Strengthen</span> <br className="hidden md:block" />
              <span>Revenue Systems</span>
            </h2>
            <p className="text-xl text-zinc-500 max-w-2xl mx-auto italic">
              These aren’t services. They’re system-level interventions applied only when diagnostics justify them.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/40 border border-zinc-800/50 p-10 rounded-3xl flex flex-col h-full hover:border-highlight/30 transition-colors duration-500"
            >
              <div className="mb-8">
                <div className="text-highlight font-mono text-xs mb-6 opacity-60">SYSTEM_INTERVENTION_{index + 1}</div>
                <h3 className="text-2xl text-white font-medium mb-6 leading-tight">{item.title}</h3>
                
                <div className="space-y-6">
                  <div>
                    <span className="text-zinc-600 uppercase text-[10px] font-bold tracking-widest block mb-2">The Problem</span>
                    <p className="text-zinc-400 text-sm leading-relaxed italic">{item.problem}</p>
                  </div>
                  
                  <div>
                    <span className="text-zinc-600 uppercase text-[10px] font-bold tracking-widest block mb-2">The Intervention</span>
                    <p className="text-zinc-300 text-[15px] leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-zinc-800">
                <span className="text-highlight font-medium text-sm inline-flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-highlight" />
                  {item.benefit}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
