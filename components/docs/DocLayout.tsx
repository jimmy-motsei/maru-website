'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import { AtmosphericBackground } from '@/components/ui/AtmosphericBackground';

interface DocLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  category: string;
  readTime: string;
  lastUpdated: string;
  author?: string;
  breadcrumbs: Array<{ label: string; href: string }>;
}

export default function DocLayout({
  children,
  title,
  description,
  category,
  readTime,
  lastUpdated,
  author = 'Maru Team',
  breadcrumbs,
}: DocLayoutProps) {
  const allBreadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Knowledge', href: '/knowledge' },
    ...breadcrumbs,
  ];

  return (
    <main>
      {/* Hero Banner */}
      <section className="bg-dark relative min-h-[40vh] flex items-end overflow-hidden">
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 py-16 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ol className="flex items-center gap-2 text-sm">
              {allBreadcrumbs.map((crumb, index) => (
                <li key={crumb.href} className="flex items-center gap-2">
                  <Link
                    href={crumb.href}
                    className={`transition-colors ${
                      index === allBreadcrumbs.length - 1
                        ? "text-accent"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {crumb.label}
                  </Link>
                  {index < allBreadcrumbs.length - 1 && (
                    <span className="text-white/30">/</span>
                  )}
                </li>
              ))}
            </ol>
          </motion.nav>

          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6"
          >
            <Link
              href="/knowledge"
              className="inline-flex items-center text-accent hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Knowledge Base
            </Link>
          </motion.div>

          {/* Title & Meta */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-sm font-medium mb-4">
              {category}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4 max-w-4xl">{title}</h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl">{description}</p>
          </motion.div>

          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center gap-6 text-sm text-white/40"
          >
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {author}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {readTime} read
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Updated {lastUpdated}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-[#f5f5f5] py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl p-8 lg:p-12 max-w-4xl mx-auto"
          >
            <div className="prose prose-slate prose-lg max-w-none">
              {children}
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-dark mb-2">
                  Was this article helpful?
                </h3>
                <p className="text-dark/60 text-base leading-relaxed mb-4">
                  Let us know if you found this documentation useful or if you have suggestions for improvement.
                </p>
                <div className="flex gap-4">
                  <button className="bg-accent text-white px-4 py-2 rounded-lg hover:bg-accent/90 transition-colors">
                    👍 Yes, helpful
                  </button>
                  <button className="bg-gray-200 text-dark px-4 py-2 rounded-lg hover:bg-gray-300 transition-colors">
                    👎 Needs improvement
                  </button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-dark mb-4">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/knowledge" className="group">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-dark group-hover:text-accent">
                      Browse All Documentation
                    </h4>
                    <p className="text-dark/60 text-base leading-relaxed mt-1">
                      Explore our complete knowledge base
                    </p>
                  </div>
                </Link>
                <Link href="/contact" className="group">
                  <div className="border border-gray-200 rounded-lg p-4 hover:border-accent transition-colors">
                    <h4 className="font-medium text-dark group-hover:text-accent">
                      Contact Support
                    </h4>
                    <p className="text-dark/60 text-base leading-relaxed mt-1">
                      Get help from our support team
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </motion.article>
        </div>
      </section>
    </main>
  );
}