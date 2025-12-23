'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Download, 
  Mail, 
  Phone, 
  Building,
  Calendar,
  Star
} from 'lucide-react';

interface Lead {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  company_name?: string;
  website_url?: string;
  phone?: string;
  lead_score: number;
  assessment_count: number;
  created_at: string;
  hubspot_contact_id?: string;
}

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('created_at');
  const [filterScore, setFilterScore] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        search: searchTerm,
        sort: sortBy,
        ...(filterScore && { min_score: filterScore }),
      });
      
      const response = await fetch(`/api/admin/leads?${params}`);
      const data = await response.json();
      setLeads(data.leads || []);
    } catch (error) {
      console.error('Failed to fetch leads:', error);
    } finally {
      setLoading(false);
    }
  };

  const exportLeads = async () => {
    try {
      const response = await fetch('/api/admin/leads/export');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Export failed:', error);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, [searchTerm, sortBy, filterScore]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400 bg-green-400/10';
    if (score >= 60) return 'text-yellow-400 bg-yellow-400/10';
    if (score >= 40) return 'text-orange-400 bg-orange-400/10';
    return 'text-red-400 bg-red-400/10';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return 'Hot';
    if (score >= 60) return 'Warm';
    if (score >= 40) return 'Cool';
    return 'Cold';
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-white mb-2">Lead Management</h1>
            <p className="text-zinc-400">Manage and track your assessment leads</p>
          </div>
          
          <button
            onClick={exportLeads}
            className="bg-cyan-600 hover:bg-cyan-700 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </button>
        </div>

        {/* Filters */}
        <div className="bg-zinc-900 rounded-xl p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search leads..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-zinc-800 border border-zinc-700 rounded-lg pl-10 pr-4 py-2 text-white"
              />
            </div>
            
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="created_at">Sort by Date</option>
              <option value="lead_score">Sort by Score</option>
              <option value="assessment_count">Sort by Assessments</option>
              <option value="company_name">Sort by Company</option>
            </select>
            
            <select
              value={filterScore}
              onChange={(e) => setFilterScore(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-lg px-4 py-2 text-white"
            >
              <option value="">All Scores</option>
              <option value="80">Hot Leads (80+)</option>
              <option value="60">Warm Leads (60+)</option>
              <option value="40">Cool Leads (40+)</option>
              <option value="0">Cold Leads (0-39)</option>
            </select>
            
            <div className="text-zinc-400 flex items-center">
              Total: {leads.length} leads
            </div>
          </div>
        </div>

        {/* Leads Table */}
        <div className="bg-zinc-900 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-zinc-800">
                <tr>
                  <th className="text-left p-4 text-zinc-300 font-medium">Contact</th>
                  <th className="text-left p-4 text-zinc-300 font-medium">Company</th>
                  <th className="text-left p-4 text-zinc-300 font-medium">Score</th>
                  <th className="text-left p-4 text-zinc-300 font-medium">Assessments</th>
                  <th className="text-left p-4 text-zinc-300 font-medium">Created</th>
                  <th className="text-left p-4 text-zinc-300 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={6} className="text-center p-8 text-zinc-400">
                      Loading leads...
                    </td>
                  </tr>
                ) : leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center p-8 text-zinc-400">
                      No leads found
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <motion.tr
                      key={lead.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="border-b border-zinc-800 hover:bg-zinc-800/50"
                    >
                      <td className="p-4">
                        <div>
                          <div className="text-white font-medium">
                            {lead.first_name || lead.last_name 
                              ? `${lead.first_name || ''} ${lead.last_name || ''}`.trim()
                              : 'Unknown'
                            }
                          </div>
                          <div className="text-zinc-400 text-sm flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            {lead.email}
                          </div>
                          {lead.phone && (
                            <div className="text-zinc-400 text-sm flex items-center gap-1">
                              <Phone className="w-3 h-3" />
                              {lead.phone}
                            </div>
                          )}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div>
                          <div className="text-white flex items-center gap-1">
                            <Building className="w-3 h-3" />
                            {lead.company_name || 'Not provided'}
                          </div>
                          {lead.website_url && (
                            <div className="text-zinc-400 text-sm">
                              {lead.website_url}
                            </div>
                          )}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(lead.lead_score)}`}>
                          <Star className="w-3 h-3" />
                          {lead.lead_score} - {getScoreLabel(lead.lead_score)}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div className="text-white font-medium">
                          {lead.assessment_count || 0}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div className="text-zinc-400 text-sm flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(lead.created_at).toLocaleDateString()}
                        </div>
                      </td>
                      
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${lead.email}`}
                            className="text-cyan-400 hover:text-cyan-300 p-1"
                            title="Send Email"
                          >
                            <Mail className="w-4 h-4" />
                          </a>
                          {lead.hubspot_contact_id && (
                            <div className="text-green-400 p-1" title="Synced to HubSpot">
                              <Building className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}