"use client";

import { motion } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";
import Link from "next/link";

export function WhoThisIsFor() {
  const isFor = [
    "You already generate leads or enquiries",
    "You’re investing in marketing or tools but ROI is unclear",
    "You have a CRM that doesn’t guide action",
    "You want growth without adding headcount"
  ];

  const isNotFor = [
    "You want quick campaigns or short-term boosts",
    "You don’t yet have consistent leads",
    "You want execution without internal involvement"
  ];

  return (
    <section className="bg-[#161616] py-24 lg:py-40">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-h2 font-medium text-white mb-14 leading-[1.2]">
              Built for <span className="font-thin">Businesses Ready to</span> <br className="hidden md:block" />
              <span>Turn Activity into </span><span className="text-white">Revenue</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-px bg-zinc-800 border border-zinc-800 rounded-3xl overflow-hidden">
            {/* THIS IS FOR YOU */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card-dark p-10 lg:p-14"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-full bg-warm-amber/10 flex items-center justify-center">
                  <Plus className="w-4 h-4 text-warm-amber" />
                </div>
                <h3 className="text-white font-bold uppercase tracking-widest text-sm">This is for you if...</h3>
              </div>
              
              <ul className="space-y-6">
                {isFor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-warm-amber font-mono text-xs mt-1">/</span>
                    <p className="text-zinc-300 font-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* THIS IS NOT FOR YOU */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-zinc-900/10 p-10 lg:p-14"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center">
                  <Minus className="w-4 h-4 text-zinc-500" />
                </div>
                <h3 className="text-zinc-500 font-bold uppercase tracking-widest text-sm">This will frustrate you if...</h3>
              </div>
              
              <ul className="space-y-6">
                {isNotFor.map((item, i) => (
                  <li key={i} className="flex gap-4 items-start opacity-70">
                    <span className="text-zinc-600 font-mono text-xs mt-1">/</span>
                    <p className="text-zinc-400 font-light leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-zinc-500 mb-6 italic">
              If you’re unsure where you fall, the Website Lead Grader will make that clear.
            </p>
            <Link 
              href="/assessments/lead-score"
              className="inline-flex items-center gap-2 text-white hover:text-highlight transition-colors duration-300 group"
            >
              Take the check
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
