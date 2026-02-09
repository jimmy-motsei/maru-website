"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight, Activity, Users, DollarSign, MousePointerClick } from "lucide-react";

export function HeroDashboard() {
  return (
    <div className="relative w-full aspect-[4/3] md:min-h-[500px]">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-electric-cyan/5 blur-[100px] rounded-full pointer-events-none" />

      {/* DASHBOARD CONTAINER - Split Effect */}
      <div className="relative w-full h-full">
        
        {/* LEFT SIDE: "Before" / The Problem (Underperforming) */}
        {/* Positioned slightly back and left */}
        <motion.div 
          className="absolute top-0 left-0 w-[55%] h-[80%] bg-[#0f1b29] border border-red-500/20 rounded-xl shadow-2xl p-4 md:p-6 z-10 overflow-hidden"
          initial={{ opacity: 0, x: -50, rotateY: 10 }}
          animate={{ opacity: 1, x: 0, rotateY: 5 }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{ transformPerspective: 1000 }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <span className="text-xs font-mono text-white/40 uppercase">Current State</span>
            </div>
            <div className="text-red-400 text-xs font-bold bg-red-500/10 px-2 py-1 rounded">ROI: -15%</div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* Metric 1 */}
            <div className="bg-card-dark p-3 rounded-lg border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs">Conversion Rate</span>
                <Activity className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-2xl font-mono text-white/90">0.8%</div>
              <div className="flex items-center gap-1 text-red-400 text-[10px] mt-1">
                <ArrowDownRight className="w-3 h-3" />
                <span>12% drop</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="bg-card-dark p-3 rounded-lg border border-white/5">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs">Lead Quality</span>
                <Users className="w-4 h-4 text-orange-500" />
              </div>
              <div className="text-2xl font-mono text-white/90">Low</div>
              <div className="flex items-center gap-1 text-orange-400 text-[10px] mt-1">
                <span>92% Unqualified</span>
              </div>
            </div>
            
            {/* Metric 3 */}
             <div className="bg-card-dark p-3 rounded-lg border border-white/5 opacity-50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/40 text-xs">Ad Spend Wasted</span>
                <DollarSign className="w-4 h-4 text-red-500" />
              </div>
              <div className="text-xl font-mono text-white/90">R45,000</div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE: "After" / The Solution (Maru Implementation) */}
        {/* Positioned front and right, overlapping */}
        <motion.div 
          className="absolute bottom-0 right-0 w-[60%] h-[85%] bg-[#0A1219] border border-electric-cyan/30 rounded-xl shadow-2xl p-4 md:p-6 z-20 backdrop-blur-sm"
          initial={{ opacity: 0, x: 50, y: 20 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6 border-b border-electric-cyan/10 pb-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-electric-cyan animate-pulse" />
              <span className="text-xs font-mono text-electric-cyan uppercase tracking-wider">Maru System</span>
            </div>
            <div className="text-electric-cyan text-xs font-bold bg-electric-cyan/10 px-2 py-1 rounded border border-electric-cyan/20">ROI: +187%</div>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 gap-4">
            {/* Metric 1 */}
            <div className="group bg-electric-cyan/5 p-3 rounded-lg border border-electric-cyan/20 hover:bg-electric-cyan/10 transition-colors cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-xs group-hover:text-white transition-colors">Conversion Rate</span>
                <MousePointerClick className="w-4 h-4 text-electric-cyan" />
              </div>
              <div className="text-3xl font-mono text-white font-bold">4.2%</div>
              <div className="flex items-center gap-1 text-electric-cyan text-[10px] mt-1">
                <ArrowUpRight className="w-3 h-3" />
                <span>3.4% increase</span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="group bg-electric-cyan/5 p-3 rounded-lg border border-electric-cyan/20 hover:bg-electric-cyan/10 transition-colors cursor-default">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white/60 text-xs group-hover:text-white transition-colors">Qualified Leads</span>
                <Users className="w-4 h-4 text-warm-amber" />
              </div>
              <div className="text-3xl font-mono text-white font-bold">High</div>
              <div className="flex items-center gap-1 text-electric-cyan text-[10px] mt-1">
                <ArrowUpRight className="w-3 h-3" />
                <span>Revenue-Ready</span>
              </div>
            </div>

             {/* Graph Line Visual (CSS only) */}
             <div className="mt-2 h-16 w-full flex items-end gap-1 px-1">
                {[30, 45, 35, 60, 55, 75, 90, 85, 100].map((h, i) => (
                    <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ duration: 0.5, delay: 1 + (i * 0.1) }}
                        className="flex-1 bg-electric-cyan/20 rounded-t-sm hover:bg-electric-cyan/60 transition-colors"
                    />
                ))}
             </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}
