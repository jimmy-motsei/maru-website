"use client";

import { motion } from "framer-motion";
import { Target, Zap, Users, TrendingUp, CheckCircle2, Database, ArrowRight } from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Sales Process", href: "/services/sales-systems" },
];

const discoveryItems = [
  {
    title: "Which Pipeline Stages Are Bleeding Deals",
    description: "Pinpoint exactly where prospects drop off",
    icon: Target,
  },
  {
    title: "Where Manual Work Is Slowing Your Team Down",
    description: "Identify time-wasting tasks that should be automated",
    icon: Zap,
  },
  {
    title: "Automation Opportunities Saving 20+ Hours Per Week",
    description: "Free your team to focus on selling, not admin",
    icon: Users,
  },
  {
    title: "Integration Gaps Between Marketing and Sales Tools",
    description: "Find where data silos are costing you deals",
    icon: TrendingUp,
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Pipeline Audit",
    description: "Map your current sales process",
    icon: Database,
  },
  {
    number: "02",
    title: "Leak Detection",
    description: "Find where deals are dying",
    icon: Target,
  },
  {
    number: "03",
    title: "Automation Build",
    description: "Implement smart workflows",
    icon: Zap,
  },
  {
    number: "04",
    title: "Sales Enablement",
    description: "Train your team on the new system",
    icon: Users,
  },
];

const automationItems = [
  "Lead assignment and routing",
  "Follow-up sequences and reminders",
  "Data entry and CRM updates",
  "Deal tracking and forecasting",
  "Communication intelligence (email/WhatsApp sync)",
  "Sales analytics and reporting",
];

const growthFeatures = [
  "Pipeline audit & leak detection",
  "Core automation workflows (lead routing, follow-up, data sync)",
  "CRM integration and optimization",
  "Sales team training",
  "3 hours monthly optimization",
  "Email & chat support",
];

const enterpriseFeatures = [
  "Everything in Growth, plus:",
  "Custom sales playbooks",
  "Multi-team workflows and territories",
  "Advanced BI and forecasting",
  "Dedicated account manager",
  "Unlimited optimization support",
  "SLA guarantees",
];

