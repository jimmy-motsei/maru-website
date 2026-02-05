"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, AlertCircle, DollarSign, Wrench, BarChart3, TrendingUp, MessageSquare, MessageCircle, Link2, Search, Hammer, Rocket, LineChart, CheckCircle2 } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CTAPrimary } from "@/components/ui/CTAPrimary";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/animations";

import { siteConfig } from "@/config/site";

const problemsWithAgencies = [
  {
    icon: AlertCircle,
    title: "Solutions Before Symptoms",
    description: "Most marketing technology projects start with a solution—a new CRM, a marketing automation platform, a website rebuild. But without understanding what's actually breaking down in your current system, you risk expensive changes that don't address the revenue leak.",
  },
  {
    icon: DollarSign,
    title: "The Enterprise Playbook Doesn't Scale Down",
    description: "There's a methodology gap in the market. Enterprise solutions are over-engineered for SME needs, but most providers only know how to implement that playbook. The tools, timelines, and cost structures weren't built for your stage—and forcing them to fit creates more friction than flow.",
  },
  {
    icon: Wrench,
    title: "Tools Without Context",
    description: "A new platform gets implemented. Your team gets trained. But six months later, data still lives in three places, follow-up is still manual, and your website conversion hasn't moved. Why? Because tools were added without understanding how the whole system needs to work together.",
  },
];

const serviceCards = [
  {
    id: "01",
    title: "Fix Your Website Conversion",
    icon: BarChart3,
    iconColor: "#f97316",
    problem: "Your website gets traffic but doesn't convert visitors into leads",
    fixes: [
      "Low conversion rates (1-2% → 5-6%)",
      "Unclear value propositions",
      "Poor lead capture design",
      "Slow page speed killing conversions",
    ],
    ctaText: "Learn More",
    ctaLink: "/services/lead-generation",
  },
  {
    id: "02",
    title: "Optimize Your Sales Process",
    icon: TrendingUp,
    iconColor: "#10b981",
    problem: "Deals are stalling in your pipeline and your team wastes time on admin",
    fixes: [
      "Deals dying at specific stages",
      "Manual data entry slowing reps down",
      "No follow-up automation",
      "Marketing and sales disconnected",
    ],
    ctaText: "Learn More",
    ctaLink: "/services/sales-systems",
  },
  {
    id: "03",
    title: "Automate Your Follow-Up",
    icon: MessageSquare,
    iconColor: "#E67F3E",
    problem: "Leads go cold because follow-up is slow or inconsistent",
    fixes: [
      "Slow response times (industry avg: 42 hours)",
      "Reps giving up after 1-2 touches",
      "Manual follow-up that doesn't scale",
      "Disconnected channels (email, SMS, WhatsApp)",
    ],
    ctaText: "Learn More",
    ctaLink: "/services/whatsapp-solutions",
  },
  {
    id: "04",
    title: "Integrate Your Marketing Stack",
    icon: Link2,
    iconColor: "#a855f7",
    problem: "Your tools don't talk to each other, forcing manual data transfer",
    fixes: [
      "Data living in silos across 10+ tools",
      "Hours wasted on manual data entry",
      "Redundant software you're paying for",
      "Missing integrations causing errors",
    ],
    ctaText: "Learn More",
    ctaLink: "/services/office-automation",
  },
  {
    id: "05",
    title: "Deploy Smart Support Chatbots",
    icon: MessageCircle,
    iconColor: "#22c55e",
    problem: "Customers get frustrated by generic chatbot responses that don't help",
    fixes: [
      "Generic responses that don't understand your business",
      "No clear path to human support",
      "Disconnected from your systems and data",
      "Chatbots that create more problems than they solve",
    ],
    ctaText: "Learn More",
    ctaLink: "/services/customer-support-chatbots",
  },
];

const howWeWorkSteps = [
  {
    number: "01",
    icon: Search,
    title: "Free Diagnostic First",
    description: "We don't pitch solutions before understanding your problem. Take our free assessment—get actionable insights whether you hire us or not.",
  },
  {
    number: "02",
    icon: Hammer,
    title: "Custom Roadmap",
    description: "Based on your diagnostic, we prioritize fixes by revenue impact. No cookie-cutter solutions—just what your business actually needs.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We Build & Integrate",
    description: "Our team handles the technical work—automation setup, system integration, and testing. You focus on running your business.",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Continuous Improvement",
    description: "Monthly optimization calls, performance tracking, and ongoing support. We stay until your systems consistently deliver results.",
  },
];

