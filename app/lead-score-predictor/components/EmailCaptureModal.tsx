'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { X, Mail, ArrowRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  email: string;
  name: string;
  company: string;
  website: string;
}

interface FormErrors {
  email?: string;
  name?: string;
  company?: string;
}

export default function EmailCaptureModal({ isOpen, onClose }: EmailCaptureModalProps) {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    name: '',
    company: '',
    website: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Name validation
    if (!formData.name) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().split(' ').length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    // Company validation
    if (!formData.company) {
      newErrors.company = 'Company name is required';
    } else if (formData.company.length < 2) {
      newErrors.company = 'Company name must be at least 2 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Store form data in sessionStorage for the question flow
      sessionStorage.setItem('leadData', JSON.stringify(formData));
      
      // Track conversion event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'lead_capture', {
          method: 'email_modal',
          value: 1
        });
      }

      // Close modal and navigate to question flow
      onClose();
      router.push('/lead-score-predictor/questions');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const benefits = [
    "Personalized 0-100 Lead Score",
    "Gap analysis & recommendations",
    "Free PDF report to share"
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Modal - MARU Styling */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#111111] border border-[#22d3ee]/20 rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white transition-colors p-2 hover:bg-[#1a1a1a] rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {/* Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#22d3ee]/10 rounded-2xl flex items-center justify-center border border-[#22d3ee]/30">
                  <Mail className="w-8 h-8 text-[#22d3ee]" />
                </div>
              </div>

              {/* Header */}
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Get Your Free Lead Score
                </h2>
                <p className="text-zinc-400">
                  We'll email you your personalized results
                </p>
              </div>

              {/* Benefits List */}
              <div className="bg-[#1a1a1a] rounded-xl p-4 mb-6 border border-[#22d3ee]/10">
                <p className="text-sm text-zinc-500 mb-3">What you'll receive:</p>
                <ul className="space-y-2">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-zinc-300">
                      <div className="w-5 h-5 bg-[#22c55e]/20 rounded-full flex items-center justify-center mr-2">
                        <Check className="w-3 h-3 text-[#22c55e]" />
                      </div>
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    placeholder="john@company.com"
                    className={`w-full px-4 py-3 bg-[#1a1a1a] border rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all ${
                      errors.email ? 'border-red-500' : 'border-zinc-700'
                    }`}
                    required
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    placeholder="John Smith"
                    className={`w-full px-4 py-3 bg-[#1a1a1a] border rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-zinc-700'
                    }`}
                    required
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-zinc-300 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    placeholder="Your Company"
                    className={`w-full px-4 py-3 bg-[#1a1a1a] border rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all ${
                      errors.company ? 'border-red-500' : 'border-zinc-700'
                    }`}
                    required
                  />
                  {errors.company && (
                    <p className="mt-1 text-sm text-red-400">{errors.company}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="website" className="block text-sm font-medium text-zinc-300 mb-2">
                    Website URL <span className="text-zinc-600">(optional)</span>
                  </label>
                  <input
                    type="url"
                    id="website"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-zinc-700 rounded-xl text-white placeholder-zinc-600 focus:ring-2 focus:ring-[#22d3ee] focus:border-transparent transition-all"
                  />
                </div>

                {/* Submit Button - MARU Style */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="
                    w-full group bg-[#22d3ee] text-black hover:bg-[#5cc5d1]
                    transition-all duration-300 rounded-full
                    pl-6 pr-2 py-3
                    flex items-center justify-between gap-4
                    font-bold tracking-tight
                    hover:shadow-lg hover:shadow-[#22d3ee]/30
                    disabled:opacity-50 disabled:cursor-not-allowed
                  "
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center w-full">
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin mr-2" />
                      Processing...
                    </div>
                  ) : (
                    <>
                      Continue to Questions
                      <span className="bg-black/10 group-hover:bg-black/20 w-10 h-10 rounded-full flex items-center justify-center transition-all">
                        <ArrowRight size={18} className="text-black group-hover:translate-x-0.5 transition-transform" />
                      </span>
                    </>
                  )}
                </button>

                {/* Trust Indicators */}
                <p className="text-center text-xs text-zinc-500 mt-4">
                  🔒 Your data is secure. No spam, unsubscribe anytime.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
