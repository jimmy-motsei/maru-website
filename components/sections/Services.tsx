"use client";

import { motion } from "framer-motion";
import { Megaphone, Mountain, TrendingUp, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      id: "01",
      category: "CRM AUTOMATION",
      title: "Supercharged CRM with AI-Powered Automations",
      description: "Transform your CRM from a simple customer management tool into a powerhouse of sales opportunities. With automations and AI custom solutions, your team can shift their focus to strategic revenue-focused tasks.",
      icon: Megaphone,
      hex: "#22d3ee",
      link: "/services/sales-systems",
    },
    {
      id: "02",
      category: "MARKETING AUTOMATION",
      title: "Better Results with AI & Marketing Automation",
      description: "63% of companies that do not use marketing automation cite a lack of expertise as the main reason. Don't let a lack of expertise or complex software hinder your marketing efforts.",
      icon: Mountain,
      hex: "#22d3ee",
      link: "/services/lead-generation",
    },
    {
      id: "03",
      category: "SALES AUTOMATION",
      title: "Increase Revenue with AI & Sales Automation",
      description: "Salespeople only spend 33% of their time selling, with 15% lost in email and data. Maximize your sales team's potential by automating time-consuming tasks.",
      icon: TrendingUp,
      hex: "#22d3ee",
      link: "/services/sales-systems",
    },
    {
      id: "04",
      category: "SOFTWARE INTEGRATION",
      title: "Software Integration and Automation",
      description: "Don't let your technology become a barrier to your business's growth. At Maru, we specialize in optimizing your software to ensure seamless integration with your existing tech stack.",
      icon: Target,
      hex: "#22d3ee",
      link: "/services/office-automation",
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
    <section className="bg-white py-12 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.h2 
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-black">Harness the Power of</span> AI & Automation
          </motion.h2>
          <motion.p 
            className="text-gray-700 text-lg md:text-xl font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            How we grow your business with AI & Automation
          </motion.p>
        </div>

        {/* Services Grid - 2x2 Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
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
              variants={fadeUpVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              {/* Card - Subtle Gray with Shadow and Left Border Accent */}
              <div className="bg-gray-50 p-8 rounded-2xl shadow-xl hover:shadow-2xl border-l-4 border-l-[#22d3ee] transition-all duration-300 h-full flex flex-col">
                
                {/* Category Tag */}
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="text-xs font-semibold tracking-wider uppercase"
                    style={{ color: service.hex }}
                  >
                    {service.category}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-xl md:text-2xl text-black leading-snug mb-4">
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                
                {/* Read More Link */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 text-black font-medium hover:text-[#22d3ee] transition-colors group/link"
                >
                  Read more
                  <ArrowRight 
                    size={16} 
                    className="group-hover/link:translate-x-1 transition-transform" 
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
