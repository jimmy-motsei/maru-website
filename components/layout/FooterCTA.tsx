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
      <div className="container mx-auto px-6 lg:px-8 py-16 lg:py-20">
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
                  src="/images/brand/maru-logo-neutral.png"
                  alt="Maru Logo"
                  className="h-[200px] w-auto"
                />
              </Link>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                Solving marketing problems for African SMEs—one broken system at a time.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-accent hover:border-accent/50 transition-all duration-300"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation Column */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-6 text-lg">Navigation</h4>
              <ul className="space-y-4">
                {footerNavigation.main.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-white/50 hover:text-accent transition-colors duration-300 text-base"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services Column */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-6 text-lg">Services</h4>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/services/lead-generation"
                    className="text-white/50 hover:text-accent transition-colors duration-300 text-base"
                  >
                    Website Conversion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/sales-systems"
                    className="text-white/50 hover:text-accent transition-colors duration-300 text-base"
                  >
                    Sales Process
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/office-automation"
                    className="text-white/50 hover:text-accent transition-colors duration-300 text-base"
                  >
                    Marketing Integration
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/whatsapp-solutions"
                    className="text-white/60 hover:text-accent transition-colors duration-300"
                  >
                    Follow-Up Automation
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Contact Column */}
            <motion.div variants={itemVariants}>
              <h4 className="text-white font-semibold mb-6 text-lg">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:hello@maruonline.com"
                    className="text-white/50 hover:text-accent transition-colors duration-300 text-base"
                  >
                    hello@maruonline.com
                  </a>
                </li>
                <li className="text-white/50 text-base">
                  Johannesburg, South Africa
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
