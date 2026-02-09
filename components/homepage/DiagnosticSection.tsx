"use client";

import { motion } from "framer-motion";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { Check, Info } from "lucide-react";

export function DiagnosticSection() {
  return (
    <section id="diagnostics" className="bg-[#161616] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-h2 font-medium text-white mb-14 leading-[1.2]"
            >
              Is Your <span className="text-cyan-primary">Revenue System</span> <br className="hidden md:block" />
              <span className="font-thin">Actually Working?</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Qualifier Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 bg-zinc-900/40 border border-zinc-800 p-8 rounded-2xl"
            >
              <div className="flex gap-4 mb-6">
                <Info className="w-6 h-6 text-[#3DD6D0] flex-shrink-0" />
                <h3 className="text-white font-bold uppercase tracking-wider text-sm mt-1">Qualification Check</h3>
              </div>
              <p className="text-zinc-400 leading-relaxed mb-6">
                This diagnostic is designed for businesses with existing traffic, leads, or sales activity.
              </p>
              <p className="text-zinc-500 italic text-sm">
                If you’re still validating an idea or building your first funnel, this approach will feel heavy.
              </p>
            </motion.div>

            {/* Diagnostic Details */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-7 space-y-12"
            >
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[#3DD6D0] font-bold text-xs uppercase tracking-[0.2em] mb-4">What we assess</h4>
                  <ul className="space-y-3">
                    {["Revenue potential", "Pipeline maturity", "System friction"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-light">
                        <Check className="w-4 h-4 text-[#3DD6D0]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-[#3DD6D0] font-bold text-xs uppercase tracking-[0.2em] mb-4">What you receive</h4>
                  <ul className="space-y-3">
                    {["Estimated revenue leakage range", "Pipeline maturity level", "Clear next-step guidance"].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-white font-light">
                        <Check className="w-4 h-4 text-[#3DD6D0]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8 flex flex-col items-center md:items-start space-y-4">
                <CTAPrimary
                  href="/assessments/lead-score"
                  className="w-full md:w-auto"
                >
                  Run the Website Lead Grader
                </CTAPrimary>
                <p className="text-zinc-500 text-xs tracking-wide">
                  Takes 3–5 minutes · No sales call required
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
