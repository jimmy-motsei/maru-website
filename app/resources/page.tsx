import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, FileCheck, Wrench, Clock } from "lucide-react";
import { MaruBriefForm } from "./MaruBriefForm";

export const metadata: Metadata = {
  title: "Resources for South African SMEs Navigating AI | Maru Online",
  description:
    "Practical guides, checklists, and tools for South African SMEs implementing AI — no vendor fluff.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Hero */}
      <section className="pt-[112px] sm:pt-[128px] md:pt-[152px] lg:pt-[168px] pb-section-tab lg:pb-section border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="uppercase tracking-[2px] text-action-primary text-[12px] font-medium mb-6 block">
            Free Tools &amp; Guides
          </span>
          <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[72px] leading-[1.02] text-white mb-6 tracking-[-0.02em]">
            Resources for South African SMEs
            <br className="hidden lg:block" /> Navigating AI
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Practical guides, checklists, and tools — no vendor fluff.
          </p>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="py-section-tab lg:py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Card 1 — POPIA Checklist */}
            <Link
              href="/resources/popia-ai-checklist"
              className="group flex flex-col rounded-2xl border border-white/10 bg-card-dark p-8 hover:border-action-primary/50 transition-colors duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-xl border border-white/10 items-center justify-center mb-6 text-action-primary group-hover:border-action-primary/50 transition-colors">
                <FileCheck size={20} />
              </span>
              <h2 className="text-[22px] leading-tight text-white font-bold mb-3">
                POPIA AI Compliance Checklist
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                A plain-language checklist for SA SMEs using AI tools.
              </p>
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-action-primary">
                View Checklist
                <span className="w-8 h-8 rounded-full bg-action-primary/10 border border-action-primary/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Card 2 — AI Assessment Tools */}
            <Link
              href="/ai-implementation-assessment"
              className="group flex flex-col rounded-2xl border border-white/10 bg-card-dark p-8 hover:border-action-primary/50 transition-colors duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-xl border border-white/10 items-center justify-center mb-6 text-action-primary group-hover:border-action-primary/50 transition-colors">
                <Wrench size={20} />
              </span>
              <h2 className="text-[22px] leading-tight text-white font-bold mb-3">
                Free AI Assessment Tools
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-8 flex-grow">
                Four tools to diagnose your AI integration readiness, pipeline health, lead quality, and tech stack.
              </p>
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-action-primary">
                Use the Tools
                <span className="w-8 h-8 rounded-full bg-action-primary/10 border border-action-primary/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>

            {/* Card 3 — The Maru Brief (Coming Soon) */}
            <div className="flex flex-col rounded-2xl border border-dashed border-white/15 bg-card-dark/50 p-8 opacity-70">
              <div className="flex items-center gap-3 mb-6">
                <span className="inline-flex w-10 h-10 rounded-xl border border-white/10 items-center justify-center text-white/40">
                  <Clock size={20} />
                </span>
                <span className="text-[10px] uppercase tracking-[2px] font-semibold bg-white/10 text-white/60 px-2 py-1 rounded">
                  Coming Soon
                </span>
              </div>
              <h2 className="text-[22px] leading-tight text-white font-bold mb-3">
                The Maru Brief
              </h2>
              <p className="text-white/50 text-sm leading-relaxed flex-grow">
                A fortnightly AI revenue insight for South African SMEs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Email Capture — The Maru Brief */}
      <section className="py-section-tab lg:py-section border-t border-white/10 bg-card-dark/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] leading-[1.1] text-white font-bold mb-4">
              Get The Maru Brief
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              A fortnightly email with one practical AI revenue insight for South African SMEs. No fluff, no sales pitch.
            </p>
            <MaruBriefForm />
            <p className="mt-5 text-xs text-white/35">
              Handled in compliance with POPIA. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
