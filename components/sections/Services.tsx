"use client";

import { motion } from "framer-motion";
import { Megaphone, Mountain, TrendingUp, Target, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Services() {
  const services = [
    {
      id: "01",
      category: "CRM AUTOMATION",
      title: "Convert More Opportunities Into Revenue",
      description: "Transform your CRM into a revenue-generating engine. Our AI-powered automations optimize every touchpoint in your sales pipeline, improving conversion rates and ensuring no opportunity slips through the cracks.",
      icon: Megaphone,
      hex: "#22d3ee",
      link: "/services/sales-systems",
    },
    {
      id: "02",
      category: "MARKETING AUTOMATION",
      title: "Generate Qualified Leads Consistently",
      description: "Precision targeting meets intelligent automation. We build marketing systems that attract your ideal clients and nurture them with personalized journeys—delivering qualified leads to your sales team on autopilot.",
      icon: Mountain,
      hex: "#22d3ee",
      link: "/services/lead-generation",
    },
    {
      id: "03",
      category: "SALES AUTOMATION",
      title: "Shorten Your Sales Cycle and Close More Deals",
      description: "Speed wins deals. We automate follow-ups, streamline proposals, and give your sales team the insights they need to close faster—improving win rates and accelerating your path to revenue.",
      icon: TrendingUp,
      hex: "#22d3ee",
      link: "/services/sales-systems",
    },
    {
      id: "04",
      category: "SOFTWARE INTEGRATION",
      title: "Maximize ROI from Your Tech Stack",
      description: "Your existing tools have untapped potential. We connect and optimize your software ecosystem to eliminate data silos, reduce manual work, and unlock the hidden value in your technology investments.",
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
            className="font-bold mb-6 text-black"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <span className="font-light text-black">Precision Systems for</span> Breakthrough Growth
          </motion.h2>
          <motion.p 
            className="text-gray-700 type-lg font-light"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            AI-powered solutions that optimize every step of your marketing and sales operations
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
                <h3 className="font-bold type-h4 text-black leading-snug mb-4">
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
