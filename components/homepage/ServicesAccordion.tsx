"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Check, Clock, DollarSign, Search, Users, Settings, ShieldCheck, BookOpen } from "lucide-react";
import { SafeLink } from "@/components/ui/SafeLink";

const SERVICES = [
  {
    id: "audit",
    name: "AI Implementation Audit & Roadmap",
    icon: Search,
    description: "A comprehensive assessment of your current AI marketing stack, identifying gaps between investment and impact.",
    whatItIs: "A comprehensive assessment of your current AI marketing stack, identifying gaps between investment and impact. We analyze what you own, how you're using it, where the revenue leaks are, and what quick wins are available.",
    whoItsFor: "Businesses that have invested in AI tools but aren't seeing the revenue impact they expected. You know something isn't working, but you're not sure what to fix first.",
    whatYouGet: [
      "Technology stack audit and utilization analysis",
      "Revenue leak identification and quantification",
      "90-day prioritized implementation roadmap",
      "Quick-win opportunities targeting 30-day ROI"
    ],
    timeline: "2 weeks",
    investment: "Starting at R25,000",
  },
  {
    id: "human-centric",
    name: "Human-Centric AI Implementation",
    icon: Users,
    description: "Hands-on implementation of AI marketing systems with a focus on preserving brand authenticity.",
    whatItIs: "Hands-on implementation of AI marketing systems with a focus on preserving brand authenticity and customer relationships. We configure tools to sound like you, feel like you, and maintain the personal touch.",
    whoItsFor: "Businesses concerned that AI will make them feel robotic. You want efficiency without losing the authentic customer relationships that built your business.",
    whatYouGet: [
      "Brand voice integration into all AI touchpoints",
      "Chatbot personality development",
      "Email and content humanization frameworks",
      "Relationship-focused lead scoring"
    ],
    timeline: "6-8 weeks",
    investment: "Starting at R75,000",
  },
  {
    id: "revops",
    name: "Revenue Operations (RevOps) Optimization",
    icon: Settings,
    description: "End-to-end alignment of your marketing, sales, and customer success systems to maximize revenue.",
    whatItIs: "End-to-end alignment of your marketing, sales, and customer success systems. We connect your AI tools into a unified revenue engine, ensuring marketing-qualified leads convert and sales teams have context.",
    whoItsFor: "Businesses generating leads but struggling with conversion rates, sales-marketing misalignment, or tracking ROI.",
    whatYouGet: [
      "Marketing-sales-success system integration",
      "Lead handoff and qualification framework",
      "Revenue attribution modeling",
      "Conversion funnel optimization"
    ],
    timeline: "8-12 weeks",
    investment: "Starting at R120,000",
  },
  {
    id: "popia",
    name: "POPIA-Compliant Growth Systems",
    icon: ShieldCheck,
    description: "Implementation of consent-based, compliant marketing and data systems that build trust while driving growth.",
    whatItIs: "Implementation of consent-based, compliant marketing and data systems. We help you transition to inbound attraction, ensuring every interaction respects privacy and builds trust.",
    whoItsFor: "Businesses concerned about POPIA compliance, data security, or building trust in a privacy-conscious market.",
    whatYouGet: [
      "POPIA compliance audit and remediation",
      "Consent management system implementation",
      "Privacy-first lead generation strategies",
      "Data governance frameworks"
    ],
    timeline: "4-6 weeks",
    investment: "Starting at R50,000",
  },
  {
    id: "training",
    name: "AI Capability Building & Training",
    icon: BookOpen,
    description: "Hands-on training for your team so they can maintain and optimize AI systems after implementation.",
    whatItIs: "Hands-on training and capability building for your team. We don't create dependency—we build internal expertise so your team can interpret insights and optimize workflows.",
    whoItsFor: "Businesses that want to own their AI capabilities, not rent them. You're willing to invest in your team's skills.",
    whatYouGet: [
      "Team training on AI system management",
      "Playbook documentation & SOPs",
      "Ongoing optimization frameworks",
      "Internal capability assessment"
    ],
    timeline: "4 weeks",
    investment: "Starting at R40,000",
  },
];

export function ServicesAccordion() {
  const [activeService, setActiveService] = useState<string | null>("audit");

  return (
    <section className="bg-white py-section text-deep-navy">
      <div className="container mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-[68px] font-bold font-sans text-deep-navy mb-6 leading-[1.1]"
          >
            How We Operationalize Your <br/>
            <span className="text-electric-cyan">AI Investments</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 leading-relaxed max-w-2xl"
          >
            We don't sell you new technology. We make your existing technology work. Our implementation-focused services bridge the gap between AI investment and revenue impact.
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
                 className={`group rounded-2xl transition-all duration-300 overflow-hidden border ${isActive ? 'bg-deep-navy border-electric-cyan shadow-2xl scale-[1.02]' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}`}
               >
                 
                 {/* Summary / Clickable Area */}
                 <button 
                    onClick={() => setActiveService(isActive ? null : service.id)}
                    className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                 >
                    <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${isActive ? 'bg-electric-cyan text-deep-navy' : 'bg-gray-200 text-gray-500 group-hover:bg-electric-cyan/20 group-hover:text-electric-cyan'}`}>
                            <Icon className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className={`text-xl md:text-2xl font-bold font-sans mb-2 transition-colors ${isActive ? 'text-white' : 'text-deep-navy'}`}>
                                {service.name}
                            </h3>
                            {!isActive && (
                                <p className="text-gray-500 text-sm md:text-base hidden md:block">
                                    {service.description}
                                </p>
                            )}
                        </div>
                    </div>
                    
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all ${isActive ? 'border-electric-cyan bg-electric-cyan text-deep-navy rotate-180' : 'border-gray-200 text-gray-400 group-hover:border-electric-cyan group-hover:text-electric-cyan'}`}>
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
                                            <h4 className="text-electric-cyan font-bold uppercase tracking-wider text-sm mb-3">What It Is</h4>
                                            <p className="text-white/80 leading-relaxed text-sm">
                                                {service.whatItIs}
                                            </p>
                                        </div>
                                        <div>
                                            <h4 className="text-electric-cyan font-bold uppercase tracking-wider text-sm mb-3">Who It's For</h4>
                                            <p className="text-white/80 leading-relaxed text-sm">
                                                {service.whoItsFor}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Right: Deliverables/Timeline */}
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="text-electric-cyan font-bold uppercase tracking-wider text-sm mb-3">What You Get</h4>
                                            <ul className="space-y-2">
                                                {service.whatYouGet.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-white/80 text-sm">
                                                        <Check className="w-4 h-4 text-warm-amber mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        
                                        <div className="flex items-center gap-6 pt-4 border-t border-white/10">
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-gray-400" />
                                                <span className="text-white/60 text-sm">{service.timeline}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                 <DollarSign className="w-4 h-4 text-gray-400" />
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
        <div className="text-center mt-16 bg-deep-navy py-12 px-6 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold text-white mb-6">Not sure which service you need?</h3>
            <p className="text-white/60 mb-8 max-w-lg mx-auto">We'll assess your current state and recommend the right starting point.</p>
            <SafeLink
                href="/assessments/lead-score"
                className="inline-flex items-center justify-center bg-warm-amber hover:bg-orange-600 text-deep-navy font-bold text-base px-8 py-4 rounded-lg shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
                Get Your Free AI Implementation Audit
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </SafeLink>
        </div>

      </div>
    </section>
  );
}
