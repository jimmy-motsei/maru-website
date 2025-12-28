'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Brain, Inbox, Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    icon: Mail,
    title: "Share Your Email",
    description: "So we can send your results"
  },
  {
    number: "02",
    icon: MessageSquare,
    title: "Answer 8 Questions",
    description: "About your website & goals"
  },
  {
    number: "03",
    icon: Brain,
    title: "Our AI Analyzes",
    description: "We do all the work"
  },
  {
    number: "04",
    icon: Inbox,
    title: "Get Your Score",
    description: "Results in your inbox instantly"
  }
];

const frictionReducers = [
  "Takes 2 minutes",
  "No credit card",
  "Free forever",
  "Unsubscribe anytime"
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export default function HowItWorksSection() {
  return (
    <section className="bg-dark py-12 md:py-32 relative overflow-hidden text-white border-t border-white/5">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - MARU Pattern */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-20">
          <motion.h2
            className="font-bold mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-zinc-500">Here's</span> How It Works
          </motion.h2>
          <motion.p
            className="text-lg text-white/60 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Get your personalized lead score in 4 simple steps
          </motion.p>
        </div>

        {/* Steps Grid - MARU Card Style */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15, delayChildren: 0.2 }
            }
          }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="relative"
            >
              {/* Connecting Arrow (hidden on mobile/tablet) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 items-center justify-center w-6 text-[#22d3ee] font-bold text-xl">
                  →
                </div>
              )}
              
              <div className="bg-[#111111] p-8 rounded-2xl border-l-4 border-l-[#22d3ee] shadow-[0_4px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_40px_rgba(34,211,238,0.15)] transition-all duration-300 h-full flex flex-col items-center text-center">
                {/* Step Number */}
                <div className="w-16 h-16 bg-gradient-to-br from-[#22d3ee] to-[#1a9aa5] text-black rounded-full flex items-center justify-center text-2xl font-bold mb-6 shadow-lg shadow-[#22d3ee]/20">
                  {step.number}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30 mb-4">
                  <step.icon size={24} />
                </div>
                
                {/* Content */}
                <h4 className="font-bold text-white mb-2">
                  {step.title}
                </h4>
                <p className="text-zinc-400 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Friction Reducers */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="bg-[#111111] rounded-2xl p-6 border border-[#22d3ee]/10"
        >
          <div className="flex flex-wrap justify-center gap-6 md:gap-12">
            {frictionReducers.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center text-zinc-300"
              >
                <div className="w-6 h-6 bg-[#22c55e]/20 rounded-full flex items-center justify-center mr-2">
                  <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                </div>
                <span className="font-medium text-sm">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
