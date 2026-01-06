'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { AtmosphericBackground } from '@/components/ui/AtmosphericBackground';
import { CTAPrimary } from '@/components/ui/CTAPrimary';

export default function HeroSection() {

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' as const }
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white">
      <AtmosphericBackground variant="hero" />

      {/* Content Layer */}
      <div className="container relative z-30 mx-auto min-h-screen px-6 md:px-12 lg:px-20">
        {/* Custom Header for Landing Page */}
        <div className="absolute top-0 left-0 right-0 z-50 p-6 md:px-12 lg:px-20">
            <Link href="/" className="text-white font-bold text-3xl tracking-tight hover:text-[#22d3ee] transition-colors">M.</Link>
        </div>

        <div className="max-w-5xl pt-[clamp(180px,20vh,240px)] pb-[clamp(80px,12vh,140px)]">
          <div className="backdrop-blur-[1px] rounded-3xl p-4 md:p-0">
            <div className="flex flex-col gap-8 md:gap-10">
              {/* Badge */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] text-sm font-medium rounded-full w-fit tracking-wide uppercase"
              >
                <Sparkles size={14} /> FREE AI-POWERED ASSESSMENT TOOL
              </motion.div>

              {/* Headline */}
              <motion.h1
                className="tracking-tight leading-[0.95] text-[27px] md:text-[40px] lg:text-[54px] xl:text-[61px] 2xl:text-[67px]"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
              >
                <span className="font-extralight text-zinc-500">Is your Marketing</span><br />
                <span className="font-bold text-white">Ai-Optimized?</span>
              </motion.h1>

              {/* Updated Paragraph */}
              <motion.div
                className="max-w-3xl"
                initial="hidden"
                animate="visible"
                variants={{
                  ...fadeUpVariants,
                  visible: { ...fadeUpVariants.visible, transition: { duration: 0.8, delay: 0.15, ease: 'easeOut' as const } }
                }}
              >
                <p className="text-[18px] md:text-[22px] lg:text-[24px] font-light text-zinc-400 leading-[1.5]">
                  Stop guessing and start scaling. Our AI-driven analysis audits your entire marketing stack to uncover hidden revenue leaks, streamline operations, and identify the exact AI tools that will accelerate your growth.
                </p>
              </motion.div>

              {/* CTA Section */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  ...fadeUpVariants,
                  visible: { ...fadeUpVariants.visible, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' as const } }
                }}
                className="flex flex-col items-start gap-4 pt-4"
              >
                <CTAPrimary href="#analyze-form" className="!px-8 !py-6 !text-lg bg-[#22d3ee] hover:bg-[#22d3ee]/90 text-black border-none">
                  GET YOUR FREE LEAD ANALYSIS
                </CTAPrimary>
                <p className="text-zinc-500 text-sm ml-2">
                  Takes less than 5 minutes
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
