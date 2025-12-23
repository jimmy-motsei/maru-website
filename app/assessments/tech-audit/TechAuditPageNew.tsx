'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Settings, DollarSign, TrendingUp, AlertTriangle, Search, Plus, Minus } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  category: string;
  subcategory?: string;
  avg_monthly_cost: number;
  description?: string;
}

interface SelectedTool {
  toolId: string;
  name: string;
  category: string;
  monthlyCost: number;
  usersCount: number;
  usageFrequency: 'daily' | 'weekly' | 'monthly' | 'rarely';
}

interface TechAuditResult {
  score: number;
  totalMonthlyCost: number;
  redundancies: Redundancy[];
  optimizations: Optimization[];
  recommendations: string[];
  summary: {
    potentialSavings: number;
    efficiencyScore: number;
    redundancyCount: number;
    underutilizedTools: number;
  };
}

interface Redundancy {
  category: string;
  tools: string[];
  potentialSavings: number;
  severity: 'high' | 'medium' | 'low';
  description: string;
}

interface Optimization {
  type: 'cost' | 'efficiency' | 'integration';
  description: string;
  impact: number;
  effort: 'low' | 'medium' | 'high';
}

export default function TechAuditPage() {
  const [availableTools, setAvailableTools] = useState<Tool[]>([]);
  const [selectedTools, setSelectedTools] = useState<SelectedTool[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [companySize, setCompanySize] = useState('');
  const [industry, setIndustry] = useState('');
  const [teamSize, setTeamSize] = useState(10);
  const [email, setEmail] = useState('');
  const [results, setResults] = useState<TechAuditResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchAvailableTools();
  }, []);

  const fetchAvailableTools = async () => {
    try {
      const response = await fetch('/api/tools');
      const data = await response.json();
      if (data.success) {
        setAvailableTools(data.tools);
      }
    } catch (error) {
      console.error('Failed to fetch tools:', error);
    }
  };

  const categories = ['all', ...new Set(availableTools.map(tool => tool.category))];
  
  const filteredTools = availableTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
    const notSelected = !selectedTools.some(selected => selected.toolId === tool.id);
    return matchesSearch && matchesCategory && notSelected;
  });

  const addTool = (tool: Tool) => {
    const newTool: SelectedTool = {
      toolId: tool.id,
      name: tool.name,
      category: tool.category,
      monthlyCost: tool.avg_monthly_cost || 0,
      usersCount: 1,
      usageFrequency: 'daily',
    };
    setSelectedTools([...selectedTools, newTool]);
  };

  const removeTool = (toolId: string) => {
    setSelectedTools(selectedTools.filter(tool => tool.toolId !== toolId));
  };

  const updateTool = (toolId: string, field: keyof SelectedTool, value: any) => {
    setSelectedTools(selectedTools.map(tool => 
      tool.toolId === toolId ? { ...tool, [field]: value } : tool
    ));
  };

  const handleSubmit = async () => {
    if (selectedTools.length === 0 || !email) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          app_type: 'tech_audit',
          email,
          input_data: {
            selectedTools,
            companySize,
            industry,
            teamSize,
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
          <h2 className="text-xl font-semibold text-white mb-2">Analyzing Your Tech Stack</h2>
          <p className="text-zinc-400">Calculating ROI and identifying optimization opportunities...</p>
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
            <h1 className="text-4xl font-bold text-white mb-4">Tech Stack Analysis Results</h1>
            <p className="text-xl text-zinc-400">ROI analysis and optimization recommendations</p>
          </motion.div>

          <TechAuditResults results={results} />
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
            Analyze your current tech stack to identify redundancies, optimize costs, and improve efficiency
          </p>
        </motion.div>

        {/* Company Information */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Company Information</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">Industry</label>
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="">Select Industry</option>
                <option value="technology">Technology</option>
                <option value="healthcare">Healthcare</option>
                <option value="finance">Finance</option>
                <option value="retail">Retail</option>
                <option value="manufacturing">Manufacturing</option>
                <option value="professional-services">Professional Services</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Company Size</label>
              <select
                value={companySize}
                onChange={(e) => setCompanySize(e.target.value)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              >
                <option value="">Select Size</option>
                <option value="startup">Startup (1-10 employees)</option>
                <option value="smb">Small Business (11-50 employees)</option>
                <option value="enterprise">Enterprise (50+ employees)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Team Size</label>
              <input
                type="number"
                value={teamSize}
                onChange={(e) => setTeamSize(parseInt(e.target.value) || 1)}
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
                min="1"
                max="1000"
              />
            </div>
          </div>
        </div>

        {/* Tool Selection */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-4">Select Your Tools</h2>
          
          {/* Search and Filter */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search tools..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </option>
              ))}
            </select>
          </div>

          {/* Available Tools */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {filteredTools.slice(0, 12).map(tool => (
              <div key={tool.id} className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-white">{tool.name}</h3>
                  <button
                    onClick={() => addTool(tool)}
                    className="p-1 text-cyan-400 hover:bg-cyan-400/10 rounded"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-xs text-zinc-500 mb-2">{tool.category}</p>
                <p className="text-sm text-zinc-400 mb-2">{tool.description}</p>
                <p className="text-sm font-medium text-green-400">${tool.avg_monthly_cost}/month</p>
              </div>
            ))}
          </div>
        </div>

        {/* Selected Tools */}
        {selectedTools.length > 0 && (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-white mb-4">Your Tech Stack ({selectedTools.length} tools)</h2>
            <div className="space-y-4">
              {selectedTools.map(tool => (
                <div key={tool.toolId} className="p-4 bg-zinc-800 border border-zinc-700 rounded-lg">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-medium text-white">{tool.name}</h3>
                      <p className="text-xs text-zinc-500">{tool.category}</p>
                    </div>
                    <button
                      onClick={() => removeTool(tool.toolId)}
                      className="p-1 text-red-400 hover:bg-red-400/10 rounded"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Monthly Cost</label>
                      <input
                        type="number"
                        value={tool.monthlyCost}
                        onChange={(e) => updateTool(tool.toolId, 'monthlyCost', parseFloat(e.target.value) || 0)}
                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white text-sm"
                        min="0"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Users</label>
                      <input
                        type="number"
                        value={tool.usersCount}
                        onChange={(e) => updateTool(tool.toolId, 'usersCount', parseInt(e.target.value) || 1)}
                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white text-sm"
                        min="1"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-400 mb-1">Usage</label>
                      <select
                        value={tool.usageFrequency}
                        onChange={(e) => updateTool(tool.toolId, 'usageFrequency', e.target.value)}
                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded text-white text-sm"
                      >
                        <option value="daily">Daily</option>
                        <option value="weekly">Weekly</option>
                        <option value="monthly">Monthly</option>
                        <option value="rarely">Rarely</option>
                      </select>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-zinc-800/50 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-white font-medium">Total Monthly Cost:</span>
                <span className="text-2xl font-bold text-cyan-400">
                  ${selectedTools.reduce((sum, tool) => sum + (tool.monthlyCost * tool.usersCount), 0).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Email and Submit */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-8">
          <div className="max-w-md">
            <label className="block text-sm font-medium text-white mb-2">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none mb-4"
              placeholder="your@email.com"
            />
            <button
              onClick={handleSubmit}
              disabled={selectedTools.length === 0 || !email}
              className="w-full px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Analyze Tech Stack
            </button>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <DollarSign className="w-8 h-8 text-green-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Cost Analysis</h3>
            <p className="text-sm text-zinc-400">Identify redundancies and optimize spending</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <TrendingUp className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">ROI Optimization</h3>
            <p className="text-sm text-zinc-400">Maximize value from your tool investments</p>
          </div>
          <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
            <AlertTriangle className="w-8 h-8 text-yellow-400 mx-auto mb-3" />
            <h3 className="font-semibold text-white mb-2">Risk Assessment</h3>
            <p className="text-sm text-zinc-400">Identify underutilized and redundant tools</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechAuditResults({ results }: { results: TechAuditResult }) {
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
      {/* Efficiency Score */}
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br ${getScoreColor(results.score)} rounded-full mb-4`}>
          <span className="text-4xl font-bold text-black">{results.score}</span>
        </div>
        <h2 className="text-2xl font-semibold text-white mb-2">Tech Stack Efficiency</h2>
        <p className="text-zinc-400 text-lg">
          {results.score >= 80 ? 'Highly Optimized' : results.score >= 60 ? 'Room for Improvement' : 'Needs Optimization'}
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-white">${results.totalMonthlyCost.toLocaleString()}</div>
          <div className="text-sm text-zinc-400">Monthly Cost</div>
        </div>
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-400">${results.summary.potentialSavings.toLocaleString()}</div>
          <div className="text-sm text-zinc-400">Potential Savings</div>
        </div>
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-400">{results.summary.redundancyCount}</div>
          <div className="text-sm text-zinc-400">Redundancies</div>
        </div>
        <div className="p-4 bg-zinc-900 border border-zinc-800 rounded-lg text-center">
          <div className="text-2xl font-bold text-yellow-400">{results.summary.underutilizedTools}</div>
          <div className="text-sm text-zinc-400">Underutilized</div>
        </div>
      </div>

      {/* Redundancies */}
      {results.redundancies.length > 0 && (
        <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-400" />
            Redundancies Detected
          </h3>
          <div className="space-y-4">
            {results.redundancies.map((redundancy, index) => (
              <div key={index} className="p-4 bg-zinc-800/50 rounded-lg">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-white">{redundancy.category}</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getSeverityColor(redundancy.severity)}`}>
                    {redundancy.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-zinc-300 text-sm mb-3">{redundancy.description}</p>
                <div className="flex justify-between items-center">
                  <div className="text-sm text-zinc-400">
                    Tools: {redundancy.tools.join(', ')}
                  </div>
                  <div className="text-green-400 font-medium">
                    Save ${redundancy.potentialSavings.toLocaleString()}/month
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Recommendations */}
      <div className="p-6 bg-zinc-900 border border-zinc-800 rounded-xl">
        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-400" />
          Optimization Recommendations
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
        <h3 className="text-lg font-semibold text-white mb-2">Ready to Optimize Your Tech Stack?</h3>
        <p className="text-zinc-400 mb-4">
          Get expert help implementing these recommendations and maximizing your tool ROI.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-6 py-3 bg-cyan-400 text-black font-medium rounded-lg hover:bg-cyan-300 transition-colors">
            Schedule Optimization Call
          </button>
          <button className="px-6 py-3 border border-zinc-600 text-white font-medium rounded-lg hover:border-zinc-500 transition-colors">
            Download Full Report
          </button>
        </div>
      </div>
    </div>
  );
}