const faqs = [
  {
    question: "How is this different from hiring a traditional agency?",
    answer: "Traditional agencies pitch you a solution before understanding your problem. We start with a free diagnostic that analyzes your actual data. You see the problems first, then decide if you want our help fixing them. No pressure, no sales tactics—just insights.",
  },
  {
    question: "Do I need all four services?",
    answer: "No. Most businesses start with one or two services based on their biggest pain point. Our diagnostics help you identify which problems to tackle first. You can add services as you grow.",
  },
  {
    question: "What if I already have an agency or in-house team?",
    answer: "We often work alongside existing teams. Our diagnostics reveal gaps they might have missed, and we can handle specific projects (like integrating your tech stack) without replacing your current setup.",
  },
  {
    question: "How long until I see results?",
    answer: "Most clients see measurable improvements within 30-60 days. Website conversion fixes can show results in weeks. More complex projects (like full pipeline automation) take 2-3 months to implement and optimize.",
  },
  {
    question: "What if the diagnostic shows I don't need your services?",
    answer: "That happens sometimes—and we're fine with it. If your systems are working well, we'll tell you. The diagnostic is free and gives you valuable insights regardless. We only work with businesses where we're confident we can deliver ROI.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-dark">
      {/* Hero Section - Dark with Atmospheric Background */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden">
        <AtmosphericBackground variant="hero" />
        
        <div className="container mx-auto px-6 lg:px-8 relative z-10 pt-[clamp(150px,20vh,200px)] pb-[clamp(80px,12vh,140px)]">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <Link href="/" className="text-accent hover:text-accent-light transition-colors">
                  Homepage
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white/60">Services</li>
            </ul>
          </motion.nav>

          {/* Hero Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <h1 className="text-h1 font-medium text-white mb-14 leading-[1.2]">
              We Fix <span className="font-thin">Marketing Systems</span> <br className="hidden md:block" />
              <span>That Leak Revenue</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl mb-8">
              Stop losing leads to broken websites, stalled pipelines, and disconnected tools. We diagnose the problem, then fix it—no fluff, no enterprise price tag.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <CTAPrimary href="/assessments/lead-score" className="text-base">
                Start With a Free Diagnosis
              </CTAPrimary>
              <a
                href="#services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/15 text-white rounded-full transition-colors border border-white/20"
              >
                See Our Services
                <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem with Most Agencies Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium text-center mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              Why <span className="font-thin">Marketing Technology</span> <br className="hidden md:block" />
              Fails Most <span>SMEs</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16">
              {problemsWithAgencies.map((problem, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-highlight/10 flex items-center justify-center mx-auto mb-6 border border-highlight/30">
                    <problem.icon size={32} className="text-highlight" />
                  </div>
                  <h3 className="text-xl font-bold text-black mb-4">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.p className="text-center text-lg text-black font-medium mt-12 max-w-3xl mx-auto" variants={fadeUpVariants}>
              <strong>A different starting point:</strong> We diagnose before we prescribe. Free analysis of what's actually broken, prioritized by revenue impact, with solutions sized for where your business is today.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Services Section - DARK BACKGROUND */}
      <section id="services" className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium text-center mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
              Five Ways We <span className="font-thin">Fix Your</span> <br className="hidden md:block" />
              <span>Marketing Systems</span>
            </motion.h2>
            <motion.p className="text-center text-zinc-400 text-lg mb-16 max-w-3xl mx-auto" variants={fadeUpVariants}>
              Each service starts with a free diagnostic. No sales pitch, no obligation—just data-driven insights.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {serviceCards.map((service) => (
                <motion.div
                  key={service.id}
                  variants={fadeUpVariants}
                  className="bg-white/5 p-8 rounded-3xl border border-card-border hover:border-highlight/50 transition-all group"
                >
                  {/* Icon */}
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${service.iconColor}20` }}
                  >
                    <service.icon size={28} style={{ color: service.iconColor }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                  
                  {/* Problem */}
                  <p className="text-zinc-400 mb-4 leading-relaxed">
                    <span className="font-semibold text-white">Problem:</span> {service.problem}
                  </p>



                  {/* What We Fix */}
                  <p className="text-white font-semibold text-sm mb-3">What We Fix:</p>
                  <ul className="space-y-2 mb-6">
                    {service.fixes.map((fix, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-zinc-400 text-sm">
                        <CheckCircle2 size={16} className="text-highlight shrink-0 mt-0.5" />
                        <span>{fix}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTAs */}
                  <div className="flex flex-col gap-3">
                    <Link
                      href={service.ctaLink}
                      className="inline-flex items-center justify-center gap-2 bg-highlight hover:bg-highlight-hover text-black font-medium rounded-full px-6 py-3 transition-colors"
                    >
                      {service.ctaText}
                      <ArrowRight size={16} />
                    </Link>

                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How We Work Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
          >
            <motion.h2 className="text-h2 font-medium text-center mb-20 text-black leading-[1.2]" variants={fadeUpVariants}>
              How <span className="font-thin">We</span> <span>Work</span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {howWeWorkSteps.map((step, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step Number */}
                  <div className="text-highlight text-xs font-bold mb-4 uppercase tracking-widest">
                    Step {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-6 relative">
                    <step.icon size={32} className="text-highlight" />
                    <div className="absolute inset-0 rounded-full bg-highlight/20 blur-md -z-10" />
                  </div>

                  {/* Arrow - Hidden on last item and mobile */}
                  {index < howWeWorkSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-20 text-gray-300">
                      <ArrowRight size={24} />
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-black mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Start With Diagnostics Section - LIGHT BACKGROUND */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
                Why We <span className="font-thin">Start With</span> <br className="hidden md:block" />
                <span>Diagnostics</span>
              </motion.h2>
              
              <motion.p className="text-xl text-black mb-6" variants={fadeUpVariants}>
                Unlike agencies that pitch before understanding your business, we start with diagnostics.
              </motion.p>
              
              <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Most agencies will give you a quote based on 30 minutes of discovery. We think that's backwards.
              </motion.p>
              
              <motion.p className="text-lg text-gray-700 mb-8 leading-relaxed" variants={fadeUpVariants}>
                Our free diagnostic does what a traditional agency discovery process costs <span className="text-black font-semibold">R15,000+ for:</span>
              </motion.p>

              <motion.div className="space-y-4 mb-8" variants={fadeUpVariants}>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-1" />
                  <p className="text-gray-700"><span className="font-semibold text-black">Analyze your actual data,</span> not assumptions</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-1" />
                  <p className="text-gray-700"><span className="font-semibold text-black">Identify specific problems,</span> not generic 'opportunities'</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-highlight shrink-0 mt-1" />
                  <p className="text-gray-700"><span className="font-semibold text-black">Prioritize fixes by revenue impact,</span> not what's trendy</p>
                </div>
              </motion.div>

              <motion.p className="text-xl text-black font-semibold" variants={fadeUpVariants}>
                You get actionable insights whether you hire us or not. If the diagnostic reveals problems you can't fix yourself, we're here.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - DARK BACKGROUND */}
      <section className="py-24 bg-[#09121A]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={staggerContainerVariants}
            >
              <motion.h2 className="text-h2 font-medium mb-14 text-white leading-[1.2]" variants={fadeUpVariants}>
                Frequently <span className="font-thin text-zinc-500">Asked</span>
              </motion.h2>

              <div className="divide-y divide-white/20">
                {faqs.map((faq, index) => (
                  <motion.details
                    key={index}
                    variants={fadeUpVariants}
                    className="group py-6"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between">
                      <span className="text-lg font-medium text-white group-open:text-highlight transition-colors">
                        {faq.question}
                      </span>
                      <span className="text-2xl text-white/50 group-open:rotate-45 transition-transform duration-300">
                        +
                      </span>
                    </summary>
                    <div className="pt-4 text-zinc-400 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.details>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Closing CTA Section - WHITE BACKGROUND */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainerVariants}
            className="text-center"
          >
            <motion.h2 className="text-h2 font-medium mb-14 text-black leading-[1.2]" variants={fadeUpVariants}>
              Ready to <span className="font-thin text-gray-500">Find Your</span> <span>Leaks?</span>
            </motion.h2>
            <motion.p className="text-gray-700 text-lg mb-12 max-w-2xl mx-auto" variants={fadeUpVariants}>
              No credit card required. No sales call. Just data-driven insights into where your marketing is breaking down.
            </motion.p>

            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto mb-8" variants={fadeUpVariants}>
              <Link
                href="https://leads.maruonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between bg-highlight hover:bg-highlight-hover text-black font-bold uppercase text-xs md:text-sm tracking-[0.5px] rounded-full px-5 md:px-8 py-4 min-h-[56px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(230,127,62,0.5)] group"
              >
                <span className="flex-1 text-center">Grade My Website</span>
                <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </Link>
              <Link
                href="https://pipeline.maruonline.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between bg-highlight hover:bg-highlight-hover text-black font-bold uppercase text-xs md:text-sm tracking-[0.5px] rounded-full px-5 md:px-8 py-4 min-h-[56px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(230,127,62,0.5)] group"
              >
                <span className="flex-1 text-center">Analyze My Pipeline</span>
                <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </Link>
              <Link
                href={siteConfig.calendly.discoveryCall}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between bg-highlight hover:bg-highlight-hover text-black font-bold uppercase text-xs md:text-sm tracking-[0.5px] rounded-full px-5 md:px-8 py-4 min-h-[56px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(230,127,62,0.5)] group"
              >
                <span className="flex-1 text-center">Get a Free Consultation</span>
                <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </Link>
              <Link
                href="/assessments/tech-audit"
                className="inline-flex items-center justify-between bg-highlight hover:bg-highlight-hover text-black font-bold uppercase text-xs md:text-sm tracking-[0.5px] rounded-full px-5 md:px-8 py-4 min-h-[56px] transition-all duration-300 hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(230,127,62,0.5)] group"
              >
                <span className="flex-1 text-center">Audit My Tech Stack</span>
                <span className="w-10 h-10 bg-black rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
              </Link>
            </motion.div>

            <motion.p className="text-gray-600" variants={fadeUpVariants}>
              Not sure which diagnostic to take?{" "}
              <Link href="/contact" className="text-highlight hover:text-highlight/80 transition-colors font-medium">
                Talk to us →
              </Link>{" "}
              and we'll recommend where to start.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
