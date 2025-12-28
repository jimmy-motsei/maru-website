'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import EmailCaptureModal from './EmailCaptureModal';

export default function PrimaryCTASection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Discover Your Lead Generation Potential?
          </h2>
          <p className="text-xl text-purple-100 mb-12 max-w-2xl mx-auto">
            Join 1,247+ B2B companies who've already improved their lead generation with our free analysis
          </p>

          <motion.button
            onClick={() => setShowModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-12 py-5 bg-white text-purple-600 text-xl font-bold rounded-lg hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl animate-pulse"
          >
            Start My Free Analysis Now
            <ArrowRight className="ml-3 w-6 h-6" />
          </motion.button>

          <div className="mt-8 text-purple-100">
            <p>✓ No credit card required</p>
            <p>✓ Results in 2 minutes</p>
            <p>✓ Free PDF report included</p>
          </div>
        </motion.div>
      </div>

      <EmailCaptureModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </section>
  );
}