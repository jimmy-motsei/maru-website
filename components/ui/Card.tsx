"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// =============================================================================
// DESIGN TOKENS (Extracted from Ashley Theme SCSS)
// =============================================================================
// Primary Cyan: #00f0ff (Maru Cyan) / #22d3ee (Tailwind cyan-400)
// Transition Easing: cubic-bezier(0, 0, 0.3642, 1)
// Neon Glow: 0 0 5px #00f0ff, 0 0 20px rgba(0, 240, 255, 0.4)
// Glass White: rgba(255, 255, 255, 0.05)
// Deep Black: #050505
// =============================================================================

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "process" | "feature";
  glowOnHover?: boolean;
}

interface DiamondIconProps {
  icon: ReactNode;
  className?: string;
  glowColor?: string;
  size?: "sm" | "md" | "lg";
}

// =============================================================================
// DIAMOND ICON WRAPPER
// Renders a rotated square (diamond) with glowing border
// Icon inside remains un-rotated
// =============================================================================
export function DiamondIcon({
  icon,
  className,
  glowColor = "#22d3ee",
  size = "md",
}: DiamondIconProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-14 h-14",
    lg: "w-20 h-20",
  };

  return (
    <motion.div
      className={cn("relative", className)}
      initial="rest"
      whileHover="hover"
    >
      {/* Glow Layer (blur behind) */}
      <motion.div
        className={cn(
          "absolute inset-0 rounded-xl rotate-45",
          sizeClasses[size]
        )}
        style={{
          background: `radial-gradient(circle, ${glowColor}40 0%, transparent 70%)`,
          filter: "blur(12px)",
        }}
        variants={{
          rest: { opacity: 0.3, scale: 1 },
          hover: { opacity: 0.8, scale: 1.2 },
        }}
        transition={{ duration: 0.4, ease: [0, 0, 0.3642, 1] }}
      />

      {/* Diamond Container (rotated square) */}
      <motion.div
        className={cn(
          "relative flex items-center justify-center rounded-xl rotate-45",
          "bg-[#0a0a0a] border border-white/10",
          sizeClasses[size]
        )}
        style={{
          boxShadow: `0 0 0 1px ${glowColor}20`,
        }}
        variants={{
          rest: { 
            borderColor: "rgba(255, 255, 255, 0.1)",
            boxShadow: `0 0 0 1px ${glowColor}20`,
          },
          hover: { 
            borderColor: glowColor,
            boxShadow: `0 0 5px ${glowColor}, 0 0 20px ${glowColor}40`,
          },
        }}
        transition={{ duration: 0.4, ease: [0, 0, 0.3642, 1] }}
      >
        {/* Icon (counter-rotated to stay upright) */}
        <div className="-rotate-45 text-[#22d3ee]">
          {icon}
        </div>
      </motion.div>
    </motion.div>
  );
}

// =============================================================================
// PROCESS CARD
// For "Step 01, Step 02" style cards with glassmorphism
// =============================================================================
export function ProcessCard({
  children,
  className,
  glowOnHover = true,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        // Base styles
        "relative flex flex-col p-6 md:p-8 rounded-2xl",
        // Glassmorphism: Deep black with transparency
        "bg-[#050505]/95 backdrop-blur-sm",
        // Border
        "border border-white/10",
        // Transition
        "transition-all duration-[400ms]",
        // Hover border
        glowOnHover && "hover:border-[#22d3ee]/50",
        className
      )}
      initial="rest"
      whileHover="hover"
      style={{
        // Custom easing from Ashley theme
        transitionTimingFunction: "cubic-bezier(0, 0, 0.3642, 1)",
      }}
      variants={{
        rest: {
          boxShadow: "0 0 0 0 rgba(34, 211, 238, 0)",
        },
        hover: glowOnHover
          ? {
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.15), 0 0 60px rgba(34, 211, 238, 0.05)",
            }
          : {},
      }}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// FEATURE CARD
// For general feature/benefit cards
// =============================================================================
export function FeatureCard({
  children,
  className,
  glowOnHover = true,
}: CardProps) {
  return (
    <motion.div
      className={cn(
        // Base styles
        "relative flex flex-col gap-5 p-7 rounded-2xl h-full",
        // Background
        "bg-[#111111]",
        // Border
        "border border-white/10",
        // Transition
        "transition-all duration-[400ms]",
        // Hover
        glowOnHover && "hover:border-[#22d3ee]/40",
        className
      )}
      initial="rest"
      whileHover="hover"
      style={{
        transitionTimingFunction: "cubic-bezier(0, 0, 0.3642, 1)",
      }}
      variants={{
        rest: {
          boxShadow: "0 0 0 0 rgba(34, 211, 238, 0)",
        },
        hover: glowOnHover
          ? {
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.1)",
            }
          : {},
      }}
    >
      {children}
    </motion.div>
  );
}

// =============================================================================
// ICON BOX
// Standard square icon container (non-diamond)
// =============================================================================
interface IconBoxProps {
  icon: ReactNode;
  className?: string;
  color?: string;
}

export function IconBox({ icon, className, color = "#22d3ee" }: IconBoxProps) {
  return (
    <div
      className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center",
        "bg-[#1a1a1a] border",
        className
      )}
      style={{
        borderColor: `${color}30`,
        color: color,
      }}
    >
      {icon}
    </div>
  );
}

// =============================================================================
// STEP NUMBER BADGE
// For process step indicators
// =============================================================================
interface StepBadgeProps {
  number: string | number;
  className?: string;
}

export function StepBadge({ number, className }: StepBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center justify-center",
        "px-3 py-1 rounded-full",
        "text-xs font-medium tracking-wider uppercase",
        "bg-[#22d3ee]/10 text-[#22d3ee] border border-[#22d3ee]/20",
        className
      )}
    >
      Step {number}
    </span>
  );
}

// =============================================================================
// EXPORTS
// =============================================================================
export default {
  ProcessCard,
  FeatureCard,
  DiamondIcon,
  IconBox,
  StepBadge,
};
