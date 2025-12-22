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
                                <span className="font-medium text-white">Revenue</span><br />
                                <span className="font-extralight text-zinc-500">Potential with</span>{" "}
                                <span className="font-medium text-[#22d3ee]">AI Audits</span>
                            </motion.h1>

                            {/* Sub-headline */}
                            <motion.p
                                className="text-[20px] md:text-[24px] lg:text-[26px] font-medium text-[#22d3ee] leading-[1.3] mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            >
                                Free AI-powered assessments to unlock hidden growth opportunities
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
                                Get instant insights into your lead generation potential, pipeline health, and tech stack efficiency. Our AI-powered audits reveal exactly where you're losing revenue and how to fix it.
                            </motion.p>

                            {/* Assessment Grid */}
                            <motion.div
                                className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                <Link href="/assessments/lead-score" className="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-cyan-400/50 transition-colors">
                                    <Target className="w-6 h-6 text-cyan-400 mb-2" />
                                    <h3 className="font-medium text-white text-sm mb-1">Lead Score</h3>
                                    <p className="text-xs text-zinc-400">Website analysis</p>
                                </Link>
                                
                                <Link href="/assessments/pipeline-leak" className="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-red-400/50 transition-colors">
                                    <TrendingDown className="w-6 h-6 text-red-400 mb-2" />
                                    <h3 className="font-medium text-white text-sm mb-1">Pipeline Leaks</h3>
                                    <p className="text-xs text-zinc-400">Revenue recovery</p>
                                </Link>
                                
                                <Link href="/assessments/proposal" className="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-blue-400/50 transition-colors">
                                    <FileText className="w-6 h-6 text-blue-400 mb-2" />
                                    <h3 className="font-medium text-white text-sm mb-1">AI Proposals</h3>
                                    <p className="text-xs text-zinc-400">Instant generation</p>
                                </Link>
                                
                                <Link href="/assessments/tech-audit" className="group p-4 bg-zinc-900/50 border border-zinc-800 rounded-xl hover:border-purple-400/50 transition-colors">
                                    <Settings className="w-6 h-6 text-purple-400 mb-2" />
                                    <h3 className="font-medium text-white text-sm mb-1">Tech Stack</h3>
                                    <p className="text-xs text-zinc-400">Cost optimization</p>
                                </Link>
                            </motion.div>

                            {/* CTAs */}
                            <motion.div
                                className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            >
                                <Link
                                    href="/assessments/lead-score"
                                    className="
                    group bg-[#22d3ee] text-black hover:bg-[#5cc5d1]
                    transition-colors rounded-full
                    pl-8 pr-2 py-2
                    flex items-center justify-between gap-4
                    font-bold tracking-tight text-sm md:text-base
                  "
                                >
                                    START FREE AUDIT
                                    <span className="bg-black/10 group-hover:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <ArrowRight size={18} className="text-black" />
                  </span>
                                </Link>

                                <div className="text-sm text-zinc-400">
                                    <span className="text-green-400 font-medium">✓</span> No signup required
                                    <span className="mx-2">•</span>
                                    <span className="text-green-400 font-medium">✓</span> Instant results
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}