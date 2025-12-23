'use client';

import { motion } from 'framer-motion';
import { Loader2, Brain, Target, TrendingUp } from 'lucide-react';

interface OptimizedLoadingProps {
  message?: string;
  submessage?: string;
  progress?: number;
  type?: 'default' | 'ai' | 'analysis' | 'generation';
}

const loadingIcons = {
  default: Loader2,
  ai: Brain,
  analysis: Target,
  generation: TrendingUp,
};

const loadingMessages = {
  default: ['Processing...', 'Almost there...'],
  ai: ['AI is analyzing...', 'Generating insights...', 'Finalizing recommendations...'],
  analysis: ['Scanning data...', 'Identifying patterns...', 'Calculating scores...'],
  generation: ['Creating content...', 'Optimizing results...', 'Preparing report...'],
};

export function OptimizedLoading({ 
  message, 
  submessage, 
  progress, 
  type = 'default' 
}: OptimizedLoadingProps) {
  const Icon = loadingIcons[type];
  const messages = loadingMessages[type];
  
  return (
    <div className=\"flex flex-col items-center justify-center min-h-[400px] p-8\">
      {/* Animated Icon */}\n      <motion.div\n        className=\"relative mb-8\"\n        animate={{ rotate: 360 }}\n        transition={{ duration: 2, repeat: Infinity, ease: \"linear\" }}\n      >\n        <div className=\"w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center\">\n          <Icon className=\"w-8 h-8 text-white\" />\n        </div>\n        \n        {/* Pulse rings */}\n        <motion.div\n          className=\"absolute inset-0 rounded-full border-2 border-cyan-400/30\"\n          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}\n          transition={{ duration: 1.5, repeat: Infinity }}\n        />\n        <motion.div\n          className=\"absolute inset-0 rounded-full border-2 border-blue-400/30\"\n          animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}\n          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}\n        />\n      </motion.div>\n\n      {/* Progress Bar */}\n      {progress !== undefined && (\n        <div className=\"w-full max-w-xs mb-6\">\n          <div className=\"h-2 bg-zinc-800 rounded-full overflow-hidden\">\n            <motion.div\n              className=\"h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full\"\n              initial={{ width: 0 }}\n              animate={{ width: `${progress}%` }}\n              transition={{ duration: 0.5 }}\n            />\n          </div>\n          <p className=\"text-center text-sm text-zinc-400 mt-2\">{progress}% complete</p>\n        </div>\n      )}\n\n      {/* Messages */}\n      <div className=\"text-center\">\n        <motion.h3\n          className=\"text-xl font-semibold text-white mb-2\"\n          key={message}\n          initial={{ opacity: 0, y: 10 }}\n          animate={{ opacity: 1, y: 0 }}\n          transition={{ duration: 0.3 }}\n        >\n          {message || messages[0]}\n        </motion.h3>\n        \n        {submessage && (\n          <motion.p\n            className=\"text-zinc-400 max-w-md\"\n            initial={{ opacity: 0 }}\n            animate={{ opacity: 1 }}\n            transition={{ delay: 0.2 }}\n          >\n            {submessage}\n          </motion.p>\n        )}\n      </div>\n\n      {/* Animated dots */}\n      <div className=\"flex gap-1 mt-6\">\n        {[0, 1, 2].map((i) => (\n          <motion.div\n            key={i}\n            className=\"w-2 h-2 bg-cyan-400 rounded-full\"\n            animate={{ opacity: [0.3, 1, 0.3] }}\n            transition={{\n              duration: 1.5,\n              repeat: Infinity,\n              delay: i * 0.2,\n            }}\n          />\n        ))}\n      </div>\n    </div>\n  );\n}\n\n// Skeleton loader for cards/content\nexport function SkeletonLoader({ className = '' }: { className?: string }) {\n  return (\n    <div className={`animate-pulse ${className}`}>\n      <div className=\"bg-zinc-800 rounded-lg h-4 mb-3\"></div>\n      <div className=\"bg-zinc-800 rounded-lg h-4 mb-3 w-3/4\"></div>\n      <div className=\"bg-zinc-800 rounded-lg h-4 w-1/2\"></div>\n    </div>\n  );\n}