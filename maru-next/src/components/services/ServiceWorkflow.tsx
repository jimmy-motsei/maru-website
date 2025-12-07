"use client";

import { motion } from "framer-motion";
import { LucideIcon, ArrowRight, ArrowDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  icon?: LucideIcon;
}

interface ServiceWorkflowProps {
  steps: WorkflowStep[];
  title?: string;
  className?: string;
}

const stepLabels = ["Step One", "Step Two", "Step Three", "Step Four", "Step Five", "Step Six"];

export function ServiceWorkflow({ steps, title = "How It Works", className }: ServiceWorkflowProps) {
  return (
    <div className={cn("w-full py-12", className)}>
      <div className="relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;
            const stepLabel = stepLabels[index] || `Step ${index + 1}`;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="flex flex-col lg:items-center relative group"
              >
                {/* Connector Arrow (Desktop: Right, Mobile: Down) */}
                {!isLast && (
                  <>
                    <motion.div 
                      className="hidden lg:flex absolute -right-6 top-10 text-gray-400 z-0 justify-center w-12"
                      animate={{ x: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowRight size={32} strokeWidth={2.5} className="text-gray-300 group-hover:text-accent transition-colors" />
                    </motion.div>
                    
                    <motion.div 
                      className="lg:hidden absolute left-[22px] top-[80px] text-gray-400"
                      animate={{ y: [0, 6, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                       <ArrowDown size={32} strokeWidth={2.5} />
                    </motion.div>
                  </>
                )}

                {/* Step Label (Desktop) */}
                <span className="hidden lg:block text-xs font-bold text-accent uppercase tracking-widest mb-3">
                  {stepLabel}
                </span>

                {/* Node Circle */}
                <div className="flex items-center gap-6 lg:flex-col lg:gap-6 mb-4 lg:mb-6">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-black">
                    {Icon ? (
                      <Icon size={24} />
                    ) : (
                      <span className="text-lg font-bold">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Mobile Header Group */}
                  <div className="lg:hidden">
                    <span className="text-xs font-bold text-accent uppercase tracking-widest display-block mb-1">
                      {stepLabel}
                    </span>
                    <h3 className="text-xl font-bold text-black">
                      {step.title}
                    </h3>
                  </div>
                </div>

                {/* Content Container */}
                <div className="pl-[80px] lg:pl-0 lg:text-center">
                   {/* Title (Desktop - below circle) */}
                   <h3 className="hidden lg:block text-xl font-bold text-black mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base font-medium text-gray-700 leading-relaxed max-w-[280px] mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
