"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const testimonials: {
  id: number;
  name: string;
  company: string;
  image: string;
  quote: string;
}[] = [];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 md:py-32 bg-white text-black">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight text-gray-900">
            Proven Results <span className="font-extralight text-gray-400">from</span>
            <br />
            Real <span className="font-extralight text-gray-400">SMEs</span>
          </h2>
        </motion.div>

        {/* Avatar Row */}
        <motion.div 
          className="flex justify-center items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                index === activeIndex 
                  ? "w-16 h-16 ring-4 ring-accent ring-offset-2" 
                  : "w-12 h-12 opacity-70 hover:opacity-100"
              }`}
            >
              {/* Placeholder avatar with initials */}
              <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center text-dark font-semibold text-sm">
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
            </button>
          ))}
        </motion.div>

        {/* Testimonial Content */}
        <motion.div 
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Quote Mark */}
          <div className="text-accent text-5xl font-serif mb-6">"</div>

          {/* Name & Company */}
          <h4 className="text-xl font-bold mb-1">
            {activeTestimonial.name}
          </h4>
          <p className="text-sm text-gray-700 uppercase tracking-wider mb-8">
            {activeTestimonial.company}
          </p>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTestimonial.id}
              className="text-lg text-gray-800 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {activeTestimonial.quote}
            </motion.p>
          </AnimatePresence>
        </motion.div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-12">
          <motion.button
            onClick={handlePrev}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={20} />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white transition-all duration-300 hover:bg-accent-dark"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
