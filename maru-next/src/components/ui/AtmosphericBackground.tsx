"use client";

import { CloudWireframe } from "@/components/ui/CloudWireframe";
import { cn } from "@/lib/utils";

interface AtmosphericBackgroundProps {
  variant?: "hero" | "overlay" | "sidebar";
  className?: string;
  theme?: "light" | "dark"; // Some pages are light, clouds might need color adjustment
}

export function AtmosphericBackground({ variant = "hero", className, theme = "dark" }: AtmosphericBackgroundProps) {
  // Use 'text-cyan-400' for dark mode (default) and maybe a darker teal for light mode if needed.
  // The user requested: "Hardcode the cloud stroke color to the text-accent (Cyan/Teal)".
  // I'll stick to 'text-[#22d3ee]' (default Tailwind cyan-400 equivalent which matches brand) for now across dark backgrounds.
  // For light backgrounds (like sidebar in light mode), we might need an override class.
  
  const strokeColor = "text-[#22d3ee]"; // Maru Brand Cyan

  if (variant === "overlay") {
    // Nav Overlay: Top-right cluster
    return (
      <div className={cn("absolute inset-0 pointer-events-none overflow-hidden select-none", className)}>
        <div className="absolute top-[-20%] right-[-10%] scale-[0.8] origin-top-right opacity-50">
           <div className="absolute top-0 right-0 w-[800px] h-[600px]">
              <CloudWireframe 
                 className={cn("w-full h-full rotate-12", strokeColor)} 
                 duration={40} 
                 delay={0} 
                 strokeWidth={1.2} 
                 showNodes={true}
                 opacity={0.5}
              />
           </div>
           <div className="absolute top-[10%] right-[20%] w-[900px] h-[700px] -z-10">
              <CloudWireframe 
                 className={cn("w-full h-full -rotate-6", strokeColor)} 
                 duration={50} 
                 delay={2}
                 opacity={0.4}
              />
           </div>
        </div>
      </div>
    );
  }

  if (variant === "sidebar") {
    // Sidebar: Side/Vertical flow (for inner pages)
    return (
      <div className={cn("absolute inset-y-0 right-0 w-[50%] pointer-events-none overflow-hidden select-none", className)}>
        <div className="absolute top-[10%] right-[-10%] opacity-40">
           <CloudWireframe 
              className={cn("w-[600px] h-[400px] -rotate-45", strokeColor)} 
              duration={45} 
              delay={0}
              strokeWidth={1}
           />
        </div>
        <div className="absolute bottom-[20%] right-[-5%] opacity-30">
           <CloudWireframe 
              className={cn("w-[700px] h-[500px] rotate-12", strokeColor)} 
              duration={55} 
              delay={3}
              strokeWidth={0.8}
           />
        </div>
      </div>
    );
  }

  // Hero: Full screen, 3 layers
  return (
    <div className={cn("absolute inset-0 pointer-events-none overflow-hidden select-none", className)}>
      {/* LAYER 1: BACK */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-10%] left-[-10%] opacity-[0.35]">
            <CloudWireframe className={cn("w-[1200px] h-[800px] rotate-6 text-white", className?.includes("text-") ? "" : "")} duration={60} delay={0} />
         </div>
         <div className="absolute bottom-[-10%] right-[-10%] opacity-[0.35]">
            <CloudWireframe className="w-[1200px] h-[800px] -rotate-6 text-white" duration={65} delay={5} />
         </div>
         <div className="absolute top-[20%] left-[20%] opacity-[0.35]">
            <CloudWireframe className="w-[1000px] h-[700px] rotate-12 text-white" duration={62} delay={2} />
         </div>
      </div>

      {/* LAYER 2: MIDDLE */}
      <div className="absolute inset-0 z-10">
         <div className="absolute top-[-5%] right-[10%] opacity-[0.5]">
            <CloudWireframe className="w-[900px] h-[600px] -rotate-12 text-white" duration={45} delay={1} />
         </div>
         <div className="absolute bottom-[10%] left-[-5%] opacity-[0.5]">
            <CloudWireframe className="w-[950px] h-[650px] rotate-3 text-white" duration={48} delay={3} />
         </div>
         <div className="absolute top-[30%] right-[-5%] opacity-[0.5]">
            <CloudWireframe className="w-[850px] h-[550px] rotate-180 text-white" duration={42} delay={6} />
         </div>
      </div>

      {/* LAYER 3: FRONT */}
      <div className="absolute inset-0 z-20">
         <div className="absolute top-[10%] left-[5%] opacity-[0.6]">
            <CloudWireframe 
               className={cn("w-[500px] h-[350px] rotate-12", strokeColor)} 
               duration={30} 
               delay={0} 
               strokeWidth={1.5} 
               showNodes={true}
            />
         </div>
         <div className="absolute bottom-[20%] right-[15%] opacity-[0.6]">
            <CloudWireframe 
               className={cn("w-[600px] h-[400px] -rotate-6 scale-x-[-1]", strokeColor)} 
               duration={32} 
               delay={2}
               strokeWidth={1.5}
               showNodes={true}
            />
         </div>
          <div className="absolute top-[50%] left-[-10%] opacity-[0.6]">
            <CloudWireframe 
               className={cn("w-[550px] h-[380px] rotate-45", strokeColor)} 
               duration={28} 
               delay={4}
               strokeWidth={1.5}
               showNodes={true}
            />
         </div>
      </div>
    </div>
  );
}
