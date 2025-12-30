"use client";

import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

export function MaintenanceView() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white flex items-center justify-center">
            <AtmosphericBackground variant="hero" />

            {/* Content Layer */}
            <div className="container relative z-30 mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 mb-8 backdrop-blur-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                        </span>
                        <span className="text-xs font-medium text-zinc-300 tracking-wide uppercase">System Upgrade in Progress</span>
                    </motion.div>

                    <motion.h1
                        className="tracking-tight leading-[0.95] text-[32px] md:text-[50px] lg:text-[64px] font-medium text-white mb-6"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    >
                        We are currently <span className="text-zinc-500 font-light">enhancing</span><br />
                        the Maru experience.
                    </motion.h1>

                    <motion.p
                        className="text-[16px] md:text-[18px] text-zinc-400 font-light leading-[1.6] max-w-xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        Our site is temporarily offline while we roll out significant improvements to our platform. We expect to be back online shortly.
                    </motion.p>
                    
                    <motion.div 
                        className="mt-12 text-sm text-zinc-500"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        For urgent inquiries, please contact us at <a href="mailto:hello@maruonline.com" className="text-zinc-300 hover:text-white transition-colors underline decoration-zinc-700 underline-offset-4">hello@maruonline.com</a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
