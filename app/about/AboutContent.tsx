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
            <h1 className="maru-headline-split text-[44px] sm:text-[52px] md:text-[78px] lg:text-[92px] xl:text-[106px] leading-[0.95] text-white mb-10 tracking-[-0.02em]">
              <span className="maru-headline-split-strong">Built </span>
              <span className="maru-headline-split-light">Different.</span>
              <br />
              <span className="maru-headline-split-strong">Built </span>
              <span className="maru-headline-split-light">for SMEs.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/70 max-w-3xl leading-relaxed">
              We help growth-stage businesses turn fragmented marketing systems into clear, revenue-driving operations.
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
      <section id="about-content" className="bg-white py-32 text-black">
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
              <motion.p 
                className="text-xl leading-relaxed text-black font-semibold"
                variants={fadeUpVariants}
              >
                Our founder's marketing career revealed a pattern: SMEs investing in technology that made their problems worse, not better.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                Empty CRMs. Generic automation. Websites with traffic but no conversions.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                It wasn't a skills problem or a budget problem. It was a methodology gap. The marketing playbooks being sold to SMEs were designed for enterprises—different scale, different resources, different constraints.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                The solution wasn't more tools. It was understanding how these systems actually function for businesses at this stage.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                So we rebuilt from the ground up. Learned web development and systems architecture. Mastered the technical layer most agencies outsource. Studied where marketing technology breaks down—and how to fix it without enterprise complexity or enterprise pricing.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                Today, we use AI to diagnose faster and implement more precisely. But the differentiation comes from understanding SME marketing at a systems level—what actually works, what creates friction, and how to bridge the gap.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                We started with lead generation because that's where revenue bleeds first. But the mission is broader: solving marketing problems that keep good businesses stuck.
              </motion.p>

              {/* Quote Block - Relocated to end */}
              <motion.div 
                className="mt-16 flex flex-col sm:flex-row sm:items-center gap-6 rounded-3xl bg-card-dark border border-white/10 p-8 md:p-10"
                variants={fadeUpVariants}
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-[var(--color-brand-accent)]/50">
                  <Image 
                    src="/images/brand/founder.jpg" 
                    alt="Founder" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-xl md:text-2xl leading-snug text-white mb-3 maru-headline-split">
                    "<span className="maru-headline-split-strong">We solve</span> <span className="maru-headline-split-light">marketing problems with</span> <span className="maru-headline-split-strong">AI precision</span><span className="maru-headline-split-light">, not AI hype.</span>"
                  </p>
                  <p className="text-sm text-white/70 font-medium">
                    Founder - Jimmy Motsei
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
