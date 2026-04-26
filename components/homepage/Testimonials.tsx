"use client";

import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

const TESTIMONIALS: {
  company: string;
  location: string;
  industry: string;
  size: string;
  quote: string;
  author: string;
  role: string;
  icon: React.ComponentType<{ className?: string }>;
  highlight: string;
  metrics: { label: string; value: string }[];
}[] = [];

export function Testimonials() {
  return (
    <section className="bg-surface-muted py-section-tab lg:py-section border-t border-border-strong text-text-primary">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SplitHeadline
              as="h2"
              leadingText="Real Results From"
              emphasisText="South African Businesses"
              className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[68px] font-sans text-text-primary mb-6 leading-[1.1]"
              leadingWeight="light"
              emphasisWeight="strong"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            Measurable ROI from AI-powered revenue systems for South African SMEs.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-surface-inverse rounded-2xl p-8 lg:p-[60px] shadow-lg border border-border-subtle flex flex-col h-full"
              >
                {/* Header: Company & Logo Placeholder */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-black/5 flex items-center justify-center text-text-primary">
                            <Icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-text-primary text-sm">{item.company}</h3>
                            <p className="text-xs text-text-muted">{item.location}</p>
                        </div>
                    </div>
                    <Quote className="w-8 h-8 text-action-primary/20" />
                </div>

                {/* Quote */}
                <p className="copy-card text-text-secondary italic mb-6 flex-grow">
                   "{item.quote}"
                </p>

                {/* Highlight Badge */}
                <div className="bg-action-primary/5 border border-action-primary/20 rounded-lg p-3 mb-6 text-center">
                    <p className="text-action-primary font-bold text-sm">{item.highlight}</p>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 gap-4 border-t border-border-subtle pt-4 mb-6">
                    {item.metrics.map((metric, i) => (
                        <div key={i}>
                            <p className="text-text-primary font-mono font-bold">{metric.value}</p>
                            <p className="text-text-muted text-xs">{metric.label}</p>
                        </div>
                    ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div>
                        <p className="text-sm font-bold text-text-primary">{item.author}</p>
                        <p className="text-xs text-text-muted">{item.role}</p>
                    </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
