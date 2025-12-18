"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Script from "next/script";
import { ArrowRight, ArrowDown, Target, TrendingUp, Cog, MessageCircle, Search, Map, PenTool, Hammer, FlaskConical, Rocket, GraduationCap, LineChart } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { DecorativeLines } from "@/components/ui/DecorativeLines";


const services = [
  {
    id: "01",
    title: "Lead Generation",
    subtitle: "Fill your pipeline with qualified buyers, not tire-kickers",
    description:
      "We build AI-powered lead systems that identify and capture prospects actively searching for what you sell—then nurture them until they're sales-ready.",
    features: [
      "AI Lead Scoring – Prioritize hot prospects automatically",
      "Predictive Lead Nurturing – Right message, right time, every time",
      "Pipeline Automation – From first click to qualified opportunity",
      "Conversion Optimization – Turn more visitors into viable leads",
    ],
    link: "/services/lead-generation",
    offset: true,
    icon: Target,
    iconColor: "#f97316", // Orange
  },
  {
    id: "02",
    title: "Sales Systems",
    subtitle: "Close more deals with less manual work",
    description:
      "Automate the grunt work holding your sales team back. Our CRM integrations and conversation intelligence free up your team to do what they do best—sell.",
    features: [
      "CRM Automation – No more data entry, always up-to-date",
      "Conversation Intelligence – Know what's working in every call",
      "Deal Tracking – Never lose sight of opportunities",
      "Sales Analytics – See exactly what drives revenue",
      "Proposal Automation – Generate quotes in minutes, not hours",
    ],
    link: "/services/sales-systems",
    offset: false,
    icon: TrendingUp,
    iconColor: "#10b981", // Emerald
  },
  {
    id: "03",
    title: "Office Operations Automation",
    subtitle: "Eliminate the busywork draining your team's time",
    description:
      "Stop paying people to do robot work. We automate repetitive tasks so your team can focus on work that actually grows the business.",
    features: [
      "Document Processing – Extract data from invoices, forms, contracts instantly",
      "Workflow Automation – Approvals, notifications, handoffs—all automatic",
      "Data Entry Elimination – Systems talk to each other, not spreadsheets",
      "Process Optimization – Find and fix bottlenecks before they cost you money",
    ],
    link: "/services/office-automation",
    offset: true,
    icon: Cog,
    iconColor: "#a855f7", // Purple
  },
  {
    id: "04",
    title: "WhatsApp Business Solutions",
    subtitle: "Meet your customers where they already are—at scale",
    description:
      "Turn WhatsApp into a 24/7 sales and support channel. Engage customers with intelligent, personalized conversations that feel human, not robotic.",
    features: [
      "AI Assistants – Answer common questions instantly, any time",
      // "AI Chatbots – Answer common questions instantly, any time",
      "Personalized Messaging – Tailored offers based on customer behavior",
      "24/7 Engagement – Never miss a lead, even at 2am",
      "Conversation Analytics – See what customers really want",
      "Broadcast Campaigns – Reach thousands with one-to-one feel",
    ],
    link: "/services/whatsapp-solutions",
    offset: false,
    icon: MessageCircle,
    iconColor: "#22c55e", // Green (WhatsApp-like)
  },
];

const workflowSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    subtitle: "We audit your current systems and map your growth bottlenecks",
    description:
      "No cookie-cutter solutions. We analyze where you're losing time, money, or customers—then build a roadmap prioritized by ROI.",
    deliverable: "Strategic automation roadmap with projected time and cost savings",
    icon: Search,
  },
  {
    number: "02",
    title: "Design & Build",
    subtitle: "We create and test your custom automation before going live",
    description:
      "Our team builds AI systems tailored to your processes—not the other way around. We integrate with your existing tools and train the AI on your specific workflows.",
    deliverable: "Fully functional system tested with real scenarios from your business",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Test & Deploy",
    subtitle: "We launch in phases to minimize disruption and maximize adoption",
    description:
      "We roll out gradually, monitor performance, and adjust based on real results—not assumptions. Your team gets hands-on training, not a manual.",
    deliverable: "Live system with documented processes and trained team",
    icon: Rocket,
  },
  {
    number: "04",
    title: "Train & Optimize",
    subtitle: "We monitor, measure, and improve until you hit your ROI targets",
    description:
      "This isn't 'set and forget.' We track performance weekly, optimize based on data, and scale what's working. You get better results over time, not just at launch.",
    deliverable: "Monthly performance reports with optimization recommendations",
    icon: LineChart,
  },
];

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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Enhanced workflow step animations with alternating slide direction
const workflowStepVariants = {
  hiddenLeft: { opacity: 0, x: -60, filter: "blur(4px)" },
  hiddenRight: { opacity: 0, x: 60, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { 
      duration: 0.6, 
      ease: "easeOut" as const
    },
  },
};

