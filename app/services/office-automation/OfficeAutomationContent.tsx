"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Map, DollarSign, Zap, TrendingUp, BarChart3, CheckCircle2, Mail, Users, FileText, Calendar, MessageSquare, Database, FolderOpen, Trello, CreditCard, Headphones, Search, Palette, Wrench, GraduationCap, LineChart, ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Marketing Integration", href: "/services/office-automation" },
];

const discoveryItems = [
  {
    title: "Complete Map of Your Current Tools and Data Flows",
    description: "Visual diagram of how information moves (or doesn't)",
    icon: Map,
  },
  {
    title: "Redundant Software You Can Eliminate",
    description: "Immediate cost savings from tool consolidation",
    icon: DollarSign,
  },
  {
    title: "Integration Opportunities to Eliminate Manual Work",
    description: "Where automation will save the most time",
    icon: Zap,
  },
  {
    title: "ROI Analysis of Your Marketing Technology Spend",
    description: "Are you getting value from what you're paying for?",
    icon: TrendingUp,
  },
  {
    title: "Custom Integration Roadmap Prioritized by Impact",
    description: "What to connect first for maximum results",
    icon: BarChart3,
  },
];

const marketingTools = [
  { name: "Website analytics", description: "GA4, Hotjar", icon: BarChart3 },
  { name: "Lead capture forms", description: "Landing pages", icon: FileText },
  { name: "Email marketing platforms", description: "Mailchimp, HubSpot", icon: Mail },
  { name: "Social media management", description: "Buffer, Hootsuite", icon: MessageSquare },
  { name: "Content management", description: "WordPress, Webflow", icon: FolderOpen },
];

const salesTools = [
  { name: "CRM systems", description: "HubSpot, Pipedrive, Salesforce", icon: Users },
  { name: "Proposal software", description: "Quote generators", icon: FileText },
  { name: "Meeting schedulers", description: "Calendly, Google Calendar", icon: Calendar },
  { name: "E-signature platforms", description: "DocuSign, HelloSign", icon: FileText },
];

const operationsTools = [
  { name: "Document management", description: "Google Drive, Dropbox", icon: FolderOpen },
  { name: "Project management", description: "Trello, Asana, Monday", icon: Trello },
  { name: "Billing and invoicing", description: "Xero, QuickBooks", icon: CreditCard },
  { name: "Customer support", description: "Zendesk, Intercom", icon: Headphones },
];

const workflowSteps = [
  {
    number: "01",
    title: "Tech Stack Audit",
    description: "Document all your current tools and workflows",
    icon: Search,
  },
  {
    number: "02",
    title: "Integration Design",
    description: "Map optimal data flows and automations",
    icon: Palette,
  },
  {
    number: "03",
    title: "Build & Test",
    description: "Connect systems and ensure data integrity",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Training & Handoff",
    description: "Your team learns the new automated workflows",
    icon: GraduationCap,
  },
  {
    number: "05",
    title: "Ongoing Support",
    description: "Monitor, optimize, and maintain integrations",
    icon: LineChart,
  },
];

const automationItems = [
  "Lead data flowing from website to CRM",
  "Contact synchronization across platforms",
  "Marketing campaign triggers based on sales activity",
  "Automated reporting and dashboards",
  "Document processing and filing",
  "Task creation and assignment",
  "Customer data updates across all systems",
];

