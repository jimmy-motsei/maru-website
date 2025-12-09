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
    description:
      "Transform your pipeline with intelligent lead scoring that identifies high-value prospects, so your sales team focuses only on leads ready to convert.",
    features: [
      "AI Lead Scoring",
      "Prospect Identification",
      "Pipeline Automation",
      "Conversion Optimization",
    ],
    link: "/services/lead-generation",
    offset: true,
    icon: Target,
    iconColor: "#f97316", // Orange
  },
  {
    id: "02",
    title: "Sales Systems",
    description:
      "Automate your CRM workflows and unlock conversation intelligence that helps close deals faster while reducing manual data entry by up to 80%.",
    features: [
      "CRM Automation",
      "Conversation Intelligence",
      "Deal Tracking",
      "Sales Analytics",
    ],
    link: "/services/sales-systems",
    offset: false,
    icon: TrendingUp,
    iconColor: "#10b981", // Emerald
  },
  {
    id: "03",
    title: "Office Ops Automation",
    description:
      "Streamline document processing and automate repetitive workflows, freeing your team to focus on strategic work that drives real business growth.",
    features: [
      "Document Processing",
      "Workflow Automation",
      "Task Management",
      "Process Optimization",
    ],
    link: "/services/office-automation",
    offset: true,
    icon: Cog,
    iconColor: "#a855f7", // Purple
  },
  {
    id: "04",
    title: "WhatsApp Solutions",
    description:
      "Engage customers 24/7 with intelligent chatbots that deliver personalized messaging at scale, turning conversations into conversions around the clock.",
    features: [
      "AI Chatbots",
      "Personalized Messaging",
      "24/7 Engagement",
      "Conversation Analytics",
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
    title: "Discovery",
    description:
      "We start by understanding your business goals, pain points, and current processes. Through in-depth consultations, we identify high-impact opportunities for AI automation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    description:
      "We define the project scope, select the right technologies, and create a detailed roadmap. This includes identifying integration points with your existing systems.",
    icon: Map,
  },
  {
    number: "03",
    title: "Design",
    description:
      "Our team architects the solution, creating prototypes and workflows that align with your business processes. For custom solutions, we develop detailed specifications.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build",
    description:
      "We develop your custom AI solution or configure pre-built products to your specifications. Our agile approach ensures flexibility and continuous feedback.",
    icon: Hammer,
  },
  {
    number: "05",
    title: "Test",
    description:
      "Rigorous quality assurance and pilot testing in controlled environments. We validate assumptions and fine-tune the solution before full deployment.",
    icon: FlaskConical,
  },
  {
    number: "06",
    title: "Deploy",
    description:
      "Seamless go-live with integration into your existing tools—CRM, WhatsApp, email, and more. We ensure minimal disruption to your operations.",
    icon: Rocket,
  },
  {
    number: "07",
    title: "Train",
    description:
      "Comprehensive staff training and documentation. We equip your team with the knowledge and SOPs needed to maximize the solution's value.",
    icon: GraduationCap,
  },
  {
    number: "08",
    title: "Optimize",
    description:
      "Continuous performance monitoring, KPI tracking, and iterative improvements. We're your long-term partner in driving ongoing efficiency gains.",
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

          {/* Title - Ashley Style */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-8xl font-bold text-muted mb-16"
          >
            AI & <span className="font-light">Automation</span>
            <br />
            Services
          </motion.h1>

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
                      <h3 className="text-xl md:text-2xl font-bold text-muted mb-6 group-hover:text-accent transition-colors duration-300">
                        {service.title.split(" ").slice(0, -1).join(" ")}
                        <br />
                        {service.title.split(" ").slice(-1)}
                      </h3>

                      {/* Description */}
                      <p className="text-white/40 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features List */}
                      <ul className="space-y-2 mb-8">
                        {service.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="text-white/60 text-sm"
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

      {/* Book a Discovery Call - Calendly Section */}
      <section className="bg-[#f5f5f5] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <p className="text-accent text-sm font-medium mb-4 uppercase tracking-wider">
                Get Started Today
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6" style={{ color: '#000000' }}>
                AI & Automation Will <span className="font-light">Unlock Growth.</span> Find Out How.
              </h2>
              <p className="text-dark/60 max-w-2xl mx-auto">
                With our free AI Readiness Assessment, we'll show you exactly how AI and automation can be deployed successfully in your business—with clear ROI projections and a roadmap tailored to your needs.
              </p>
            </motion.div>

            {/* Calendly Widget Container */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
            >
              {/* Calendly inline widget */}
              <div 
                className="calendly-inline-widget"
                data-url="https://calendly.com/hello-maruonline?hide_gdpr_banner=1&background_color=ffffff&text_color=1a1a1a&primary_color=22d3ee"
                style={{ 
                  minWidth: '320px',
                  height: '700px',
                }}
              />
              <Script 
                src="https://assets.calendly.com/assets/external/widget.js"
                strategy="lazyOnload"
              />
            </motion.div>

            {/* Alternative CTA for those who prefer other contact methods */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-center mt-8"
            >
              <p className="text-dark/50 text-sm">
                Prefer email?{' '}
                <a 
                  href="mailto:hello@maruonline.com" 
                  className="text-accent hover:underline transition-colors"
                >
                  Contact us directly
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How We Work - Workflow Section */}
      <section className="bg-dark relative py-24 lg:py-32 border-t border-white/10">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="max-w-4xl mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-accent text-sm font-medium mb-4"
            >
              Our Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-muted"
            >
              How we <span className="font-light">work</span>
            </motion.h2>
          </div>

          {/* Workflow Steps */}
          <div className="relative">
            {/* Animated Vertical Line - Desktop */}
            <motion.div
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent to-accent/50 -translate-x-1/2 origin-top"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={lineVariants}
            />

            {/* Steps */}
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={index % 2 === 0 ? "hiddenLeft" : "hiddenRight"}
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={workflowStepVariants}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col lg:flex-row items-start gap-8 lg:gap-16 mb-16 last:mb-0 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div
                  className={`lg:w-5/12 ${
                    index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4 lg:hidden">
                    <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                      <step.icon size={24} className="text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <motion.h3
                    className="hidden lg:block text-2xl md:text-3xl font-bold text-white mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {step.title}
                  </motion.h3>
                  <motion.p
                    className="text-white/50 text-sm leading-relaxed"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {step.description}
                  </motion.p>
                </div>

                {/* Center Number - Desktop with Spring Animation */}
                <div className="hidden lg:flex lg:w-2/12 justify-center">
                  <motion.div
                    className="relative"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={circleVariants}
                    transition={{ delay: index * 0.15 }}
                  >
                    <div className="w-20 h-20 rounded-full bg-dark border-2 border-accent flex items-center justify-center shadow-lg shadow-accent/20">
                      <step.icon size={32} className="text-accent" />
                    </div>
                    {/* Glow effect behind circle */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl -z-10" />
                  </motion.div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden lg:block lg:w-5/12" />
              </motion.div>
            ))}
          </div>
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
                  a: "Every engagement begins with a free AI Readiness Assessment. Our consultants review your current processes and identify high-impact automation opportunities. Then we provide a detailed roadmap with ROI projections. Most pilot projects take 2–4 weeks to deliver initial results.",
                },
                {
                  q: "Is our data safe?",
                  a: "Yes. All workflows are designed to comply with POPIA and can be hosted on South African cloud regions. Consent logs and audit trails are included.",
                },
                {
                  q: "Which tools do you work with?",
                  a: "We integrate across HubSpot, Pipedrive, Airtable, Notion, Slack, Xero, QuickBooks and more — using APIs or low-code automation where practical.",
                },
                {
                  q: "Do you provide training?",
                  a: "Every project includes hand-off sessions and lightweight runbooks so your team stays confident and self-sufficient.",
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

      {/* CTA Section - AI Readiness Test (Light Background) */}
      <section className="bg-[#f5f5f5] py-24 lg:py-32">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Sub-headline - Right aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-end mb-12"
          >
            <p className="text-dark/50 text-sm text-right max-w-md">
              Discover your business&apos;s AI potential in just
              <br />
              5 minutes with our complimentary assessment.
            </p>
          </motion.div>

          {/* Main CTA - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-16" style={{ color: '#000000' }}>
              <span className="font-bold">Take the Free</span>{" "}
              <span className="font-light">AI</span>
              <br />
              <span className="font-bold">Readiness</span>{" "}
              <span className="font-light">Test</span>
            </h2>

            {/* Pill Button - Ashley Style */}
            <Link
              href="/ai-readiness-test"
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
