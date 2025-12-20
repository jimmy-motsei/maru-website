"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { AtmosphericBackground } from "@/components/ui/AtmosphericBackground";
import { fadeUpVariants, staggerContainerVariants, scaleInVariants } from "@/lib/animations";

export default function AboutContent() {
  return (
    <main className="bg-dark">
      {/* Hero Banner - Dark with Atmospheric Background */}
      <section className="relative min-h-[80vh] flex items-end pb-24 overflow-hidden">
        {/* Background Atmosphere */}
        <AtmosphericBackground variant="hero" />

        <div className="container mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumbs */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-16"
          >
            <ul className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-accent hover:text-accent-light transition-colors"
                >
                  Homepage
                </Link>
              </li>
              <li className="text-white/40">/</li>
              <li className="text-white/60">About</li>
            </ul>
          </motion.nav>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold text-muted mb-6">
              <span className="font-thin text-gray-600">Trusted AI</span> marketing automation <span className="font-light">experts</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-3xl">
              Over two decades of marketing expertise, now powered by intelligent automation
            </p>
          </motion.div>

          {/* Scroll indicator */}
          <motion.a
            href="#about-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-3 text-accent hover:text-accent-light transition-colors group"
          >
            <span className="text-sm font-medium">Our story</span>
            <ArrowDown size={16} className="animate-bounce" />
          </motion.a>
        </div>
      </section>

      {/* About Content Section - Light Background */}
      <section id="about-content" className="bg-white py-32 text-black">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.div 
            className="grid items-center gap-16 lg:grid-cols-2"
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Left Column: Text Content */}
            <div className="space-y-8">
              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                Established in 2002, MaruOnline brings over two decades of marketing expertise—from building brands from scratch to scaling existing ones.
              </motion.p>

              <motion.p 
                className="text-lg leading-relaxed text-black/80"
                variants={fadeUpVariants}
              >
                We use AI as a strategic tool to do what we do best: help high-performing SMEs break through growth plateaus. Through intelligent automation, we identify hidden opportunities and execute with precision—giving consistent performers the edge they need to dominate their market.
              </motion.p>

              {/* Quote Block */}
              <motion.div 
                className="mt-12 flex items-center gap-6 rounded-2xl bg-gray-50 p-8 border-l-4 border-accent"
                variants={fadeUpVariants}
              >
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full">
                  <Image 
                    src="/images/brand/founder.jpg" 
                    alt="Founder" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-lg font-medium leading-snug mb-2">
                    "We automate all the boring stuff, so you can focus on growing your business"
                  </h6>
                  <p className="text-sm text-black/60 font-medium">
                    Founder - Jimmy Motsei
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Right Column: Image */}
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl border border-black/5" />
              <motion.div 
                className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl"
                variants={scaleInVariants}
              >
                <Image
                  src="/assets/images/illustrations/visionary-woman.png"
                  alt="Visionary African Woman - AI & Automation Leadership"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}