'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, TrendingDown, AlertTriangle, DollarSign } from 'lucide-react';
import MultiStepForm from '@/components/lead-generation/MultiStepForm';
import GatedResultContainer from '@/components/lead-generation/GatedResultContainer';
import { FormStep, PipelineLeakResult } from '@/lib/types/lead-generation';

const formSteps: FormStep[] = [
  {
    id: 'data',
    title: 'Upload Pipeline Data',
    description: 'Upload your CRM export to analyze pipeline health and detect revenue leaks.',
    fields: [
      {
        name: 'csv_data',
        type: 'file',
        label: 'CRM Export (CSV)',
        required: true,
      },
    ],
  },
  {
    id: 'contact',
    title: 'Get Your Analysis',
    description: 'Enter your email to receive your pipeline leak analysis and recovery recommendations.',
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

export default function PipelineLeakPage() {
  const [results, setResults] = useState<PipelineLeakResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: Record<string, any>) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'pipeline_leak',
          email: formData.email,
          input_data: { csv_data: formData.csv_data },
        }),
      });

      const result = await response.json();
      if (result.success) {
        setResults(result.data);
      }
    } catch (error) {
      console.error('Analysis failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Analyzing Your Pipeline</h2>
          <p className="text-zinc-400">Detecting leaks and calculating revenue at risk...</p>
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
            <h1 className="text-4xl font-bold text-white mb-4">Pipeline Leak Analysis</h1>
            <p className="text-xl text-zinc-400">Revenue leaks detected in your sales pipeline</p>
          </motion.div>

          <GatedResultContainer isGated={false}>
            <LeakDisplay results={results} />
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-400/10 rounded-full mb-6">
            <TrendingDown className="w-8 h-8 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Pipeline Leak Detector</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Identify revenue leaks in your sales pipeline and get actionable recovery recommendations
          </p>
        </motion.div>

        <MultiStepForm steps={formSteps} onSubmit={handleSubmit} className="mb-12" />

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Upload className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">CSV Upload</h3>
            <p className="text-sm text-zinc-400">Secure, privacy-first analysis of your pipeline data</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Leak Detection</h3>
            <p className="text-sm text-zinc-400">AI-powered identification of stalled deals and bottlenecks</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Revenue Recovery</h3>
            <p className="text-sm text-zinc-400">Actionable recommendations to recover at-risk revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function LeakDisplay({ results }: { results: PipelineLeakResult }) {
  return (
    <div className="space-y-8">
      {/* Pipeline Health Score */}
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-red-400 to-orange-500 rounded-full mb-4">
          <span className="text-4xl font-bold text-white">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Pipeline Health Score</h2>
        <p className="text-zinc-400">
          {results.score >= 80 ? 'Healthy' : results.score >= 60 ? 'Moderate Risk' : 'High Risk'}
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Revenue at Risk</h3>
          <div className="text-3xl font-bold text-red-400 mb-2">
            ${results.revenue_at_risk.toLocaleString()}
          </div>
          <p className="text-zinc-400">Potential revenue loss from pipeline leaks</p>
        </div>
        
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Total Deals Analyzed</h3>
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            {results.total_deals}
          </div>
          <p className="text-zinc-400">Deals in your pipeline</p>
        </div>
      </div>

      {/* Leak Breakdown */}
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
          <div className="text-2xl font-bold text-yellow-400 mb-2">
            {results.leaks_detected.stalled_deals}
          </div>
          <h4 className="font-medium text-white mb-1">Stalled Deals</h4>
          <p className="text-sm text-zinc-400">No activity in 30+ days</p>
        </div>
        
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
          <div className="text-2xl font-bold text-orange-400 mb-2">
            {results.leaks_detected.stage_bottlenecks}
          </div>
          <h4 className="font-medium text-white mb-1">Stage Bottlenecks</h4>
          <p className="text-sm text-zinc-400">Deals stuck in stages</p>
        </div>
        
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl text-center">
          <div className="text-2xl font-bold text-red-400 mb-2">
            {results.leaks_detected.velocity_issues}
          </div>
          <h4 className="font-medium text-white mb-1">Velocity Issues</h4>
          <p className="text-sm text-zinc-400">Slow-moving deals</p>
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4">Recovery Recommendations</h3>
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