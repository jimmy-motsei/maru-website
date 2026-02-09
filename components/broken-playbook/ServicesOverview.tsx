"use client";

import { motion } from "framer-motion";
import { ArrowRight, Globe, TrendingUp, Layers, MessageSquare } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Conversion Optimization",
    diagnosticShows: "Slow page speed, unclear value proposition, poor mobile experience, weak calls-to-action.",
    whatWeFix: "Low conversion rates (1-2% → 5-6%), page speed issues, lead capture design, unclear messaging.",
    howWeFix: "Surgical page optimization, A/B testing specific elements, conversion-focused copywriting—no full redesign needed.",
    href: "/services/lead-generation"
  },
  {
    icon: TrendingUp,
    title: "Sales Process Automation",
    diagnosticShows: "Deals stalling at specific stages, inconsistent follow-up, manual data entry, no pipeline visibility.",
    whatWeFix: "Manual admin work, slow response times, inconsistent follow-up, disconnected marketing and sales.",
    howWeFix: "Stage-specific automation, follow-up sequences, CRM optimization—built for small sales teams, not enterprises.",
    href: "/services/sales-systems"
  },
  {
    icon: Layers,
    title: "Marketing Stack Integration",
    diagnosticShows: "Redundant tools, broken integrations, data silos, underutilized software eating budget.",
    whatWeFix: "Manual data transfer, disconnected systems, redundant software costs, integration gaps.",
    howWeFix: "Strategic tool consolidation, custom integrations, automation that connects your stack—without requiring dedicated admins.",
    href: "/services/office-automation"
  },
  {
    icon: MessageSquare,
    title: "Follow-Up Automation",
    diagnosticShows: "Slow response times, inconsistent outreach, leads going cold, manual follow-up not scaling.",
    whatWeFix: "Response time (42 hours → 4 hours), follow-up consistency, multi-channel outreach, lead nurture gaps.",
    howWeFix: "Smart automation sequences, multi-channel integration (email, SMS, WhatsApp), response time optimization—without feeling robotic.",
    href: "/services/whatsapp-solutions"
  }
];

export function ServicesOverview() {
  return (
    <section className="py-24 lg:py-32 bg-[#09121A]">
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-16 text-center leading-tight">
            <span className="font-light text-zinc-400">After Diagnosis,</span>{" "}
            <span className="font-bold text-white">Here's What We Fix</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card-dark border border-card-border rounded-2xl p-8 hover:bg-card-dark-hover hover:border-highlight/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-highlight/10 border-2 border-highlight">
                      <Icon className="w-6 h-6 text-highlight" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white/80 mb-2">
                        Diagnostic Shows:
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {service.diagnosticShows}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white/80 mb-2">
                        What We Fix:
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {service.whatWeFix}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold text-white/80 mb-2">
                        How We Fix It:
                      </h4>
                      <p className="text-sm text-white/60 leading-relaxed">
                        {service.howWeFix}
                      </p>
                    </div>
                  </div>

                  <a
                    href={service.href}
                    className="inline-flex items-center gap-2 text-highlight hover:text-highlight-hover font-medium transition-colors group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
