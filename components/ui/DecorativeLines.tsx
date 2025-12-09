"use client";

import { motion } from "framer-motion";

// Each path's draw animation with staggered delays
const pathVariants = {
  hidden: { 
    pathLength: 0, 
    opacity: 0 
  },
  visible: (i: number) => ({
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { 
        duration: 1.5, 
        ease: [0.42, 0, 0.58, 1] as const, // easeInOut cubic-bezier
        delay: i * 0.15 
      },
      opacity: { 
        duration: 0.4, 
        delay: i * 0.15 
      },
    },
  }),
};

// Floating animation for "move" elements - matches Ashley's .mil-move
const moveVariants = {
  animate: {
    y: [0, 75, 0, -75, 0],
    transition: {
      duration: 10,
      repeat: Infinity,
      ease: [0, 0, 1, 1] as const, // linear cubic-bezier
    },
  },
};

export function DecorativeLines() {
  return (
    <motion.svg
      width="250"
      viewBox="0 0 300 1404"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-white/20 ml-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Outer Rectangle Frame - Static */}
      <motion.path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        custom={0}
        variants={pathVariants}
      />
      
      {/* Center Vertical Line - Static */}
      <motion.path
        d="M150 0L150 1404"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        custom={1}
        variants={pathVariants}
      />
      
      {/* Top Half Circle - Animated (moves) */}
      <motion.g
        variants={moveVariants}
        animate="animate"
      >
        <motion.path
          d="M299 97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146V97Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          custom={2}
          variants={pathVariants}
        />
      </motion.g>
      
      {/* Middle Circle - Animated (moves) */}
      <motion.g
        variants={moveVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      >
        <motion.path
          d="M150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          custom={3}
          variants={pathVariants}
        />
      </motion.g>
      
      {/* Middle Rectangle - Animated (moves) */}
      <motion.g
        variants={moveVariants}
        animate="animate"
        style={{ animationDelay: "3s" }}
      >
        <motion.path
          d="M299 380H1V678H299V380Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          custom={4}
          variants={pathVariants}
        />
      </motion.g>
      
      {/* Bottom Half Circle (inverted) - Animated (moves) */}
      <motion.g
        variants={moveVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      >
        <motion.path
          d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          custom={5}
          variants={pathVariants}
        />
      </motion.g>
      
      {/* Bottom Circle - Animated (moves) */}
      <motion.g
        variants={moveVariants}
        animate="animate"
        style={{ animationDelay: "5s" }}
      >
        <motion.path
          d="M150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          custom={6}
          variants={pathVariants}
        />
      </motion.g>
      
      {/* Horizontal Line through bottom circle - Animated (moves) */}
      <motion.g
        variants={moveVariants}
        animate="animate"
        style={{ animationDelay: "6s" }}
      >
        <motion.path
          d="M0 1175H300"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
          custom={7}
          variants={pathVariants}
        />
      </motion.g>
    </motion.svg>
  );
}
