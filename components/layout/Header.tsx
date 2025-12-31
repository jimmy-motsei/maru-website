"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { X } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

// Menu items structure
const menuItems = {
  primary: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "AI Audits", href: "/website-lead-grader" },
    { name: "Resources", href: "/knowledge" },
    { name: "Contact", href: "/contact" },
  ],
  projects: [
    { name: "Website Lead Grader", href: "/website-lead-grader" },
    { name: "Pipeline Leak Detector", href: "/assessments/pipeline-leak" },
    { name: "Proposal Accelerator", href: "/assessments/proposal" },
    { name: "Tech Stack Auditor", href: "/assessments/tech-audit" },
  ],
  usefulLinks: [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and conditions", href: "/terms-conditions" },
    { name: "Cookie Policy", href: "/cookie-policy" },
    { name: "Careers", href: "/careers" },
  ],
};

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
          isScrolled && !isMenuOpen ? "bg-dark/90 backdrop-blur-md py-4" : "py-6 lg:py-8"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className={`text-3xl font-bold transition-colors ${
                isMenuOpen ? "text-white" : "text-white hover:text-accent"
              }`}
            >
              M.
            </Link>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`group relative flex items-center justify-center p-2 rounded-full transition-colors hover:bg-white/10 ${
                 isMenuOpen ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1.5 items-end">
                <span className="h-0.5 w-8 bg-white group-hover:w-10 transition-all duration-300" />
                <span className="h-0.5 w-6 bg-white group-hover:w-10 transition-all duration-300" />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[60] bg-[#050505] text-white overflow-y-auto overflow-x-hidden"
          >
            {/* Overlay Header (Logo + Close Button) */}
            <div className="container mx-auto px-6 lg:px-12 py-6 lg:py-8 relative z-50">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-bold text-white hover:text-accent transition-colors"
                >
                  M.
                </Link>

                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-8 h-8 text-white" />
                </button>
              </div>
            </div>

            {/* Overlay Content */}
            <div className="container mx-auto px-6 lg:px-12 h-[calc(100vh-100px)] flex flex-col pt-[200px] lg:pt-[300px] relative">
              
              {/* Cloud Network Background - New Maru Aesthetic */}
              <AtmosphericBackground variant="overlay" className="z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 relative z-10">
                
                {/* Left Column: Primary Navigation */}
                <div className="lg:col-span-5 flex flex-col">
                  <ul className="list-none p-0 m-0">
                    {menuItems.primary.map((item, index) => (
                      <motion.li
                        key={item.name}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                        className="mb-[8px] lg:mb-[10px] last:mb-0"
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block text-[26px] lg:text-[34px] font-medium text-white/80 hover:text-accent transition-all duration-400 hover:translate-x-[5px] leading-[1.1]"
                        >
                          {item.name}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Vertical Divider Line */}
                <div className="lg:col-span-1 hidden lg:flex justify-center h-full">
                     <motion.div 
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="w-px h-full bg-white/10 origin-top min-h-[400px]"
                     />
                </div>

                {/* Right Column: Secondary Links & Details */}
                <div className="lg:col-span-6 flex flex-col justify-start pt-8 lg:pt-0 pl-0 lg:pl-[60px]">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                    {/* AI Audits / Assessments */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <h3 className="text-[15px] font-semibold text-white mb-6">
                        AI Audits
                      </h3>
                      <ul className="space-y-[15px]">
                        {menuItems.projects.map((project) => (
                          <li key={project.name}>
                            <Link
                              href={project.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-[15px] text-white/50 hover:text-white hover:translate-x-[5px] transition-all duration-200 block"
                            >
                              {project.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Useful Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <h3 className="text-[15px] font-semibold text-white mb-6">
                        Useful links
                      </h3>
                      <ul className="space-y-[15px]">
                        {menuItems.usefulLinks.map((link) => (
                          <li key={link.name}>
                            <Link
                              href={link.href}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-[15px] text-white/50 hover:text-white hover:translate-x-[5px] transition-all duration-200 block"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>

                  {/* Horizontal Line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="w-full h-px bg-white/10 my-12 origin-left"
                  />

                  {/* Contact Locations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8"
                  >
                    <div>
                      <h3 className="text-white font-bold mb-2">Johannesburg</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        South Africa
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white font-bold mb-2">Get in touch</h3>
                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="text-gray-600 text-sm hover:text-white transition-colors"
                      >
                         {siteConfig.contact.email}
                      </a>
                    </div>
                  </motion.div>

                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
