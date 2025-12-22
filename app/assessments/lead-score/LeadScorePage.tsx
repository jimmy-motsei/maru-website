'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Globe, TrendingUp, Zap, Target } from 'lucide-react';
import MultiStepForm from '@/components/lead-generation/MultiStepForm';
import GatedResultContainer from '@/components/lead-generation/GatedResultContainer';
import { FormStep, LeadScoreResult } from '@/lib/types/lead-generation';

const formSteps: FormStep[] = [
  {
    id: 'website',
    title: 'Website Information',
    description: 'Tell us about your website so we can analyze its marketing potential.',
    fields: [
      {
        name: 'website_url',
        type: 'url',
        label: 'Website URL',
        placeholder: 'https://yourwebsite.com',
        required: true,
      },
      {
        name: 'company_name',
        type: 'text',
        label: 'Company Name',
        placeholder: 'Your Company',
        required: true,
      },
    ],
  },
  {
    id: 'company',
    title: 'Company Details',
    description: 'Help us understand your business context for better recommendations.',
    fields: [
      {
        name: 'industry',
        type: 'select',
        label: 'Industry',
        required: true,
        options: [
          { value: 'technology', label: 'Technology' },
          { value: 'healthcare', label: 'Healthcare' },
          { value: 'finance', label: 'Finance' },
          { value: 'retail', label: 'Retail' },
          { value: 'manufacturing', label: 'Manufacturing' },
          { value: 'professional-services', label: 'Professional Services' },
          { value: 'other', label: 'Other' },
        ],
      },
      {
        name: 'company_size',
        type: 'select',
        label: 'Company Size',
        required: true,
        options: [
          { value: 'startup', label: 'Startup (1-10 employees)' },
          { value: 'smb', label: 'Small Business (11-50 employees)' },
          { value: 'enterprise', label: 'Enterprise (50+ employees)' },
        ],
      },
    ],
  },
  {
    id: 'contact',
    title: 'Get Your Results',
    description: 'Enter your email to receive your personalized lead generation score and recommendations.',
    fields: [
      {
        name: 'email',
        type: 'email',
        label: 'Email Address',
        placeholder: 'your@email.com',
        required: true,
      },
    ],
  },
];

export default function LeadScorePage() {
  const [results, setResults] = useState<LeadScoreResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: Record<string, any>) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'lead_score',
          email: formData.email,
          input_data: formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setResults(result.data);
      }
    } catch (error) {
      console.error('Assessment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Analyzing Your Website</h2>
          <p className="text-zinc-400">This may take up to 30 seconds...</p>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Your Lead Generation Score</h1>
            <p className="text-xl text-zinc-400">Based on our analysis of your website and business</p>
          </motion.div>

          <GatedResultContainer
            isGated={false}
            className="space-y-8"
          >
            <ScoreDisplay results={results} />
          </GatedResultContainer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-full mb-6">
            <Target className="w-8 h-8 text-cyan-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Lead Generation Score Predictor</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Discover how ready your website is to generate high-quality leads with our AI-powered analysis
          </p>
        </motion.div>

        <MultiStepForm
          steps={formSteps}
          onSubmit={handleSubmit}
          className="mb-12"
        />

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Globe className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Website Analysis</h3>
            <p className="text-sm text-zinc-400">Deep scan of your site's technical and content quality</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Lead Scoring</h3>
            <p className="text-sm text-zinc-400">AI-powered assessment of your lead generation potential</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Quick Wins</h3>
            <p className="text-sm text-zinc-400">Actionable recommendations for immediate improvements</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScoreDisplay({ results }: { results: LeadScoreResult }) {
  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mb-4">
          <span className="text-4xl font-bold text-black">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Overall Lead Score</h2>
        <p className="text-zinc-400">
          {results.score >= 80 ? 'Excellent' : results.score >= 60 ? 'Good' : results.score >= 40 ? 'Fair' : 'Needs Improvement'}
        </p>
      </div>

      {/* Factor Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(results.factors).map(([key, value]) => (
          <div key={key} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-medium text-white capitalize">
                {key.replace('_', ' ')}
              </h3>
              <span className="text-cyan-400 font-semibold">{value}/100</span>
            </div>
            <div className="w-full bg-zinc-700 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
                style={{ width: `${value}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4">Recommendations</h3>
        <div className="space-y-3">
          {results.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-cyan-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-cyan-400">{index + 1}</span>
              </div>
              <p className="text-zinc-300">{rec}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}