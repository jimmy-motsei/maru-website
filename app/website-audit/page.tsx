"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Sparkles, Loader2, Globe } from 'lucide-react';
import Link from 'next/link';
import { submitToHubSpot, HUBSPOT_FORMS } from '@/lib/hubspot';

// Tier definitions
const getTier = (score: number) => {
  if (score >= 80) return { 
    name: "Excellent", 
    color: "text-green-400", 
    description: "Your website is well-optimized and ready for AI integration!" 
  };
  if (score >= 60) return { 
    name: "Good", 
    color: "text-accent", 
    description: "You're on the right track! A few improvements will maximize AI potential." 
  };
  if (score >= 40) return { 
    name: "Needs Improvement", 
    color: "text-yellow-400", 
    description: "There's room to grow. Let's optimize your foundation for AI tools." 
  };
  return { 
    name: "Critical", 
    color: "text-red-400", 
    description: "Your website needs significant improvements before AI integration." 
  };
};

interface AnalysisResult {
  url: string;
  scores: {
    technical: number;
    seo: number;
    content: number;
    integration: number;
    automation: number;
  };
  totalScore: number;
  details: {
    technical: string[];
    seo: string[];
    content: string[];
    integration: string[];
    automation: string[];
  };
}

export default function WebsiteAuditPage() {
  const [currentStep, setCurrentStep] = useState(0); // 0 = intro, 1 = analyzing, 2 = form, 3 = results
  const [websiteUrl, setWebsiteUrl] = useState('');
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const isIntro = currentStep === 0;
  const showAnalyzing = currentStep === 1;
  const isForm = currentStep === 2;
  const isResults = currentStep === 3;

  const handleAnalyze = async () => {
    if (!websiteUrl.trim()) {
      setError('Please enter a website URL');
      return;
    }

    setError('');
    setCurrentStep(1);
    setIsAnalyzing(true);

    try {
      const response = await fetch('/api/analyze-website', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: websiteUrl }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Analysis failed');
      }

      const result = await response.json();
      setAnalysisResult(result);
      setIsAnalyzing(false);
      setCurrentStep(2); // Move to form
    } catch (err: any) {
      setError(err.message || 'Failed to analyze website');
      setIsAnalyzing(false);
      setCurrentStep(0); // Back to intro
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      firstname: formData.name,
      email: formData.email,
      company: formData.company,
      website_url: analysisResult?.url || '',
      website_audit_score: analysisResult?.totalScore || 0,
      website_audit_tier: getTier(analysisResult?.totalScore || 0).name,
    };

    if (HUBSPOT_FORMS.WEBSITE_AUDIT) {
      await submitToHubSpot(HUBSPOT_FORMS.WEBSITE_AUDIT, submissionData);
    } else {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    setIsSubmitting(false);
    setCurrentStep(3);
  };

  const score = analysisResult?.totalScore || 0;
  const tier = getTier(score);
  const progress = isResults ? 100 : isForm ? 66 : showAnalyzing ? 33 : 0;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold">
            Maru<span className="text-accent">.</span>
          </Link>
          <Link href="/" className="text-sm text-white/60 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
        {/* Progress Bar */}
        <div className="h-1 bg-white/10">
          <motion.div
            className="h-full bg-accent"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <AnimatePresence mode="wait">
            {/* INTRO SCREEN */}
            {isIntro && (
              <motion.div
                key="intro"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
                  <Globe size={16} className="text-accent" />
                  <span className="text-sm font-medium text-accent">Free Website Audit</span>
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  Is Your Website{' '}
                  <span className="font-light text-white/60">AI-Ready?</span>
                </h1>

                <p className="text-lg text-white/60 mb-12 max-w-xl mx-auto">
                  Get an instant analysis of your website's readiness for AI integration. 
                  Discover optimization opportunities in seconds.
                </p>

                {/* URL Input */}
                <div className="max-w-md mx-auto mb-4">
                  <input
                    type="text"
                    value={websiteUrl}
                    onChange={(e) => setWebsiteUrl(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAnalyze()}
                    placeholder="Enter your website URL (e.g., example.com)"
                    className="w-full px-6 py-4 rounded-full bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors text-center"
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-400">{error}</p>
                  )}
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={!websiteUrl.trim()}
                  className="group inline-flex items-center gap-4 bg-accent hover:bg-accent-dark text-black font-bold rounded-full pl-8 pr-3 py-4 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="text-sm tracking-widest uppercase">Analyze My Website</span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                    <ArrowRight size={18} />
                  </span>
                </button>

                <p className="mt-8 text-sm text-white/40">Takes less than 10 seconds • No credit card required</p>
              </motion.div>
            )}

            {/* ANALYZING SCREEN */}
            {showAnalyzing && (
              <motion.div
                key="analyzing"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <div className="mb-8">
                  <Loader2 size={64} className="text-accent animate-spin mx-auto" />
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Analyzing Your Website
                </h2>

                <p className="text-white/60 mb-8">
                  Scanning {websiteUrl} for AI-readiness...
                </p>

                <div className="max-w-md mx-auto space-y-3 text-left">
                  {['Technical Performance', 'SEO Foundation', 'Content Structure', 'Integration Readiness', 'Automation Potential'].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center gap-3 text-white/60"
                    >
                      <Sparkles size={16} className="text-accent" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* LEAD CAPTURE FORM */}
            {isForm && analysisResult && (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-center mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Analysis Complete!
                  </h2>
                  <p className="text-white/60">
                    Enter your details to see your personalized website audit report.
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-6 max-w-md mx-auto">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-2">Company Name</label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-accent transition-colors"
                      placeholder="Acme Inc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent hover:bg-accent-dark text-black font-bold py-4 rounded-full transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Processing...' : 'See My Results'}
                  </button>
                </form>
              </motion.div>
            )}

            {/* RESULTS SCREEN */}
            {isResults && analysisResult && (
              <motion.div
                key="results"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Your Website Audit Report
                </h2>

                {/* Score Circle */}
                <div className="relative w-48 h-48 mx-auto mb-8">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="12"
                    />
                    <motion.circle
                      cx="96"
                      cy="96"
                      r="88"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="12"
                      strokeLinecap="round"
                      className="text-accent"
                      strokeDasharray={553}
                      initial={{ strokeDashoffset: 553 }}
                      animate={{ strokeDashoffset: 553 - (553 * score) / 100 }}
                      transition={{ duration: 1.5, ease: 'easeOut' }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <motion.span
                      className="text-5xl font-bold"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {score}
                    </motion.span>
                    <span className="text-sm text-white/60">out of 100</span>
                  </div>
                </div>

                {/* Tier Badge */}
                <div className={`inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 ${tier.color}`}>
                  <span className="font-bold">{tier.name}</span>
                </div>

                <p className="text-white/60 mb-12 max-w-lg mx-auto">
                  {tier.description}
                </p>

                {/* Category Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
                  {[
                    { key: 'technical', label: 'Technical', max: 20 },
                    { key: 'seo', label: 'SEO', max: 20 },
                    { key: 'content', label: 'Content', max: 20 },
                    { key: 'integration', label: 'Integration', max: 20 },
                    { key: 'automation', label: 'Automation', max: 20 },
                  ].map((category) => {
                    const categoryScore = analysisResult.scores[category.key as keyof typeof analysisResult.scores];
                    return (
                      <div key={category.key} className="p-4 rounded-xl bg-white/5 border border-white/10">
                        <div className="text-xs text-white/40 uppercase tracking-wider mb-2">{category.label}</div>
                        <div className="text-2xl font-bold">{categoryScore}/{category.max}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed Breakdown */}
                <div className="text-left max-w-2xl mx-auto mb-12 space-y-6">
                  {Object.entries(analysisResult.details).map(([category, details]) => (
                    <div key={category} className="p-6 rounded-xl bg-white/5 border border-white/10">
                      <h3 className="text-lg font-bold mb-4 capitalize">{category}</h3>
                      <ul className="space-y-2">
                        {details.map((detail, index) => (
                          <li key={index} className="text-sm text-white/70">{detail}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="space-y-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 bg-accent hover:bg-accent-dark text-black font-bold rounded-full pl-8 pr-3 py-4 transition-all duration-300"
                  >
                    <span className="text-sm tracking-widest uppercase">Book a Free Consultation</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
                      <ArrowRight size={18} />
                    </span>
                  </Link>

                  <div>
                    <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                      Return to Homepage
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
