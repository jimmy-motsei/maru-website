'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const results = [
  {
    company: 'TechStart Solutions',
    initialScore: 34,
    improvement: 42,
    result: '289% more leads',
    timeframe: '90 days'
  },
  {
    company: 'Growth Marketing Co',
    initialScore: 28,
    improvement: 51,
    result: '412% more leads',
    timeframe: '90 days'
  },
  {
    company: 'Digital Dynamics',
    initialScore: 45,
    improvement: 38,
    result: '267% more leads',
    timeframe: '90 days'
  }
];

export default function SocialProofSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real Results from Real Companies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how other B2B companies transformed their lead generation using our recommendations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <motion.div
              key={result.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 text-center"
            >
              {/* Company Name */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {result.company}
              </h3>

              {/* Score Improvement */}
              <div className="mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-2xl font-bold text-gray-600">
                    {result.initialScore}/100
                  </span>
                  <TrendingUp className="w-6 h-6 text-green-500" />
                  <span className="text-2xl font-bold text-green-600">
                    +{result.improvement}
                  </span>
                </div>
                <div className="text-sm text-gray-500">
                  Initial Score → Improvement
                </div>
              </div>

              {/* Result */}
              <div className="mb-4">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  {result.result}
                </div>
                <div className="text-gray-600">
                  in {result.timeframe}
                </div>
              </div>

              {/* Visual Score Bar */}
              <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                <div 
                  className="bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${result.initialScore + result.improvement}%` }}
                />
              </div>
              <div className="text-sm text-gray-500">
                Final Score: {result.initialScore + result.improvement}/100
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            What could your results look like?
          </p>
        </motion.div>
      </div>
    </section>
  );
}