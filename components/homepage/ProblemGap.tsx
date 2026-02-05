"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingUp } from "lucide-react";

export function ProblemGap() {
  return (
    <section className="bg-white py-section">
      <div className="container mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ashley-style thin/bold heading */}
            <h2 className="text-4xl md:text-5xl lg:text-[68px] font-thin font-sans text-deep-navy mb-8 leading-[1.1]">
              Why Most Businesses <br />
              <span className="font-bold text-deep-navy">Aren't Seeing ROI</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              You've done everything right. You invested in AI-powered marketing automation, chatbots, analytics platforms, and CRM systems. Your competitors are using the same tools. But somehow, the promised transformation hasn't materialized.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8 rounded-r-lg">
               <p className="text-red-800 font-medium italic">
                 "You're not failing at AI. You're succeeding at buying tools but lacking the implementation expertise to make them profitable."
               </p>
            </div>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              This gap exists because AI tools are sold as plug-and-play solutions, but the reality is far more complex. Without proper implementation frameworks, you get expensive technology running on autopilot—generating leads that don't convert.
            </p>

            <div className="flex items-center gap-3 text-deep-navy font-bold">
                <div className="w-12 h-12 rounded-full bg-electric-cyan/20 flex items-center justify-center text-electric-cyan">
                    <TrendingUp className="w-6 h-6" />
                </div>
                <span>5000%+ increase in "Humanize AI" searches</span>
            </div>
          </motion.div>


          {/* RIGHT CONTENT: Data Visualization */}
          <motion.div
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="relative"
          >
             <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 border border-gray-200 shadow-xl">
                {/* Ashley-style thin/bold heading */}
                <h3 className="text-xl font-thin text-deep-navy mb-10 border-b border-gray-200 pb-4">
                    The <span className="font-bold">26-Point Implementation Gap</span>
                </h3>

                {/* CHART CONTAINER */}
                <div className="space-y-12">
                    
                    {/* BAR 1: Invested */}
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                           <span className="font-bold text-deep-navy">Invested in AI Tech</span>
                           <span className="font-mono font-bold text-electric-cyan text-xl">73%</span>
                        </div>
                        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "73%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-electric-cyan rounded-full"
                            />
                        </div>
                        <p className="text-sm text-gray-600 mt-2">South African SMEs with AI tools</p>
                    </div>

                    {/* BAR 2: Driving Revenue */}
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                           <span className="font-bold text-deep-navy">Driving Actual Revenue</span>
                           <span className="font-mono font-bold text-warm-amber text-xl">47%</span>
                        </div>
                        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "47%" }}
                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                className="h-full bg-warm-amber rounded-full"
                            />
                        </div>
                         <p className="text-sm text-gray-600 mt-2">Businesses seeing ROI</p>
                    </div>

                    {/* THE GAP VISUALIZATION */}
                    <div className="relative pt-6 border-t border-dashed border-gray-300">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50 px-2 text-gray-500 text-xs uppercase tracking-widest font-bold">
                            The Reality
                        </div>
                        
                        <div className="bg-deep-navy rounded-xl p-6 text-white relative overflow-hidden">
                             {/* Warning Pattern */}
                             <div className="absolute top-0 right-0 p-4 opacity-10">
                                <AlertCircle className="w-24 h-24" />
                             </div>

                             <div className="relative z-10">
                                <div className="text-4xl font-bold font-mono text-electric-cyan mb-2">26%</div>
                                <div className="text-lg font-bold text-white mb-2">Stuck in the Gap</div>
                                <p className="text-white/70 text-sm leading-relaxed">
                                    Businesses paying for tools they can't fully operationalize. This is where churn happens.
                                </p>
                             </div>
                        </div>
                    </div>

                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
