'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Target, Zap, CheckCircle, Download, Users } from 'lucide-react';

interface ProposalResult {
  score: number;
  proposal: {
    executiveSummary: string;
    problemStatement: string;
    proposedSolution: string;
    implementation: string;
    timeline: string;
    investment: string;
    nextSteps: string;
  };
  recommendations: string[];
  winProbability: number;
  competitiveAdvantages: string[];
}

export default function ProposalPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    companySize: '',
    projectType: '',
    budget: '',
    timeline: '',
    challenges: [] as string[],
    goals: [] as string[],
    stakeholders: '',
    decisionProcess: '',
    email: '',
  });
  const [results, setResults] = useState<ProposalResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const steps = [
    {
      title: 'Company Information',
      description: 'Tell us about your company and project',
      fields: ['companyName', 'industry', 'companySize', 'projectType']
    },
    {
      title: 'Project Details',
      description: 'Define your budget, timeline, and requirements',
      fields: ['budget', 'timeline', 'challenges', 'goals']
    },
    {
      title: 'Decision Process',
      description: 'Help us understand your stakeholders and process',
      fields: ['stakeholders', 'decisionProcess']
    },
    {
      title: 'Contact Information',
      description: 'Get your personalized proposal',
      fields: ['email']
    }
  ];

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'proposal',
          email: formData.email,
          input_data: formData,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setResults(result.data);
      }
    } catch (error) {
      console.error('Proposal generation failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Generating Your Proposal</h2>
          <p className="text-zinc-400">Creating a customized proposal based on your requirements...</p>
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
            <h1 className="text-4xl font-bold text-white mb-4">Your Proposal is Ready</h1>
            <p className="text-xl text-zinc-400">AI-generated proposal tailored to your requirements</p>
          </motion.div>

          <ProposalResults results={results} />
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-400/10 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Proposal Accelerator</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Generate winning proposals in minutes with AI-powered content tailored to your client's needs
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  index <= currentStep ? 'bg-cyan-400 text-black' : 'bg-zinc-700 text-zinc-400'
                }`}>
                  {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-1 mx-2 ${
                    index < currentStep ? 'bg-cyan-400' : 'bg-zinc-700'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-white">{steps[currentStep].title}</h2>
            <p className="text-zinc-400">{steps[currentStep].description}</p>
          </div>
        </div>

        {/* Form Steps */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 mb-8">
          {currentStep === 0 && <CompanyInfoStep formData={formData} onChange={handleInputChange} />}
          {currentStep === 1 && <ProjectDetailsStep formData={formData} onChange={handleInputChange} />}
          {currentStep === 2 && <DecisionProcessStep formData={formData} onChange={handleInputChange} />}
          {currentStep === 3 && <ContactStep formData={formData} onChange={handleInputChange} />}

          {/* Navigation */}
          <div className="flex justify-between mt-8">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="px-6 py-3 border border-zinc-600 text-white font-medium rounded-lg hover:border-zinc-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors"
              >
                Generate Proposal
              </button>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-sm text-zinc-400">Advanced AI creates compelling, personalized proposals</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Win Probability</h3>
            <p className="text-sm text-zinc-400">Get data-driven insights on your chances of success</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Stakeholder Ready</h3>
            <p className="text-sm text-zinc-400">Professional format ready for decision makers</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CompanyInfoStep({ formData, onChange }: any) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">Company Name</label>
        <input
          type="text"
          value={formData.companyName}
          onChange={(e) => onChange('companyName', e.target.value)}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          placeholder="Your Company Name"
        />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Industry</label>
          <select
            value={formData.industry}
            onChange={(e) => onChange('industry', e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Select Industry</option>
            <option value="technology">Technology</option>
            <option value="healthcare">Healthcare</option>
            <option value="finance">Finance</option>
            <option value="retail">Retail</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="professional-services">Professional Services</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Company Size</label>
          <select
            value={formData.companySize}
            onChange={(e) => onChange('companySize', e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Select Size</option>
            <option value="startup">Startup (1-10 employees)</option>
            <option value="smb">Small Business (11-50 employees)</option>
            <option value="enterprise">Enterprise (50+ employees)</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-2">Project Type</label>
        <input
          type="text"
          value={formData.projectType}
          onChange={(e) => onChange('projectType', e.target.value)}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          placeholder="e.g., CRM Implementation, Marketing Automation, AI Integration"
        />
      </div>
    </div>
  );
}

function ProjectDetailsStep({ formData, onChange }: any) {
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-white mb-2">Budget Range</label>
          <select
            value={formData.budget}
            onChange={(e) => onChange('budget', e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Select Budget</option>
            <option value="under-10k">Under R10,000</option>
            <option value="10k-25k">R10,000 - R25,000</option>
            <option value="25k-50k">R25,000 - R50,000</option>
            <option value="50k-100k">R50,000 - R100,000</option>
            <option value="100k-plus">R100,000+</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-white mb-2">Timeline</label>
          <select
            value={formData.timeline}
            onChange={(e) => onChange('timeline', e.target.value)}
            className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          >
            <option value="">Select Timeline</option>
            <option value="asap">ASAP (1 month)</option>
            <option value="3-months">3 months</option>
            <option value="6-months">6 months</option>
            <option value="flexible">Flexible</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-2">Key Challenges</label>
        <textarea
          value={formData.challenges.join('\n')}
          onChange={(e) => onChange('challenges', e.target.value.split('\n').filter(Boolean))}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none h-24"
          placeholder="List your main challenges (one per line)"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-2">Project Goals</label>
        <textarea
          value={formData.goals.join('\n')}
          onChange={(e) => onChange('goals', e.target.value.split('\n').filter(Boolean))}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none h-24"
          placeholder="List your project goals (one per line)"
        />
      </div>
    </div>
  );
}

function DecisionProcessStep({ formData, onChange }: any) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">Key Stakeholders</label>
        <input
          type="text"
          value={formData.stakeholders}
          onChange={(e) => onChange('stakeholders', e.target.value)}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          placeholder="e.g., CEO, CTO, Marketing Director"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-white mb-2">Decision Process</label>
        <textarea
          value={formData.decisionProcess}
          onChange={(e) => onChange('decisionProcess', e.target.value)}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none h-24"
          placeholder="Describe your decision-making process and timeline"
        />
      </div>
    </div>
  );
}

function ContactStep({ formData, onChange }: any) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-white mb-2">Email Address</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => onChange('email', e.target.value)}
          className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
          placeholder="your@email.com"
        />
      </div>
    </div>
  );
}

function ProposalResults({ results }: { results: ProposalResult }) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'from-green-400 to-emerald-500';
    if (score >= 60) return 'from-yellow-400 to-orange-500';
    return 'from-red-400 to-red-500';
  };

  return (
    <div className="space-y-8">
      {/* Win Probability */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br ${getScoreColor(results.winProbability)} rounded-full mb-4`}>
          <span className="text-4xl font-bold text-black">{results.winProbability}%</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Win Probability</h2>
        <p className="text-zinc-400 text-lg">
          {results.winProbability >= 80 ? 'High Confidence' : results.winProbability >= 60 ? 'Good Chance' : 'Needs Improvement'}
        </p>
      </div>

      {/* Proposal Sections */}
      <div className="grid gap-6">
        {Object.entries(results.proposal).map(([key, content]) => (
          <div key={key} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <h3 className="text-lg font-semibold text-white mb-3 capitalize">
              {key.replace(/([A-Z])/g, ' $1').trim()}
            </h3>
            <div className="text-zinc-300 whitespace-pre-line leading-relaxed">
              {content}
            </div>
          </div>
        ))}
      </div>

      {/* Competitive Advantages */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-green-400" />
          Competitive Advantages
        </h3>
        <div className="grid md:grid-cols-2 gap-3">
          {results.competitiveAdvantages.map((advantage, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
              <p className="text-zinc-300 text-sm">{advantage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommendations */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-yellow-400" />
          Recommendations to Improve Win Rate
        </h3>
        <div className="space-y-3">
          {results.recommendations.map((rec, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-zinc-800/50 rounded-lg">
              <div className="w-6 h-6 bg-yellow-400/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-xs font-medium text-yellow-400">{index + 1}</span>
              </div>
              <p className="text-zinc-300 leading-relaxed">{rec}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Next Steps */}
      <div className="p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border border-cyan-800/30 rounded-xl">
        <h3 className="text-lg font-semibold text-white mb-2">Ready to Send Your Proposal?</h3>
        <p className="text-zinc-400 mb-4">
          Your AI-generated proposal is ready for customization and delivery to your client.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Download Proposal
          </button>
          <button className="px-6 py-3 border border-zinc-600 text-white font-medium rounded-lg hover:border-zinc-500 transition-colors">
            Schedule Review Call
          </button>
        </div>
      </div>
    </div>
  );
}