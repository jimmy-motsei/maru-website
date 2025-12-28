'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface QuestionFlowProps {
  leadData: any;
}

interface QuestionData {
  websiteUrl: string;
  role: string;
  companySize: string;
  monthlyVisitors: string;
  leadGenMethods: string[];
  challenges: string[];
  budget: string;
  goal: string;
}

const questions = [
  {
    id: 'websiteUrl',
    question: 'What\'s your website URL?',
    type: 'text',
    placeholder: 'https://yourcompany.com',
    required: true
  },
  {
    id: 'role',
    question: 'What\'s your role?',
    type: 'single',
    options: ['CEO/Founder', 'Marketing Director', 'Sales Leader', 'Business Owner', 'Other']
  },
  {
    id: 'companySize',
    question: 'Company size?',
    type: 'single',
    options: ['1-10 employees', '11-50 employees', '51-200 employees', '200+ employees']
  },
  {
    id: 'monthlyVisitors',
    question: 'Monthly website visitors?',
    type: 'single',
    options: ['Less than 500', '500-2,000', '2,000-10,000', '10,000+']
  },
  {
    id: 'leadGenMethods',
    question: 'Current lead generation methods?',
    type: 'multi',
    options: ['Website Forms', 'Live Chat', 'Email Marketing', 'Paid Advertising', 'SEO/Content', 'None currently']
  },
  {
    id: 'challenges',
    question: 'Biggest challenges? (Select all that apply)',
    type: 'multi',
    options: ['Not enough leads', 'Low conversion rate', 'Poor lead quality', 'Long sales cycles', 'No follow-up system', 'Can\'t track ROI']
  },
  {
    id: 'budget',
    question: 'Monthly marketing budget?',
    type: 'single',
    options: ['Less than R10,000', 'R10,000 - R50,000', 'R50,000 - R200,000', 'R200,000+']
  },
  {
    id: 'goal',
    question: 'Primary goal for next 90 days?',
    type: 'single',
    options: ['Generate more leads', 'Improve lead quality', 'Shorten sales cycle', 'All of the above']
  }
];

export default function QuestionFlow({ leadData }: QuestionFlowProps) {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuestionData>({
    websiteUrl: leadData.website || '',
    role: '',
    companySize: '',
    monthlyVisitors: '',
    leadGenMethods: [],
    challenges: [],
    budget: '',
    goal: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const question = questions[currentQuestion];

  const handleAnswer = (value: string | string[]) => {
    setAnswers(prev => ({
      ...prev,
      [question.id]: value
    }));
  };

  const isCurrentQuestionAnswered = () => {
    const answer = answers[question.id as keyof QuestionData];
    if (question.type === 'multi') {
      return Array.isArray(answer) && answer.length > 0;
    }
    return answer && answer.toString().trim() !== '';
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    try {
      // Combine lead data with answers
      const completeData = {
        ...leadData,
        ...answers
      };

      // Store complete data
      sessionStorage.setItem('assessmentData', JSON.stringify(completeData));

      // Track completion event
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'tool_progress', {
          question_number: questions.length,
          percentage: 100
        });
      }

      // Navigate to analysis page
      router.push('/lead-score-predictor/analysis');
    } catch (error) {
      console.error('Error submitting assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderQuestion = () => {
    switch (question.type) {
      case 'text':
        return (
          <input
            type={question.id === 'websiteUrl' ? 'url' : 'text'}
            value={answers[question.id as keyof QuestionData] as string}
            onChange={(e) => handleAnswer(e.target.value)}
            placeholder={question.placeholder}
            className="w-full px-6 py-4 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            autoFocus
          />
        );

      case 'single':
        return (
          <div className="grid grid-cols-1 gap-3">
            {question.options?.map((option) => (
              <button
                key={option}
                onClick={() => handleAnswer(option)}
                className={`p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                  answers[question.id as keyof QuestionData] === option
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );

      case 'multi':
        const currentAnswers = answers[question.id as keyof QuestionData] as string[] || [];
        return (
          <div className="grid grid-cols-1 gap-3">
            {question.options?.map((option) => (
              <button
                key={option}
                onClick={() => {
                  const newAnswers = currentAnswers.includes(option)
                    ? currentAnswers.filter(a => a !== option)
                    : [...currentAnswers, option];
                  handleAnswer(newAnswers);
                }}
                className={`p-4 text-left border-2 rounded-lg transition-all duration-200 ${
                  currentAnswers.includes(option)
                    ? 'border-purple-500 bg-purple-50 text-purple-700'
                    : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                }`}
              >
                <div className="flex items-center">
                  <div className={`w-5 h-5 border-2 rounded mr-3 flex items-center justify-center ${
                    currentAnswers.includes(option)
                      ? 'border-purple-500 bg-purple-500'
                      : 'border-gray-300'
                  }`}>
                    {currentAnswers.includes(option) && (
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  {option}
                </div>
              </button>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Progress Bar */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              Question {currentQuestion + 1} of {questions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}% Complete
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <motion.div
              className="bg-gradient-to-r from-orange-400 to-purple-600 h-3 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Question Content */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="max-w-2xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {question.question}
              </h2>

              <div className="mb-12">
                {renderQuestion()}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handlePrevious}
              disabled={currentQuestion === 0}
              className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Previous
            </button>

            <button
              onClick={handleNext}
              disabled={!isCurrentQuestionAnswered() || isSubmitting}
              className="flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {isSubmitting ? (
                'Processing...'
              ) : currentQuestion === questions.length - 1 ? (
                <>
                  Analyze My Website
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              ) : (
                <>
                  Next Question
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}