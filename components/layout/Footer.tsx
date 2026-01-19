"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

export function Footer() {
  return (
    <footer className="bg-dark relative overflow-hidden">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-32 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Top Row - Logo and Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Logo */}
            <motion.div variants={itemVariants} className="lg:col-span-4">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/brand/maru-logo-neutral.png"
                  alt="Maru Logo"
                  width={120}
                  height={120}
                  className="h-[120px] w-auto"
                />
              </Link>
              
              <div className="flex items-center gap-4 mt-8">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-10 w-10 rounded-full border border-white/10 flex items-center justify-center text-light-soft hover:text-accent hover:border-accent/50 transition-all duration-300"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Navigation */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-2 lg:col-start-5"
            >
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Navigation</h3>
              <nav>
                <ul className="space-y-4">
                  {footerNavigation.main.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-white/70 hover:text-accent transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/services/lead-generation" className="text-white/70 hover:text-accent transition-colors duration-300">
                    Website Conversion
                  </Link>
                </li>
                <li>
                  <Link href="/services/sales-systems" className="text-white/70 hover:text-accent transition-colors duration-300">
                    Sales Process
                  </Link>
                </li>
                <li>
                  <Link href="/services/office-automation" className="text-white/70 hover:text-accent transition-colors duration-300">
                    Marketing Integration
                  </Link>
                </li>
                <li>
                  <Link href="/services/whatsapp-solutions" className="text-white/70 hover:text-accent transition-colors duration-300">
                    Follow-Up Automation
                  </Link>
                </li>

              </ul>
            </motion.div>

            {/* Get in Touch */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-3"
            >
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Get in Touch</h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Marketing systems that actually work. Built for African SMEs tired of agencies that don't.
              </p>
              <div className="space-y-4">
                <p className="text-white/70">hello@maruonline.com</p>
                <p className="text-white/70">Johannesburg, South Africa</p>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <motion.div
            variants={itemVariants}
            className="my-16 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"
          />

          {/* Bottom Row - Copyright and Legal */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Copyright */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-6"
            >
              <p className="text-light-soft text-sm">
                © {new Date().getFullYear()} Maru Online. All Rights Reserved.
              </p>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-6 flex justify-start lg:justify-end"
            >
              <ul className="flex flex-wrap gap-x-8 gap-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-light-soft hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
