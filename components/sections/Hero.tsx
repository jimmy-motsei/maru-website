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
                <div className="max-w-4xl pt-[clamp(200px,22vh,260px)] pb-[clamp(70px,10vh,120px)]">
                    <div className="backdrop-blur-[1px] rounded-3xl p-4 md:p-0">
                        <div className="flex flex-col gap-6 md:gap-7">
                            {/* Headline */}
                            <motion.h1
                                className="
                  font-bold tracking-tight leading-[1.08] max-w-[26ch]
                  text-[34px]
                  md:text-[58px]
                  lg:text-[72px]
                  xl:text-[74px]
                  2xl:text-[86px]
                "
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                <span className="block">
                  <span className="font-light text-zinc-400">Close the Gap</span>{" "}
                    <span className="text-white">Between</span>
                </span>
                                <span className="block">
                  <span className="font-light text-zinc-400">Good</span>{" "}
                                    <span className="text-white">and Great.</span>
                </span>
                            </motion.h1>

                            {/* Sub-headline */}
                            <motion.p
                                className="text-[18px] md:text-[20px] font-medium text-[#22d3ee] leading-[1.35]"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            >
                                AI-powered marketing systems for your next growth phase
                            </motion.p>

                            {/* Benefit paragraph */}
                            <motion.p
                                className="
                  text-[15px] md:text-[16px]
                  text-zinc-400 font-light
                  leading-[1.7]
                  max-w-[58ch]
                "
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                            >
                                We use AI to identify the opportunities you're missing and execute
                                with the precision that turns consistent performers into market
                                leaders.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                            >
                                <Link
                                    href="/website-audit"
                                    className="
                    group bg-[#22d3ee] text-black hover:bg-[#5cc5d1]
                    transition-colors rounded-full
                    pl-8 pr-2 py-2
                    flex items-center justify-between gap-4
                    font-bold tracking-tight text-sm md:text-base
                  "
                                >
                                    GET A FREE WEBSITE AUDIT
                                    <span className="bg-black/10 group-hover:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center transition-colors">
                    <ArrowRight size={18} className="text-black" />
                  </span>
                                </Link>

                                <Link
                                    href="/#process"
                                    className="
                    flex items-center gap-3
                    text-white font-bold tracking-widest text-sm
                    hover:text-[#22d3ee] transition-colors group
                  "
                                >
                                    HOW WE WORK
                                    <div className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#22d3ee] group-hover:text-[#22d3ee] transition-colors">
                                        <ArrowUpRight size={14} />
                                    </div>
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
