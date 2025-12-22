'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function StickyROICalculator() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [revenue, setRevenue] = useState('');
  const [employees, setEmployees] = useState('');
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (revenue && employees) {
      const monthlyRevenue = parseInt(revenue) || 0;
      const employeeCount = parseInt(employees) || 0;
      
      // Simple ROI calculation: 15% efficiency gain + 20% cost reduction
      const potentialSavings = Math.round((monthlyRevenue * 0.15) + (employeeCount * 500 * 0.2));
      setSavings(potentialSavings);
    }
  }, [revenue, employees]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 right-4 z-50"
      >
        {!isExpanded ? (
          <button
            onClick={() => setIsExpanded(true)}
            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 font-medium"
          >
            <Calculator className="w-5 h-5" />
            Calculate ROI
          </button>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 w-80 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-white">ROI Calculator</h3>
              <button
                onClick={() => setIsExpanded(false)}
                className="text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Monthly Revenue ($)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  placeholder="50000"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-2">
                  Number of Employees
                </label>
                <input
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  placeholder="25"
                  className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
                />
              </div>

              {savings > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-gradient-to-r from-green-400/10 to-cyan-400/10 border border-green-400/20 rounded-lg"
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-400 mb-1">
                      ${savings.toLocaleString()}
                    </div>
                    <p className="text-sm text-zinc-300">Potential Monthly Savings</p>
                  </div>
                </motion.div>
              )}

              <Link
                href="/assessments/lead-score"
                className="w-full bg-cyan-400 hover:bg-cyan-300 text-black font-medium py-2 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                Get Detailed Analysis
                <ArrowRight className="w-4 h-4" />
              </Link>

              <p className="text-xs text-zinc-400 text-center">
                Based on average automation ROI. Results may vary.
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}