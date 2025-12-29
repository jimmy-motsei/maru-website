"use client";

import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Map, Settings, GraduationCap, LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const steps = [
  {
    id: "01",
    title: "Health Check",
    description: "Our consultants analyze your current performance, identifying optimization opportunities that unlock your next level of growth.",
    icon: ClipboardCheck,
    color: "cyan",
    hex: "#22d3ee",
    text: "text-[#22d3ee]",
    border: "border-[#22d3ee]/50",
    bg: "bg-[#22d3ee]/10",
    shadow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
  },
  {
    id: "02",
    title: "Roadmap",
    description: "We deliver a precision roadmap—prioritized by impact—showing you exactly where AI and automation will move the needle most.",
    icon: Map,
    color: "cyan",
    hex: "#22d3ee",
    text: "text-[#22d3ee]",
    border: "border-[#22d3ee]/50",
    bg: "bg-[#22d3ee]/10",
    shadow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
  },
  {
    id: "03",
    title: "Implementation",
    description: "Once our engineers have the scope, they'll get busy automating your tasks and integrating your tech.",
    icon: Settings,
    color: "cyan",
    hex: "#22d3ee",
    text: "text-[#22d3ee]",
    border: "border-[#22d3ee]/50",
    bg: "bg-[#22d3ee]/10",
    shadow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
  },
  {
    id: "04",
    title: "Support",
    description: "We provide ongoing optimization and support to ensure your systems continue delivering marginal gains that compound into market leadership.",
    icon: GraduationCap,
    color: "cyan",
    hex: "#22d3ee",
    text: "text-[#22d3ee]",
    border: "border-[#22d3ee]/50",
    bg: "bg-[#22d3ee]/10",
    shadow: "shadow-[0_0_20px_rgba(34,211,238,0.4)]",
  },
];

// --- Components ---

const DetailCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const isRight = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 hidden md:flex flex-col p-6 rounded-2xl w-80 md:w-96",
        "bg-[#f2f2f2] backdrop-blur-md shadow-lg border",
        step.border,
        isRight ? "left-[calc(50%+8rem)]" : "right-[calc(50%+8rem)] text-right items-end"
      )}
    >
        <span className={cn("text-[10px] font-bold uppercase tracking-wider mb-1 opacity-70", step.text)}>
             Step {step.id}
        </span>
        <h3 className="font-bold text-black text-xl mb-3">{step.title}</h3>
        <p className="text-base text-black leading-relaxed font-medium">
          {step.description}
        </p>
    </motion.div>
  );
};

const ConnectingLine = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const isRight = index % 2 === 0;
  return (
    <motion.div
       initial={{ width: 0, opacity: 0 }}
       whileInView={{ width: "7rem", opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.2 }}
       viewport={{ once: true }}
       className={cn(
         "absolute top-1/2 -translate-y-1/2 h-[2px] hidden md:block opacity-50",
         isRight ? "left-[50%]" : "right-[50%]"
       )}
       style={{ backgroundColor: step.hex }}
    >
       {/* Dot at the end */}
       <div className={cn(
         "absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full",
         isRight ? "right-0" : "left-0"
       )} 
       style={{ backgroundColor: step.hex, boxShadow: `0 0 10px ${step.hex}` }}
       />
    </motion.div>
  );
};

const CentralNode = ({ step, index }: { step: typeof steps[0], index: number }) => {
  return (
    <div className="relative z-10 my-6"> 
       <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="relative w-32 h-32 sm:w-40 sm:h-40 cursor-pointer group"
      >
          {/* Main Face (Diamond Shape) */}
          <div className={cn(
            "absolute inset-0 border-2 rounded-3xl flex items-center justify-center transition-all duration-300 rotate-45",
            "bg-black/90 backdrop-blur-sm",
            step.border,
            step.shadow
          )}>
             {/* Icon (Counter-rotated) */}
             <step.icon 
                strokeWidth={1.5}
                className={cn("w-14 h-14 sm:w-16 sm:h-16 -rotate-45 transition-transform duration-500 group-hover:scale-110", step.text)} 
             />
          </div>
       </motion.div>
    </div>
  );
};

const VerticalConnector = ({ color }: { color?: string }) => {
    return (
        <div className="h-12 w-[2px] bg-black/10 relative z-0">
             <motion.div 
               className="absolute top-0 left-0 w-full h-1/2"
               style={{ backgroundColor: color || "#00f0ff", boxShadow: `0 0 10px ${color}` }}
               animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
        </div>
    )
}

export function IsometricProcess() {
  return (
    <div className="w-full bg-transparent py-24 relative overflow-hidden min-h-[900px] flex items-center justify-center">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[image:var(--image-grid-pattern)] bg-[size:40px_40px]" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-[#d7d7d7]/50 pointer-events-none" />
      
      {/* Centerline Container */}
      <div className="relative flex flex-col items-center max-w-7xl mx-auto w-full px-4">
         
         {steps.map((step, index) => (
           <React.Fragment key={step.id}>
              <div className="relative flex flex-col items-center w-full">
                  
                  {/* Connector Area for Side Details */}
                  <div className="absolute inset-0 w-full flex justify-center pointer-events-none">
                     <div className="relative w-full max-w-2xl h-32 flex items-center justify-center">
                        <ConnectingLine step={step} index={index} />
                        <DetailCard step={step} index={index} />
                     </div>
                  </div>

                  {/* The 3D Node */}
                  <CentralNode step={step} index={index} />
                  
              </div>
              
              {/* Connector between nodes (except after last) */}
              {index < steps.length - 1 && (
                  <VerticalConnector color={steps[index+1].hex} />
              )}
           </React.Fragment>
         ))}

      </div>

    </div>
  );
}
