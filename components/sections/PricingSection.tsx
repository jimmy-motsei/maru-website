"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

interface PricingTier {
  price: string;
  title: string;
  subtitle?: string;
  description: string;
  features?: string[];
  bestFor?: string;
  href: string;
  featured?: boolean;
}

interface PricingSectionProps {
  headline?: string;
  subheadline?: string;
  description?: string;
  tiers: PricingTier[];
  customCTAText?: string;
  customCTAHref?: string;
}

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

export function PricingSection({
  headline = "Flexible packages",
  subheadline = "for your needs",
  description,
  tiers,
  customCTAText = "Get Custom Quote",
  customCTAHref = "/contact",
}: PricingSectionProps) {
  return (
    <section className="bg-dark py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-white mb-4">
            <span className="font-bold">{headline}</span>{" "}
            <span className="font-light">{subheadline}</span>
          </h2>
          {description && (
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`border ${
                tier.featured
                  ? "border-accent bg-white/5"
                  : "border-white/10 bg-white/[0.02]"
              } rounded-2xl p-8 hover:border-accent/50 transition-all duration-300 flex flex-col ${
                tiers.length % 2 !== 0 && index === tiers.length - 1
                  ? "md:col-span-2 lg:col-span-2 max-w-2xl mx-auto w-full"
                  : ""
              }`}
            >
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-accent text-4xl font-bold">
                    R{tier.price}
                  </span>
                  {tier.price !== "Custom" && (
                    <span className="text-white/40 text-sm">/month</span>
                  )}
                </div>
                <h3 className="text-2xl text-white font-bold mb-2">
                  {tier.title}
                </h3>
                {tier.subtitle && (
                  <p className="text-accent text-base font-medium mb-3">
                    {tier.subtitle}
                  </p>
                )}
                <p className="text-white/60 text-sm leading-relaxed">
                  {tier.description}
                </p>
              </div>

              {/* Features */}
              {tier.features && tier.features.length > 0 && (
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-white/70 text-sm"
                    >
                      <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Best For Badge */}
              {tier.bestFor && (
                <div className="mb-6">
                  <span className="inline-block bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                    {tier.bestFor}
                  </span>
                </div>
              )}

              {/* CTA Button */}
              {tier.featured ? (
                <CTAPrimary href={tier.href} className="w-full">
                  Choose {tier.title}
                </CTAPrimary>
              ) : (
                <Link
                  href={tier.href}
                  className="mt-auto block text-center py-3 px-6 rounded-full font-medium transition-all duration-300 bg-white/10 text-white hover:bg-white/20"
                >
                  Choose {tier.title}
                </Link>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Custom CTA */}
        {customCTAText && customCTAHref && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex justify-center"
          >
            <CTAPrimary href={customCTAHref}>
              {customCTAText}
            </CTAPrimary>
          </motion.div>
        )}
      </div>
    </section>
  );
}
