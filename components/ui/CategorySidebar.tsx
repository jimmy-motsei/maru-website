"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { categories } from "@/data/articles";

interface CategorySidebarProps {
  currentCategory?: string;
}

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
};

export function CategorySidebar({ currentCategory }: CategorySidebarProps) {
  return (
    <motion.aside
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-50 rounded-xl p-8"
    >
      <motion.h4
        variants={itemVariants}
        className="text-lg font-bold text-dark mb-6"
      >
        Categories
      </motion.h4>
      <motion.ul variants={itemVariants} className="space-y-4">
        {categories.map((category) => (
          <li key={category.slug}>
            <Link
              href={`/knowledge#${category.slug}`}
              className={`block text-sm transition-colors hover:text-accent ${
                currentCategory === category.slug
                  ? "text-accent font-medium"
                  : "text-dark/70"
              }`}
            >
              {category.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </motion.aside>
  );
}
