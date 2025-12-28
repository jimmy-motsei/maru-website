'use client';

import { BarChart3, AlertCircle, TrendingUp, FileText, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BarChart3,
    title: 'Lead Generation Score',
    description: 'Comprehensive 0-100 rating of your current system with industry benchmarks'
  },
  {
    icon: AlertCircle,
    title: 'Gap Analysis',
    description: 'Identify exactly what\'s missing from your funnel and why leads are escaping'
  },
  {
    icon: TrendingUp,
    title: 'Growth Roadmap',
    description: 'Step-by-step plan prioritized by impact to increase conversions 5-6x'
  },
  {
    icon: FileText,
    title: 'Custom PDF Report',
    description: 'Detailed analysis you can share with your team and stakeholders'
  }
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

export default function WhatYouGetSection() {
  return (
    <section className="bg-white py-12 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header - MARU Pattern */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2
            className="font-bold mb-6 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-black/50">What You'll Discover</span> in 2 Minutes
          </motion.h2>
          <motion.h3
            className="type-h3 font-medium"
            style={{ color: '#1a9aa5' }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            Our AI-powered analysis reveals everything you need to 5x your leads
          </motion.h3>
        </div>

        {/* Benefits Grid - 2x2 Layout like Services */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 }
            }
          }}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Card - MARU Services Style */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl border-l-4 border-l-[#22d3ee] transition-all duration-300 h-full flex flex-col">
                <div className="flex items-start space-x-5">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[#22d3ee]/20 to-[#22d3ee]/10 rounded-xl flex items-center justify-center">
                      <feature.icon className="w-7 h-7 text-[#1a9aa5]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-2">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Completion Time Stat */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariants}
          className="flex justify-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-gray-100 rounded-full text-gray-600">
            <Clock className="w-5 h-5 mr-2 text-[#1a9aa5]" />
            <span>Avg. completion time: <strong>2 min 14 sec</strong></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
