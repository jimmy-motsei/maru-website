"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  title: string;
  content: string;
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
                <p className="pb-6 text-dark/60 leading-relaxed">
                  {item.content}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
