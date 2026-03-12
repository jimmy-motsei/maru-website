"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, GraduationCap, LucideIcon } from "lucide-react";
import { SafeLink } from "@/components/ui/SafeLink";

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: LucideIcon;
  iconColor: string;
}

const fixedServices: ServiceInfo[] = [
  {
    id: "support-chatbot",
    title: "Support Chatbot",
    description: "24/7 intelligent chatbot that answers customer questions, qualifies leads, and escalates to your team when needed.",
    features: ["Instant Responses", "Lead Qualification", "Multi-language Support", "Human Handoff"],
    href: "/services/customer-support-chatbots",
    icon: MessageCircle,
    iconColor: "#22c55e",
  },
  {
    id: "ai-academy",
    title: "AI for Business Training",
    description: "Practical AI training for teams. Learn to use ChatGPT, automate workflows, and apply AI to real business problems.",
    features: ["Hands-on Curriculum", "Real Business Cases", "Team Training", "AI Implementation"],
    href: "https://academy.maruonline.com",
    icon: GraduationCap,
    iconColor: "#f97316",
  },
];

interface OtherServicesProps {
  currentServiceId?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function OtherServices({ currentServiceId: _currentServiceId }: OtherServicesProps) {
  void _currentServiceId;
  // Always show all 3 services regardless of current page
  const displayServices = fixedServices;

  return (
    <section className="bg-[#f5f5f5] py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-h2 font-medium text-black leading-[1.2] mb-4 md:mb-0"
          >
            Other <span className="font-thin text-gray-400">Services</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <SafeLink
              href="/services"
              className="inline-flex items-center gap-2 text-dark hover:text-accent transition-colors group"
            >
              <span className="font-medium">View all</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </SafeLink>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl mx-auto"
        >
          {displayServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <div className="group bg-white rounded-2xl p-8 lg:p-[60px] h-full shadow-sm border border-action-primary hover:border-action-primary transition-colors duration-300 flex flex-col">
                  {/* Title + Inline Icon */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl border flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${service.iconColor}20`,
                        borderColor: `${service.iconColor}55`,
                      }}
                    >
                      <IconComponent size={20} style={{ color: service.iconColor }} />
                    </div>
                    <h3 className="text-xl font-bold text-dark">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="copy-card text-dark/70 mb-6">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="copy-body text-dark/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <SafeLink
                      href={service.href}
                      className="inline-flex items-center justify-center bg-action-primary group-hover:bg-highlight-hover text-white font-bold uppercase text-sm rounded-full px-6 py-3 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-lg w-full"
                    >
                      See more
                    </SafeLink>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
