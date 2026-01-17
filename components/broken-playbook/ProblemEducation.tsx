"use client";

import { motion } from "framer-motion";
import { Building2, Users } from "lucide-react";

export function ProblemEducation() {
  return (
    <section id="why-it-matters" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#050505] mb-12 text-center leading-tight">
            <span className="font-light text-zinc-500">Why Enterprise Marketing</span>{" "}
            <span className="font-bold text-[#050505]">Doesn't Work for SMEs</span>
          </h2>

          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-medium text-[#050505] mb-8">
              Different Scale, Different Problems
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Enterprise Column */}
              <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-zinc-500" />
                  <h4 className="text-xl font-semibold text-zinc-700">
                    Enterprise playbooks assume you have:
                  </h4>
                </div>
                <ul className="space-y-3 text-zinc-600">
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-1">•</span>
                    <span>Dedicated marketing teams (5-20+ people)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-1">•</span>
                    <span>Complex tech stacks with dedicated admins</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-1">•</span>
                    <span>Budgets for testing and optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-zinc-400 mt-1">•</span>
                    <span>Separate sales and marketing functions</span>
                  </li>
                </ul>
              </div>

              {/* SME Column */}
              <div className="bg-cyan-50 p-8 rounded-2xl border-2 border-[var(--color-cyan-primary)]">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-[var(--color-cyan-primary)]" />
                  <h4 className="text-xl font-semibold text-[#050505]">
                    You actually have:
                  </h4>
                </div>
                <ul className="space-y-3 text-zinc-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-cyan-primary)] mt-1">•</span>
                    <span>One person (or small team) wearing multiple hats</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-cyan-primary)] mt-1">•</span>
                    <span>Tools that need to "just work" without constant maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-cyan-primary)] mt-1">•</span>
                    <span>Budgets that require ROI in months, not years</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[var(--color-cyan-primary)] mt-1">•</span>
                    <span>Marketing and sales tightly coupled (often the same person)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Gap */}
            <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl">
              <p className="text-lg text-zinc-800 leading-relaxed">
                <strong className="text-amber-900">The Gap:</strong> When you try to implement 
                enterprise strategies (complex automation, multi-tool stacks, lengthy nurture sequences) 
                without enterprise resources, things break.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
