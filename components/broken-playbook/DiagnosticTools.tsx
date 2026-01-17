"use client";

import { motion } from "framer-motion";
import { Globe, TrendingUp, Layers, Clock } from "lucide-react";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

const diagnosticTools = [
  {
    number: "01",
    title: "Website Conversion Diagnostic",
    icon: Globe,
    analyzes: "Page speed, value proposition clarity, lead capture design, mobile experience, call-to-action effectiveness.",
    whyMatters: "Most SME websites are built for \"looking good,\" not \"generating leads.\" We show you the gap between design and conversion performance.",
    time: "Takes 2 minutes",
    href: "https://leads.maruonline.com",
    cta: "Diagnose My Website"
  },
  {
    number: "02",
    title: "Pipeline Performance Diagnostic",
    icon: TrendingUp,
    analyzes: "Stage conversion rates, average time in each stage, follow-up consistency, manual vs. automated touchpoints.",
    whyMatters: "You can't fix what you can't measure. We show you exactly where deals die and why—with data, not guesses.",
    time: "Takes 5 minutes",
    href: "https://pipeline.maruonline.com",
    cta: "Diagnose My Pipeline"
  },
  {
    number: "03",
    title: "Tech Stack Efficiency Diagnostic",
    icon: Layers,
    analyzes: "Tool utilization rates, integration gaps, cost vs. value, redundant functionality across your software stack.",
    whyMatters: "Most SMEs are paying for 30-40% more software than they need and using each tool at 20-30% capacity. We show you where to cut and where to integrate.",
    time: "Takes 5 minutes",
    href: "/assessments/tech-audit",
    cta: "Diagnose My Stack"
  }
];

export function DiagnosticTools() {
  return (
    <section id="diagnostics" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#050505] mb-6 text-center leading-tight">
            <span className="font-light text-zinc-500">Diagnose Where the Playbook</span>{" "}
            <span className="font-bold text-[#050505]">Breaks for Your Business</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-4xl mx-auto mb-16 text-center leading-relaxed">
            Our diagnostics are built specifically for SMEs. We don't compare you to enterprises—we 
            show you what's broken in your specific context and what you can actually fix with your resources.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {diagnosticTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border-2 border-zinc-200 rounded-2xl p-8 hover:border-[var(--color-cyan-primary)] hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--color-cyan-primary)]/10 border-2 border-[var(--color-cyan-primary)] mb-4">
                    <span className="text-lg font-bold text-[var(--color-cyan-primary)]">
                      {tool.number}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-6">
                    <Icon className="w-6 h-6 text-[var(--color-cyan-primary)]" />
                    <h3 className="text-xl font-semibold text-[#050505]">
                      {tool.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-zinc-700 mb-2">
                        What It Analyzes:
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {tool.analyzes}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-zinc-700 mb-2">
                        Why It Matters:
                      </h4>
                      <p className="text-sm text-zinc-600 leading-relaxed">
                        {tool.whyMatters}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-zinc-500">
                      <Clock className="w-4 h-4" />
                      <span>{tool.time}</span>
                    </div>
                  </div>

                  <CTAPrimary
                    href={tool.href}
                    className="w-full shadow-md hover:shadow-lg"
                  >
                    {tool.cta}
                  </CTAPrimary>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="max-w-2xl mx-auto text-center bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
            <p className="text-lg text-zinc-700 mb-4">
              Not sure which diagnostic to take first?
            </p>
            <CTAPrimary
              href="https://leads.maruonline.com"
              className="mb-3 shadow-md hover:shadow-lg"
            >
              Start With the Website Diagnostic
            </CTAPrimary>
            <p className="text-sm text-zinc-500">
              It's where most SMEs discover their biggest revenue leaks.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
