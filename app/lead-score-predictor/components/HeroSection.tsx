'use client';

import { useState } from 'react';
import { ArrowRight, BarChart3, Clock, Percent } from 'lucide-react';
import { motion } from 'framer-motion';
import EmailCaptureModal from './EmailCaptureModal';

export default function HeroSection() {
  const [showModal, setShowModal] = useState(false);

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
            className="inline-flex items-center px-4 py-2 bg-accent text-black text-sm font-medium rounded-full mb-6"
          >
            FREE AI-POWERED TOOL
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold text-white mb-6"
          >
            Lead Score Predictor™
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl text-gray-300 mb-12"
          >
            Discover your website's lead generation potential in just 2 minutes
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg hover:border-accent transition-colors"
            >
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">2 min</div>
              <div className="text-gray-400">to complete</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg hover:border-accent transition-colors"
            >
              <BarChart3 className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">0-100</div>
              <div className="text-gray-400">score range</div>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gray-900 border border-gray-800 rounded-lg p-6 shadow-lg hover:border-accent transition-colors"
            >
              <Percent className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-gray-400">free forever</div>
            </motion.div>
          </motion.div>

          {/* Primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex items-center px-8 py-4 bg-accent text-black text-lg font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-accent/20"
            >
              Start My Free Analysis
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-gray-400 space-y-2"
          >
            <p>No credit card required</p>
            <p>Join 1,247+ B2B companies</p>
          </motion.div>
        </div>
      </div>

      <EmailCaptureModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}