export default function OfficeAutomationContent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Your Marketing Tools Should"
        titleLight="Work Together"
        subtitle="You're paying for 10+ software tools that don't share data. We connect your stack so information flows automatically—no more manual exports, imports, or duplicate data entry."
      />

      {/* Discovery Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">What You'll</span> <span className="font-medium text-black">Discover</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg mb-2" variants={fadeUpVariants}>
              Our Tech Stack Audit reveals:
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            {discoveryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUpVariants}
                className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[#22d3ee] flex items-start gap-6 group hover:border-[#22d3ee] hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-[#22d3ee]/5 flex items-center justify-center text-[#22d3ee] border border-[#22d3ee]/30 group-hover:scale-110 group-hover:bg-[#22d3ee]/10 transition-all">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Problem We Solve Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-8" variants={fadeUpVariants}>
                <span className="font-extralight text-zinc-500">The Problem</span>{" "}
                <span className="font-medium text-white">We Solve</span>
              </motion.h2>
            </motion.div>
            <motion.div 
              className="space-y-6 text-lg text-zinc-300 leading-relaxed"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.p variants={fadeUpVariants}>
                Your website visitor data lives in one system. Your CRM has different information. Your email platform doesn't know who's a customer. Your analytics can't track the full journey.
              </motion.p>
              <motion.p className="text-xl font-semibold text-white" variants={fadeUpVariants}>
                And your team wastes hours each week copying data between systems.
              </motion.p>
              <motion.p className="text-[#22d3ee] text-xl font-bold" variants={fadeUpVariants}>
                We make your tools talk to each other so your data tells one story.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Connect Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-16 text-center" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">What We</span>{" "}
              <span className="font-medium text-black">Connect</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Marketing Tools Column */}
              <motion.div variants={fadeUpVariants}>
                <h3 className="text-2xl font-bold text-black mb-6">Marketing Tools</h3>
                <div className="space-y-4">
                  {marketingTools.map((tool, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-2xl border border-gray-300 hover:border-[#22d3ee] transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/5 flex items-center justify-center text-[#22d3ee] shrink-0 border border-[#22d3ee]/30">
                          <tool.icon size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-black text-sm">{tool.name}</p>
                          <p className="text-gray-600 text-xs">{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Sales Tools Column */}
              <motion.div variants={fadeUpVariants}>
                <h3 className="text-2xl font-bold text-black mb-6">Sales Tools</h3>
                <div className="space-y-4">
                  {salesTools.map((tool, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-2xl border border-gray-300 hover:border-[#22d3ee] transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/5 flex items-center justify-center text-[#22d3ee] shrink-0 border border-[#22d3ee]/30">
                          <tool.icon size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-black text-sm">{tool.name}</p>
                          <p className="text-gray-600 text-xs">{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Operations Tools Column */}
              <motion.div variants={fadeUpVariants}>
                <h3 className="text-2xl font-bold text-black mb-6">Operations Tools</h3>
                <div className="space-y-4">
                  {operationsTools.map((tool, index) => (
                    <div key={index} className="bg-gray-100 p-4 rounded-2xl border border-gray-300 hover:border-[#22d3ee] transition-colors">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-[#22d3ee]/5 flex items-center justify-center text-[#22d3ee] shrink-0 border border-[#22d3ee]/30">
                          <tool.icon size={20} />
                        </div>
                        <div>
                          <p className="font-semibold text-black text-sm">{tool.name}</p>
                          <p className="text-gray-600 text-xs">{tool.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-zinc-500">How</span>{" "}
              <span className="font-medium text-white">It Works</span>
            </motion.h2>
            <motion.p className="text-zinc-400 text-lg" variants={fadeUpVariants}>
              From audit to automation in 5 steps
            </motion.p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainerVariants}
            >
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="relative group"
                >
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-full relative z-10 hover:border-[#22d3ee]/50 transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-[#22d3ee] flex items-center justify-center mb-8 relative bg-[#0A0A0A]">
                        <span className="text-lg font-bold text-white">{step.number}</span>
                        {index < workflowSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-[#22d3ee]/30">
                            <ArrowRight size={24} />
                          </div>
                        )}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-[#22d3ee] mb-6 bg-white/5">
                        <step.icon size={24} />
                      </div>
                      
                      <h3 className="text-lg font-bold mb-3 text-white">{step.title}</h3>
                      <p className="text-zinc-400 text-xs leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Gets Automated Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-12 text-center" variants={fadeUpVariants}>
                <span className="font-extralight text-gray-400">What Gets</span>{" "}
                <span className="font-medium text-black">Automated</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {automationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariants}
                    className="flex items-center gap-3 bg-gray-100 p-4 rounded-xl border border-gray-300 hover:border-[#22d3ee] transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Start With Diagnostics Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-12" variants={fadeUpVariants}>
                <span className="font-extralight text-zinc-500">Why We Start</span>{" "}
                <span className="font-medium text-white">With Diagnostics</span>
              </motion.h2>
              
              <motion.p className="text-xl text-white mb-6" variants={fadeUpVariants}>
                Unlike agencies that pitch before understanding your business, we start with diagnostics.
              </motion.p>
              
              <motion.p className="text-lg text-zinc-300 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Most agencies will give you a quote based on 30 minutes of discovery. We think that's backwards.
              </motion.p>
              
              <motion.p className="text-lg text-zinc-300 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Our free diagnostic does what a traditional agency discovery process costs <span className="text-white font-semibold">R15,000+ for:</span>
              </motion.p>

              <motion.div className="space-y-4 mb-8" variants={fadeUpVariants}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Analyze your actual data, not assumptions</p>
                    <p className="text-zinc-400 text-sm">We map your real tech stack and workflows, not templates</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Identify specific problems, not generic 'opportunities'</p>
                    <p className="text-zinc-400 text-sm">Pinpoint exactly where data silos are costing you time</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[#22d3ee] shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-medium">Prioritize fixes by revenue impact, not what's trendy</p>
                    <p className="text-zinc-400 text-sm">Focus on integrations that save the most time and money</p>
                  </div>
                </div>
              </motion.div>

              <motion.p className="text-xl text-[#22d3ee] font-bold" variants={fadeUpVariants}>
                You get actionable insights whether you hire us or not. If the diagnostic reveals problems you can't fix yourself, we're here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Integration Packages Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" variants={fadeUpVariants}>
              <span className="font-extralight text-gray-400">Integration</span>{" "}
              <span className="font-medium text-black">Packages</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg" variants={fadeUpVariants}>
              Pricing varies based on complexity—here's what most clients start with
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainerVariants}
          >
            {/* Starter Package */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[#22d3ee] hover:border-[#22d3ee] hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Starter Package</h3>
              <p className="text-sm text-gray-600 mb-4">Best for: Small teams with 3-5 core tools</p>
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">Starting from</div>
                <div className="text-2xl font-bold text-black">R3,999 <span className="text-base font-normal text-gray-600">one-time</span></div>
                <div className="text-lg font-semibold text-black">+ R999<span className="text-sm font-normal text-gray-600">/month</span></div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Up to 3 tool integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Basic automation workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Setup, testing, and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">1 month post-launch support</span>
                </li>
              </ul>
              <CTAPrimary className="w-full">
                Get Custom Quote for Starter
              </CTAPrimary>
            </motion.div>

            {/* Growth Package - Featured */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border-2 border-[#22d3ee] relative shadow-lg"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#22d3ee] text-black px-4 py-1 rounded-full text-sm font-bold">
                ⭐ MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold text-black mb-2">Growth Package</h3>
              <p className="text-sm text-gray-600 mb-4">Best for: Growing teams with 5-10 marketing & sales tools</p>
              <div className="mb-6">
                <div className="text-sm text-gray-600 mb-1">Starting from</div>
                <div className="text-2xl font-bold text-black">R8,999 <span className="text-base font-normal text-gray-600">one-time</span></div>
                <div className="text-lg font-semibold text-black">+ R2,999<span className="text-sm font-normal text-gray-600">/month</span></div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Up to 8 tool integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Advanced automation workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Custom dashboard setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">3 months post-launch support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Monthly optimization reviews</span>
                </li>
              </ul>
              <CTAPrimary className="w-full">
                Get Custom Quote for Growth
              </CTAPrimary>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-[#22d3ee] hover:border-[#22d3ee] hover:shadow-lg transition-all"
            >
              <h3 className="text-2xl font-bold text-black mb-2">Enterprise Package</h3>
              <p className="text-sm text-gray-600 mb-4">Best for: Complex tech stacks with custom requirements</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-black">Custom Pricing</div>
                <div className="text-sm text-gray-600">Based on requirements</div>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Unlimited integrations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Complex workflow automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Custom API development</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Dedicated integration manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">Ongoing unlimited support</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-[#22d3ee] shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">SLA guarantees</span>
                </li>
              </ul>
              <CTAPrimary className="w-full">
                Schedule Enterprise Consultation
              </CTAPrimary>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center mt-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.p className="text-gray-600" variants={fadeUpVariants}>
              Not sure which package fits?{" "}
              <a href="#" className="text-[#22d3ee] hover:text-[#22d3ee]/80 transition-colors font-medium">
                Take our Tech Stack Audit →
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="office-automation" />
    </main>
  );
}
