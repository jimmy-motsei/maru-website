"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Zap,
  Search,
  Smartphone,
  Lock,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Rocket,
  Layers,
  TrendingUp,
  Globe,
  Server,
  Gauge,
} from "lucide-react";
import { ServiceHero } from "@/components/sections/ServiceHero";
import { OtherServices } from "@/components/sections/OtherServices";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Web Development", href: "/services/website-development" },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
};

const comparisonData = {
  oldWay: [
    { text: "Slow page loads (3-5+ seconds)", icon: XCircle },
    { text: "Bloated plugins & security risks", icon: XCircle },
    { text: "Generic templates that all look the same", icon: XCircle },
    { text: "Poor mobile experience", icon: XCircle },
    { text: "SEO as an afterthought", icon: XCircle },
  ],
  maruWay: [
    { text: "Instant load times (LCP < 1s)", icon: CheckCircle2 },
    { text: "Bank-grade security by default", icon: CheckCircle2 },
    { text: "Custom conversion-psychology design", icon: CheckCircle2 },
    { text: "Mobile-first responsive architecture", icon: CheckCircle2 },
    { text: "SEO-first server-side rendering", icon: CheckCircle2 },
  ],
};

const features = [
  {
    icon: Gauge,
    title: "Blazing Speed",
    description: "90+ Lighthouse scores. Sub-second load times. Your visitors won't wait—and neither will Google.",
    stat: "90+",
    statLabel: "Lighthouse Score",
  },
  {
    icon: Search,
    title: "SEO-First Architecture",
    description: "Server-Side Rendering (SSR) means search engines see your full content. Better indexing, higher rankings.",
    stat: "3x",
    statLabel: "More Visibility",
  },
  {
    icon: Server,
    title: "Infinite Scalability",
    description: "Built on Vercel's edge network. Traffic spikes? No problem. Your site stays fast under any load.",
    stat: "99.99%",
    statLabel: "Uptime",
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "No vulnerable plugins. No database exploits. Static-first architecture that's inherently secure.",
    stat: "Zero",
    statLabel: "Plugin Vulnerabilities",
  },
  {
    icon: Smartphone,
    title: "Mobile Excellence",
    description: "60%+ of traffic is mobile. We design mobile-first, then scale up to desktop perfection.",
    stat: "100%",
    statLabel: "Responsive",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimized",
    description: "Strategic CTAs, psychological triggers, and user flows designed to turn visitors into leads.",
    stat: "5x",
    statLabel: "More Conversions",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Audit & Strategy",
    description: "We analyze your current site, competitors, and market to create a winning blueprint.",
  },
  {
    number: "02",
    title: "UX/UI Design",
    description: "Conversion-focused design that guides users and builds trust at every touchpoint.",
  },
  {
    number: "03",
    title: "High-Performance Build",
    description: "Next.js, React, and modern tooling deliver a site that's fast, secure, and scalable.",
  },
  {
    number: "04",
    title: "Launch & Optimize",
    description: "Go live with confidence. We monitor, test, and refine for continuous improvement.",
  },
];

