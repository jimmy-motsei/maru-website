"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#050505] text-white">
            <AtmosphericBackground variant="hero" />

            {/* Content Layer */}
            <div className="container relative z-30 mx-auto min-h-screen px-6 md:px-12 lg:px-20">
                {/*
          Ashley-feel positioning:
          - Not centered vertically
          - Starts “down from the top” with a stable rhythm
          - Clamp keeps it consistent across different viewport heights
        */}
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
                                <span className="font-extralight text-zinc-500">Your AI Growth</span>{" "}
                                <span className="font-medium text-white">Journey</span><br />
                                <span className="font-extralight text-zinc-500">Starts</span>{" "}
                                <span className="font-medium text-white">Here.</span>
                            </motion.h1>

                            {/* Sub-headline with social proof */}
                            <motion.div
                                className="mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            >
                                <p className="text-[20px] md:text-[24px] lg:text-[26px] font-medium text-[#22d3ee] leading-[1.3]">
                                    Strategic AI & automation consulting for scaling businesses
                                </p>
                                <div className="flex items-center gap-6 mt-3 text-sm text-zinc-500">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                        <span>4 Free Assessment Tools</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                        <span>No Signup Required</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>Instant Results</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Benefit paragraph with urgency */}
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
                                At Maru, we improve business growth and lower costs through automation consulting, digital transformation, and custom AI development. 
                                <span className="text-[#22d3ee] font-medium">Start with a free website audit</span> or take a 2-minute assessment to discover your growth opportunities.
                            </motion.p>

                            {/* CTAs - Optimized Hierarchy */}
                            <motion.div
                                className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                {/* Primary CTA */}
                                <Link
                                    href="/website-audit"
                                    className="
                    group bg-[#22d3ee] text-black hover:bg-[#5cc5d1]
                    transition-all duration-300 rounded-full
                    pl-8 pr-2 py-3
                    flex items-center justify-between gap-4
                    font-bold tracking-tight text-sm md:text-base
                    hover:scale-105 hover:shadow-xl
                  "
                                >
                                    GET FREE WEBSITE AUDIT
                                    <span className="bg-black/10 group-hover:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <ArrowRight size={18} className="text-black" />
                  </span>
                                </Link>

                                {/* Secondary CTA */}
                                <Link
                                    href="/#assessments"
                                    className="
                    group bg-white/10 text-white hover:bg-white/20
                    transition-all duration-300 rounded-full
                    pl-6 pr-2 py-3 border border-white/20
                    flex items-center justify-between gap-3
                    font-semibold text-sm md:text-base
                  "
                                >
                                    TAKE 2-MIN ASSESSMENT
                                    <span className="bg-white/10 group-hover:bg-white/20 w-8 h-8 rounded-full flex items-center justify-center transition-colors">
                    <ArrowRight size={16} className="text-white" />
                  </span>
                                </Link>

                                {/* Tertiary CTA */}
                                <Link
                                    href="/#process"
                                    className="
                    flex items-center gap-2
                    text-zinc-400 font-medium text-sm
                    hover:text-[#22d3ee] transition-colors group
                  "
                                >
                                    How We Work
                                    <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
