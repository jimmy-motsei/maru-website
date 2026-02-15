"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ClipboardCheck, Map } from "lucide-react";

const BENEFITS = [
  {
    icon: TrendingUp,
    color: "text-electric-cyan",
    title: "Measurable ROI From Existing Investments",
    body: "We turn your current AI stack into measurable pipeline gains within one focused quarter.",
    metric: "Average 187% increase in lead conversion rates within 90 days",
  },
  {
    icon: Users,
    color: "text-warm-amber",
    title: "AI That Feels Like You",
    body: "Automations handle repetitive work while your team keeps the human moments customers remember.",
    metric: "92% of clients report improved customer satisfaction scores",
  },
  {
    icon: ClipboardCheck,
    color: "text-electric-cyan",
    title: "Clear Playbooks, Not Vague Consulting",
    body: "You get practical implementation playbooks with owners, steps, and timelines your team can execute.",
    metric: "Average 30-day time to first measurable improvement",
  },
  {
    icon: Map,
    color: "text-warm-amber",
    title: "South African Market Expertise",
    body: "Built for South African SMEs balancing POPIA, lean teams, multilingual customers, and tight budgets.",
    metric: "100% POPIA-compliant implementations",
  },
];

export function Benefits() {
  return (
    <section className="bg-surface-muted py-section text-text-primary">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="maru-headline-split text-4xl md:text-5xl lg:text-[68px] font-sans text-text-primary mb-6 leading-[1.1]">
              <span className="maru-headline-split-light">What Changes When You</span>
              <br />
              <span className="maru-headline-split-strong">Partner with Us</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-text-secondary leading-relaxed"
          >
            We turn AI investments into revenue systems your team can run confidently.
          </motion.p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group bg-surface-inverse rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-action-primary h-full flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-black/5 group-hover:bg-surface transition-colors duration-300`}>
                  <Icon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-text-primary mb-4 font-sans leading-tight">
                  {item.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                  {item.body}
                </p>

                {/* Metric */}
                <div className="w-full pt-4 border-t border-border-subtle">
                  <p className={`font-mono text-xs font-bold uppercase tracking-wider ${item.color}`}>
                    {item.metric}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
