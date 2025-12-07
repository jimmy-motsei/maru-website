"use client";

import { motion } from "framer-motion";

interface CloudWireframeProps {
  className?: string;
  opacity?: number;
  delay?: number;
  duration?: number;
  strokeWidth?: number;
  showNodes?: boolean;
}

export function CloudWireframe({ 
  className, 
  opacity = 0.2, 
  delay = 0, 
  duration = 20,
  strokeWidth = 0.8,
  showNodes = false
}: CloudWireframeProps) {
  return (
    <motion.div 
      className={className}
      initial={{ y: 0, x: "-5%" }}
      animate={{ 
        y: [-15, 15, -15],
        x: ["-5%", "5%", "-5%"], // Gentle drifting back and forth to simulate movement
        scale: [1, 1.02, 1]
      }} 
      transition={{ 
        y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0 }, // Independent float rhythm
        x: { duration: duration, repeat: Infinity, ease: "easeInOut", delay: delay }, // Main drift duration
        scale: { duration: 10, repeat: Infinity, ease: "easeInOut", delay: delay }
      }}
    >
      <svg 
        viewBox="0 0 800 500" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-full h-full text-white"
        style={{ opacity }}
      >
        {/* Main Organic Cloud Outline - interconnected curves */}
        <path d="M150 350 C 100 350, 50 300, 80 250 C 60 200, 100 150, 150 160 C 180 100, 250 80, 320 120 C 380 60, 500 80, 550 150 C 620 120, 700 180, 680 250 C 720 300, 680 350, 620 360 C 600 420, 500 430, 450 380 C 400 420, 300 420, 250 380 C 200 400, 150 350, 150 350 Z" />
        
        {/* Inner Network Lines - giving it that 'connected' feel */}
        <path d="M180 250 C 200 200, 250 180, 300 200" strokeDasharray="4 4" opacity="0.6"/>
        <path d="M350 150 C 380 180, 420 180, 450 150" opacity="0.7"/>
        <path d="M500 200 C 520 250, 580 280, 600 250" strokeDasharray="8 6" opacity="0.6"/>
        
        {/* Connection Nodes (Circles) - Only visual if enabled */}
        {showNodes && (
          <>
            <circle cx="300" cy="200" r="4" fill="currentColor" className="text-cyan-400" opacity="0.8" />
            <circle cx="450" cy="150" r="3" fill="currentColor" className="text-cyan-400" opacity="0.6" />
            <circle cx="550" cy="280" r="5" fill="currentColor" className="text-cyan-400" opacity="0.7" />
            <circle cx="200" cy="300" r="3" fill="currentColor" className="text-cyan-400" opacity="0.6" />
            
            {/* Extra nodes for density */}
            <circle cx="150" cy="350" r="3" fill="currentColor" className="text-cyan-400" opacity="0.5" />
            <circle cx="620" cy="360" r="4" fill="currentColor" className="text-cyan-400" opacity="0.7" />
          </>
        )}

        {/* Abstract Floating Bits */}
        <path d="M650 200 C 670 180, 700 200, 680 220" opacity="0.4"/>
        <path d="M100 300 C 120 280, 140 320, 120 340" opacity="0.4"/>

      </svg>
    </motion.div>
  );
}
