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
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-500';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  };

  return (
    <div className="space-y-8">
      {/* Overall Score */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br ${getScoreColor(results.score)} rounded-full mb-4`}>
          <span className="text-4xl font-bold text-black">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Lead Generation Score</h2>
        <p className="text-zinc-400 text-lg">{getScoreLabel(results.score)}</p>
        <div className="mt-4 max-w-md mx-auto">
          <div className="w-full bg-zinc-700 rounded-full h-3">
            <div
              className={`bg-gradient-to-r ${getScoreColor(results.score)} h-3 rounded-full transition-all duration-1000`}
              style={{ width: `${results.score}%` }}
            />
          </div>
        </div>
      </div>

      {/* Factor Breakdown */}
      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(results.factors).map(([key, value]) => {
          const factorNames = {
            website_quality: 'Website Quality',
            tech_stack_maturity: 'Tech Stack Maturity',
            content_quality: 'Content Quality',
            seo_readiness: 'SEO Readiness'
          };
          
          return (
            <div key={key} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors">
              <div className="flex justify-between items-center mb-3">
                <h3 className="font-medium text-white">
                  {factorNames[key as keyof typeof factorNames] || key.replace('_', ' ')}
                </h3>
                <span className="text-cyan-400 font-semibold">{value}/100</span>
              </div>
              <div className="w-full bg-zinc-700 rounded-full h-2">
                <div
                  className={`bg-gradient-to-r ${getScoreColor(value)} h-2 rounded-full transition-all duration-1000`}
                  style={{ width: `${value}%` }}
                />
              </div>
              <p className="text-xs text-zinc-500 mt-2">
                {value >= 80 ? 'Excellent performance' : 
                 value >= 60 ? 'Good foundation' : 
                 value >= 40 ? 'Room for improvement' : 'Needs attention'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Actionable Recommendations
        </h3>
        <div className="space-y-4">
          {results.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg hover:bg-zinc-800 transition-colors">
              <div className="w-6 h-6 bg-cyan-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-cyan-400">{index + 1}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps CTA */}
      <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Ready to Improve Your Score?</h3>
        <p className="text-zinc-400 mb-4">
          Get personalized guidance on implementing these recommendations and optimizing your lead generation.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors">
            Schedule Free Consultation
          </button>
          <button className="px-6 py-3 border border-zinc-600 text-white font-medium rounded-lg hover:border-zinc-500 transition-colors">
            Download Full Report
          </button>
        </div>
      </div>

      {/* Company Data */}
      {results.company_data && (
        <div className="p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-medium text-white mb-2">Analysis Summary</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-zinc-500">Company:</span>
              <p className="text-zinc-300">{results.company_data.name}</p>
            </div>
            <div>
              <span className="text-zinc-500">Industry:</span>
              <p className="text-zinc-300">{results.company_data.industry}</p>
            </div>
            <div>
              <span className="text-zinc-500">Size:</span>
              <p className="text-zinc-300">{results.company_data.size}</p>
            </div>
            <div>
              <span className="text-zinc-500">Analysis Date:</span>
              <p className="text-zinc-300">{new Date().toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}