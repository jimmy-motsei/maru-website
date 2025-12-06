"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, LucideIcon } from "lucide-react";
import { Dodecahedron } from "@/components/ui/Dodecahedron";

interface Breadcrumb {
  label: string;
  href: string;
}

interface ServiceHeroProps {
  breadcrumbs: Breadcrumb[];
  titleBold: string;
  titleLight: string;
  subtitle?: string;
  scrollToId?: string;
}

export function ServiceHero({
  breadcrumbs,
  titleBold,
  titleLight,
  subtitle,
  scrollToId = "service-details",
}: ServiceHeroProps) {
  return (
    <section className="bg-dark relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Animated Background Element */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-30 pointer-events-none scale-150">
        <Dodecahedron />
      </div>

      <div className="container mx-auto px-6 lg:px-8 py-24 lg:py-32 relative z-10">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <ol className="flex items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Link
                  href={crumb.href}
                  className={`transition-colors ${
                    index === breadcrumbs.length - 1
                      ? "text-accent"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {crumb.label}
                </Link>
                {index < breadcrumbs.length - 1 && (
                  <span className="text-white/30">/</span>
                )}
              </li>
            ))}
          </ol>
        </motion.nav>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 max-w-4xl"
        >
          <span className="font-bold">{titleBold}</span>{" "}
          <span className="font-light text-white/80">{titleLight}</span>
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white/60 text-lg max-w-2xl mb-12"
          >
            {subtitle}
          </motion.p>
        )}

        {/* Scroll Down Link */}
        <motion.a
          href={`#${scrollToId}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="inline-flex items-center gap-3 text-white/60 hover:text-accent transition-colors group"
        >
          <span className="text-sm font-medium">About this service</span>
          <ArrowDown size={16} className="animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
