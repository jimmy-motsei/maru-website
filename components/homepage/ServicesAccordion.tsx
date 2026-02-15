"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Clock, DollarSign, Search, Users, Settings, ShieldCheck, BookOpen } from "lucide-react";
import { SafeLink } from "@/components/ui/SafeLink";
import { SplitHeadline } from "@/components/ui/SplitHeadline";

const SERVICES = [
  {
    id: "audit",
    name: "AI Implementation Audit & Roadmap",
    icon: Search,
    description: "Audit your AI stack, find revenue leaks, and prioritize fast ROI actions.",
    whatItIs: "We audit your tools, workflows, and data flow to pinpoint blockers and quick wins.",
    whoItsFor: "Teams with AI tools but unclear ROI or no clear next move.",
    whatYouGet: [
      "Stack usage audit with integration and ownership gaps",
      "Revenue leaks ranked by impact and effort",
      "90-day roadmap with accountable implementation owners",
      "Quick wins designed for 30-day ROI"
    ],
    timeline: "2 weeks",
    investment: "Starting at R25,000",
  },
  {
    id: "human-centric",
    name: "Human-Centric AI Implementation",
    icon: Users,
    description: "Implement AI workflows that scale output without losing brand voice and trust.",
    whatItIs: "We tune AI touchpoints to sound like your team and protect relationship quality.",
    whoItsFor: "Teams that want efficiency without robotic customer experiences.",
    whatYouGet: [
      "Brand voice rules across AI touchpoints",
      "Chatbot tone and response design",
      "Humanized email and content workflows",
      "Relationship-first lead scoring logic"
    ],
    timeline: "6-8 weeks",
    investment: "Starting at R75,000",
  },
  {
    id: "revops",
    name: "Revenue Operations (RevOps) Optimization",
    icon: Settings,
    description: "Align marketing, sales, and success systems so more qualified leads convert.",
    whatItIs: "We connect teams and tooling into one revenue workflow with shared context.",
    whoItsFor: "Businesses with leads coming in but conversion and attribution still weak.",
    whatYouGet: [
      "Marketing, sales, and success workflow integration",
      "Lead qualification and handoff standards",
      "Revenue attribution model and reporting",
      "Conversion funnel bottleneck optimization"
    ],
    timeline: "8-12 weeks",
    investment: "Starting at R120,000",
  },
  {
    id: "popia",
    name: "POPIA-Compliant Growth Systems",
    icon: ShieldCheck,
    description: "Build consent-first growth systems that stay compliant and still drive pipeline.",
    whatItIs: "We implement POPIA-ready data and messaging workflows across your revenue system.",
    whoItsFor: "Businesses managing privacy risk while scaling customer acquisition.",
    whatYouGet: [
      "POPIA audit with practical remediation plan",
      "Consent capture and preference management",
      "Privacy-first lead generation playbooks",
      "Data governance standards for teams"
    ],
    timeline: "4-6 weeks",
    investment: "Starting at R50,000",
  },
  {
    id: "training",
    name: "AI Capability Building & Training",
    icon: BookOpen,
    description: "Train your team to run, improve, and own your AI revenue systems.",
    whatItIs: "Hands-on training that builds internal operators for AI workflows and optimization.",
    whoItsFor: "Businesses that want long-term capability, not ongoing vendor dependency.",
    whatYouGet: [
      "Team training on core AI operations",
      "Playbooks, SOPs, and handover docs",
      "Monthly optimization review framework",
      "Capability assessment and growth plan"
    ],
    timeline: "4 weeks",
    investment: "Starting at R40,000",
  },
];

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState<string | null>("audit");

  return (
    <section className="bg-surface-inverse py-section text-text-primary">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SplitHeadline
              as="h2"
              leadingText="How We Operationalize"
              emphasisText="Your AI Investment"
              className="text-4xl md:text-5xl lg:text-[68px] font-sans text-text-primary mb-6 leading-[1.1]"
              leadingWeight="light"
              emphasisWeight="strong"
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-text-secondary leading-relaxed max-w-2xl"
          >
            We make your existing AI tools produce measurable revenue, faster.
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="flex flex-col gap-6 max-w-5xl mx-auto">
          {SERVICES.map((service, index) => {
             const isActive = activeService === service.id;
             const Icon = service.icon;

             return (
               <motion.div
                 key={service.id}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.1 }}
                 className={`group rounded-2xl transition-all duration-300 overflow-hidden border ${isActive ? 'bg-card-dark border-action-primary shadow-2xl md:scale-[1.01]' : 'bg-surface-muted border-transparent hover:bg-surface-inverse hover:border-border-strong'}`}
               >
                 
                 {/* Summary / Clickable Area */}
                 <button 
                    onClick={() => setActiveService(isActive ? null : service.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                 >
                    <div className="flex items-center gap-4 md:gap-6 min-w-0">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-action-primary text-text-primary' : 'bg-gray-200 text-gray-500 group-hover:bg-action-primary/20 group-hover:text-action-primary'}`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <div className="min-w-0">
                            <h3 className={`text-xl md:text-2xl font-bold font-sans mb-2 transition-colors ${isActive ? 'text-text-inverse' : 'text-text-primary'}`}>
                                {service.name}
                            </h3>
                            {!isActive && (
                                <p className="copy-card text-text-muted hidden md:block">
                                    {service.description}
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isActive ? 'border-action-primary bg-action-primary text-text-primary rotate-180' : 'border-border-strong text-text-muted group-hover:border-action-primary group-hover:text-action-primary'}`}>
                        <ChevronDown className="w-5 h-5" />
                    </div>
                 </button>

                 {/* Expanded Content */}
                 <AnimatePresence>
                    {isActive && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                                    
                                    {/* Left: What/Who */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-action-primary font-bold uppercase tracking-wider text-sm mb-3">What It Is</h4>
                                            <p className="copy-card text-white/80">
                                                {service.whatItIs}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-action-primary font-bold uppercase tracking-wider text-sm mb-3">Who It's For</h4>
                                            <p className="copy-card text-white/80">
                                                {service.whoItsFor}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Deliverables/Timeline */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-action-primary font-bold uppercase tracking-wider text-sm mb-3">What You Get</h4>
                                            <ul className="space-y-2">
                                                {service.whatYouGet.map((item, i) => (
                                                    <li key={i} className="copy-body flex items-start gap-2 text-white/80">
                                                        <Check className="w-4 h-4 text-action-primary mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-white/50" />
                                                <span className="text-white/60 text-sm">{service.timeline}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                 <DollarSign className="w-4 h-4 text-white/50" />
                                                 <span className="text-white/60 text-sm">{service.investment}</span>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    )}
                 </AnimatePresence>

               </motion.div>
             );
          })}
        </div>
        
        {/* CTA Footer */}
        <div className="text-center mt-16 bg-card-dark py-12 px-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Not sure which service you need?</h3>
            <p className="text-white/70 font-normal mb-8 max-w-lg mx-auto">We'll assess your current state and recommend the right starting point.</p>
            <SafeLink
                href="/ai-implementation-assessment"
                className="inline-flex items-center justify-center bg-action-primary hover:opacity-90 text-text-primary font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
                Get Your Free AI Implementation Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SafeLink>
        </div>

      </div>
    </section>
  );
}
