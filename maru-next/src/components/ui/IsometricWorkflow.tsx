"use client";

import React from "react";
import { motion } from "framer-motion";
import { FileText, Bot, CheckCircle, Database, Server, LucideIcon } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// --- Data ---
const workflowSteps = [
  {
    id: "01",
    title: "Data Ingestion",
    description: "Raw data is collected from multiple sources including APIs, databases, and user inputs, ready for processing.",
    icon: Database,
  },
  {
    id: "02",
    title: "AI Processing",
    description: "Our advanced neural networks analyze the data structure to identify patterns, anomalies, and actionable insights.",
    icon: Bot,
  },
  {
    id: "03",
    title: "Optimization",
    description: "Algorithms refine the results, discarding noise and enhancing the signal to ensure maximum accuracy.",
    icon: Server,
  },
  {
    id: "04",
    title: "Final Output",
    description: "The processed clean data is delivered to your dashboard or integrated directly into your workflow tools.",
    icon: CheckCircle,
  },
];

// --- Components ---

const DetailCard = ({ step, index }: { step: typeof workflowSteps[0], index: number }) => {
  const isRight = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, x: isRight ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      viewport={{ once: true }}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 hidden md:flex flex-col p-5 rounded-2xl w-64",
        "bg-glass-white border border-cyan-500/30 backdrop-blur-md shadow-lg",
        isRight ? "left-[calc(50%+6rem)]" : "right-[calc(50%+6rem)] text-right items-end"
      )}
    >
        <h3 className="text-maru-cyan font-bold text-lg mb-2">{step.title}</h3>
        <p className="text-sm text-gray-300 leading-relaxed font-light">
          {step.description}
        </p>
    </motion.div>
  );
};

const ConnectingLine = ({ index }: { index: number }) => {
  const isRight = index % 2 === 0;
  return (
    <motion.div
       initial={{ width: 0, opacity: 0 }}
       whileInView={{ width: "4rem", opacity: 1 }}
       transition={{ duration: 0.5, delay: 0.2 }}
       viewport={{ once: true }}
       className={cn(
         "absolute top-1/2 -translate-y-1/2 h-[2px] bg-cyan-500/50 hidden md:block",
         isRight ? "left-[50%]" : "right-[50%]"
       )}
    >
       {/* Dot at the end */}
       <div className={cn(
         "absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-maru-cyan rounded-full shadow-neon-cyan",
         isRight ? "right-0" : "left-0"
       )} />
    </motion.div>
  );
};

const CentralNode = ({ step, index }: { step: typeof workflowSteps[0], index: number }) => {
  return (
    <div className="relative z-10"> 
       <motion.div
        initial={{ scale: 0, rotateX: 60, rotateZ: -45 }}
        whileInView={{ scale: 1, rotateX: 60, rotateZ: -45 }}
        transition={{ duration: 0.6, type: "spring" }}
        viewport={{ once: true }}
        className="relative w-24 h-24 sm:w-32 sm:h-32 transform-3d"
        style={{ transform: "rotateX(60deg) rotateZ(-45deg)" }}
      >
          {/* Cube-like layers */}
          <div className="absolute inset-0 bg-maru-bg/80 border-2 border-cyan-500/50 rounded-2xl shadow-neon-cyan backdrop-blur-sm flex items-center justify-center translate-z-0 group hover:border-maru-cyan transition-colors duration-300">
             <step.icon className="text-white w-10 h-10 sm:w-12 sm:h-12 -rotate-[45deg] group-hover:text-maru-cyan transition-colors" style={{ transform: "rotateZ(45deg) rotateX(-60deg)" }} /> {/* Counter-rotate icon */}
          </div>
          
          {/* Depth Layer (faked) */}
          <div className="absolute inset-0 bg-cyan-900/30 rounded-2xl -z-10 translate-y-2 translate-x-2 blur-[1px]" />
       </motion.div>
    </div>
  );
};

const VerticalConnector = () => {
    return (
        <div className="h-16 w-[2px] bg-cyan-900/50 relative my-[-10px] z-0">
             <motion.div 
               className="absolute top-0 left-0 w-full h-1/2 bg-maru-cyan shadow-neon-cyan"
               animate={{ top: ["0%", "100%"], opacity: [0, 1, 0] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
             />
        </div>
    )
}

export function IsometricWorkflow() {
  return (
    <div className="w-full bg-maru-bg py-24 relative overflow-hidden min-h-[800px] flex items-center justify-center perspective-[1000px]">
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20 bg-[image:var(--image-grid-pattern)] bg-[size:40px_40px]" />
      
      {/* Centerline Container */}
      <div className="relative flex flex-col items-center max-w-5xl mx-auto w-full px-4">
         
         {workflowSteps.map((step, index) => (
           <div key={step.id} className="relative flex flex-col items-center w-full">
              
              {/* Connector Area for Side Details */}
              <div className="absolute inset-0 w-full flex justify-center pointer-events-none">
                 {/* This wrapper aligns the line exactly to center */}
                 <div className="relative w-full max-w-3xl h-32 flex items-center justify-center">
                    <ConnectingLine index={index} />
                    <DetailCard step={step} index={index} />
                 </div>
              </div>

              {/* The 3D Node */}
              <CentralNode step={step} index={index} />

              {/* Vertical Connector between nodes */}
              {index < workflowSteps.length - 1 && (
                  <VerticalConnector />
              )}
           </div>
         ))}

      </div>

    </div>
  );
}
