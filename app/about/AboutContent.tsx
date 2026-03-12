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
              <span className="maru-headline-split-strong">Built for the Gap Between</span>
              <br />
              <span className="maru-headline-split-light">AI Investment and AI Results.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 max-w-3xl leading-relaxed">
              We are an AI integration consultancy built specifically for South African SMEs.
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
            <div className="space-y-8">
              <motion.p className="text-xl leading-relaxed text-black font-semibold" variants={fadeUpVariants}>
                Most businesses have now invested in AI tools. CRMs with AI scoring. Marketing platforms with automation. Customer service bots. Proposal generators. The tools are real, the spend is real — but for most SMEs, the revenue impact isn&apos;t.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                That gap between what AI promises and what it actually delivers in your business is exactly where we work.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                Maru Online was founded by Jimmy Motsei, who brings over 20 years of experience in sales, marketing, and business systems. That track record matters here: AI integration fails not because the technology is wrong, but because it&apos;s implemented without understanding how a business actually runs. We bridge that gap — connecting your AI tools to your workflows, your team, and your revenue targets in a way that holds.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                Our approach is structured, not improvised. Every engagement follows the same four-stage path: Audit, Architect, Integrate, Hand Over. We build systems your team can own and run without us. An AI system that depends on its implementor to function is a liability, not an asset.
              </motion.p>

              <motion.p className="text-lg leading-relaxed text-black/80" variants={fadeUpVariants}>
                We work with a deliberately small number of clients at any time so that every integration gets our full attention. POPIA compliance is built into every data touchpoint from day one — not added as an afterthought.
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
                    &ldquo;<span className="maru-headline-split-strong">We solve</span> <span className="maru-headline-split-light">marketing problems using</span> <span className="maru-headline-split-strong">AI intelligence</span><span className="maru-headline-split-light"> — not AI hype.</span>&rdquo;
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
