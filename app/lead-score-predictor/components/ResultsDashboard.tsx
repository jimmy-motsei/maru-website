'use client';

import { useState } from 'react';
import { Mail, Calendar, BarChart3, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResultsDashboardProps {
  results: {
    analysisId: string;
    score: number;
    subscores: {
      websiteQuality: number;
      conversionPoints: number;
      leadCapture: number;
      followupSystem: number;
    };
    strengths: string[];
    gaps: string[];
    recommendations: {
      phase1: string[];
      phase2: string[];
      phase3: string[];
    };
    potentialImprovement: number;
    expectedIncrease: string;
  };
}

export default function ResultsDashboard({ results }: ResultsDashboardProps) {
  const [isEmailSending, setIsEmailSending] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 71) return 'text-green-600';
    if (score >= 41) return 'text-orange-600';
    return 'text-red-600';
  };

  const getScoreGradient = (score: number) => {
    if (score >= 71) return 'from-green-400 to-green-600';
    if (score >= 41) return 'from-orange-400 to-orange-600';
    return 'from-red-400 to-red-600';
  };

  const handleEmailResults = async () => {
    setIsEmailSending(true);
    
    try {
      // Get user email from session storage
      const leadData = JSON.parse(sessionStorage.getItem('leadData') || '{}');
      
      // Track email request
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'email_results_request', {
          analysis_id: results.analysisId,
          score: results.score
        });
      }

      const response = await fetch('/api/send-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: leadData.email,
          name: leadData.name,
          results 
        }),
      });

      if (response.ok) {
        alert('✅ Complete report sent to your email!');
      } else {
        throw new Error('Failed to send email');
      }
      
    } catch (error) {
      console.error('Email sending failed:', error);
      alert('❌ Failed to send email. Please try again.');
    } finally {
      setIsEmailSending(false);
    }
  };

  const handleBookConsultation = () => {
    // Track consultation booking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'consultation_booking', {
        source: 'results_dashboard',
        value: 500
      });
    }

    // Open Calendly or booking system
    window.open('https://calendly.com/maruonline/strategy-call', '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Your Lead Score Analysis</h1>
              <p className="text-gray-600 mt-1">Complete assessment results and recommendations</p>
            </div>
            <div className="text-sm text-gray-500">
              Analysis ID: {results.analysisId}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Score Display Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Circular Score Gauge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg p-8 shadow-lg text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Lead Generation Score</h2>
            
            <div className="relative w-48 h-48 mx-auto mb-6">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                {/* Background circle */}
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#e5e7eb"
                  strokeWidth="8"
                  fill="none"
                />
                {/* Progress circle */}
                <motion.circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="url(#scoreGradient)"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={`${2 * Math.PI * 40}`}
                  initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                  animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - results.score / 100) }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" className="stop-purple-400" />
                    <stop offset="100%" className="stop-blue-600" />
                  </linearGradient>
                </defs>
              </svg>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className={`text-5xl font-bold ${getScoreColor(results.score)}`}>
                    {results.score}
                  </div>
                  <div className="text-gray-500 text-lg">/100</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Category Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-6">Score Breakdown</h3>
            
            <div className="space-y-6">
              {Object.entries(results.subscores).map(([key, score], index) => {
                const labels = {
                  websiteQuality: 'Website Quality',
                  conversionPoints: 'Conversion Points',
                  leadCapture: 'Lead Capture',
                  followupSystem: 'Follow-up System'
                };
                
                return (
                  <div key={key}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{labels[key as keyof typeof labels]}</span>
                      <span className={`font-bold ${getScoreColor(score)}`}>{score}/100</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full bg-gradient-to-r ${getScoreGradient(score)}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${score}%` }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <TrendingUp className="w-8 h-8 text-indigo-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-indigo-600 mb-1">+{results.potentialImprovement}</div>
            <div className="text-gray-600">Potential Improvement</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <BarChart3 className="w-8 h-8 text-green-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-green-600 mb-1">{results.expectedIncrease}</div>
            <div className="text-gray-600">Expected Lead Increase</div>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-lg text-center">
            <Calendar className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-600 mb-1">90 days</div>
            <div className="text-gray-600">Implementation Timeline</div>
          </div>
        </motion.div>

        {/* Gap Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
        >
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-xl font-bold text-green-600">What's Working ✓</h3>
            </div>
            <ul className="space-y-3">
              {results.strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <div className="flex items-center mb-6">
              <XCircle className="w-6 h-6 text-red-600 mr-3" />
              <h3 className="text-xl font-bold text-red-600">Critical Gaps ✗</h3>
            </div>
            <ul className="space-y-3">
              {results.gaps.map((gap, index) => (
                <li key={index} className="flex items-start">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{gap}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* 90-Day Action Plan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Your 90-Day Action Plan</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Phase 1 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Days 1-30</h3>
              <p className="text-green-600 font-semibold mb-4">Quick Wins</p>
              <ul className="space-y-3 mb-6">
                {results.recommendations.phase1.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <span className="text-green-600 font-semibold">Expected: 2-3x leads</span>
              </div>
            </div>

            {/* Phase 2 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 2: Days 31-60</h3>
              <p className="text-orange-600 font-semibold mb-4">Optimization</p>
              <ul className="space-y-3 mb-6">
                {results.recommendations.phase2.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <span className="text-orange-600 font-semibold">Expected: 4-5x leads</span>
              </div>
            </div>

            {/* Phase 3 */}
            <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-purple-500">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Phase 3: Days 61-90</h3>
              <p className="text-purple-600 font-semibold mb-4">Acceleration</p>
              <ul className="space-y-3 mb-6">
                {results.recommendations.phase3.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="text-right">
                <span className="text-purple-600 font-semibold">Expected: 5-6x leads</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.0 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {/* Email Results */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg p-8 text-white">
            <Mail className="w-12 h-12 mb-4" />
            <h3 className="text-2xl font-bold mb-2">Email Full Report</h3>
            <p className="mb-6 opacity-90">
              Get the complete analysis with detailed recommendations sent to your email
            </p>
            <button
              onClick={handleEmailResults}
              disabled={isEmailSending}
              className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isEmailSending ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-purple-600 mr-2"></div>
                  Sending Email...
                </div>
              ) : (
                <>
                  <Mail className="w-5 h-5 inline mr-2" />
                  Email Complete Report
                </>
              )}
            </button>
          </div>

          {/* Book Consultation */}
          <div className="bg-white rounded-lg p-8 shadow-lg border-2 border-purple-200">
            <Calendar className="w-12 h-12 text-purple-600 mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Strategy Call</h3>
            <p className="text-gray-600 mb-6">
              Discuss how to implement these recommendations and get personalized guidance from our experts
            </p>
            <button
              onClick={handleBookConsultation}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200"
            >
              <Calendar className="w-5 h-5 inline mr-2" />
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}