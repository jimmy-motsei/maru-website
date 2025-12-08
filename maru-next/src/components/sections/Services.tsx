"use client";

import { motion } from "framer-motion";
import { Megaphone, Mountain, TrendingUp, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      id: "01",
      title: "Supercharged CRM with AI-Powered Automations",
      description: "Transform your CRM from a simple customer management tool into a powerhouse of sales opportunities. With automations and AI custom solutions, your team can shift their focus to strategic revenue-focused tasks, boosting productivity and efficiency.",
      subDescription: "We're also certified Airtable and Pipedrive Partners, so we can show you how to get the most out of Pipedrive. Use another CRM? Our automation experts are skilled in all major CRMs, including HubSpot.",
      icon: Megaphone,
      bgClass: "bg-cyan-400/10 border-cyan-400/20",
      hex: "#22d3ee", // Cyan 400
    },
    {
      id: "02",
      title: "Better Results with AI & Marketing Automation",
      description: "63% of companies that do not use marketing automation cite a lack of expertise as the main reason for not using it. Don't let a lack of expertise or complex software hinder your marketing efforts and drag on your results.",
      subDescription: "Maru's AI and automation solutions seamlessly integrate your marketing tools with your CRM and sales teams. Using AI & automation we can improve your ROI and drive better marketing results.",
      icon: Mountain,
      bgClass: "bg-purple-400/10 border-purple-400/20",
      hex: "#c084fc", // Purple 400
    },
    {
      id: "03",
      title: "Increase Revenue with AI & Sales Automation",
      description: "Salespeople only spend 33% of their time selling, with 15% lost in email and data. Maximize your sales team's potential by automating time-consuming tasks. Maru's AI and automation solutions free up your sales team, improving productivity and helping you to reduce the cost of sales.",
      subDescription: "We implement AI and automation solutions to auto-pilot for overseeing tasks, enabling your sales team to focus on what they do best - sell.",
      icon: TrendingUp,
      bgClass: "bg-amber-400/10 border-amber-400/20",
      hex: "#fbbf24", // Amber 400
    },
    {
      id: "04",
      title: "Software Integration and Automation",
      description: "Don't let your technology become a barrier to your business's growth. At Maru, we specialize in optimizing your software to ensure seamless integration and automation with your existing tech stack.",
      subDescription: "If you're overwhelmed by the volume of software choices available or simply seeking to maximize the return on your existing tech investment, Maru can help. Our team of experts are ready to deliver business growth for your organization.",
      icon: Target,
      bgClass: "bg-emerald-400/10 border-emerald-400/20",
      hex: "#34d399", // Emerald 400
    },
  ];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const }
    }
  };

  return (
    <section className="bg-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-gray-500">Harness the Power of</span> AI & Automation
          </motion.h2>
          <motion.p 
            className="text-gray-500 text-lg md:text-xl font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            How we grow your business with AI & Automation
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group flex flex-col gap-5 bg-white p-7 rounded-2xl border border-gray-200 hover:border-[var(--color-accent)] hover:shadow-lg transition-all duration-300 h-full"
              variants={fadeUpVariants}
            >
              <div 
                className={`w-12 h-12 rounded-xl flex items-center justify-center border ${service.bgClass}`}
              >
                <service.icon 
                  size={24} 
                  strokeWidth={1.5} 
                  style={{ color: service.hex }} 
                />
              </div>
              
              <div>
                <h3 className="font-bold mb-3 text-lg text-black leading-snug">
                  {service.title}
                </h3>
                
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>
                
                {service.subDescription && (
                  <p className="text-sm text-gray-500 leading-relaxed pt-4 border-t border-gray-100">
                    {service.subDescription}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}


