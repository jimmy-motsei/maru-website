"use client";
import React from "react";
import { motion } from "framer-motion";
import { ClipboardCheck, Map, Settings, GraduationCap } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

const steps = [
  { id: "01", title: "Health Check", description: "Our consultants analyze your current performance.", icon: ClipboardCheck, hex: "var(--color-highlight)" },
  { id: "02", title: "Roadmap", description: "We deliver a precision roadmap prioritized by impact.", icon: Map, hex: "var(--color-highlight)" },
  { id: "03", title: "Implementation", description: "Our engineers automate your tasks and integrate tech.", icon: Settings, hex: "var(--color-highlight)" },
  { id: "04", title: "Support", description: "Ongoing optimization to ensure systems deliver gains.", icon: GraduationCap, hex: "var(--color-highlight)" },
];

const MobileDetailContent = ({ step }: { step: typeof steps[0] }) => (
  <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="md:hidden text-center mt-6 px-4 max-w-sm">
     <span className="text-xs font-bold uppercase tracking-wider block mb-2 text-highlight">Step {step.id}</span>
     <h3 className="font-bold text-white text-2xl mb-2">{step.title}</h3>
     <p className="text-zinc-400">{step.description}</p>
  </motion.div>
);

const DesktopDetailCard = ({ step, index }: { step: typeof steps[0], index: number }) => {
  const isRight = index % 2 === 0;
  return (
    <motion.div initial={{ opacity: 0, x: isRight ? 20 : -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={cn("absolute top-1/2 -translate-y-1/2 hidden md:flex flex-col p-6 rounded-2xl w-80 md:w-96 bg-card-dark backdrop-blur-md border border-card-border", isRight ? "left-[calc(50%+8rem)] text-left" : "right-[calc(50%+8rem)] text-right items-end")}>
        <h3 className="font-bold text-white text-xl mb-3">{step.title}</h3>
        <p className="text-zinc-400 font-light">{step.description}</p>
    </motion.div>
  );
};

export function IsometricProcess() {
  return (
    <section className="w-full bg-[#161616] py-24 relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "linear-gradient(#222 1px, transparent 1px), linear-gradient(90deg, #222 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      <div className="relative flex flex-col items-center max-w-7xl mx-auto w-full px-4">
         {steps.map((step, index) => (
           <React.Fragment key={step.id}>
              <div className="relative flex flex-col items-center w-full">
                  <div className="absolute inset-0 w-full hidden md:flex justify-center pointer-events-none">
                     <div className="relative w-full max-w-3xl h-32 flex items-center justify-center">
                        <DesktopDetailCard step={step} index={index} />
                     </div>
                  </div>
                  <div className="relative z-10 flex flex-col items-center">
                       <div className="relative w-28 h-28 sm:w-40 sm:h-40 flex items-center justify-center border-2 rounded-3xl rotate-45 bg-[#161616] border-highlight/50 shadow-[0_0_30px_rgba(4,179,204,0.3)]">
                         <step.icon className="w-12 h-12 -rotate-45 text-white" />
                       </div>
                       <MobileDetailContent step={step} />
                  </div>
              </div>
              {index < steps.length - 1 && <div className="h-24 w-[2px] bg-white/10" />}
           </React.Fragment>
         ))}
      </div>
    </section>
  );
}
