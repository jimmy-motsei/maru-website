'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function ProblemHookSection() {
  return (
    <section className="relative bg-black py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-accent rounded-full"></div>
        <div className="absolute top-40 right-20 w-96 h-96 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-48 h-48 border border-accent rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 bg-accent text-black text-sm font-medium rounded-full mb-8"
          >
            FREE AI-POWERED TOOL
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl font-bold text-white mb-8"
          >
            Is Your Website Leaking Leads?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-gray-300 mb-16 leading-relaxed"
          >
            Most B2B websites convert at only 1-2%.<br />
            But the top performers? They're hitting 5-6%.<br />
            <span className="text-accent font-semibold">What's your number?</span>
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center text-gray-400"
          >
            <p className="text-lg mb-4">↓ See what others discovered</p>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}