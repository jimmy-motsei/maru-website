'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ResultsDashboard from '../components/ResultsDashboard';

export default function ResultsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get analysis ID from URL params or session storage
    const analysisId = searchParams.get('id') || sessionStorage.getItem('analysisId');
    
    if (!analysisId) {
      router.push('/lead-score-predictor');
      return;
    }

    // Load results from session storage (in production, would fetch from API)
    loadResults(analysisId);
  }, [router, searchParams]);

  const loadResults = async (analysisId: string) => {
    try {
      // Mock results - in production would fetch from API
      const mockResults = {
        analysisId,
        score: Math.floor(Math.random() * 40) + 50, // 50-90
        subscores: {
          websiteQuality: Math.floor(Math.random() * 25) + 65,
          conversionPoints: Math.floor(Math.random() * 30) + 40,
          leadCapture: Math.floor(Math.random() * 35) + 30,
          followupSystem: Math.floor(Math.random() * 40) + 20,
        },
        strengths: [
          "Professional website design with clear branding",
          "Good page load speed and mobile responsiveness", 
          "Strong value proposition clearly communicated",
          "Quality content that builds trust and authority"
        ],
        gaps: [
          "Only 2 conversion points found (need 8-12 minimum)",
          "No lead magnets or value-exchange offers detected",
          "Missing exit-intent popup to capture leaving visitors",
          "No automated email follow-up system visible"
        ],
        recommendations: {
          phase1: [
            "Add exit-intent popup with compelling offer",
            "Create 2 downloadable lead magnets (guides, checklists)",
            "Install live chat widget for immediate engagement",
            "Add social proof widgets and customer testimonials"
          ],
          phase2: [
            "Build automated email nurture sequences",
            "Add sticky CTA bar that follows users",
            "Create interactive tools or calculators", 
            "Implement lead scoring and segmentation"
          ],
          phase3: [
            "Launch AI-powered chatbot for qualification",
            "Add personalization based on visitor behavior",
            "Build referral program to leverage existing customers",
            "Create video testimonials and case studies"
          ]
        },
        potentialImprovement: Math.floor(Math.random() * 30) + 20,
        expectedIncrease: '5-6x'
      };

      setResults(mockResults);
      
      // Track results view
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'results_viewed', {
          analysis_id: analysisId,
          score: mockResults.score
        });
      }

    } catch (error) {
      console.error('Failed to load results:', error);
      router.push('/lead-score-predictor');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Results Not Found</h1>
          <p className="text-gray-600 mb-8">We couldn't find your analysis results.</p>
          <button
            onClick={() => router.push('/lead-score-predictor')}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Start New Analysis
          </button>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <ResultsDashboard results={results} />
    </main>
  );
}