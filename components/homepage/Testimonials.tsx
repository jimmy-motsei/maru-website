"use client";

import { motion } from "framer-motion";
import { Quote, Briefcase, Factory, ShoppingBag } from "lucide-react";

const TESTIMONIALS = [
  {
    company: "TechFlow Manufacturing",
    location: "Johannesburg",
    industry: "Manufacturing & Distribution",
    size: "120 employees",
    quote: "We had invested heavily in HubSpot and various AI tools, but our marketing team was drowning in dashboards and our leads weren't converting. Maruonline didn't sell us more software—they showed us how to actually use what we already had.",
    author: "Thabo Mokoena",
    role: "Marketing Director",
    icon: Factory,
    highlight: "187% increase in conversion rate",
    metrics: [
      { label: "Lead Conversion", value: "8% → 23%" },
      { label: "Sales Alignment", value: "+65%" },
    ]
  },
  {
    company: "Khulisa Consulting",
    location: "Cape Town",
    industry: "Professional Services",
    size: "85 employees",
    quote: "Our biggest fear with AI was losing the personal relationships that built our business. Maruonline understood that immediately. They helped us implement AI that handles the administrative work so our consultants can spend more time actually consulting.",
    author: "Sarah van der Merwe",
    role: "Managing Partner",
    icon: Briefcase,
    highlight: "40% increase in billable hours",
    metrics: [
      { label: "Billable Hours", value: "+40%" },
      { label: "NPS Score", value: "+22 pts" },
    ]
  },
  {
    company: "AfriStyle Online",
    location: "Durban",
    industry: "E-Commerce & Retail",
    size: "65 employees",
    quote: "We were using AI chatbots, but customers hated them. Maruonline completely redesigned our chatbot personality—now it sounds like our brand. Our customer service costs dropped by 30%, but our customer satisfaction scores actually improved.",
    author: "Lindiwe Nkosi",
    role: "E-Commerce Director",
    icon: ShoppingBag,
    highlight: "30% cost reduction + improved NPS",
    metrics: [
      { label: "Service Costs", value: "-30%" },
      { label: "Response Time", value: "-75%" },
    ]
  },
];

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-section border-t border-gray-200 text-deep-navy">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[68px] font-bold font-sans text-deep-navy mb-6 leading-[1.1]"
          >
            Real Results From <br/><span className="text-electric-cyan">South African Businesses</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Our clients achieve measurable ROI while maintaining the authentic customer relationships that built their businesses.
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
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 flex flex-col h-full"
              >
                {/* Header: Company & Logo Placeholder */}
                <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-deep-navy/5 flex items-center justify-center text-deep-navy">
                            <Icon className="w-5 h-5" />
                        </div>
                        <div>
                            <h3 className="font-bold text-deep-navy text-sm">{item.company}</h3>
                            <p className="text-xs text-gray-400">{item.location}</p>
                        </div>
                    </div>
                    <Quote className="w-8 h-8 text-electric-cyan/20" />
                </div>

                {/* Quote */}
                <p className="text-gray-600 text-[15px] leading-relaxed italic mb-6 flex-grow">
                   "{item.quote}"
                </p>

                {/* Highlight Badge */}
                <div className="bg-electric-cyan/5 border border-electric-cyan/20 rounded-lg p-3 mb-6 text-center">
                    <p className="text-electric-cyan font-bold text-sm">{item.highlight}</p>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-4 mb-6">
                    {item.metrics.map((metric, i) => (
                        <div key={i}>
                            <p className="text-deep-navy font-mono font-bold">{metric.value}</p>
                            <p className="text-gray-400 text-xs">{metric.label}</p>
                        </div>
                    ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div>
                        <p className="text-sm font-bold text-deep-navy">{item.author}</p>
                        <p className="text-xs text-gray-500">{item.role}</p>
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
