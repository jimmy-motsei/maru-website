'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, Download, Eye, EyeOff } from 'lucide-react';

interface GatedResultContainerProps {
  children: React.ReactNode;
  isGated?: boolean;
  onUnlock?: (email: string) => Promise<void>;
  previewHeight?: number;
  title?: string;
  description?: string;
  className?: string;
}

export default function GatedResultContainer({
  children,
  isGated = true,
  onUnlock,
  previewHeight = 200,
  title = "Unlock Your Full Report",
  description = "Enter your email to access the complete analysis and recommendations.",
  className = ''
}: GatedResultContainerProps) {
  const [isUnlocked, setIsUnlocked] = useState(!isGated);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(true);

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !onUnlock) return;

    setIsSubmitting(true);
    try {
      await onUnlock(email);
      setIsUnlocked(true);
    } catch (error) {
      console.error('Failed to unlock:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isUnlocked) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {/* Preview Content */}
      {showPreview && (
        <div 
          className="relative overflow-hidden"
          style={{ height: previewHeight }}
        >
          <div className="pointer-events-none">
            {children}
          </div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900" />
          
          {/* Blur Overlay */}
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
      )}

      {/* Unlock Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mt-4"
      >
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-cyan-400/10 rounded-full mb-4">
            <Lock className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-zinc-400">{description}</p>
        </div>

        <form onSubmit={handleUnlock} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !email}
            className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-medium rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                Unlocking...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Unlock Full Report
              </>
            )}
          </button>
        </form>

        {/* Preview Toggle */}
        <div className="mt-4 pt-4 border-t border-zinc-800">
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors mx-auto"
          >
            {showPreview ? (
              <>
                <EyeOff className="w-4 h-4" />
                Hide Preview
              </>
            ) : (
              <>
                <Eye className="w-4 h-4" />
                Show Preview
              </>
            )}
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-6 pt-4 border-t border-zinc-800">
          <div className="flex items-center justify-center gap-6 text-xs text-zinc-500">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full" />
              No spam, ever
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-cyan-400 rounded-full" />
              Instant access
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-400 rounded-full" />
              Unsubscribe anytime
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}