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
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
      {/* Animated Icon */}
      <motion.div
        className="relative mb-8"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      >
        <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          <Icon className="w-8 h-8 text-white" />
        </div>
        
        {/* Pulse rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
          animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/30"
          animate={{ scale: [1, 1.8], opacity: [0.3, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
        />
      </motion.div>

      {/* Progress Bar */}
      {progress !== undefined && (
        <div className="w-full max-w-xs mb-6">
          <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
          <p className="text-center text-sm text-zinc-400 mt-2">{progress}% complete</p>
        </div>
      )}

      {/* Messages */}
      <div className="text-center">
        <motion.h3
          className="text-xl font-semibold text-white mb-2"
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {message || messages[0]}
        </motion.h3>
        
        {submessage && (
          <motion.p
            className="text-zinc-400 max-w-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {submessage}
          </motion.p>
        )}
      </div>

      {/* Animated dots */}
      <div className="flex gap-1 mt-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-2 h-2 bg-cyan-400 rounded-full"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>
    </div>
  );
}

// Skeleton loader for cards/content
export function SkeletonLoader({ className = '' }: { className?: string }) {
  return (
    <div className={`animate-pulse ${className}`}>
      <div className="bg-zinc-800 rounded-lg h-4 mb-3"></div>
      <div className="bg-zinc-800 rounded-lg h-4 mb-3 w-3/4"></div>
      <div className="bg-zinc-800 rounded-lg h-4 w-1/2"></div>
    </div>
  );
}