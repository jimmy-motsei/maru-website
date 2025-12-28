'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { AtmosphericBackground } from '@/components/ui/AtmosphericBackground';

export default function HeroSection() {
  const scrollToResults = () => {
    const resultsSection = document.getElementById('real-results');
    if (resultsSection) {
      resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' }
    }
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white">
      <AtmosphericBackground variant="hero" />

      {/* Content Layer */}
      <div className="container relative z-30 mx-auto min-h-screen px-6 md:px-12 lg:px-20">
        <div className="max-w-5xl pt-[clamp(180px,20vh,240px)] pb-[clamp(80px,12vh,140px)]">
          <div className="backdrop-blur-[1px] rounded-3xl p-4 md:p-0">
            <div className="flex flex-col gap-6 md:gap-8">
              {/* Badge */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
                className="inline-flex items-center px-4 py-2 bg-[#22d3ee]/10 border border-[#22d3ee]/30 text-[#22d3ee] text-sm font-medium rounded-full w-fit"
              >
                🔍 FREE AI-POWERED TOOL
              </motion.div>

              {/* Headline - Following MARU Pattern */}
              <motion.h1
                className="tracking-tight leading-[0.95] text-[27px] md:text-[40px] lg:text-[54px] xl:text-[61px] 2xl:text-[67px]"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
              >
                <span className="font-extralight text-zinc-500">Is Your Website</span>{" "}
                <span className="font-medium text-[#ef4444]">Leaking Leads</span>
                <span className="font-medium text-white">?</span>
              </motion.h1>

              {/* Subheadline with Contrast Stats */}
              <motion.div
                className="flex flex-col gap-3"
                initial="hidden"
                animate="visible"
                variants={{
                  ...fadeUpVariants,
                  visible: { ...fadeUpVariants.visible, transition: { duration: 0.8, delay: 0.15, ease: 'easeOut' } }
                }}
              >
                <p className="text-[18px] md:text-[22px] lg:text-[24px] font-light text-zinc-400 leading-[1.4]">
                  Most B2B websites convert at only{' '}
                  <span className="text-[#ef4444] font-medium">1-2%</span>.
                </p>
                <p className="text-[18px] md:text-[22px] lg:text-[24px] font-light text-zinc-400 leading-[1.4]">
                  But the top performers?{' '}
                  <span className="text-[#22c55e] font-medium">They're hitting 5-6%</span>.
                </p>
              </motion.div>

              {/* Question Hook */}
              <motion.p
                className="text-[22px] md:text-[28px] lg:text-[32px] font-medium text-white leading-[1.3] mt-4"
                initial="hidden"
                animate="visible"
                variants={{
                  ...fadeUpVariants,
                  visible: { ...fadeUpVariants.visible, transition: { duration: 0.8, delay: 0.3, ease: 'easeOut' } }
                }}
              >
                What's <span className="text-[#22d3ee]">your</span> number?
              </motion.p>

              {/* Scroll Indicator - NO CTA Button */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  ...fadeUpVariants,
                  visible: { ...fadeUpVariants.visible, transition: { duration: 0.8, delay: 0.5, ease: 'easeOut' } }
                }}
                className="pt-12 flex flex-col items-start cursor-pointer group"
                onClick={scrollToResults}
              >
                <p className="text-zinc-500 mb-3 group-hover:text-[#22d3ee] transition-colors flex items-center gap-2">
                  <span>↓</span> See what others discovered
                </p>
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-10 h-10 rounded-full border-2 border-zinc-700 group-hover:border-[#22d3ee] flex items-center justify-center transition-colors"
                >
                  <ChevronDown className="w-5 h-5 text-zinc-500 group-hover:text-[#22d3ee] transition-colors" />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
