"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingUp } from "lucide-react";

export function ProblemGap() {
  return (
    <section className="bg-surface-inverse py-section-tab lg:py-section">
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
            <h2 className="text-[28px] sm:text-[32px] md:text-[38px] lg:text-[68px] font-thin font-sans text-text-primary mb-8 leading-[1.1]">
              Why Most Businesses <br />
              <span className="font-bold text-text-primary">Aren't Seeing ROI</span>
            </h2>

            <p className="text-lg text-text-secondary mb-6 leading-relaxed">
              Adoption is high, but execution gaps keep AI from producing revenue.
            </p>

            <ul className="space-y-2 mb-8">
              {[
                "Tools were deployed, but workflows were never redesigned.",
                "Teams chase dashboards while lead quality quietly drops.",
                "Automation runs, but handoffs and context break conversions.",
                "Without implementation systems, AI spend becomes operating drag.",
              ].map((item) => (
                <li key={item} className="text-text-secondary text-base leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-action-primary/10 border-l-4 border-action-primary p-6 my-8 rounded-r-lg">
               <p className="text-text-primary font-medium italic">
                 "You're not failing at AI. You're succeeding at buying tools but lacking the implementation expertise to make them profitable."
               </p>
            </div>

            <div className="flex items-center gap-3 text-text-primary font-bold">
                <div className="w-12 h-12 rounded-full bg-action-primary/20 flex items-center justify-center text-action-primary">
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
             <div className="bg-surface-muted rounded-2xl p-8 lg:p-12 border border-border-strong shadow-xl">
                {/* Ashley-style thin/bold heading */}
                <h3 className="text-xl font-thin text-text-primary mb-10 border-b border-border-strong pb-4">
                    The <span className="font-bold">26-Point Implementation Gap</span>
                </h3>

                {/* CHART CONTAINER */}
                <div className="space-y-12">
                    
                    {/* BAR 1: Invested */}
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                           <span className="font-bold text-text-primary">Invested in AI Tech</span>
                           <span className="font-mono font-bold text-warm-amber text-xl">73%</span>
                        </div>
                        <div className="h-4 w-full bg-gray-200/80 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "73%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-action-primary rounded-full"
                            />
                        </div>
                        <p className="text-sm text-text-secondary mt-2">South African SMEs with AI tools</p>
                    </div>

                    {/* BAR 2: Driving Revenue */}
                    <div className="relative">
                        <div className="flex justify-between mb-2">
                           <span className="font-bold text-text-primary">Driving Actual Revenue</span>
                           <span className="font-mono font-bold text-warm-amber text-xl">47%</span>
                        </div>
                        <div className="h-4 w-full bg-gray-200/80 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "47%" }}
                                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                                className="h-full bg-action-primary rounded-full"
                            />
                        </div>
                         <p className="text-sm text-text-secondary mt-2">Businesses seeing ROI</p>
                    </div>

                    {/* THE GAP VISUALIZATION */}
                    <div className="relative pt-6 border-t border-dashed border-border-strong">
                         <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-surface-muted px-2 text-text-muted text-xs uppercase tracking-widest font-bold">
                            The Reality
                        </div>
                        
                        <div className="bg-surface rounded-xl p-6 text-text-inverse relative overflow-hidden">
                             {/* Warning Pattern */}
                             <div className="absolute top-0 right-0 p-4 opacity-10">
                                <AlertCircle className="w-24 h-24" />
                             </div>

                             <div className="relative z-10">
                                <div className="text-4xl font-bold font-mono text-warm-amber mb-2">26%</div>
                                <div className="text-lg font-bold text-text-inverse mb-2">Stuck in the Gap</div>
                                <p className="text-text-inverse-muted text-sm leading-relaxed">
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
