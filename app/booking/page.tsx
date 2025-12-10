"use client";

import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import Script from 'next/script';
import { siteConfig } from '@/config/site';

function BookingForm() {
  const searchParams = useSearchParams();
  const selectedPlan = searchParams.get('plan') || 'General Inquiry';
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    website: '', 
    budget: '', 
    goal: selectedPlan 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);
  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault(); 
    nextStep(); 
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-dark py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <motion.h2 
          className="mt-6 text-center text-3xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's build your growth plan.
        </motion.h2>
        <motion.p 
          className="mt-2 text-center text-sm text-zinc-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Tell us about your business so we can prepare for our call.
        </motion.p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white/5 border border-white/10 px-4 py-8 shadow-2xl sm:rounded-lg sm:px-10 backdrop-blur-md">
          {/* Progress Bar */}
          {step < 3 && (
            <div className="mb-8">
              <div className="flex justify-between mb-2">
                <span className={`text-xs font-semibold ${step >= 1 ? 'text-accent' : 'text-zinc-600'}`}>
                  About You
                </span>
                <span className={`text-xs font-semibold ${step >= 2 ? 'text-accent' : 'text-zinc-600'}`}>
                  Details
                </span>
              </div>
              <div className="h-2 w-full bg-zinc-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-accent transition-all duration-500 ease-out" 
                  style={{ width: step === 1 ? '50%' : '100%' }}
                />
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {step === 1 && (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                {['name', 'email', 'website'].map((field) => (
                  <div key={field}>
                    <label 
                      htmlFor={field} 
                      className="block text-sm font-medium leading-6 text-zinc-300 capitalize"
                    >
                      {field}
                    </label>
                    <div className="mt-2">
                      <input
                        type={field === 'email' ? 'email' : 'text'}
                        name={field}
                        required={field !== 'website'}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="block w-full rounded-md border-0 bg-white/5 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-white/10 placeholder:text-zinc-500 focus:ring-2 focus:ring-inset focus:ring-accent sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                ))}
                <button 
                  type="button" 
                  onClick={nextStep} 
                  className="flex w-full justify-center rounded-md bg-accent px-3 py-2 text-sm font-bold text-dark shadow-sm hover:bg-accent-light transition-colors"
                >
                  Next: Project Details →
                </button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="rounded-md bg-accent/10 p-4 border border-accent/20">
                  <h3 className="text-sm font-medium text-accent">
                    Interested in: {formData.goal}
                  </h3>
                </div>
                <div>
                  <label 
                    htmlFor="budget" 
                    className="block text-sm font-medium leading-6 text-zinc-300"
                  >
                    Monthly Budget (ZAR)
                  </label>
                  <select 
                    name="budget" 
                    required 
                    value={formData.budget} 
                    onChange={handleChange} 
                    className="mt-2 block w-full rounded-md border-0 bg-white/5 py-2 pl-3 pr-10 text-white ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-accent sm:text-sm sm:leading-6 [&>option]:bg-dark"
                  >
                    <option value="">Select a range...</option>
                    <option value="<R5k">Less than R5,000</option>
                    <option value="R5k-R15k">R5,000 - R15,000</option>
                    <option value="R15k-R30k">R15,000 - R30,000</option>
                    <option value="R30k+">R30,000+</option>
                  </select>
                </div>
                <div className="flex gap-3 pt-4">
                  <button 
                    type="button" 
                    onClick={prevStep} 
                    className="flex-1 rounded-md bg-white/5 px-3 py-2 text-sm font-semibold text-white ring-1 ring-inset ring-white/10 hover:bg-white/10"
                  >
                    Back
                  </button>
                  <button 
                    type="submit" 
                    className="flex-1 rounded-md bg-accent px-3 py-2 text-sm font-bold text-dark shadow-sm hover:bg-accent-light transition-colors"
                  >
                    Complete Booking
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-900/50 border border-green-500/50">
                  <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">Success!</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Please pick a time below to schedule your free consultation.
                </p>
                <div className="mt-6 w-full rounded-lg bg-white/5 border border-white/10 overflow-hidden">
                    <div 
                        className="calendly-inline-widget" 
                        data-url={siteConfig.calendly.discoveryCall} 
                        style={{ minWidth: '320px', height: '700px' }} 
                    />
                    <Script 
                        src="https://assets.calendly.com/assets/external/widget.js" 
                        strategy="lazyOnload" 
                    />
                </div>
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-white">Loading...</div>}>
      <BookingForm />
    </Suspense>
  );
}
