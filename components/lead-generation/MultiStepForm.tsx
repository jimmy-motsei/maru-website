'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { FormStep } from '@/lib/types/lead-generation';

interface MultiStepFormProps {
  steps: FormStep[];
  onSubmit: (data: Record<string, any>) => Promise<void>;
  onStepChange?: (step: number, data: Record<string, any>) => void;
  className?: string;
}

export default function MultiStepForm({ 
  steps, 
  onSubmit, 
  onStepChange,
  className = '' 
}: MultiStepFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Record<string, any>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateFormData = (stepData: Record<string, any>) => {
    const newData = { ...formData, ...stepData };
    setFormData(newData);
    onStepChange?.(currentStep, newData);
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className={`max-w-2xl mx-auto ${className}`}>
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-zinc-400">
            Step {currentStep + 1} of {steps.length}
          </span>
          <span className="text-sm text-zinc-400">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-zinc-800 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Step Indicators */}
      <div className="flex justify-center mb-8">
        {steps.map((_, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                index < currentStep
                  ? 'bg-green-500 text-white'
                  : index === currentStep
                  ? 'bg-cyan-400 text-black'
                  : 'bg-zinc-700 text-zinc-400'
              }`}
            >
              {index < currentStep ? (
                <Check className="w-4 h-4" />
              ) : (
                index + 1
              )}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`w-12 h-0.5 mx-2 transition-colors ${
                  index < currentStep ? 'bg-green-500' : 'bg-zinc-700'
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Form Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 mb-6"
        >
          <h2 className="text-xl font-semibold text-white mb-2">
            {steps[currentStep].title}
          </h2>
          {steps[currentStep].description && (
            <p className="text-zinc-400 mb-6">
              {steps[currentStep].description}
            </p>
          )}

          <StepForm
            step={steps[currentStep]}
            data={formData}
            onChange={updateFormData}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="flex items-center gap-2 px-4 py-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>

        {currentStep === steps.length - 1 ? (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center gap-2 px-6 py-2 bg-cyan-400 hover:bg-cyan-300 text-black font-medium rounded-lg transition-colors disabled:opacity-50"
          >
            {isSubmitting ? 'Analyzing...' : 'Complete Assessment'}
          </button>
        ) : (
          <button
            onClick={nextStep}
            className="flex items-center gap-2 px-4 py-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

// Individual step form component
function StepForm({ 
  step, 
  data, 
  onChange 
}: { 
  step: FormStep; 
  data: Record<string, any>; 
  onChange: (data: Record<string, any>) => void;
}) {
  const handleFieldChange = (name: string, value: any) => {
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-4">
      {step.fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-white mb-2">
            {field.label}
            {field.required && <span className="text-red-400 ml-1">*</span>}
          </label>
          
          {field.type === 'text' || field.type === 'email' || field.type === 'url' ? (
            <input
              type={field.type}
              placeholder={field.placeholder}
              value={data[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
              required={field.required}
            />
          ) : field.type === 'file' ? (
            <input
              type="file"
              accept=".csv"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = (event) => {
                    handleFieldChange(field.name, event.target?.result as string);
                  };
                  reader.readAsText(file);
                }
              }}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-cyan-400 file:text-black hover:file:bg-cyan-300"
              required={field.required}
            />
          ) : field.type === 'textarea' ? (
            <textarea
              placeholder={field.placeholder}
              value={data[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              rows={4}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
              required={field.required}
            />
          ) : field.type === 'select' ? (
            <select
              value={data[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, e.target.value)}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:border-cyan-400"
              required={field.required}
            >
              <option value="">Select an option</option>
              {field.options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : field.type === 'number' ? (
            <input
              type="number"
              placeholder={field.placeholder}
              value={data[field.name] || ''}
              onChange={(e) => handleFieldChange(field.name, Number(e.target.value))}
              min={field.validation?.min}
              max={field.validation?.max}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-400 focus:outline-none focus:border-cyan-400"
              required={field.required}
            />
          ) : null}
        </div>
      ))}
    </div>
  );
}