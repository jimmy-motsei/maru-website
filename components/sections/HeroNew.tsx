"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingDown, FileText, Settings } from "lucide-react";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white">
            <AtmosphericBackground variant="hero" />

            {/* Content Layer */}
            <div className="container relative z-30 mx-auto min-h-screen px-6 md:px-12 lg:px-20">
                <div className="max-w-5xl pt-[clamp(180px,20vh,240px)] pb-[clamp(80px,12vh,140px)]">
                    <div className="backdrop-blur-[1px] rounded-3xl p-4 md:p-0">
                        <div className="flex flex-col gap-8 md:gap-12">
                            {/* Headline */}
                            <motion.h1
                                className="tracking-tight leading-[0.95] text-[27px] md:text-[40px] lg:text-[54px] xl:text-[61px] 2xl:text-[67px]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <span className="font-extralight text-zinc-500">Discover Your</span>{" "}
                                <span className="font-medium text-white">Lead Generation</span><br />
                                <span className="font-extralight text-zinc-500">Potential with</span>{" "}
                                <span className="font-medium text-[#22d3ee]">AI Analysis</span>
                            </motion.h1>

                            {/* Sub-headline */}
                            <motion.p
                                className="text-[20px] md:text-[24px] lg:text-[26px] font-medium text-[#22d3ee] leading-[1.3] mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            >
                                Get your free Lead Score Predictor analysis in 2 minutes
                            </motion.p>

                            {/* Benefit paragraph */}
                            <motion.p
                                className="
                  text-[16px] md:text-[18px] lg:text-[19px]
                  text-zinc-400 font-light
                  leading-[1.6]
                  max-w-[55ch] mt-2
                "
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            >
                                Discover exactly how to 5-6x your B2B leads with our AI-powered website analysis. Get your personalized 90-day growth roadmap.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                    <CTAPrimary href="/lead-score-predictor">
                                        Get Free Assessment
                                    </CTAPrimary>
                                    
                                    <CTAPrimary 
                                        href="/contact"
                                        className="bg-transparent border-2 border-zinc-700 text-white hover:border-[#3DD6D0] hover:bg-[#3DD6D0]/10 hover:shadow-none"
                                    >
                                        Book Consultation
                                    </CTAPrimary>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}