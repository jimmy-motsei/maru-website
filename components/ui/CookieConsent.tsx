'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import Link from 'next/link';
import { useCookieConsent, saveConsent } from '@/lib/cookie-consent';

export default function CookieConsent() {
  const { consent, loaded } = useCookieConsent();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (loaded && !consent) {
      setTimeout(() => setShowBanner(true), 500);
    }
  }, [loaded, consent]);

  if (!loaded || (consent && !showBanner)) return null;

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed bottom-4 left-4 right-4 z-[999]">
          <div className="max-w-7xl mx-auto bg-[#09121A]/90 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex gap-4">
              <Cookie className="w-6 h-6 text-[var(--color-cyan-primary)]" />
              <p className="text-zinc-400 text-sm">We optimize your experience using cookies. <Link href="/cookie-policy" className="text-[var(--color-cyan-primary)] underline">Read Policy</Link>.</p>
            </div>
            <div className="flex gap-3">
              <button onClick={() => { saveConsent({ necessary: true, analytics: false, marketing: false, functional: false }); setShowBanner(false); }} className="px-4 py-2 rounded-xl text-sm font-medium text-white bg-white/5 border border-white/10">Reject All</button>
              <button onClick={() => { saveConsent({ necessary: true, analytics: true, marketing: true, functional: true }); setShowBanner(false); }} className="px-6 py-2 rounded-xl text-sm font-bold text-black bg-[var(--color-cyan-primary)]">Accept All</button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
