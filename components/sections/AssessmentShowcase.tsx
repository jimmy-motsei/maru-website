'use client';

import { motion } from 'framer-motion';
import { Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function AssessmentShowcase() {
  return (
    <section id="assessments" className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          {/* Enhanced Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Discover Your <span className="text-[#22d3ee]">Lead Generation Potential</span>
            </h2>
            <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
              Get instant insights with our AI-powered Lead Score Predictor. No signup required.
            </p>
          </div>

          {/* Social Proof Bar */}
          <div className="inline-flex items-center gap-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Free AI Analysis Available</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-sm font-medium">No signup • Instant results</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">2-minute assessment</span>
            </div>
            <div className="flex items-center gap-2 text-purple-400">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <span className="text-sm font-medium">1,247+ completed this month</span>
            </div>
          </div>
          
          {/* Primary CTA */}
          <div className="text-center">
            <Link
              href="/lead-score-predictor"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Your Free Analysis
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-zinc-400 text-sm mt-3">Lead Score Predictor • Takes 2 minutes • 100% Free</p>
          </div>
        </motion.div>

        {/* Single Assessment Card */}
        <div className="max-w-2xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold z-10">
              FEATURED TOOL
            </div>
            <Link
              href="/lead-score-predictor"
              className="group block p-8 bg-zinc-900 border border-cyan-400/20 hover:border-cyan-400/50 rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02] ring-2 ring-cyan-500/30"
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-cyan-400/10 rounded-xl">
                  <Target className="w-8 h-8 text-cyan-400" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Lead Score Predictor™
                    </h3>
                    <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </div>
                  
                  <p className="text-zinc-400 mb-4 leading-relaxed">
                    AI-powered website analysis to predict your lead generation potential and get a personalized 90-day growth roadmap
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-cyan-400">
                      0-100 Score • 5-6x Lead Increase
                    </span>
                    <span className="text-sm text-zinc-500">
                      Free • 2 min assessment
                    </span>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="mt-4 flex items-center gap-2">
                    <div className="text-xs text-zinc-500">Completion rate:</div>
                    <div className="flex-1 bg-zinc-800 rounded-full h-1.5">
                      <div className="h-1.5 rounded-full bg-cyan-400" style={{ width: '92%' }}></div>
                    </div>
                    <div className="text-xs text-zinc-400">92%</div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-6">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm font-medium">No signup required</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-sm font-medium">Instant results</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">AI-powered insights</span>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-zinc-400 text-sm mb-4">
              <span className="text-white font-medium">What you'll get:</span> Lead generation score, gap analysis, and 90-day action plan
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-500">
              <span>Average completion time: 2 minutes</span>
              <span>•</span>
              <span>Detailed PDF report included</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}