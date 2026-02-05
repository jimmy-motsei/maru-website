"use client";

import { motion } from "framer-motion";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { CTAPrimary } from "@/components/ui/CTAPrimary";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
};

export function Hero() {
    return (
        <section className="relative w-full min-h-screen overflow-hidden bg-[#09121A] text-white">
            <AtmosphericBackground variant="hero" />
            <div className="container relative z-30 mx-auto h-screen px-6 md:px-12 lg:px-20 flex flex-col justify-center">
                <div className="max-w-5xl">
                    <div className="backdrop-blur-[1px] rounded-3xl p-4 md:p-0">
                        <div className="flex flex-col gap-8 md:gap-12">
                            {/* CSS Animated H1 for LCP */}
                            <h1 className="hero-h1 animate-fade-up opacity-0 [animation-fill-mode:forwards]">
                                <span className="font-extralight text-zinc-500">Discover Your</span>{" "}
                                <span className="font-medium text-white">Lead Generation</span><br />
                                <span className="font-extralight text-zinc-500">Potential with</span>{" "}
                                <span className="font-medium text-white">AI Analysis</span>
                            </h1>

                            <motion.div 
                              initial="hidden"
                              animate="visible"
                              variants={staggerContainer}
                              className="flex flex-col gap-8 md:gap-12"
                            >
                                <motion.p variants={fadeInUp} className="text-[20px] md:text-[24px] lg:text-[26px] font-medium text-highlight leading-[1.3] mt-[-1rem]">
                                    Get your free website <span className="text-white font-bold">Lead Grading Assessment</span> in 2 minutes
                                </motion.p>
                                <motion.div variants={fadeInUp} className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
                                    <CTAPrimary href="https://leads.maruonline.com">Get Free Assessment</CTAPrimary>
                                    <CTAPrimary href="/services" className="bg-transparent border-2 border-zinc-700 text-white hover:border-highlight hover:bg-highlight/10 hover:shadow-none">See our Services</CTAPrimary>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}