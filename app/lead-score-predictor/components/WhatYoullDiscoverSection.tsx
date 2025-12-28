'use client';

import { motion } from 'framer-motion';
import { Target, Search, Map, FileText, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: "Lead Generation Score",
    description: "Get your exact 0-100 score based on 47 conversion factors"
  },
  {
    icon: Search,
    title: "Gap Analysis",
    description: "See exactly what's blocking your leads and costing you revenue"
  },
  {
    icon: Map,
    title: "90-Day Growth Roadmap",
    description: "Step-by-step action plan to 5x your leads in 90 days"
  },
  {
    icon: FileText,
    title: "Custom PDF Report",
    description: "Detailed analysis you can share with your team"
  }
];

export default function WhatYoullDiscoverSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            What You'll Discover in 2 Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl text-gray-600"
          >
            Our AI-powered analysis reveals everything you need to 5x your leads
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center mr-4">
                  <benefit.icon className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center flex items-center justify-center text-gray-500"
        >
          <Clock className="w-5 h-5 mr-2" />
          <span>Avg. completion time: 2 min 14 sec</span>
        </motion.div>
      </div>
    </section>
  );
}