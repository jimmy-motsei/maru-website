"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingUp, Cog, MessageCircle, LucideIcon } from "lucide-react";

interface ServiceInfo {
  id: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  icon: LucideIcon;
  iconColor: string;
}

const allServices: ServiceInfo[] = [
  {
    id: "lead-generation",
    title: "Lead Generation",
    description: "Transform your pipeline with intelligent lead scoring that identifies high-value prospects.",
    features: ["AI Lead Scoring", "Prospect Identification", "Pipeline Automation", "Conversion Optimization"],
    href: "/services/lead-generation",
    icon: Target,
    iconColor: "#f97316",
  },
  {
    id: "sales-systems",
    title: "Sales Systems",
    description: "Automate your CRM workflows and unlock conversation intelligence that helps close deals faster.",
    features: ["CRM Automation", "Conversation Intelligence", "Deal Tracking", "Sales Analytics"],
    href: "/services/sales-systems",
    icon: TrendingUp,
    iconColor: "#10b981",
  },
  {
    id: "office-automation",
    title: "Office Ops Automation",
    description: "Streamline document processing and automate repetitive workflows for your team.",
    features: ["Document Processing", "Workflow Automation", "Task Management", "Process Optimization"],
    href: "/services/office-automation",
    icon: Cog,
    iconColor: "#a855f7",
  },
  {
    id: "whatsapp-solutions",
    title: "WhatsApp Solutions",
    description: "Engage customers 24/7 with intelligent chatbots that deliver personalized messaging at scale.",
    features: ["AI Chatbots", "Personalized Messaging", "24/7 Engagement", "Conversation Analytics"],
    href: "/services/whatsapp-solutions",
    icon: MessageCircle,
    iconColor: "#22c55e",
  },
];

interface OtherServicesProps {
  currentServiceId: string;
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

export function OtherServices({ currentServiceId }: OtherServicesProps) {
  const otherServices = allServices.filter((s) => s.id !== currentServiceId);

  return (
    <section className="bg-[#f5f5f5] py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-dark mb-4 md:mb-0"
          >
            Other services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-dark hover:text-accent transition-colors group"
            >
              <span className="font-medium">View all</span>
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Service Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {otherServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <motion.div key={service.id} variants={itemVariants}>
                <Link
                  href={service.href}
                  className="block bg-gray-50 rounded-2xl p-8 h-full shadow-xl hover:shadow-2xl border-l-4 border-l-[#22d3ee] transition-all duration-300 group"
                >
                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.iconColor}20` }}
                  >
                    <IconComponent size={28} style={{ color: service.iconColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-dark/70 mb-6 text-base leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="text-dark/70 text-base flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Read More */}
                  <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
                    <span className="text-sm font-medium">Read more</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
