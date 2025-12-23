'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, TrendingDown, AlertTriangle, Target, FileText, Download } from 'lucide-react';

interface PipelineLeakResult {
  score: number;
  totalDeals: number;
  conversionRates: Record<string, number>;
  avgTimeInStage: Record<string, number>;
  leaks: PipelineLeak[];
  recommendations: string[];
  summary: {
    biggestLeak: string;
    potentialRevenue: number;
    quickWins: string[];
  };
}

interface PipelineLeak {
  stage: string;
  severity: 'high' | 'medium' | 'low';
  conversionRate: number;
  avgDaysInStage: number;
  dealsLost: number;
  revenueImpact: number;
  description: string;
}

export default function PipelineLeakPage() {
  const [results, setResults] = useState<PipelineLeakResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [email, setEmail] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0];
    if (uploadedFile && uploadedFile.type === 'text/csv') {
      setFile(uploadedFile);
    } else {
      alert('Please upload a CSV file');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file || !email) return;

    setIsLoading(true);
    try {
      const csvText = await file.text();
      
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'pipeline_leak',
          email,
          input_data: { csvData: csvText, fileName: file.name },
        }),
      });

      const result = await response.json();
      if (result.success) {
        setResults(result.data);
      }
    } catch (error) {
      console.error('Pipeline analysis failed:', error);
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
          <p className="text-zinc-400">Detecting leaks and bottlenecks...</p>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen bg-black py-12">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-white mb-4">Pipeline Analysis Results</h1>
            <p className="text-xl text-zinc-400">Identified leaks and optimization opportunities</p>
          </motion.div>

          <PipelineResults results={results} />
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
            Upload your CRM data to identify where deals are getting stuck and revenue is leaking from your sales pipeline
          </p>
        </motion.div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Upload Pipeline Data (CSV)
              </label>
              <div className="border-2 border-dashed border-zinc-700 rounded-lg p-6 text-center hover:border-zinc-600 transition-colors">
                <Upload className="w-8 h-8 text-zinc-400 mx-auto mb-2" />
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleFileUpload}
                  className="hidden"
                  id="csv-upload"
                />
                <label htmlFor="csv-upload" className="cursor-pointer">
                  <span className="text-white font-medium">Choose CSV file</span>
                  <p className="text-sm text-zinc-400 mt-1">
                    Upload your CRM export with deal stages, dates, and values
                  </p>
                </label>
                {file && (
                  <p className="text-cyan-400 mt-2">✓ {file.name}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                placeholder="your@email.com"
                required
              />
            </div>

            <button
              type="submit"
              disabled={!file || !email}
              className="w-full px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Analyze Pipeline
            </button>
          </form>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">CSV Analysis</h3>
            <p className="text-sm text-zinc-400">Upload your CRM data for automated pipeline analysis</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Leak Detection</h3>
            <p className="text-sm text-zinc-400">Identify bottlenecks and conversion rate issues</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Action Plan</h3>
            <p className="text-sm text-zinc-400">Get specific recommendations to fix pipeline leaks</p>
          </div>
        </div>

        <div className="mt-8 p-4 bg-zinc-900/50 border border-zinc-800 rounded-lg">
          <h4 className="font-medium text-white mb-2">Required CSV Columns:</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-zinc-400">
            <div>
              <p>• Deal Name (or Opportunity Name)</p>
              <p>• Stage (or Pipeline Stage)</p>
              <p>• Date Created</p>
            </div>
            <div>
              <p>• Date Modified (or Last Modified)</p>
              <p>• Deal Value (or Amount)</p>
              <p>• Lead Source (optional)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PipelineResults({ results }: { results: PipelineLeakResult }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-500';
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'text-red-400 bg-red-400/10';
      case 'medium': return 'text-yellow-400 bg-yellow-400/10';
      default: return 'text-green-400 bg-green-400/10';
    }
  };

  return (
    <div className="space-y-8">
      {/* Pipeline Health Score */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br ${getScoreColor(results.score)} rounded-full mb-4`}>
          <span className="text-4xl font-bold text-black">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Pipeline Health Score</h2>
        <p className="text-zinc-400 text-lg">
          {results.score >= 80 ? 'Healthy Pipeline' : results.score >= 60 ? 'Moderate Issues' : 'Critical Leaks Detected'}
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-white">{results.totalDeals}</div>
          <div className="text-sm text-zinc-400">Total Deals</div>
        </div>
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-400">{results.leaks.length}</div>
          <div className="text-sm text-zinc-400">Leaks Found</div>
        </div>
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-400">${results.summary.potentialRevenue.toLocaleString()}</div>
          <div className="text-sm text-zinc-400">Revenue at Risk</div>
        </div>
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-cyan-400">{results.summary.quickWins.length}</div>
          <div className="text-sm text-zinc-400">Quick Wins</div>
        </div>
      </div>

      {/* Pipeline Leaks */}
      {results.leaks.length > 0 && (
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Pipeline Leaks Detected
          </h3>
          <div className="space-y-4">
            {results.leaks.map((leak, index) => (
              <div key={index} className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{leak.stage}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(leak.severity)}`}>
                    {leak.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">{leak.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-zinc-500">Conversion Rate:</span>
                    <p className="text-white font-medium">{leak.conversionRate.toFixed(1)}%</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Avg Days:</span>
                    <p className="text-white font-medium">{leak.avgDaysInStage}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Deals Lost:</span>
                    <p className="text-white font-medium">{leak.dealsLost}</p>
                  </div>
                  <div>
                    <span className="text-zinc-500">Revenue Impact:</span>
                    <p className="text-red-400 font-medium">${leak.revenueImpact.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Conversion Rates */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4">Stage Conversion Rates</h3>
        <div className="space-y-3">
          {Object.entries(results.conversionRates).map(([stage, rate]) => (
            <div key={stage} className="flex justify-between items-center">
              <span className="text-zinc-300">{stage}</span>
              <div className="flex items-center gap-3">
                <div className="w-32 bg-zinc-700 rounded-full h-2">
                  <div
                    className={`bg-gradient-to-r ${getScoreColor(rate)} h-2 rounded-full`}
                    style={{ width: `${Math.min(100, rate)}%` }}
                  />
                </div>
                <span className="text-white font-medium w-12 text-right">{rate.toFixed(1)}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-400" />
          Recommended Actions
        </h3>
        <div className="space-y-3">
          {results.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
              <div className="w-6 h-6 bg-green-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-green-400">{index + 1}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Ready to Fix Your Pipeline?</h3>
        <p className="text-zinc-400 mb-4">
          Get expert help implementing these recommendations and optimizing your sales process.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors">
            Schedule Pipeline Review
          </button>
          <button className="px-6 py-3 border border-zinc-600 text-white font-medium rounded-lg hover:border-zinc-500 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
}