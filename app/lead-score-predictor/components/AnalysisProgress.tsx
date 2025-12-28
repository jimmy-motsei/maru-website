'use client';

import { useState, useEffect } from 'react';
import { Globe, BarChart3, TrendingUp, AlertCircle, Zap, Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface AnalysisProgressProps {
  assessmentData: any;
  onComplete: (analysisId: string) => void;
}

const analysisSteps = [
  {
    id: 'connecting',
    icon: Globe,
    label: 'Connecting to website...',
    duration: 5000
  },
  {
    id: 'analyzing',
    icon: BarChart3,
    label: 'Analyzing content & structure...',
    duration: 8000
  },
  {
    id: 'evaluating',
    icon: TrendingUp,
    label: 'Evaluating conversion points...',
    duration: 10000
  },
  {
    id: 'detecting',
    icon: AlertCircle,
    label: 'Detecting optimization gaps...',
    duration: 10000
  },
  {
    id: 'generating',
    icon: Zap,
    label: 'Generating recommendations...',
    duration: 12000
  }
];

export default function AnalysisProgress({ assessmentData, onComplete }: AnalysisProgressProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isAnalyzing, setIsAnalyzing] = useState(true);

  useEffect(() => {
    // Start the analysis process
    startAnalysis();
  }, []);

  const startAnalysis = async () => {
    try {
      // Start the actual API call
      const analysisPromise = performAnalysis();

      // Show progress steps
      for (let i = 0; i < analysisSteps.length; i++) {
        setCurrentStep(i);
        
        // Wait for step duration
        await new Promise(resolve => setTimeout(resolve, analysisSteps[i].duration));
        
        // Mark step as completed
        setCompletedSteps(prev => [...prev, i]);
      }

      // Wait for analysis to complete
      const analysisId = await analysisPromise;
      
      setIsAnalyzing(false);
      
      // Track completion event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'analysis_complete', {
          analysis_id: analysisId
        });
      }

      // Wait a moment then redirect
      setTimeout(() => {
        onComplete(analysisId);
      }, 2000);

    } catch (error) {
      console.error('Analysis failed:', error);
      // Handle error - could show error message or retry
    }
  };

  const performAnalysis = async (): Promise<string> => {
    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(assessmentData),
      });

      if (!response.ok) {
        throw new Error('Analysis failed');
      }

      const result = await response.json();
      return result.analysisId;
    } catch (error) {
      console.error('API call failed:', error);
      // Return mock ID for demo purposes
      return 'mock-analysis-' + Date.now();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Main Icon */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-8"
        >
          <Zap className="w-10 h-10 text-purple-600" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Analyzing Your Website
        </h1>
        <p className="text-gray-600 mb-12">
          Our AI is examining your site to generate your personalized lead score
        </p>

        {/* Progress Steps */}
        <div className="space-y-6 mb-12">
          {analysisSteps.map((step, index) => {
            const isCompleted = completedSteps.includes(index);
            const isCurrent = currentStep === index && isAnalyzing;
            const isPending = index > currentStep;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                {/* Step Icon */}
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  isCompleted 
                    ? 'bg-green-100' 
                    : isCurrent 
                    ? 'bg-purple-100' 
                    : 'bg-gray-100'
                }`}>
                  {isCompleted ? (
                    <Check className="w-6 h-6 text-green-600" />
                  ) : isCurrent ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <step.icon className="w-6 h-6 text-purple-600" />
                    </motion.div>
                  ) : (
                    <step.icon className="w-6 h-6 text-gray-400" />
                  )}
                </div>

                {/* Step Label */}
                <div className={`text-left ${
                  isCompleted 
                    ? 'text-green-600' 
                    : isCurrent 
                    ? 'text-purple-600 font-medium' 
                    : 'text-gray-400'
                }`}>
                  {step.label}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Message */}
        {isAnalyzing ? (
          <p className="text-gray-500 text-sm">
            This usually takes 30-45 seconds...
          </p>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-green-600 font-medium"
          >
            ✓ Analysis Complete! Redirecting to your results...
          </motion.div>
        )}
      </div>
    </div>
  );
}