'use client';

import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import Link from 'next/link';

interface SearchResult {
  title: string;
  description: string;
  category: string;
  url: string;
  readTime: string;
}

const searchData: SearchResult[] = [
  {
    title: 'System Overview',
    description: 'Complete overview of the Maru Lead Generation Engine architecture, features, and capabilities.',
    category: 'Getting Started',
    url: '/knowledge/getting-started/system-overview',
    readTime: '5 min',
  },
  {
    title: 'Quick Start Guide',
    description: 'Get up and running with your first assessment in 10 minutes.',
    category: 'Getting Started',
    url: '/knowledge/getting-started/quick-start-guide',
    readTime: '10 min',
  },
  {
    title: 'Lead Score Predictor Guide',
    description: 'Master the AI-powered lead scoring system and website analysis.',
    category: 'Assessment Tools',
    url: '/knowledge/assessment-tools/lead-score-predictor',
    readTime: '15 min',
  },
  {
    title: 'Pipeline Leak Detector Manual',
    description: 'Identify and fix revenue leaks in your sales pipeline.',
    category: 'Assessment Tools',
    url: '/knowledge/assessment-tools/pipeline-leak-detector',
    readTime: '18 min',
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation for developers and integrations.',
    category: 'Technical Documentation',
    url: '/knowledge/technical/api-reference',
    readTime: '25 min',
  },
  {
    title: 'Dashboard Overview',
    description: 'Navigate and use the admin dashboard effectively.',
    category: 'Admin & Analytics',
    url: '/knowledge/admin-analytics/dashboard-overview',
    readTime: '10 min',
  },
];

export default function KnowledgeSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const filtered = searchData.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.description.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
    setIsOpen(true);
  }, [query]);

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search documentation..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pl-12 pr-12 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search Results */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
          {results.length > 0 ? (
            <div className="p-2">
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  className="block p-3 rounded-lg hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-medium text-slate-900 mb-1">{result.title}</h3>
                      <p className="text-sm text-slate-600 mb-2">{result.description}</p>
                      <div className="flex items-center text-xs text-slate-500">
                        <span className="bg-slate-100 px-2 py-1 rounded mr-2">{result.category}</span>
                        <span>{result.readTime}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-4 text-center text-slate-500">
              <p>No results found for "{query}"</p>
              <p className="text-sm mt-1">Try searching for "API", "dashboard", or "assessment"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}