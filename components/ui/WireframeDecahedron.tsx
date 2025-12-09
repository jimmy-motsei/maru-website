"use client";

import { motion } from "framer-motion";

interface WireframeProps {
  className?: string;
  opacity?: number;
  rotation?: number; // Initial rotation
  delay?: number;
}

export function WireframeDecahedron({ className, opacity = 0.1, rotation = 0, delay = 0 }: WireframeProps) {
  return (
    <motion.div 
      className={className}
      initial={{ opacity: 0, rotate: rotation }}
      animate={{ opacity: 1, rotate: rotation + 360 }}
      transition={{ 
        opacity: { duration: 1, delay },
        rotate: { duration: 150, repeat: Infinity, ease: "linear" } 
      }}
    >
      <svg 
        viewBox="0 0 500 500" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1" // Thin elegant lines
        className="w-full h-full text-white"
        style={{ opacity }}
      >
        {/* Outer Pentagon */}
        <path d="M250 50 L440 190 L368 410 L132 410 L60 190 Z" />
        
        {/* Inner Connections to create 3D feel */}
        <path d="M250 50 L250 250" />
        <path d="M440 190 L250 250" />
        <path d="M368 410 L250 250" />
        <path d="M132 410 L250 250" />
        <path d="M60 190 L250 250" />
        
        {/* Connecting the outer points to create faces - simplified projection */}
        <path d="M250 50 L132 410" strokeOpacity="0.5" />
        <path d="M250 50 L368 410" strokeOpacity="0.5" />
        <path d="M60 190 L440 190" strokeOpacity="0.5" />
      </svg>
    </motion.div>
  );
}
