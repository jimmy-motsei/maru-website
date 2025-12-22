'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, ChevronRight, Check, Shield, BarChart3, Megaphone, Settings2 } from 'lucide-react';
import Link from 'next/link';
import { useCookieConsent, saveConsent, DEFAULT_CONSENT, CookieConsentState } from '@/lib/cookie-consent';

export default function CookieConsent() {
  const { consent, loaded } = useCookieConsent();
  // If consent is already set, we don't show the initial banner.
  // We only show it if !consent OR if user explicitly opens settings (managed via props or global event/context in future, 
  // but for now we'll rely on the standard "if no consent" flow + a way to reopen).
  // Actually, to support "reopen", we need local state that defaults to !consent.
  
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  // Draft state for the preferences modal
  const [preferences, setPreferences] = useState<CookieConsentState['categories']>(DEFAULT_CONSENT.categories);

  useEffect(() => {
    if (loaded && !consent) {
      // Small delay for entrance animation
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [loaded, consent]);

  // Listen for a custom event to reopen preferences (from Footer)
  useEffect(() => {
    const handleReopen = () => {
      // Load current choice into draft state
      if (consent) {
        setPreferences(consent.categories);
      }
      setShowPreferences(true);
      setShowBanner(false); // Hide banner if it was open
    };
    window.addEventListener('open-cookie-preferences', handleReopen);
    return () => window.removeEventListener('open-cookie-preferences', handleReopen);
  }, [consent]);

  const handleAcceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    });
    setShowBanner(false);
  };

  const handleRejectNonEssential = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
    });
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
    setShowPreferences(false);
    setShowBanner(false); // Ensure banner is gone
  };

  const toggleCategory = (key: keyof typeof preferences) => {
    if (key === 'necessary') return; // Cannot toggle necessary
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Prevent hydration mismatch by not rendering anything until loaded
  if (!loaded) return null;

  // If we have consent and not reopening preferences, render nothing
  if (consent && !showPreferences && !showBanner) return null;

  return (
    <AnimatePresence>
      {/* --- BANNER (Bottom Bar) --- */}
      {showBanner && !showPreferences && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-7xl mx-auto bg-[#111] border border-white/10 rounded-xl shadow-[0_-10px_40px_rgba(0,0,0,0.5)] p-4 md:p-5 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="flex items-start gap-4 max-w-2xl">
              <div className="p-3 bg-cyan-500/10 rounded-lg hidden md:block">
                <Cookie className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">We value your privacy</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
                  By clicking "Accept All", you consent to our use of cookies. 
                  <Link href="/cookie-policy" className="text-cyan-400 hover:text-cyan-300 ml-1 underline underline-offset-2">
                    Read our Cookie Policy
                  </Link>.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto min-w-[340px]">
              <button
                onClick={() => setShowPreferences(true)}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Manage Preferences
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-4 py-2.5 rounded-lg text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                Reject All
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2.5 rounded-lg text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* --- PREFERENCES MODAL --- */}
      {showPreferences && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPreferences(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-white/10 flex items-center justify-between bg-[#161616]">
              <div className="flex items-center gap-3">
                <Settings2 className="w-5 h-5 text-cyan-400" />
                <h2 className="text-lg font-semibold text-white">Cookie Preferences</h2>
              </div>
              <button
                onClick={() => setShowPreferences(false)}
                className="p-2 text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <p className="text-zinc-400 text-sm">
                Customize your cookie preferences below. Essential cookies are required for the website to function properly and cannot be disabled. 
                For more details, please review our <Link href="/cookie-policy" className="text-cyan-400 hover:underline">Cookie Policy</Link>.
              </p>

              <div className="space-y-4">
                {/* Category: Necessary */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <h4 className="font-medium text-white">Strictly Necessary</h4>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Required for basic site functionality such as security, network management, and accessibility. You cannot disable these.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      <Check className="w-3 h-3" />
                      Always Active
                    </div>
                  </div>
                </div>

                {/* Category: Marketing */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Megaphone className="w-4 h-4 text-cyan-400" />
                        <h4 className="font-medium text-white">Marketing & CRM</h4>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Used to track visitors across websites to display relevant ads and integrate with our CRM (HubSpot) for better customer service. 
                        Disabling this will prevent chat widgets and personalized interactions.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={preferences.marketing}
                        onChange={() => toggleCategory('marketing')}
                      />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>

                {/* Category: Analytics */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <BarChart3 className="w-4 h-4 text-purple-400" />
                        <h4 className="font-medium text-white">Analytics</h4>
                      </div>
                      <p className="text-xs text-zinc-400 leading-relaxed">
                        Helps us understand how visitors interact with the website by collecting and reporting information anonymously.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input 
                        type="checkbox" 
                        className="sr-only peer"
                        checked={preferences.analytics}
                        onChange={() => toggleCategory('analytics')}
                      />
                      <div className="w-11 h-6 bg-zinc-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-500"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-6 border-t border-white/10 bg-[#161616] flex justify-end gap-3">
              <button
                onClick={() => setShowPreferences(false)}
                className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePreferences}
                className="px-6 py-2.5 rounded-lg text-sm font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition-colors shadow-[0_0_20px_rgba(34,211,238,0.2)]"
              >
                Save Preferences
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
