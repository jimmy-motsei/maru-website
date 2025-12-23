'use client';

import { motion } from 'framer-motion';
import { Target, TrendingDown, FileText, Settings, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const assessments = [
  {
    icon: Target,
    title: 'Lead Score Predictor',
    description: 'AI-powered website analysis to predict your lead generation potential',
    color: 'cyan',
    href: '/assessments/lead-score',
    stats: '85% accuracy rate',
  },
  {
    icon: TrendingDown,
    title: 'Pipeline Leak Detector',
    description: 'Identify revenue leaks in your sales pipeline with instant recovery recommendations',
    color: 'red',
    href: '/assessments/pipeline-leak',
    stats: 'Avg $75K recovered',
  },
  {
    icon: FileText,
    title: 'Proposal Accelerator',
    description: 'Generate professional business proposals in minutes with AI customization',
    color: 'blue',
    href: '/assessments/proposal',
    stats: '90% faster creation',
  },
  {
    icon: Settings,
    title: 'Tech Stack Auditor',
    description: 'Optimize your software costs and eliminate redundancies for maximum ROI',
    color: 'purple',
    href: '/assessments/tech-audit',
    stats: 'Avg 30% savings',
  },
];

const colorClasses = {
  cyan: {
    icon: 'text-cyan-400',
    border: 'border-cyan-400/20',
    hover: 'hover:border-cyan-400/50',
    bg: 'bg-cyan-400/10',
  },
  red: {
    icon: 'text-red-400',
    border: 'border-red-400/20',
    hover: 'hover:border-red-400/50',
    bg: 'bg-red-400/10',
  },
  blue: {
    icon: 'text-blue-400',
    border: 'border-blue-400/20',
    hover: 'hover:border-blue-400/50',
    bg: 'bg-blue-400/10',
  },
  purple: {
    icon: 'text-purple-400',
    border: 'border-purple-400/20',
    hover: 'hover:border-purple-400/50',
    bg: 'bg-purple-400/10',
  },
};

export function AssessmentShowcase() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl mb-8">
            <div className="flex items-center gap-2 text-green-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">4 Free AI Audits Available</span>
            </div>
            <div className="flex items-center gap-2 text-cyan-400">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-sm font-medium">No signup • Instant results</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="text-sm font-medium">2-minute assessments</span>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              href="/assessments/lead-score"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Start Your First Audit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-zinc-400 text-sm mt-3">Choose any assessment below to begin</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {assessments.map((assessment, index) => {
            const Icon = assessment.icon;
            const colors = colorClasses[assessment.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={assessment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={assessment.href}
                  className={`group block p-8 bg-zinc-900 border ${colors.border} ${colors.hover} rounded-2xl transition-all duration-300 hover:transform hover:scale-[1.02]`}
                >
                  <div className="flex items-start gap-6">
                    <div className={`p-4 ${colors.bg} rounded-xl`}>
                      <Icon className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {assessment.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      
                      <p className="text-zinc-400 mb-4 leading-relaxed">
                        {assessment.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-medium ${colors.icon}`}>
                          {assessment.stats}
                        </span>
                        <span className="text-sm text-zinc-500">
                          Free • 2 min assessment
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-8 p-6 bg-zinc-900/50 border border-zinc-800 rounded-xl">
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
        </motion.div>
      </div>
    </section>
  );
}