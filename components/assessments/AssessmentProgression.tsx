'use client';

import { motion } from 'framer-motion';
import { Target, TrendingDown, FileText, Settings, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';

interface AssessmentProgressionProps {
  currentTool: 'lead-score' | 'pipeline-leak' | 'proposal' | 'tech-audit';
  completedTools?: string[];
}

const assessmentFlow = [
  {
    id: 'lead-score',
    title: 'Lead Score Predictor',
    description: 'Analyze your website\'s lead generation potential',
    icon: Target,
    color: 'cyan',
    duration: '2 min',
  },
  {
    id: 'pipeline-leak',
    title: 'Pipeline Leak Detector',
    description: 'Identify revenue leaks in your sales process',
    icon: TrendingDown,
    color: 'red',
    duration: '3 min',
  },
  {
    id: 'tech-audit',
    title: 'Tech Stack Auditor',
    description: 'Optimize software costs and eliminate redundancies',
    icon: Settings,
    color: 'purple',
    duration: '4 min',
  },
  {
    id: 'proposal',
    title: 'Proposal Accelerator',
    description: 'Generate professional proposals with AI',
    icon: FileText,
    color: 'blue',
    duration: '2 min',
  },
];

const colorClasses = {
  cyan: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  red: 'text-red-400 bg-red-400/10 border-red-400/20',
  purple: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  blue: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
};

export function AssessmentProgression({ currentTool, completedTools = [] }: AssessmentProgressionProps) {
  const nextTools = assessmentFlow.filter((tool) => 
    tool.id !== currentTool && !completedTools.includes(tool.id)
  );
  const recommendedNext = nextTools[0];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white mb-2">
          Complete Your Business Analysis
        </h3>
        <p className="text-zinc-400 text-sm">
          Get comprehensive insights by completing all assessment tools
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-zinc-400">Progress</span>
          <span className="text-sm text-cyan-400 font-medium">
            {completedTools.length + 1}/4 completed
          </span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${((completedTools.length + 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      {/* Next Recommended Tool */}
      {recommendedNext && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-cyan-400">RECOMMENDED NEXT</span>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          </div>
          
          <Link
            href={`/assessments/${recommendedNext.id}`}
            className="group block p-4 bg-zinc-800 border border-zinc-700 hover:border-cyan-400/50 rounded-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-lg ${colorClasses[recommendedNext.color as keyof typeof colorClasses]}`}>
                <recommendedNext.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {recommendedNext.title}
                </h4>
                <p className="text-sm text-zinc-400">{recommendedNext.description}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-zinc-500 mb-1">{recommendedNext.duration}</div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Bundle Offer */}
      {completedTools.length >= 2 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl"
        >
          <div className="text-center">
            <div className="text-sm font-semibold text-cyan-400 mb-1">
              🎉 UNLOCK COMPREHENSIVE REPORT
            </div>
            <p className="text-xs text-zinc-300 mb-3">
              Complete all 4 assessments to get a detailed business analysis report
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-cyan-400 hover:to-blue-400 transition-all"
            >
              Get Full Report
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
}