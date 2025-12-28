'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Building2 } from 'lucide-react';

const results = [
  {
    company: "TechStart Solutions",
    industry: "SaaS",
    beforeScore: 34,
    afterScore: 76,
    leadIncrease: 289
  },
  {
    company: "Growth Marketing Co",
    industry: "Agency",
    beforeScore: 28,
    afterScore: 79,
    leadIncrease: 412
  },
  {
    company: "Digital Dynamics",
    industry: "E-commerce",
    beforeScore: 45,
    afterScore: 83,
    leadIncrease: 267
  }
];

export default function RealResultsSection() {
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
            Real B2B Companies, Real Results
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl text-gray-600"
          >
            See how 1,247+ companies transformed their lead generation in 90 days
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {results.map((result, index) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <Building2 className="w-6 h-6 text-gray-600 mr-3" />
                <div>
                  <h3 className="font-bold text-gray-900">{result.company}</h3>
                  <p className="text-sm text-gray-500">{result.industry}</p>
                </div>
              </div>

              {/* Score Transformation */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl font-bold text-red-500">{result.beforeScore}</span>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <span className="text-3xl font-bold text-green-500">{result.afterScore}</span>
                </div>
                <div className="text-center text-sm text-gray-600 mb-4">Lead Score</div>
                
                {/* Progress Bar */}
                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div 
                    className="bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${result.afterScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Lead Increase */}
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">
                  {result.leadIncrease}%
                </div>
                <div className="text-gray-600">more leads</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-2xl text-gray-700 font-medium">
            What could <span className="text-accent font-bold">YOUR</span> results look like?
          </p>
        </motion.div>
      </div>
    </section>
  );
}