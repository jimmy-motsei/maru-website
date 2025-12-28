'use client';

import { BarChart3, AlertCircle, TrendingUp, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: BarChart3,
    title: 'Lead Generation Score',
    description: 'Comprehensive 0-100 rating of your current system'
  },
  {
    icon: AlertCircle,
    title: 'Gap Analysis',
    description: 'Identify exactly what\'s missing from your funnel'
  },
  {
    icon: TrendingUp,
    title: 'Growth Roadmap',
    description: 'Step-by-step plan to increase conversions 5-6x'
  },
  {
    icon: FileText,
    title: 'Custom PDF Report',
    description: 'Detailed analysis you can share with your team'
  }
];

export default function WhatYouGetSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What You'll Get
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered analysis provides everything you need to transform your website into a lead generation machine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-200"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}