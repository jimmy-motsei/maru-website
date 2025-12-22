'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, DollarSign, TrendingUp, Search } from 'lucide-react';
import MultiStepForm from '@/components/lead-generation/MultiStepForm';
import GatedResultContainer from '@/components/lead-generation/GatedResultContainer';
import { FormStep, TechAuditResult, Tool } from '@/lib/types/lead-generation';

export default function TechAuditPage() {
  const [results, setResults] = useState<TechAuditResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [tools, setTools] = useState<Tool[]>([]);
  const [selectedTools, setSelectedTools] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchTools();
  }, []);

  const fetchTools = async () => {
    try {
      const response = await fetch('/api/tools');
      const data = await response.json();
      if (data.success) {
        setTools(data.data);
      }
    } catch (error) {
      console.error('Failed to fetch tools:', error);
    }
  };

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    tool.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addTool = (tool: Tool) => {
    if (!selectedTools.find(t => t.tool_id === tool.id)) {
      setSelectedTools([...selectedTools, {
        tool_id: tool.id,
        name: tool.name,
        category: tool.category,
        monthly_cost: tool.avg_monthly_cost || 0,
        users_count: 1,
      }]);
    }
  };

  const removeTool = (toolId: string) => {
    setSelectedTools(selectedTools.filter(t => t.tool_id !== toolId));
  };

  const updateToolCost = (toolId: string, cost: number, users: number) => {
    setSelectedTools(selectedTools.map(t => 
      t.tool_id === toolId ? { ...t, monthly_cost: cost, users_count: users } : t
    ));
  };

  const handleSubmit = async (formData: Record<string, any>) => {
    if (selectedTools.length === 0) {
      alert('Please select at least one tool to audit');
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'tech_audit',
          email: formData.email,
          input_data: {
            selected_tools: selectedTools,
            company_size: formData.company_size,
            industry: formData.industry,
          },
        }),
      });

      const result = await response.json();
      if (result.success) {
        setResults(result.data);
      }
    } catch (error) {
      console.error('Tech audit failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400/20 border-t-cyan-400 rounded-full animate-spin mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-white mb-2">Auditing Your Tech Stack</h2>
          <p className="text-zinc-400">Analyzing costs and detecting redundancies...</p>
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
            <h1 className="text-4xl font-bold text-white mb-4">Tech Stack Audit Results</h1>
            <p className="text-xl text-zinc-400">ROI analysis and optimization recommendations</p>
          </motion.div>

          <GatedResultContainer isGated={false}>
            <AuditDisplay results={results} />
          </GatedResultContainer>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-400/10 rounded-full mb-6">
            <Settings className="w-8 h-8 text-purple-400" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Tech Stack ROI Auditor</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Analyze your software stack for redundancies and cost optimization opportunities
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tool Selection */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Select Your Tools</h2>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="max-h-96 overflow-y-auto space-y-2">
              {filteredTools.map(tool => (
                <div key={tool.id} className="flex items-center justify-between p-3 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div>
                    <h4 className="font-medium text-white">{tool.name}</h4>
                    <p className="text-sm text-zinc-400">{tool.category}</p>
                  </div>
                  <button
                    onClick={() => addTool(tool)}
                    className="px-3 py-1 bg-cyan-400 text-black text-sm rounded hover:bg-cyan-300"
                  >
                    Add
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Tools */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold text-white">Your Stack ({selectedTools.length})</h2>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {selectedTools.map(tool => (
                <div key={tool.tool_id} className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium text-white">{tool.name}</h4>
                    <button
                      onClick={() => removeTool(tool.tool_id)}
                      className="text-red-400 hover:text-red-300 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Monthly Cost</label>
                      <input
                        type="number"
                        value={tool.monthly_cost}
                        onChange={(e) => updateToolCost(tool.tool_id, Number(e.target.value), tool.users_count)}
                        className="w-full px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Users</label>
                      <input
                        type="number"
                        value={tool.users_count}
                        onChange={(e) => updateToolCost(tool.tool_id, tool.monthly_cost, Number(e.target.value))}
                        className="w-full px-2 py-1 bg-zinc-800 border border-zinc-700 rounded text-white text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {selectedTools.length > 0 && (
              <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    ${selectedTools.reduce((sum, tool) => sum + (tool.monthly_cost * tool.users_count), 0).toLocaleString()}
                  </div>
                  <p className="text-zinc-400">Total Monthly Cost</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {selectedTools.length > 0 && (
          <div className="mt-12">
            <ContactForm onSubmit={handleSubmit} />
          </div>
        )}
      </div>
    </div>
  );
}

function ContactForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const [formData, setFormData] = useState({
    email: '',
    company_size: '',
    industry: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <h3 className="text-xl font-semibold text-white text-center mb-6">Get Your Audit Results</h3>
      
      <input
        type="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
        required
      />
      
      <select
        value={formData.company_size}
        onChange={(e) => setFormData({...formData, company_size: e.target.value})}
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        required
      >
        <option value="">Company Size</option>
        <option value="startup">Startup (1-10)</option>
        <option value="smb">Small Business (11-50)</option>
        <option value="enterprise">Enterprise (50+)</option>
      </select>
      
      <select
        value={formData.industry}
        onChange={(e) => setFormData({...formData, industry: e.target.value})}
        className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
        required
      >
        <option value="">Industry</option>
        <option value="technology">Technology</option>
        <option value="healthcare">Healthcare</option>
        <option value="finance">Finance</option>
        <option value="retail">Retail</option>
        <option value="manufacturing">Manufacturing</option>
        <option value="professional-services">Professional Services</option>
      </select>
      
      <button
        type="submit"
        className="w-full py-3 bg-cyan-400 hover:bg-cyan-300 text-black font-medium rounded-lg transition-colors"
      >
        Analyze My Tech Stack
      </button>
    </form>
  );
}

function AuditDisplay({ results }: { results: TechAuditResult }) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mb-4">
          <span className="text-4xl font-bold text-white">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Optimization Score</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Monthly Spend</h3>
          <div className="text-3xl font-bold text-cyan-400 mb-2">
            ${results.total_monthly_cost.toLocaleString()}
          </div>
          <p className="text-zinc-400">Total software costs</p>
        </div>
        
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-lg font-semibold text-white mb-4">Potential Savings</h3>
          <div className="text-3xl font-bold text-green-400 mb-2">
            ${results.redundancies_found.reduce((sum, r) => sum + r.potential_savings, 0).toLocaleString()}
          </div>
          <p className="text-zinc-400">From eliminating redundancies</p>
        </div>
      </div>

      {results.redundancies_found.length > 0 && (
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4">Redundancies Found</h3>
          <div className="space-y-4">
            {results.redundancies_found.map((redundancy, index) => (
              <div key={index} className="p-4 bg-zinc-800 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium text-white">{redundancy.category}</h4>
                  <span className="text-green-400 font-semibold">
                    ${redundancy.potential_savings}/month
                  </span>
                </div>
                <p className="text-zinc-400 text-sm">
                  Consider removing: {redundancy.tools.join(', ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4">Optimization Recommendations</h3>
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