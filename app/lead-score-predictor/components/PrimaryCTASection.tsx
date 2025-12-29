'use client';

import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import EmailCaptureModal from './EmailCaptureModal';
import { CTAPrimary } from '@/components/ui/CTAPrimary';

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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="mb-10 flex justify-center"
          >
            <CTAPrimary onClick={() => setShowModal(true)}>
              GET MY FREE LEAD SCORE NOW
            </CTAPrimary>
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
