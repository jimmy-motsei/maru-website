'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Brain, Inbox, Check } from 'lucide-react';

const steps = [
  {
    number: 1,
    icon: Mail,
    title: "Share Your Email",
    description: "So we can send your results"
  },
  {
    number: 2,
    icon: MessageSquare,
    title: "Answer 8 Questions",
    description: "About your website & goals"
  },
  {
    number: 3,
    icon: Brain,
    title: "Our AI Analyzes",
    description: "We do all the work"
  },
  {
    number: 4,
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

export default function HowItWorksSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Here's How It Works
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center relative"
            >
              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 -right-4 text-accent text-2xl font-bold">
                  →
                </div>
              )}
              
              {/* Step Number */}
              <div className="w-16 h-16 bg-accent text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              
              {/* Icon */}
              <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 shadow-sm">
                <step.icon className="w-6 h-6 text-gray-700" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Friction Reducers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-8 text-gray-600"
        >
          {frictionReducers.map((item, index) => (
            <div key={index} className="flex items-center">
              <Check className="w-5 h-5 text-green-500 mr-2" />
              <span>{item}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}