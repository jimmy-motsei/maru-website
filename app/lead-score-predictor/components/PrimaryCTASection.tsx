'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import EmailCaptureModal from './EmailCaptureModal';

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

export default function PrimaryCTASection() {
  const [showModal, setShowModal] = useState(false);

  const frictionReducers = [
    "No credit card required",
    "Results in 2 minutes",
    "Free PDF report included"
  ];

  return (
    <section className="bg-white py-12 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Question-Format Headline - MARU Pattern */}
          <motion.h2
            className="font-bold mb-6 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-black/50">Ready to</span> See Your Score?
          </motion.h2>
          
          {/* Social Proof Reinforcement */}
          <motion.p
            className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Join <span className="text-[#1a9aa5] font-semibold">1,247+</span> B2B companies who've already 
            discovered their lead generation potential
          </motion.p>

          {/* Single, Large CTA Button - MARU Style */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mb-10"
          >
            <button
              onClick={() => setShowModal(true)}
              className="
                group bg-[#22d3ee] text-black hover:bg-[#5cc5d1]
                transition-all duration-300 rounded-full
                pl-8 pr-3 py-4
                flex items-center justify-between gap-4 mx-auto
                font-bold tracking-tight text-base md:text-lg
                hover:scale-105 hover:shadow-lg hover:shadow-[#22d3ee]/30
              "
            >
              GET MY FREE LEAD SCORE NOW
              <span className="bg-black/10 group-hover:bg-black/20 w-12 h-12 rounded-full flex items-center justify-center transition-all">
                <ArrowRight size={20} className="text-black group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Friction Reducers */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {frictionReducers.map((item, index) => (
              <div key={index} className="flex items-center text-gray-600">
                <Check className="w-5 h-5 text-[#22c55e] mr-2" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <EmailCaptureModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}