export default function WebsiteDevelopmentPage() {
  const handleBookingClick = () => {
    // Trigger booking modal
    const event = new CustomEvent("open-booking-modal");
    window.dispatchEvent(event);
  };

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      {/* Hero Section */}
      <ServiceHero
        breadcrumbs={breadcrumbs}
        titleBold="Your Website Should Be"
        titleLight="Your Best Salesperson."
        subtitle="Stop losing leads to slow, outdated design. We build high-performance web applications that capture attention and convert traffic."
      />

      {/* The Problem Section */}
      <section id="service-details" className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={0}
            >
              <span className="inline-block px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 text-sm font-medium mb-6">
                The Problem
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
                <span className="font-light text-zinc-500">Most B2B Sites Are</span>
                <br />
                <span className="font-bold text-white">Digital Brochures.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                They sit there. Static. Slow. Passive. Waiting for visitors to somehow find them and magically become customers.
              </p>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8">
                Here's the brutal truth:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">If your site takes &gt;3s to load</p>
                    <p className="text-zinc-500 text-sm">You lose 40% of your traffic before they see anything.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">If it doesn't guide the user</p>
                    <p className="text-zinc-500 text-sm">They bounce. No conversion. No lead. Just wasted ad spend.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 shrink-0 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">If your SEO is an afterthought</p>
                    <p className="text-zinc-500 text-sm">Competitors outrank you and steal your market share daily.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual Column */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={0.2}
              className="relative"
            >
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative circles */}
                <div className="absolute inset-0 rounded-full border border-zinc-800 opacity-50" />
                <div className="absolute inset-8 rounded-full border border-zinc-700 opacity-40" />
                <div className="absolute inset-16 rounded-full border border-zinc-600 opacity-30" />
                
                {/* Center content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 bg-gradient-to-br from-zinc-900 to-zinc-950 rounded-3xl border border-zinc-800 shadow-2xl">
                    <div className="text-6xl font-bold text-red-400 mb-2">40%</div>
                    <p className="text-zinc-400 text-sm">of visitors leave if your site<br/>takes longer than 3 seconds</p>
                  </div>
                </div>

                {/* Floating elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-8 p-3 bg-zinc-900 rounded-xl border border-zinc-800"
                >
                  <Globe className="w-6 h-6 text-zinc-500" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-16 left-8 p-3 bg-zinc-900 rounded-xl border border-zinc-800"
                >
                  <Zap className="w-6 h-6 text-zinc-500" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution - Comparison Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-2 bg-[var(--color-cyan-primary)]/10 border border-[var(--color-cyan-primary)]/20 rounded-full text-[var(--color-cyan-primary)] text-sm font-medium mb-6">
              The Maru Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              <span className="font-light text-zinc-500">We Don't Build</span>{" "}
              <span className="font-bold text-white">Websites.</span>
              <br />
              <span className="font-light text-zinc-500">We Build</span>{" "}
              <span className="font-bold text-[var(--color-cyan-primary)]">Lead-Converting Engines.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Old Way */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={0.1}
              className="bg-zinc-900/50 backdrop-blur-sm p-8 rounded-3xl border border-zinc-800"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-zinc-800 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-zinc-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">The Old Way</h3>
                  <p className="text-zinc-500 text-sm">WordPress / Template Sites</p>
                </div>
              </div>
              <div className="space-y-4">
                {comparisonData.oldWay.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-red-400 shrink-0" />
                    <span className="text-zinc-400">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Maru Way */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariants}
              custom={0.2}
              className="bg-gradient-to-br from-[var(--color-cyan-primary)]/10 to-[#0ea5e9]/5 backdrop-blur-sm p-8 rounded-3xl border border-[var(--color-cyan-primary)]/30 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-cyan-primary)]/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-cyan-primary)]/20 flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-[var(--color-cyan-primary)]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">The Maru Way</h3>
                    <p className="text-[var(--color-cyan-primary)] text-sm">Next.js / React / Vercel</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {comparisonData.maruWay.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5 text-[var(--color-cyan-primary)] shrink-0" />
                      <span className="text-white">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Engine Architecture - Features Section */}
      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              <span className="font-light text-zinc-500">The Engine</span>{" "}
              <span className="font-bold text-white">Architecture</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              Every component is engineered for one purpose: turning visitors into leads.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUpVariants}
                custom={index * 0.1}
                className="group bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 hover:border-[var(--color-cyan-primary)]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[var(--color-cyan-primary)]/10 flex items-center justify-center text-[var(--color-cyan-primary)] group-hover:scale-110 transition-transform">
                    <feature.icon size={28} />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[var(--color-cyan-primary)]">{feature.stat}</div>
                    <div className="text-xs text-zinc-500">{feature.statLabel}</div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl mb-6">
              <span className="font-light text-zinc-500">Our</span>{" "}
              <span className="font-bold text-white">Process</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              From strategy to launch in weeks, not months.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUpVariants}
                  custom={index * 0.1}
                  className="relative group"
                >
                  <div className="bg-white/5 p-8 rounded-2xl border border-white/10 h-full hover:border-[var(--color-cyan-primary)]/50 transition-colors">
                    <div className="w-12 h-12 rounded-full border-2 border-[var(--color-cyan-primary)] flex items-center justify-center mb-6 bg-[#050505]">
                      <span className="text-lg font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                  {/* Connector arrow */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-[var(--color-cyan-primary)]/30 z-10">
                      <ArrowRight size={24} />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-gradient-to-b from-[#0A0A0A] to-[#050505] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-cyan-primary)]/5 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariants}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6">
              <span className="font-light text-zinc-500">Ready to upgrade</span>
              <br />
              <span className="font-bold text-white">your digital presence?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-2xl mx-auto">
              Stop losing leads to a slow, outdated website. Let's build something that actually works for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <CTAPrimary onClick={handleBookingClick}>
                BOOK STRATEGY CALL
              </CTAPrimary>
              
              <Link
                href="/website-audit"
                className="inline-flex items-center gap-3 px-8 py-4 border border-zinc-700 text-white font-medium rounded-full hover:border-[var(--color-cyan-primary)] hover:text-[var(--color-cyan-primary)] transition-all group"
              >
                <span>Get Free Website Audit</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--color-cyan-primary)]" />
                <span>No obligation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--color-cyan-primary)]" />
                <span>30-minute strategy session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--color-cyan-primary)]" />
                <span>Custom proposal included</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Other Services */}
      <OtherServices currentServiceId="website-development" />
    </main>
  );
}
