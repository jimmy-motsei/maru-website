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
                                className="tracking-tight leading-[0.95] text-[34px] md:text-[50px] lg:text-[67px] xl:text-[76px] 2xl:text-[84px]"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <span className="font-light text-zinc-500">Your AI Growth</span>{" "}
                                <span className="font-bold text-white">Journey</span><br />
                                <span className="font-light text-zinc-500">Starts</span>{" "}
                                <span className="font-bold text-white">Here.</span>
                            </motion.h1>

                            {/* Sub-headline */}
                            <motion.p
                                className="text-[20px] md:text-[24px] lg:text-[26px] font-medium text-[#22d3ee] leading-[1.3] mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                            >
                                Strategic AI & automation consulting for scaling businesses
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
                                At Maru, we improve business growth and lower costs through automation consulting, digital transformation, and custom AI development. To learn how you can benefit from AI & automation consultancy, simply get a free website audit.
                            </motion.p>

                            {/* CTAs */}
                            <motion.div
                                className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-10"
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
