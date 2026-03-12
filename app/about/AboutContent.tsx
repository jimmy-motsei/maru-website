"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

export default function AboutContent() {
  return (
    <main className="bg-dark">
      {/* Hero Banner - Dark with Atmospheric Background */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden bg-black">
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-[112px] sm:pt-[128px] md:pt-[152px] lg:pt-[168px] pb-[clamp(80px,12vh,140px)]">
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-12 md:mb-16"
          >
            <ol className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[2px] text-white/60">
              <li className="flex items-center gap-2">
                <Link href="/" className="hover:text-white transition-colors">
                  Homepage
                </Link>
                <span>/</span>
              </li>
              <li className="text-white">About</li>
            </ol>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mb-12"
          >
            <h1 className="maru-headline-split text-[32px] sm:text-[38px] md:text-[44px] lg:text-[86px] leading-[0.95] text-white mb-10 tracking-[-0.02em]">
              <span className="maru-headline-split-strong">AI Revenue Systems.</span>
              <br />
              <span className="maru-headline-split-light">Built for SMEs.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 max-w-3xl leading-relaxed">
              We implement AI infrastructure for African SMEs — replacing disconnected tools with revenue systems your team can run, measure, and scale.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <Link href="/contact" className="btn-primary-hero-cta group">
              Speak to the Team
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href="#about-content" className="btn-secondary-hero-cta group">
              Our Story
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Content Section - Light Background */}
      <section id="about-content" className="bg-white py-section-tab lg:py-section text-black">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="max-w-4xl mx-auto"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Single Column: Text Content */}
            <div className="space-y-8">
              <motion.p className="text-xl leading-relaxed text-black font-semibold" variants={fadeUpVariants}>
                Maru is an AI implementation consultancy — not a marketing agency, not an AI reseller.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                We design and build the systems that connect your AI tools into a single, measurable revenue engine. Our work starts with an honest audit of what you already have — and ends with infrastructure your team can actually run.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                Maru was founded by Jimmy Motsei — a marketing and revenue systems practitioner with 20+ years of experience working with SMEs across South Africa. What started as revenue consulting evolved into AI implementation as the tools matured enough to deliver what strategy alone couldn&apos;t.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                Today, Maru operates as a focused team of specialists — combining AI implementation expertise with deep SME market knowledge. We work closely with a select number of clients at a time, so the work is always done properly.
              </motion.p>

              <motion.ul className="space-y-3 text-lg leading-relaxed text-black/80 pl-4 border-l-2 border-[var(--color-brand-accent)]" variants={fadeUpVariants}>
                <li>We audit your current stack before recommending anything new.</li>
                <li>We design revenue systems, not standalone automations.</li>
                <li>We implement with POPIA-aware data guardrails.</li>
                <li>We measure business outcomes, not tool adoption.</li>
              </motion.ul>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                If you&apos;re buying AI tools and not getting ROI — the problem isn&apos;t the tools.
              </motion.p>

              {/* Quote Block */}
              <motion.div
                className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6 rounded-3xl bg-card-dark border border-white/10 p-8 md:p-10"
                variants={fadeUpVariants}
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-brand-accent)]/50">
                  <Image
                    src="/images/brand/founder.jpg"
                    alt="Jimmy Motsei, Founder of Maru Online"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl md:text-2xl leading-snug text-white mb-3 maru-headline-split">
                    &ldquo;<span className="maru-headline-split-strong">We solve</span> <span className="maru-headline-split-light">marketing problems using</span> <span className="maru-headline-split-strong">AI intelligence</span><span className="maru-headline-split-light">—not AI hype.</span>&rdquo;
                  </p>
                  <p className="text-sm text-white/70 font-medium">
                    Jimmy Motsei — Founder, Maru Online
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
