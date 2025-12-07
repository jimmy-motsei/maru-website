"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Dodecahedron } from "@/components/ui/Dodecahedron";

const services = [
  {
    id: "01",
    title: "AI-Powered",
    titleLine2: "Lead Generation",
    description: "Transform your CRM from a simple contact manager into a powerhouse of sales opportunities. Our AI-powered lead scoring and qualification systems help your team focus on high-value prospects.",
    link: "/services/lead-generation",
  },
  {
    id: "02",
    title: "Sales &",
    titleLine2: "Marketing Automation",
    description: "Salespeople spend only 33% of their time actually selling. Maximize your team's potential with AI-powered automation that eliminates time-consuming tasks and frees them to close more deals.",
    link: "/services/sales-systems",
  },
  {
    id: "03",
    title: "Process Automation",
    titleLine2: "& Integration",
    description: "Don't let your technology become a barrier to growth. We optimize your software stack to ensure seamless integration and automation, eliminating manual data entry and streamlining workflows.",
    link: "/services/office-automation",
  },
  {
    id: "04",
    title: "AI-Powered",
    titleLine2: "Customer Engagement",
    description: "Engage customers 24/7 with intelligent WhatsApp chatbots that deliver personalized messaging at scale. Automate customer support and lead qualification while maintaining a human touch.",
    link: "/services/whatsapp-solutions",
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

export function Services() {
  return (
    <section className="bg-black py-24 md:py-32 relative overflow-hidden text-white">
      {/* Left Dodecahedron - 423x278px area, positioned top-left */}
      <div 
        className="absolute pointer-events-none opacity-20 hidden lg:block"
        style={{ 
          top: '40px', 
          left: '-80px',
          width: '423px',
          height: '278px'
        }}
      >
        <div className="w-full h-full flex items-center justify-center">
          <Dodecahedron />
        </div>
      </div>
      
      {/* Right Dodecahedron - 447x103px visible area, positioned at cards level */}
      {/* Full shape is larger, but only 447x103 visible (rest overflows right edge) */}
      <div 
        className="absolute pointer-events-none opacity-20 hidden lg:block"
        style={{ 
          bottom: '80px',
          right: '-180px',
          width: '447px',
          height: '300px'
        }}
      >
        <div className="w-full h-full flex items-start justify-center scale-150">
          <Dodecahedron />
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center justify-center gap-4 mb-24">
          {/* Sub-headline with line - Ashley theme style */}
          <div className="w-full relative mb-12">
            {/* First line with horizontal line inline */}
            <div className="flex items-center justify-end">
              <motion.span 
                className="text-white/40 text-sm shrink-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
              >
                Transform your business with AI & automation
              </motion.span>
              {/* Horizontal line - 397px, inline with first line */}
              <div className="hidden lg:block h-[1px] bg-white/20 ml-4" style={{ width: '397px' }} />
            </div>
            {/* Second line - right aligned below */}
            <p className="text-white/40 text-sm text-right">
              to drive growth and efficiency.
            </p>
          </div>


          {/* Row 1: Image Pill + Text */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 mb-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <div className="relative h-14 w-40 rounded-full overflow-hidden border border-white/10 hidden md:block">
              <Image 
                src="/images/services/ai-strategy-meeting.jpg" 
                alt="AI Strategy Meeting" 
                fill 
                className="object-cover" 
              />
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              AI-Powered <span className="font-light text-white/60">Solutions</span>
            </h2>
          </motion.div>

          {/* Row 2: Text + Button Pill */}
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              to drive <span className="font-light text-white/60">Growth & Efficiency</span>
            </h2>
            <Link 
              href="/services" 
              className="group bg-accent hover:bg-accent-dark text-black font-bold rounded-full pl-6 pr-2 py-2 flex items-center gap-3 transition-all duration-300 mt-2 md:mt-0"
            >
              <span className="text-xs tracking-widest uppercase">Our Services</span>
              <span className="bg-black text-white rounded-full p-2.5 group-hover:bg-white group-hover:text-black transition-colors">
                <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Services Grid - Ashley Theme: 1024x324 total, 256x324 per card */}
        <div className="max-w-[1024px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative h-[324px] flex flex-col py-[40px] px-[30px] border-white/10 transition-colors duration-300 ${
                index === 0 ? "lg:border-l" : ""
              } border-r`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
            >
              {/* Top Accent Stripe */}
              <div className="absolute left-0 top-0 h-1 bg-accent transition-all duration-700 w-0 group-hover:w-full" />

              {/* Title - Centered, 2 lines */}
              <div className="mb-6 text-center">
                <h5 className="text-base md:text-lg font-bold leading-tight">
                  {service.title}
                </h5>
                <h5 className="text-base md:text-lg font-bold leading-tight">
                  {service.titleLine2}
                </h5>
              </div>
              
              {/* Description - Flex grow to fill middle space */}
              <div className="flex-1">
                <p className="text-white/50 text-sm leading-relaxed opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {service.description}
                </p>
              </div>

              {/* Arrow Button - Positioned at bottom */}
              <div className="mt-auto pt-4">
                <Link 
                  href={service.link} 
                  className="flex items-center justify-center w-9 h-9 rounded-full bg-white/10 text-white scale-75 opacity-40 group-hover:scale-100 group-hover:opacity-100 group-hover:bg-accent group-hover:text-black transition-all duration-400"
                >
                  <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


