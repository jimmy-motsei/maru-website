"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import MultiStepForm from "@/components/lead-generation/MultiStepForm";
import { FormStep } from "@/lib/types/lead-generation";

interface EmailModalAssessmentProps {
  isOpen: boolean;
  onClose: () => void;
}

const assessmentSteps: FormStep[] = [
  {
    id: "personal",
    title: "Share Your Email",
    description: "So we can send your results",
    fields: [
      {
        name: "email",
        label: "Work Email",
        type: "email",
        placeholder: "you@company.com",
        required: true,
      },
    ],
  },
  {
    id: "company",
    title: "Tell Us About Your Business",
    description: "This helps our AI provide more accurate benchmarks",
    fields: [
      {
        name: "company_name",
        label: "Company Name",
        type: "text",
        placeholder: "Acme Inc",
        required: true,
      },
      {
        name: "website_url",
        label: "Website URL",
        type: "url",
        placeholder: "https://example.com",
        required: true,
      },
      {
        name: "industry",
        label: "Industry",
        type: "select",
        options: [
          { label: "SaaS", value: "saas" },
          { label: "Professional Services", value: "professional_services" },
          { label: "E-commerce", value: "ecommerce" },
          { label: "Manufacturing", value: "manufacturing" },
          { label: "Other", value: "other" },
        ],
        required: true,
      },
      {
        name: "company_size",
        label: "Company Size",
        type: "select",
        options: [
          { label: "1-10", value: "1-10" },
          { label: "11-50", value: "11-50" },
          { label: "51-200", value: "51-200" },
          { label: "201-500", value: "201-500" },
          { label: "500+", value: "500+" },
        ],
        required: true,
      },
      {
        name: "has_crm",
        label: "Do you use a CRM?",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Planning to", value: "planning" },
        ],
        required: true,
      },
    ],
  },
  {
    id: "goals",
    title: "Strategy & Goals",
    description: "Tell us about your current approach",
    fields: [
      {
        name: "has_strategy",
        label: "Active lead gen strategy?",
        type: "select",
        options: [
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
          { label: "Partially", value: "partially" },
        ],
        required: true,
      },
      {
        name: "review_frequency",
        label: "Website review frequency?",
        type: "select",
        options: [
          { label: "Weekly", value: "weekly" },
          { label: "Monthly", value: "monthly" },
          { label: "Quarterly", value: "quarterly" },
          { label: "Yearly", value: "yearly" },
          { label: "Never", value: "never" },
        ],
        required: true,
      },
      {
        name: "current_leads",
        label: "Monthly Leads (Approx)",
        type: "number",
        placeholder: "50",
        required: true,
      },
      {
        name: "target_leads",
        label: "Target Monthly Leads",
        type: "number",
        placeholder: "200",
        required: true,
      },
      {
        name: "main_challenge",
        label: "Main Lead Gen Challenge",
        type: "textarea",
        placeholder: "e.g. Low traffic, Poor conversion, High cost per lead",
        required: true,
      },
    ],
  },
];

export function EmailModalAssessment({ isOpen, onClose }: EmailModalAssessmentProps) {
  const handleSubmit = async (data: Record<string, any>) => {
    try {
      // In a real scenario, this would call an API route that uses Firecrawl, Gemini, and Resend
      console.log("Form data submitted:", data);
      
      const response = await fetch('/api/analyze-lead-gen', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit assessment');
      }

      // Handle success (e.g., show results or a thank you message)
      onClose();
      alert("Assessment complete! Check your email for the detailed report.");
    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error processing your assessment. Please try again.");
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            <div className="p-8 md:p-12 overflow-y-auto max-h-[90vh]">
              <div className="mb-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                  Lead Scoring Assessment
                </h2>
                <p className="text-gray-400">
                  Complete the steps below to see your score
                </p>
              </div>
              
              <MultiStepForm 
                steps={assessmentSteps} 
                onSubmit={handleSubmit}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
