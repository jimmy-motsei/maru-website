'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';
import Link from 'next/link';

const COOKIE_CONSENT_KEY = 'maru-cookie-consent';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      // Small delay before showing for better UX
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Desktop: Floating card in bottom-right */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="hidden md:block fixed bottom-28 right-6 z-40 w-[340px]"
          >
            <div className="bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
              {/* Header */}
              <div className="px-5 pt-5 pb-3 flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded-xl flex items-center justify-center">
                    <Cookie size={20} className="text-[#22d3ee]" />
                  </div>
                  <h3 className="font-semibold text-white text-base">Cookie Preferences</h3>
                </div>
                <button
                  onClick={handleDecline}
                  className="text-gray-500 hover:text-white transition-colors p-1"
                  aria-label="Close cookie notice"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Content */}
              <div className="px-5 pb-4">
                <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                  We use cookies to enhance your experience and analyze site traffic. By clicking "Accept", you consent to our use of cookies.
                </p>
                
                <Link 
                  href="/cookie-policy" 
                  className="text-[#22d3ee] text-sm hover:underline inline-block mb-5"
                >
                  Learn more →
                </Link>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleDecline}
                    className="flex-1 px-4 py-2.5 text-sm font-medium text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                  >
                    Decline
                  </button>
                  <button
                    onClick={handleAccept}
                    className="flex-1 px-4 py-2.5 text-sm font-bold text-black bg-[#22d3ee] hover:bg-[#5cc5d1] rounded-lg transition-colors"
                  >
                    Accept
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mobile: Full-width bottom banner */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40"
          >
            <div className="bg-[#111111] border-t border-white/10 shadow-[0_-4px_30px_rgba(0,0,0,0.5)] px-4 py-4 safe-area-pb">
              {/* Compact Layout for Mobile */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-[#22d3ee]/10 border border-[#22d3ee]/30 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Cookie size={16} className="text-[#22d3ee]" />
                </div>
                <p className="text-sm text-zinc-300 leading-snug flex-1">
                  We use cookies to enhance your experience.{' '}
                  <Link href="/cookie-policy" className="text-[#22d3ee] hover:underline">
                    Learn more
                  </Link>
                </p>
                <button
                  onClick={handleDecline}
                  className="text-gray-500 hover:text-white transition-colors p-1 flex-shrink-0"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Buttons Row */}
              <div className="flex gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 px-4 py-2.5 text-sm font-medium text-zinc-400 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
                >
                  Decline
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-1 px-4 py-2.5 text-sm font-bold text-black bg-[#22d3ee] hover:bg-[#5cc5d1] rounded-lg transition-colors"
                >
                  Accept
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
