"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Placeholder Logos - simple colored badges to simulate the brands
// Ideally these would be real SVGs
const integrations = [
  { 
    name: "HubSpot", 
    color: "#ff7a59", 
    bg: "bg-[#ff7a59]", 
    x: "20%", y: "30%",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity=".2"/>
        <path d="M11 13h2v4h-2zm-1-4h4v2h-4z" />
      </svg>
    )
  },
  { 
    name: "Mailchimp", 
    color: "#ffe01b", 
    bg: "bg-[#ffe01b]", 
    text: "text-black",
    x: "80%", y: "25%",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-black">
        <path d="M18.8 9.3c-1.3-.3-2.6 0-3.5.8-.3-1.8-1.7-2.9-3.3-2.9s-3 1.1-3.3 2.9c-.9-.8-2.2-1.1-3.5-.8-2.6.6-3.7 3.4-3.5 5.7.3 2.8 3.5 4.3 6.3 2.3.2 1 .9 1.7 1.9 1.8 1.4.1 2.5-.7 3-2 2.8 1.9 6 1.1 6.3-2.3.2-2.3-.9-5-3.5-5.5z"/>
      </svg>
    )
  },
  { 
    name: "Asana", 
    color: "#f06a6a", 
    bg: "bg-[#f06a6a]", 
    x: "15%", y: "60%",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
         <circle cx="12" cy="12" r="3" />
         <circle cx="19" cy="12" r="2" opacity="0.6" />
         <circle cx="5" cy="12" r="2" opacity="0.6" />
      </svg>
    )
  },
  { 
    name: "monday.com", 
    color: "#ff3d57", 
    bg: "bg-[#6c6cff]", 
    x: "85%", y: "55%",
    icon: (
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-red-500" />
        <div className="w-2 h-2 rounded-full bg-blue-500" />
        <div className="w-2 h-2 rounded-full bg-green-500" />
      </div>
    )
  },
  { 
    name: "Zapier", 
    color: "#ff4f00", 
    bg: "bg-[#ff4f00]", 
    x: "30%", y: "15%",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="4" />
      </svg>
    )
  },
  { 
    name: "Salesforce", 
    color: "#00a1e0", 
    bg: "bg-[#00a1e0]", 
    x: "70%", y: "15%",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white">
        <path d="M17.5 19c-.3 0-.5 0-.8-.1a3.5 3.5 0 0 0-1-6.9c-.3-1.4-1.6-2.5-3-2.5-1.3 0-2.4.9-2.9 2.1a3.5 3.5 0 0 0 .5 6.9c-.1 0-.3.1-.5.1a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"/>
      </svg>
    )
  },
];

export function TechConnect() {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-4">
            <span className="font-light">Connect your favourite</span> business software
          </h2>
          <p className="text-black max-w-2xl mx-auto">
             Seamlessly integrate with the tools you already use.
          </p>
        </div>

        {/* Image Container with Floating Logos - Card Styling */}
        <div className="relative w-full max-w-6xl mx-auto rounded-3xl overflow-hidden border-l-4 border-l-[#22d3ee] aspect-[16/9] md:aspect-[21/9] bg-gray-100">
           {/* Background Image */}
           <Image
             src="/images/tech-setup-v2.png"
             alt="Workspace with integrations"
             fill
             className="object-cover"
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
             priority
           />
           
           {/* Dark Overlay for text legibility if needed, lighter here for clear workspace feel */}
           <div className="absolute inset-0 bg-black/10" />

           {/* Floating Logos Area */}
           <div className="absolute inset-0">
              {integrations.map((app, index) => (
                <motion.div
                  key={app.name}
                  className={cn(
                    "absolute flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg backdrop-blur-md border border-white/20 cursor-pointer hover:scale-105 transition-transform",
                    "bg-white/90"
                  )}
                  style={{ left: app.x, top: app.y }}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5, type: "spring" }}
                  animate={{
                     y: [0, -10, 0],
                  }}
                  // @ts-ignore
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: index * 0.5 + 1 // Float animation delay
                  }}
                >
                  <div className={cn("w-10 h-10 rounded-lg flex items-center justify-center shrink-0", app.bg, app.text || "text-white")}>
                     {app.icon}
                  </div>
                  <span className="font-bold text-gray-800 text-sm hidden md:block">
                    {app.name}
                  </span>
                </motion.div>
              ))}
           </div>
        </div>

        {/* Supporting Text */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-medium">
            Unlock the full potential of your software investments. Our experts seamlessly connect your technology stack—including Pipedrive, Airtable, HubSpot, Make, and Salesforce—ensuring you get the best possible ROI from your tools.
          </p>
        </div>

      </div>
    </section>
  );
}
