"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";

const navigation = {
  main: [
    { name: "Homepage", href: "/" },
    {
      name: "Services",
      href: "/services",
      children: [
        { name: "SmartGuest AI", href: "/smartguest-ai" },
        { name: "BizInsight AI", href: "/bizinsight-ai" },
        { name: "AI Mastery Workshops", href: "/ai-mastery-workshops" },
        { name: "Custom AI Solutions", href: "/custom-ai-solutions" },
      ],
    },
    { name: "Resources", href: "/knowledge" },
    { name: "Contact", href: "/contact" },
  ],
  social: [
    { name: "LinkedIn", href: siteConfig.links.linkedin, icon: "linkedin" },
    { name: "Twitter", href: siteConfig.links.twitter, icon: "twitter" },
    { name: "Facebook", href: siteConfig.links.facebook, icon: "facebook" },
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
          isScrolled ? "bg-dark/90 backdrop-blur-md py-4" : "py-8"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-3xl font-bold text-white hover:text-accent transition-colors"
            >
              M.
            </Link>


            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="group relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-transparent transition-colors hover:bg-white/10"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={isMenuOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-white origin-center"
              />
              <motion.span
                animate={isMenuOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                className="h-0.5 w-6 bg-white origin-center"
              />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark"
          >
            {/* Menu Frame Top */}
            <div className="absolute top-0 left-0 right-0 p-6 lg:p-8 flex items-center justify-between z-50">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-bold text-white"
              >
                M.
              </Link>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="group relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-transparent transition-colors hover:bg-white/10"
                aria-label="Close menu"
              >
                <motion.span
                  animate={{ rotate: 45, y: 4 }}
                  className="h-0.5 w-6 bg-white origin-center"
                />
                <motion.span
                  animate={{ rotate: -45, y: -4 }}
                  className="h-0.5 w-6 bg-white origin-center"
                />
              </button>
            </div>

            {/* Menu Content */}
            <div className="container mx-auto px-6 lg:px-8 h-full flex items-center">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full pt-24">
                {/* Main Navigation */}
                <nav className="space-y-1">
                  {navigation.main.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className="group block py-3"
                      >
                        <span className="text-4xl lg:text-5xl font-light text-white hover:text-accent transition-colors">
                          {item.name}
                        </span>
                      </Link>
                      {item.children && (
                        <ul className="pl-4 mt-2 space-y-2">
                          {item.children.map((child) => (
                            <li key={child.name}>
                              <Link
                                href={child.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-lg text-light-soft hover:text-accent transition-colors"
                              >
                                {child.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </motion.div>
                  ))}
                </nav>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-8 lg:pt-8"
                >
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted mb-4">
                      Contact
                    </h3>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="block text-xl text-white hover:text-accent transition-colors mb-2"
                    >
                      {siteConfig.contact.email}
                    </a>
                    <a
                      href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`}
                      className="block text-xl text-white hover:text-accent transition-colors"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted mb-4">
                      Locations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {siteConfig.contact.locations.map((location) => (
                        <div key={location.name}>
                          <p className="text-white font-medium">{location.name}</p>
                          <p className="text-light-soft text-sm">{location.address}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-muted mb-4">
                      Follow Us
                    </h3>
                    <div className="flex gap-6">
                      {navigation.social.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-accent transition-colors"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
