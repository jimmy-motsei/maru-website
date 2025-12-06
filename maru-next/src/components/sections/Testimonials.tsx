"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Sarah Newman",
    company: "Envato Market",
    image: "/images/testimonials/avatar-1.jpg",
    quote: "This creative agency stands out with their exceptional talent and expertise. Their ability to think outside the box and bring unique ideas to life is truly impressive. With meticulous attention to detail, they consistently deliver visually stunning and impactful work."
  },
  {
    id: 2,
    name: "Michael Chen",
    company: "Tech Solutions Inc",
    image: "/images/testimonials/avatar-2.jpg",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    company: "StartUp Ventures",
    image: "/images/testimonials/avatar-3.jpg",
    quote: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum."
  },
  {
    id: 4,
    name: "David Kim",
    company: "Innovation Labs",
    image: "/images/testimonials/avatar-4.jpg",
    quote: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    id: 5,
    name: "Jessica Taylor",
    company: "Digital Agency",
    image: "/images/testimonials/avatar-5.jpg",
    quote: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
  },
  {
    id: 6,
    name: "Alex Johnson",
    company: "Growth Partners",
    image: "/images/testimonials/avatar-6.jpg",
    quote: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur."
  },
];

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
    <section className="py-24 md:py-32 bg-white text-black">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Customer <span className="font-light">Voices:</span>
            <br />
            Hear What <span className="font-light">They Say!</span>
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
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-8">
            {activeTestimonial.company}
          </p>

          {/* Quote */}
          <AnimatePresence mode="wait">
            <motion.p
              key={activeTestimonial.id}
              className="text-lg text-gray-600 leading-relaxed"
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
