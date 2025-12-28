"use client";

import { motion } from "framer-motion";
import { ArrowRight, Target, TrendingDown, FileText, Settings } from "lucide-react";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

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
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Link
                                        href="/lead-score-predictor"
                                        className="
                        group bg-[#22d3ee] text-black hover:bg-[#5cc5d1]
                        transition-all duration-300 rounded-full
                        pl-8 pr-2 py-3
                        flex items-center justify-between gap-4
                        font-bold tracking-tight text-sm md:text-base
                        hover:scale-105 hover:shadow-lg
                      "
                                    >
                                        START FREE ANALYSIS
                                        <span className="bg-black/10 group-hover:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                        <ArrowRight size={18} className="text-black group-hover:translate-x-0.5 transition-transform" />
                      </span>
                                    </Link>
                                    
                                    <Link
                                        href="/contact"
                                        className="
                        group border-2 border-zinc-700 text-white hover:border-cyan-400
                        transition-all duration-300 rounded-full
                        px-8 py-3
                        flex items-center justify-center gap-2
                        font-semibold tracking-tight text-sm md:text-base
                        hover:bg-cyan-400/10
                      "
                                    >
                                        Book Consultation
                                    </Link>
                                </div>

                                <div className="text-sm text-zinc-400 flex flex-col sm:flex-row gap-2 sm:gap-4">
                                    <div className="flex items-center gap-1">
                                        <span className="text-green-400 font-medium">✓</span> No signup required
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-green-400 font-medium">✓</span> 2-minute assessment
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="text-green-400 font-medium">✓</span> Instant results
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}