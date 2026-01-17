"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

export function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-cyan-50">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#050505] mb-6 leading-tight">
            <span className="font-light text-zinc-500">Find Out Where the Enterprise Playbook</span>{" "}
            <span className="font-bold text-[#050505]">Is Failing You</span>
          </h2>

          <p className="text-xl text-zinc-600 mb-10 leading-relaxed">
            Free diagnostics built for SME context. See your specific problems. Decide what to fix.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <CTAPrimary
              href="https://leads.maruonline.com"
              className="shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              Start Free Diagnostic
            </CTAPrimary>

            <a
              href="/services"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#050505] font-semibold uppercase text-sm rounded-full hover:bg-zinc-50 transition-all duration-300 border-2 border-zinc-200 hover:border-[var(--color-cyan-primary)]"
            >
              See Our Methodology
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-zinc-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No credit card required</span>
            </div>
            <div className="hidden sm:block text-zinc-300">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>No sales pitch</span>
            </div>
            <div className="hidden sm:block text-zinc-300">•</div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Get insights whether you hire us or not</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
