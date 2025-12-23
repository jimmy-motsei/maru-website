'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { BookOpen, Users, Settings, Code, Lightbulb, HelpCircle } from 'lucide-react';
import KnowledgeSearch from '@/components/docs/KnowledgeSearch';
import { AtmosphericBackground } from '@/components/ui/AtmosphericBackground';

const knowledgeCategories = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Quick start guides and system overview',
    icon: BookOpen,
    articles: [
      { title: 'System Overview', slug: 'system-overview', readTime: '5 min' },
      { title: 'Quick Start Guide', slug: 'quick-start-guide', readTime: '10 min' },
      { title: 'Account Setup', slug: 'account-setup', readTime: '8 min' },
      { title: 'First Assessment Walkthrough', slug: 'first-assessment', readTime: '12 min' },
    ]
  },
  {
    id: 'assessment-tools',
    title: 'Assessment Tools',
    description: 'Detailed guides for each assessment tool',
    icon: Users,
    articles: [
      { title: 'Lead Score Predictor Guide', slug: 'lead-score-predictor', readTime: '15 min' },
      { title: 'Pipeline Leak Detector Manual', slug: 'pipeline-leak-detector', readTime: '18 min' },
      { title: 'Proposal Accelerator Guide', slug: 'proposal-accelerator', readTime: '20 min' },
      { title: 'Tech Stack Auditor Documentation', slug: 'tech-stack-auditor', readTime: '22 min' },
    ]
  },
  {
    id: 'admin-analytics',
    title: 'Admin & Analytics',
    description: 'Dashboard management and analytics interpretation',
    icon: Settings,
    articles: [
      { title: 'Dashboard Overview', slug: 'dashboard-overview', readTime: '10 min' },
      { title: 'Lead Management', slug: 'lead-management', readTime: '12 min' },
      { title: 'Analytics Interpretation', slug: 'analytics-interpretation', readTime: '15 min' },
      { title: 'Export & Reporting', slug: 'export-reporting', readTime: '8 min' },
    ]
  },
  {
    id: 'technical',
    title: 'Technical Documentation',
    description: 'API reference, integrations, and troubleshooting',
    icon: Code,
    articles: [
      { title: 'API Reference', slug: 'api-reference', readTime: '25 min' },
      { title: 'Database Schema', slug: 'database-schema', readTime: '20 min' },
      { title: 'Integration Guides', slug: 'integration-guides', readTime: '30 min' },
      { title: 'Troubleshooting', slug: 'troubleshooting', readTime: '15 min' },
    ]
  },
  {
    id: 'best-practices',
    title: 'Best Practices',
    description: 'Strategies and optimization techniques',
    icon: Lightbulb,
    articles: [
      { title: 'Lead Generation Strategies', slug: 'lead-generation-strategies', readTime: '18 min' },
      { title: 'Assessment Optimization', slug: 'assessment-optimization', readTime: '16 min' },
      { title: 'Conversion Rate Improvement', slug: 'conversion-optimization', readTime: '20 min' },
      { title: 'Industry-Specific Tips', slug: 'industry-tips', readTime: '14 min' },
    ]
  },
  {
    id: 'faq-support',
    title: 'FAQ & Support',
    description: 'Common questions and support resources',
    icon: HelpCircle,
    articles: [
      { title: 'Frequently Asked Questions', slug: 'faq', readTime: '12 min' },
      { title: 'Common Error Solutions', slug: 'error-solutions', readTime: '10 min' },
      { title: 'Contact Support', slug: 'contact-support', readTime: '3 min' },
      { title: 'Video Tutorials', slug: 'video-tutorials', readTime: '5 min' },
    ]
  },
];

export default function KnowledgeBaseContent() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Knowledge", href: "/knowledge" },
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[50vh] flex items-end overflow-hidden">
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      index === breadcrumbs.length - 1
                        ? "text-accent"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl text-white mb-6 max-w-4xl"
          >
            Knowledge Base
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-8"
          >
            Everything you need to know about the Maru Lead Generation Engine. 
            From quick start guides to advanced integrations.
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-2xl"
          >
            <KnowledgeSearch />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Quick Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-dark mb-6">Popular Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Link href="/knowledge/getting-started/quick-start-guide" className="group">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-dark group-hover:text-accent">Quick Start Guide</h3>
                    <p className="text-dark/60 text-base leading-relaxed mt-2">Get up and running in 10 minutes</p>
                  </div>
                </Link>
                <Link href="/knowledge/assessment-tools/lead-score-predictor" className="group">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-dark group-hover:text-accent">Lead Score Predictor</h3>
                    <p className="text-dark/60 text-base leading-relaxed mt-2">Master the lead scoring system</p>
                  </div>
                </Link>
                <Link href="/knowledge/technical/api-reference" className="group">
                  <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-accent transition-colors">
                    <h3 className="font-semibold text-dark group-hover:text-accent">API Reference</h3>
                    <p className="text-dark/60 text-base leading-relaxed mt-2">Complete API documentation</p>
                  </div>
                </Link>
              </div>
            </div>

            {/* Categories */}
            <div className="grid lg:grid-cols-2 gap-8">
              {knowledgeCategories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="bg-white rounded-xl border border-gray-200 p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-accent/10 p-2 rounded-lg mr-3">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-dark">{category.title}</h3>
                        <p className="text-dark/60 text-base leading-relaxed">{category.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      {category.articles.map((article) => (
                        <Link
                          key={article.slug}
                          href={`/knowledge/${category.id}/${article.slug}`}
                          className="group flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <span className="text-dark/70 group-hover:text-accent font-medium">
                            {article.title}
                          </span>
                          <span className="text-dark/50 text-base">{article.readTime}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Help Section */}
            <div className="mt-12 bg-gradient-to-r from-accent to-blue-600 rounded-xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Can't find what you're looking for? Our support team is here to help you get the most out of your lead generation engine.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Contact Support
                </Link>
                <Link
                  href="/knowledge/faq-support/video-tutorials"
                  className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Watch Tutorials
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}