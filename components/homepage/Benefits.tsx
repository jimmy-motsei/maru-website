"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ClipboardCheck, Map } from "lucide-react";

const BENEFITS = [
  {
    icon: TrendingUp,
    color: "text-electric-cyan",
    title: "Measurable ROI From Existing Investments",
    body: "You don't need more tools. You need to operationalize the ones you already have. We analyze your current AI stack, identify the gaps between investment and impact, and implement proven frameworks that turn underperforming technology into revenue-driving systems.",
    metric: "Average 187% increase in lead conversion rates within 90 days",
  },
  {
    icon: Users,
    color: "text-warm-amber",
    title: "AI That Feels Like You",
    body: "Your brand personality doesn't disappear when you scale with AI. We implement automation that handles the repetitive, low-value tasks while preserving—and even enhancing—the authentic touchpoints that build customer loyalty. Your chatbot sounds like your team.",
    metric: "92% of clients report improved customer satisfaction scores",
  },
  {
    icon: ClipboardCheck,
    color: "text-electric-cyan",
    title: "Clear Playbooks, Not Vague Consulting",
    body: "We don't deliver 50-page strategy decks that sit on a shelf. We provide step-by-step implementation playbooks tailored to your business, your team, and your existing technology. Every recommendation includes the 'what,' the 'how,' and the 'who'.",
    metric: "Average 30-day time to first measurable improvement",
  },
  {
    icon: Map,
    color: "text-warm-amber",
    title: "South African Market Expertise",
    body: "We understand the unique challenges of the South African mid-market: POPIA compliance requirements, multilingual customer bases, budget constraints, and the need to compete with both local and international players. We speak your language.",
    metric: "100% POPIA-compliant implementations",
  },
];

export function Benefits() {
  return (
    <section className="bg-[#f8fafc] py-section text-deep-navy">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[68px] font-bold font-sans text-deep-navy mb-6 leading-[1.1]"
          >
            What Changes When You Work With Maruonline
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, scaleX: 0 }}
             whileInView={{ opacity: 1, scaleX: 1 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="h-1 w-24 bg-electric-cyan mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            We bridge the gap between AI investment and revenue impact—while preserving the authentic relationships that built your business.
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
                className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-transparent hover:border-electric-cyan h-full flex flex-col items-center text-center"
              >
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 bg-deep-navy/5 group-hover:bg-deep-navy transition-colors duration-300`}>
                  <Icon className={`w-8 h-8 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-deep-navy mb-4 font-sans leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                  {item.body}
                </p>

                {/* Metric */}
                <div className="w-full pt-4 border-t border-gray-100">
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
