"use client";

import Link from "next/link";
import Image from "next/image";
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

export function Footer() {
  return (
    <footer className="bg-deep-navy relative overflow-hidden text-white border-t border-white/5">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-electric-cyan/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-24 relative">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* 5-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
            
            {/* COLUMN 1: Company & Logo */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/images/brand/maru_logo_cropped_5px.png"
                  alt="Maru Logo"
                  width={160}
                  height={160}
                  className="h-[80px] w-auto"
                />
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                 Operationalizing AI investment for the South African mid-market.
              </p>
              
              <div className="flex items-center gap-3">
                {footerNavigation.social.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-8 w-8 rounded-full bg-card-dark-soft flex items-center justify-center text-white/60 hover:text-electric-cyan hover:bg-card-dark-hover transition-all duration-300"
                    aria-label={item.name}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* COLUMN 2: Services */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Services</h3>
              <ul className="space-y-3">
                {[
                    { name: "AI Implementation Audit", href: "/services/audit" },
                    { name: "Human-Centric AI", href: "/services/human-centric" },
                    { name: "RevOps Optimization", href: "/services/revops" },
                    { name: "Compliance Systems", href: "/services/popia" },
                    { name: "Team Training", href: "/services/training" }
                ].map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-white/60 hover:text-electric-cyan text-sm transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
              </ul>
            </motion.div>

            {/* COLUMN 3: Resources */}
            <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Resources</h3>
              <ul className="space-y-3">
                 {[
                    { name: "Implementation Playbooks", href: "/resources/playbooks" },
                    { name: "ROI Calculator", href: "/resources/roi-calculator" },
                    { name: "Case Studies", href: "/case-studies" },
                    { name: "Blog & Insights", href: "/blog" }
                ].map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-white/60 hover:text-electric-cyan text-sm transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
              </ul>
            </motion.div>

             {/* COLUMN 4: Company */}
             <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Company</h3>
              <ul className="space-y-3">
                 {[
                    { name: "About Us", href: "/about" },
                    { name: "Careers", href: "/careers" },
                    { name: "Contact", href: "/contact" },
                    { name: "Privacy Policy", href: "/privacy" }
                ].map((link) => (
                    <li key={link.name}>
                        <Link href={link.href} className="text-white/60 hover:text-electric-cyan text-sm transition-colors">
                            {link.name}
                        </Link>
                    </li>
                ))}
              </ul>
            </motion.div>

             {/* COLUMN 5: Contact */}
             <motion.div variants={itemVariants}>
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">Contact</h3>
              <address className="not-italic text-white/60 text-sm space-y-4">
                 <p>
                    15 Alice Lane,<br/>
                    Sandton, Johannesburg,<br/>
                    2196
                 </p>
                 <p>
                    <a href="mailto:hello@maruonline.com" className="hover:text-electric-cyan transition-colors">hello@maruonline.com</a>
                 </p>
                 <p>
                    <a href="tel:+27101234567" className="hover:text-electric-cyan transition-colors">+27 (10) 123 4567</a>
                 </p>
              </address>
            </motion.div>

          </div>

          {/* Divider */}
          <div className="h-px w-full bg-white/10 mb-8" />
          
          {/* Disclaimer & Copyright */}
           <motion.div variants={itemVariants} className="text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-white/40">
             <div className="space-y-2">
                <p>© {new Date().getFullYear()} Maru Online (Pty) Ltd. All Rights Reserved.</p>
                <p>Maruonline is an independent consultancy and not affiliated with OpenAI, Microsoft, or HubSpot.</p>
             </div>
             <div className="md:text-right">
                <p>
                    DISCLAIMER: Results not typical. Our clients' results depend on their starting point, team capability, and market conditions. We do not guarantee revenue figures.
                </p>
             </div>
           </motion.div>

        </motion.div>
      </div>
    </footer>
  );
}
