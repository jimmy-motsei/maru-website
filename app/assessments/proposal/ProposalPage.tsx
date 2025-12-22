'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, Zap, Download, Users } from 'lucide-react';
import MultiStepForm from '@/components/lead-generation/MultiStepForm';
import GatedResultContainer from '@/components/lead-generation/GatedResultContainer';
import { FormStep } from '@/lib/types/lead-generation';

const formSteps: FormStep[] = [
  {
    id: 'company',
    title: 'Company Information',
    fields: [
      { name: 'company_name', type: 'text', label: 'Company Name', required: true },
      { name: 'industry', type: 'select', label: 'Industry', required: true, options: [
        { value: 'technology', label: 'Technology' },
        { value: 'healthcare', label: 'Healthcare' },
        { value: 'finance', label: 'Finance' },
        { value: 'retail', label: 'Retail' },
        { value: 'manufacturing', label: 'Manufacturing' },
        { value: 'professional-services', label: 'Professional Services' },
      ]},
      { name: 'company_size', type: 'select', label: 'Company Size', required: true, options: [
        { value: 'startup', label: 'Startup (1-10)' },
        { value: 'smb', label: 'Small Business (11-50)' },
        { value: 'enterprise', label: 'Enterprise (50+)' },
      ]},
      { name: 'challenges', type: 'textarea', label: 'Key Challenges', placeholder: 'Describe your main business challenges...' },
    ],
  },
  {
    id: 'project',
    title: 'Project Scope',
    fields: [
      { name: 'services', type: 'textarea', label: 'Services Needed', placeholder: 'List the services you need...', required: true },
      { name: 'timeline', type: 'select', label: 'Timeline', required: true, options: [
        { value: 'asap', label: 'ASAP' },
        { value: '1-3months', label: '1-3 months' },
        { value: '3-6months', label: '3-6 months' },
        { value: '6months+', label: '6+ months' },
      ]},
      { name: 'budget_range', type: 'select', label: 'Budget Range', required: true, options: [
        { value: 'under-10k', label: 'Under $10k' },
        { value: '10k-25k', label: '$10k - $25k' },
        { value: '25k-50k', label: '$25k - $50k' },
        { value: '50k+', label: '$50k+' },
      ]},
    ],
  },
  {
    id: 'contact',
    title: 'Contact Information',
    fields: [
      { name: 'email', type: 'email', label: 'Email Address', required: true },
      { name: 'primary_contact', type: 'text', label: 'Primary Contact', required: true },
      { name: 'stakeholders', type: 'textarea', label: 'Other Stakeholders', placeholder: 'List other decision makers...' },
    ],
  },
];

export default function ProposalPage() {
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (formData: Record<string, any>) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'proposal',
          email: formData.email,
          input_data: {
            company_info: {
              name: formData.company_name,
              industry: formData.industry,
              size: formData.company_size,
              challenges: formData.challenges?.split(',').map((c: string) => c.trim()),
            },
            project_scope: {
              services: formData.services?.split(',').map((s: string) => s.trim()),
              timeline: formData.timeline,
              budget_range: formData.budget_range,
            },
            decision_makers: {
              primary_contact: formData.primary_contact,
              stakeholders: formData.stakeholders?.split(',').map((s: string) => s.trim()),
            },
          },
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
          <p className="text-zinc-400">Creating a customized business proposal...</p>
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
            <h1 className="text-4xl font-bold text-white mb-4">Your Custom Proposal</h1>
            <p className="text-xl text-zinc-400">AI-generated business proposal ready for delivery</p>
          </motion.div>

          <GatedResultContainer isGated={false}>
            <ProposalDisplay results={results} />
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
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-400/10 rounded-full mb-6">
            <FileText className="w-8 h-8 text-blue-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Proposal Accelerator</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Generate professional business proposals in minutes with AI-powered customization
          </p>
        </motion.div>

        <MultiStepForm steps={formSteps} onSubmit={handleSubmit} className="mb-12" />

        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Zap className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">AI-Powered</h3>
            <p className="text-sm text-zinc-400">Intelligent proposal generation based on your requirements</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Users className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Stakeholder Ready</h3>
            <p className="text-sm text-zinc-400">Professional format suitable for decision makers</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <Download className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Instant Download</h3>
            <p className="text-sm text-zinc-400">Get your proposal as PDF or Word document</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProposalDisplay({ results }: { results: any }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4">
          <span className="text-4xl font-bold text-white">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Proposal Quality Score</h2>
      </div>

      {Object.entries(results.proposal_sections).map(([key, content]) => (
        <div key={key} className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4 capitalize">
            {key.replace('_', ' ')}
          </h3>
          <p className="text-zinc-300 leading-relaxed">{content as string}</p>
        </div>
      ))}

      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4">Next Steps</h3>
        <div className="space-y-3">
          {results.recommendations.map((rec: string, index: number) => (
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