// Number circle animation with spring physics
const circleVariants = {
  hidden: { scale: 0.5, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 200,
      damping: 15,
    },
  },
};

// Vertical line grow animation
const lineVariants = {
  hidden: { scaleY: 0, originY: 0 },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut" as const,
    },
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-dark">
      {/* Hero Banner - Dark with Atmospheric Background */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden">
        {/* Background Atmosphere */}
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Homepage
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white/60">Services</li>
            </ul>
          </motion.nav>

          {/* Title - Benefit-Focused */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-muted mb-6">
              AI & <span className="font-light">Automation</span> That Actually<br />
              Drives <span className="font-light">Revenue</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl">
              Smart systems that generate leads, close sales, and run your operations—so you can focus on growth
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#services"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors group"
          >
            <span className="text-sm font-medium">Our services</span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* Services Section - Dark Background */}
      <section id="services" className="bg-dark relative py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="sr-only">Our Services</h2>
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
            {/* Left Column - Animated Decorative Lines */}
            <div className="hidden lg:block lg:w-5/12 relative">
              <div className="sticky top-32">
                <DecorativeLines />
              </div>
            </div>

            {/* Right Column - Service Cards Grid */}
            <div className="lg:w-7/12">
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-0"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {services.map((service) => (
                  <motion.div
                    key={service.id}
                    variants={itemVariants}
                    className={service.offset ? "lg:-mt-16" : "lg:mt-16"}
                  >
                    <Link
                      href={service.link}
                      className="group block p-8 lg:p-10 h-full transition-all duration-300"
                    >
                      {/* Service Icon */}
                      <div 
                        className="w-14 h-14 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                        style={{ backgroundColor: `${service.iconColor}20` }}
                      >
                        <service.icon 
                          size={28} 
                          style={{ color: service.iconColor }}
                        />
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl md:text-2xl font-bold text-muted mb-3 group-hover:text-accent transition-colors duration-300">
                        {service.title.split(" ").slice(0, -1).join(" ")}
                        <br />
                        {service.title.split(" ").slice(-1)}
                      </h3>

                       {/* Subtitle */}
                      {service.subtitle && (
                        <p className="text-accent text-base md:text-lg font-medium mb-4 leading-snug">
                          {service.subtitle}
                        </p>
                      )}

                      {/* Description */}
                      <p className="text-white/70 text-base leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-white/70 text-base"
                          >
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Read More Link */}
                      <div className="flex items-center gap-2 text-accent group-hover:gap-4 transition-all duration-300">
                        <span className="text-sm font-medium">Read more</span>
                        <ArrowRight
                          size={16}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>


      {/* How We Work - Workflow Section */}
      <section className="bg-[#f5f5f5] relative py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mb-20 mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent text-sm font-medium mb-4 uppercase tracking-wider"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark"
            >
              How we <span className="font-light">work</span>
            </motion.h2>
          </div>

          {/* Horizontal Workflow Steps */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                variants={itemVariants}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Label */}
                <div className="text-accent text-xs font-bold mb-4 uppercase tracking-widest">
                  Step {step.number}
                </div>

                {/* Icon Circle */}
                <motion.div
                  className="w-20 h-20 rounded-full bg-dark flex items-center justify-center mb-6 relative"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <step.icon size={32} className="text-accent" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-accent/20 blur-md -z-10" />
                </motion.div>

                {/* Arrow - Hidden on last item and mobile */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute -right-4 top-20 text-dark/20">
                    <ArrowRight size={24} />
                  </div>
                )}

                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-dark/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section - Black Background */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <p className="text-accent text-sm font-medium mb-4">
                Common Questions
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Frequently <span className="font-light">Asked</span>
              </h2>
            </motion.div>

            {/* FAQ Items */}
            <motion.div
              className="divide-y divide-white/10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {[
                {
                  q: "How do projects get started?",
                  a: "Book a free AI Readiness Assessment. We'll audit your processes, identify where automation delivers the biggest ROI, and give you a prioritized roadmap. Most pilot projects show results within 2-4 weeks.",
                },
                {
                  q: "Is our data safe?",
                  a: "Yes. All systems are POPIA-compliant and hosted on South African cloud infrastructure. We include consent logs, audit trails, and data encryption as standard.",
                },
                {
                  q: "Which tools do you work with?",
                  a: "We integrate with the tools you already use—HubSpot, Pipedrive, Airtable, Notion, Slack, Xero, QuickBooks, and more. If it has an API, we can connect it.",
                },
                {
                  q: "Do you provide training?",
                  a: "Every project includes hands-on training sessions and simple runbooks. Your team will know exactly how to use and maintain the systems we build.",
                },
                {
                  q: "What's the typical ROI timeline?",
                  a: "Most clients see measurable time savings within the first month. Full ROI (cost recovered through efficiency gains) typically occurs within 3-6 months, depending on project scope.",
                },
                {
                  q: "Do we need technical staff to manage this?",
                  a: "No. We build systems your current team can operate. If something breaks or needs updating, we provide ongoing support—no developers required on your end.",
                },
                {
                  q: "What size projects do you take on?",
                  a: "We work with SMEs spending between R15k-R150k monthly on marketing and operations. Whether you need one automated workflow or a full sales system overhaul, we scale to your needs.",
                },
                {
                  q: "How much does it cost?",
                  a: "Project costs range from R25k for single workflow automation to R200k+ for comprehensive sales and marketing systems. We provide fixed-price quotes after your free assessment—no surprises.",
                },
              ].map((faq, index) => (
                <motion.details
                  key={index}
                  variants={itemVariants}
                  className="group py-6"
                >
                  <summary className="cursor-pointer list-none flex items-center justify-between">
                    <span className="text-lg font-medium text-white group-open:text-accent transition-colors">
                      {faq.q}
                    </span>
                    <span className="text-2xl text-white/40 group-open:rotate-45 transition-transform duration-300">
                      +
                    </span>
                  </summary>
                  <div className="pt-4 text-white/60 leading-relaxed">
                    {faq.a}
                  </div>
                </motion.details>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section - Flexible Packages */}
      <section className="bg-dark py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Flexible <span className="font-light">packages</span> for every stage
            </h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the package that fits your business needs, or contact us for a tailored solution.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-6"
          >
            {/* Starter Package */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-3xl font-bold text-accent">R4,999</span>
                    <h3 className="text-2xl font-bold text-white">Starter Package</h3>
                  </div>
                  <p className="text-white/60">
                    Perfect for small businesses looking to automate their first capture and basic scoring.
                  </p>
                </div>
                <Link 
                  href="/booking?plan=starter"
                  className="ml-8 flex-shrink-0 w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all duration-300"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Growth Package */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-3xl font-bold text-accent">R9,999</span>
                    <h3 className="text-2xl font-bold text-white">Growth Package</h3>
                  </div>
                  <p className="text-white/60">
                    Advanced tool control, CRM integration, and automated marketing sequences for scaling teams.
                  </p>
                </div>
                <Link 
                  href="/booking?plan=growth"
                  className="ml-8 flex-shrink-0 w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all duration-300"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>

            {/* Enterprise Solution */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 hover:border-accent/50 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-3">
                    <span className="text-3xl font-bold text-accent">R Custom</span>
                    <h3 className="text-2xl font-bold text-white">Enterprise Solution</h3>
                  </div>
                  <p className="text-white/60">
                    End-to-end bespoke plans at a fixed cadence with custom integrations and dedicated support.
                  </p>
                </div>
                <Link 
                  href="/booking?plan=enterprise"
                  className="ml-8 flex-shrink-0 w-10 h-10 rounded-full border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all duration-300"
                >
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Link
              href="/booking"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-black font-medium rounded-full pl-8 pr-2 py-2.5 transition-colors group"
            >
              <span className="text-sm tracking-wide uppercase mr-4">Get custom quote</span>
              <span className="bg-dark text-white rounded-full p-3 group-hover:bg-black transition-colors">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - AI Readiness Test (Light Background) */}
      <section className="bg-[#f5f5f5] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Main CTA - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold text-dark">
              Find Out Where AI Can Save You<br />
              <span className="font-light">10+ Hours Per Week</span>
            </h2>
            <p className="text-xl text-dark/60 mb-12 max-w-2xl mx-auto">
              Get your free AI opportunity assessment—no obligation, just insights
            </p>

            {/* Pill Button - Ashley Style */}
            <Link
              href="/ai-readiness"
              className="inline-flex items-center bg-accent hover:bg-accent-dark text-black font-medium rounded-full pl-8 pr-2 py-2.5 transition-colors group"
            >
              <span className="text-sm tracking-wide uppercase mr-4">Get your free assessment</span>
              <span className="bg-dark text-white rounded-full p-3 group-hover:bg-black transition-colors">
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
