'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Users, 
  Target, 
  TrendingUp, 
  RefreshCw
} from 'lucide-react';

interface DashboardMetrics {
  overview: {
    totalAssessments: number;
    totalLeads: number;
    conversionRate: string;
    avgLeadScore: string;
  };
  assessmentBreakdown: Record<string, number>;
  dailyStats: Array<{
    date: string;
    assessments: number;
    leads: number;
    conversion: string;
  }>;
  topPerformers: Array<{
    id: string;
    type: string;
    score: number;
    created_at: string;
  }>;
}

export default function AdminDashboard() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [timeframe, setTimeframe] = useState('30d');
  const [assessmentFilter, setAssessmentFilter] = useState('');

  const fetchMetrics = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        timeframe,
        ...(assessmentFilter && { assessment_type: assessmentFilter }),
      });
      
      const response = await fetch(`/api/analytics/dashboard?${params}`);
      const data = await response.json();
      setMetrics(data);
    } catch (error) {
      console.error('Failed to fetch metrics:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMetrics();
  }, [timeframe, assessmentFilter]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="flex items-center gap-3">
          <RefreshCw className="w-6 h-6 animate-spin text-cyan-400" />
          <span>Loading analytics...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
            <p className="text-zinc-400">Lead generation performance overview</p>
          </div>
          
          <div className="flex items-center gap-4">
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="7d">Last 7 days</option>
              <option value="30d">Last 30 days</option>
              <option value="90d">Last 90 days</option>
            </select>
            
            <select
              value={assessmentFilter}
              onChange={(e) => setAssessmentFilter(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="">All Assessments</option>
              <option value="lead_score">Lead Score</option>
              <option value="pipeline_leak">Pipeline Leak</option>
              <option value="proposal">Proposal</option>
              <option value="tech_audit">Tech Audit</option>
            </select>
            
            <button
              onClick={fetchMetrics}
              className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </button>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard
            title="Total Assessments"
            value={metrics?.overview.totalAssessments || 0}
            icon={BarChart3}
            color="cyan"
          />
          <MetricCard
            title="Total Leads"
            value={metrics?.overview.totalLeads || 0}
            icon={Users}
            color="green"
          />
          <MetricCard
            title="Conversion Rate"
            value={`${metrics?.overview.conversionRate || 0}%`}
            icon={Target}
            color="blue"
          />
          <MetricCard
            title="Avg Lead Score"
            value={metrics?.overview.avgLeadScore || 0}
            icon={TrendingUp}
            color="purple"
          />
        </div>

        {/* Assessment Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Assessment Breakdown</h3>
            <div className="space-y-4">
              {Object.entries(metrics?.assessmentBreakdown || {}).map(([type, count]) => (
                <div key={type} className="flex items-center justify-between">
                  <span className="capitalize text-zinc-300">{type.replace('_', ' ')}</span>
                  <div className="flex items-center gap-3">
                    <div className="w-32 bg-zinc-800 rounded-full h-2">
                      <div 
                        className="bg-cyan-400 h-2 rounded-full"
                        style={{ 
                          width: `${(count / (metrics?.overview.totalAssessments || 1)) * 100}%` 
                        }}
                      />
                    </div>
                    <span className="text-white font-medium w-8">{count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Top Performers</h3>
            <div className="space-y-3">
              {metrics?.topPerformers.slice(0, 5).map((performer, index) => (
                <div key={performer.id} className="flex items-center justify-between py-2">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-cyan-600 rounded-full flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                    <span className="capitalize text-zinc-300">
                      {performer.type.replace('_', ' ')}
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">{performer.score}</div>
                    <div className="text-xs text-zinc-500">
                      {new Date(performer.created_at).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Daily Stats */}
        <div className="bg-zinc-900 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4">Daily Performance</h3>
          <div className="overflow-x-auto">
            <div className="grid grid-cols-4 gap-4 text-xs text-zinc-400 mb-2 font-medium">
              <div>Date</div>
              <div>Assessments</div>
              <div>Leads</div>
              <div>Conversion</div>
            </div>
            {metrics?.dailyStats.slice(-7).map((stat) => (
              <div key={stat.date} className="grid grid-cols-4 gap-4 py-2 border-b border-zinc-800">
                <div className="text-zinc-300">{new Date(stat.date).toLocaleDateString()}</div>
                <div className="text-white">{stat.assessments}</div>
                <div className="text-white">{stat.leads}</div>
                <div className="text-cyan-400">{stat.conversion}%</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: any;
  color: 'cyan' | 'green' | 'blue' | 'purple';
}

function MetricCard({ title, value, icon: Icon, color }: MetricCardProps) {
  const colorClasses = {
    cyan: 'text-cyan-400 bg-cyan-400/10',
    green: 'text-green-400 bg-green-400/10',
    blue: 'text-blue-400 bg-blue-400/10',
    purple: 'text-purple-400 bg-purple-400/10',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-zinc-900 rounded-xl p-6"
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div className="text-2xl font-bold text-white mb-1">{value}</div>
      <div className="text-zinc-400 text-sm">{title}</div>
    </motion.div>
  );
}