"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  title: string;
  subtitle?: string;
  content: string;
  features?: string[];
}

interface ServiceAccordionProps {
  items: AccordionItem[];
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function ServiceAccordion({ items }: ServiceAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="border-b border-dark/10"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full py-6 flex items-center justify-between text-left group"
          >
            <span className={`text-lg font-medium transition-colors duration-300 ${
              openIndex === index ? "text-accent" : "text-dark"
            }`}>
              {item.title}
            </span>
            <span className={`text-2xl text-dark/40 transition-transform duration-300 ${
              openIndex === index ? "rotate-45" : ""
            }`}>
              +
            </span>
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-6">
                  {item.subtitle && (
                    <h4 className="text-base font-semibold text-dark mb-3">
                      {item.subtitle}
                    </h4>
                  )}
                  <p className="text-dark/80 leading-relaxed mb-4">
                    {item.content}
                  </p>
                  {item.features && item.features.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium text-dark mb-2">What you get:</p>
                      <ul className="space-y-2">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="text-dark/70 text-sm flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
