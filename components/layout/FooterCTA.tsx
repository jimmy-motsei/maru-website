"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { footerNavigation } from "@/data/footer-navigation";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
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

export function FooterCTA() {
  return (
    <footer className="bg-dark">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-section-tab lg:py-section">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/brand/maru_logo_cropped_5px.png"
                  alt="Maru Logo"
                  className="h-[80px] w-auto"
                />
              </Link>
              <p className="text-text-inverse-muted text-base leading-relaxed mb-6 font-light">
                Building revenue infrastructure for African SMEs—one system at a time.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-border-inverse-subtle flex items-center justify-center text-white/40 hover:text-highlight hover:border-highlight/50 transition-all duration-300"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium mb-6 text-[18px] uppercase tracking-wide">Navigation</h4>
              <ul className="space-y-4">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-text-inverse-muted hover:text-highlight transition-colors duration-300 text-base font-light"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium mb-6 text-[18px] uppercase tracking-wide">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services/ai-revenue-diagnostic"
                    className="text-text-inverse-muted hover:text-accent transition-colors duration-300 text-base"
                  >
                    AI Revenue Diagnostic
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/custom-ai-solution-build"
                    className="text-text-inverse-muted hover:text-accent transition-colors duration-300 text-base"
                  >
                    Custom AI Solution Build
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-training-capability-building"
                    className="text-text-inverse-muted hover:text-accent transition-colors duration-300 text-base"
                  >
                    AI Training & Capability Building
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ongoing-ai-support-optimization"
                    className="text-text-inverse-muted hover:text-accent transition-colors duration-300"
                  >
                    Ongoing AI Support & Optimization
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-medium mb-6 text-[18px] uppercase tracking-wide">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@maruonline.com"
                    className="text-text-inverse-muted hover:text-highlight transition-colors duration-300 text-base font-light"
                  >
                    hello@maruonline.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/27635643263"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-text-inverse-muted hover:text-[#25D366] transition-colors duration-300 text-base font-light"
                    aria-label="Chat with us on WhatsApp"
                  >
                    <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Chat on WhatsApp
                  </a>
                </li>
                <li className="text-text-inverse-muted text-base font-light">
                  Johannesburg, South Africa
                </li>
                <li className="text-text-inverse-muted text-base font-light">
                  Mon–Fri, 9am–6pm SAST
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className="text-white/40 text-base">
                © {new Date().getFullYear()} Maru Online. All Rights Reserved.
              </p>

              {/* Legal Links */}
              <ul className="flex flex-wrap items-center gap-6">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/40 hover:text-accent transition-colors duration-300 text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
                    className="text-white/40 hover:text-accent transition-colors duration-300 text-base"
                  >
                    Cookie Preferences
                  </button>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
