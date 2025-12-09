"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface PricingTier {
  price: string;
  title: string;
  description: string;
  href: string;
  featured?: boolean;
}

interface PricingSectionProps {
  headline?: string;
  subheadline?: string;
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
          <p className="text-white/60 max-w-2xl mx-auto">
            Choose the package that fits your business needs, or contact us for a tailored solution.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4 mb-12"
        >
          {tiers.map((tier, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                href={tier.href}
                className="block border border-white/10 rounded-lg p-6 lg:p-8 hover:border-accent/50 transition-all duration-300 group"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  {/* Price */}
                  <div className="lg:col-span-2">
                    <div className="text-3xl lg:text-4xl">
                      <span className="text-white/40 font-light">R</span>
                      <span className="text-accent font-medium">{tier.price}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <div className="lg:col-span-4">
                    <h3 className="text-xl text-white font-medium">
                      {tier.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="lg:col-span-4">
                    <p className="text-white/60 text-sm">
                      {tier.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="lg:col-span-2 flex lg:justify-end">
                    <span className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-white/20 text-white/60 group-hover:bg-accent group-hover:border-accent group-hover:text-dark transition-all duration-300">
                      <ArrowRight size={20} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Custom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <Link
            href={customCTAHref}
            className="inline-flex items-center bg-accent hover:bg-accent-dark text-dark font-medium rounded-full pl-8 pr-2 py-2.5 transition-colors group"
          >
            <span className="text-sm tracking-wide uppercase mr-4">{customCTAText}</span>
            <span className="bg-dark text-white rounded-full p-3 group-hover:bg-black transition-colors">
              <ArrowRight size={16} />
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
