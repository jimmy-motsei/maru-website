"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ServiceNeedHelpCTA() {
  return (
    <section className="pt-12 md:pt-16 pb-20 md:pb-24 bg-surface-inverse">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-card-dark border border-white/10 px-5 sm:px-6 py-10 sm:py-12 md:px-12 text-center">
          <h3 className="text-[30px] sm:text-[36px] md:text-[52px] leading-[1.1] text-white maru-headline-split-strong mb-5">
            Not sure which service you need?
          </h3>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto mb-9">
            We'll assess your current state and recommend the right starting point.
          </p>
          <Link href="/ai-implementation-assessment" className="btn-primary-hero-cta group">
            Get Your Free AI Implementation Audit
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