export default function SalesSystemsPage() {

  return (
    <main className="bg-[#09121A] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Where Are Your Deals"
        titleLight="Stalling?"
        subtitle="Your pipeline is full, but nothing's closing. We find exactly where prospects drop off—and automate the fixes so your team can focus on selling, not admin."
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
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              What You'll <span className="font-thin text-gray-400">Discover</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg mb-2" variants={fadeUpVariants}>
              Our Pipeline Leak Detector analyzes your sales process and reveals:
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
                className="bg-gray-100 p-8 rounded-3xl border border-gray-300 border-l-4 border-l-highlight flex items-start gap-6 group hover:border-highlight hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 shrink-0 rounded-2xl bg-highlight/5 flex items-center justify-center text-highlight border border-highlight/30 group-hover:scale-110 group-hover:bg-highlight/10 transition-all">
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
      <section className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="mb-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-h2 font-medium mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
                The <span className="font-thin text-zinc-500">Problem</span> <span>We Solve</span>
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
                Your sales team spends more time on data entry, follow-up reminders, and status updates than actually selling. Leads from marketing sit uncontacted. Deals stall because no one followed up at the right time.
              </motion.p>
              <motion.p className="text-xl font-semibold text-white" variants={fadeUpVariants}>
                Your CRM is supposed to help, but it's just another admin burden.
              </motion.p>
              <motion.p className="text-highlight text-xl font-bold" variants={fadeUpVariants}>
                We automate the repetitive work so your team can sell.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              How <span className="font-thin text-gray-400">It</span> <span>Works</span>
            </motion.h2>
            <motion.p className="text-gray-600 text-lg" variants={fadeUpVariants}>
              From audit to automation in 4 strategic steps
            </motion.p>
          </motion.div>

          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
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
                  <div className="bg-gray-100 p-10 md:p-12 rounded-2xl border border-gray-300 border-l-4 border-l-highlight h-full relative z-10 hover:border-highlight hover:shadow-lg transition-all">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full border-2 border-highlight flex items-center justify-center mb-8 relative bg-white">
                        <span className="text-lg font-bold text-black">{step.number}</span>
                        {index < workflowSteps.length - 1 && (
                          <div className="hidden lg:block absolute -right-12 top-1/2 -translate-y-1/2 text-highlight/30">
                            <ArrowRight size={24} />
                          </div>
                        )}
                      </div>
                      
                      <div className="w-12 h-12 rounded-xl border border-gray-300 flex items-center justify-center text-highlight mb-6 bg-gray-50">
                        <step.icon size={24} />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-black">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed font-medium">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* What Gets Automated Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-h2 font-medium mb-14 text-white text-center leading-[1.2]" variants={fadeUpVariants}>
                What Gets <span className="font-thin text-zinc-500">Automated</span>
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {automationItems.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={fadeUpVariants}
                    className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-card-border hover:border-highlight/50 transition-colors"
                  >
                    <CheckCircle2 size={20} className="text-highlight shrink-0" />
                    <span className="text-zinc-300">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why We Start With Diagnostics Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
                Why We <span className="font-thin text-gray-400">Start With</span> <br className="hidden md:block" />
                <span>Diagnostics</span>
              </motion.h2>
              
              <motion.p className="text-xl text-black mb-6" variants={fadeUpVariants}>
                Unlike agencies that pitch before understanding your business, we start with diagnostics.
              </motion.p>
              
              <motion.p className="text-lg text-gray-600 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Most agencies will give you a quote based on 30 minutes of discovery. We think that's backwards.
              </motion.p>
              
              <motion.p className="text-lg text-gray-600 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Our free diagnostic does what a traditional agency discovery process costs <span className="text-black font-semibold">R15,000+ for:</span>
              </motion.p>

              <motion.div className="space-y-4 mb-8" variants={fadeUpVariants}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-1" />
                  <div>
                    <p className="text-black font-medium">Analyze your actual data, not assumptions</p>
                    <p className="text-gray-600 text-sm">We look at real pipeline behavior, not guesswork</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-1" />
                  <div>
                    <p className="text-black font-medium">Identify specific problems, not generic 'opportunities'</p>
                    <p className="text-gray-600 text-sm">Pinpoint exactly where you're losing deals</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-1" />
                  <div>
                    <p className="text-black font-medium">Prioritize fixes by revenue impact, not what's trendy</p>
                    <p className="text-gray-600 text-sm">Focus on changes that actually close more deals</p>
                  </div>
                </div>
              </motion.div>

              <motion.p className="text-xl text-highlight font-bold" variants={fadeUpVariants}>
                You get actionable insights whether you hire us or not. If the diagnostic reveals problems you can't fix yourself, we're here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Package Options Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
              Choose Your <span className="font-thin text-zinc-500">Starting Point</span>
            </motion.h2>
            <motion.p className="text-zinc-400 text-lg" variants={fadeUpVariants}>
              Every package is customized based on your CRM, team size, and sales complexity. Here's what most SMEs start with:
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainerVariants}
          >
            {/* Growth Package */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-white/5 p-8 rounded-3xl border-2 border-highlight relative"
            >
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-highlight text-black px-4 py-1 rounded-full text-sm font-bold">
                ⭐ BEST FOR MOST SMEs
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 mt-2">Growth Package</h3>
              <p className="text-zinc-400 mb-6">
                Perfect for businesses with 5-20 sales reps and established sales processes
              </p>
              <ul className="space-y-3 mb-8">
                {growthFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-highlight shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAPrimary className="w-full">
                <span className="flex-1 text-center">Get Custom Quote</span>
              </CTAPrimary>
            </motion.div>

            {/* Enterprise Package */}
            <motion.div
              variants={fadeUpVariants}
              className="bg-white/5 p-8 rounded-3xl border border-card-border hover:border-highlight/50 transition-colors"
            >
              <h3 className="text-2xl font-bold text-white mb-3">Enterprise Package</h3>
              <p className="text-zinc-400 mb-6">
                For complex sales organizations with multiple teams or custom requirements
              </p>
              <ul className="space-y-3 mb-8">
                {enterpriseFeatures.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-highlight shrink-0 mt-0.5" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <CTAPrimary className="w-full">
                <span className="flex-1 text-center">Schedule Consultation</span>
              </CTAPrimary>
            </motion.div>
          </motion.div>

          <motion.div 
            className="text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.p className="text-zinc-400" variants={fadeUpVariants}>
              Not sure what you need?{" "}
              <a href="https://pipeline.maruonline.com" target="_blank" rel="noopener noreferrer" className="text-highlight hover:text-highlight/80 transition-colors font-medium">
                Take our 2-minute Pipeline Assessment →
              </a>
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="sales-systems" />
    </main>
  );
}
