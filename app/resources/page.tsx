import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, FileCheck, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Resources | Maru Online',
  description:
    'Practical tools, checklists, and guides for South African SMEs implementing AI.',
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-dark">
      {/* Header */}
      <section className="py-section-tab lg:py-section border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="uppercase tracking-[2px] text-action-primary text-[12px] font-medium mb-6 block">
            Free Tools & Guides
          </span>
          <h1 className="text-[32px] sm:text-[38px] md:text-[44px] lg:text-[86px] leading-[1.05] text-white mb-6">
            Resources
          </h1>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl font-light leading-relaxed">
            Practical tools, checklists, and guides for South African SMEs
            implementing AI—no fluff, no vendor spin.
          </p>
        </div>
      </section>

      {/* Available Resources */}
      <section className="py-section-tab lg:py-section">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[11px] uppercase tracking-[2px] text-white/40 mb-8">
            Available Now
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* POPIA Checklist Card */}
            <Link
              href="/resources/popia-ai-checklist"
              className="group block rounded-2xl border border-white/10 bg-card-dark p-8 hover:border-action-primary/50 transition-colors duration-300"
            >
              <span className="inline-flex w-10 h-10 rounded-xl border border-white/10 items-center justify-center mb-6 text-action-primary group-hover:border-action-primary/50 transition-colors">
                <FileCheck size={20} />
              </span>
              <h3 className="text-[22px] leading-tight text-white font-bold mb-3">
                Free POPIA-Compliant AI Checklist
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Ensure your AI implementations comply with South African POPIA
                regulations. Avoid R10 million penalties and build customer
                trust.
              </p>
              <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[2px] font-semibold text-action-primary">
                Get the Checklist
                <span className="w-8 h-8 rounded-full bg-action-primary/10 border border-action-primary/30 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 md:py-20 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[11px] uppercase tracking-[2px] text-white/40 mb-8">
            Coming Soon
          </h2>

          <div className="rounded-2xl border border-dashed border-white/15 bg-card-dark/50 p-10 md:p-14 flex flex-col md:flex-row md:items-center gap-8">
            <span className="inline-flex w-12 h-12 flex-shrink-0 rounded-xl border border-white/10 items-center justify-center text-white/40">
              <Clock size={22} />
            </span>
            <div>
              <h3 className="text-[22px] leading-tight text-white font-bold mb-2">
                The Maru Brief
              </h3>
              <p className="text-white/60 text-base font-light leading-relaxed max-w-xl">
                Fortnightly AI insights for SA SMEs — practical implementation
                lessons, tool reviews, and revenue system frameworks. No
                jargon. No hype.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
