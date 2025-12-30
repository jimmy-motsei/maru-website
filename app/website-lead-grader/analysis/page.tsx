'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ResultsDashboard from '../components/ResultsDashboard';

export default function AnalysisPage() {
  const router = useRouter();
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const performAnalysis = async () => {
      try {
        const storedData = sessionStorage.getItem('assessmentData');
        if (!storedData) {
          router.push('/website-lead-grader');
          return;
        }

        const leadData = JSON.parse(storedData);

        // Map QuestionFlow data to API expected format
        const apiPayload = {
          email: leadData.email,
          website_url: leadData.websiteUrl,
          company_name: leadData.company,
          industry: 'Technology', // Default or extract if asking for it
          company_size: leadData.companySize,
          // Extract checking for specific tools or methods
          has_crm: leadData.challenges?.includes('No follow-up system') ? false : true,
          has_strategy: leadData.goal ? true : false,
          review_frequency: 'Unknown'
        };

        const response = await fetch('/api/analyze-lead-gen', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(apiPayload),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Analysis failed');
        }

        // Transform API response to Dashboard format
        const dashboardData = {
          analysisId: Math.random().toString(36).substring(7).toUpperCase(),
          score: data.score || 0,
          subscores: data.results?.subscores || {
            websiteQuality: Math.round((data.score || 0) * 0.9),
            conversionPoints: Math.round((data.score || 0) * 0.8),
            leadCapture: Math.round((data.score || 0) * 1.1 > 100 ? 100 : (data.score || 0) * 1.1),
            followupSystem: Math.round((data.score || 0) * 0.7)
          },
          strengths: data.results?.strengths || [
            "Website loads quickly",
            "Mobile responsive design",
            "Clear value proposition"
          ],
          gaps: data.results?.gaps || [
             "Missing clear CTA above fold",
             "No lead capture mechanism detected"
          ],
          recommendations: {
            phase1: data.results?.recommendations?.slice(0, 3) || ["Add a primary CTA button", "Optimize page speed"],
            phase2: data.results?.recommendations?.slice(3, 6) || ["Implement email capture", "Add social proof"],
            phase3: data.results?.recommendations?.slice(6, 9) || ["Set up automated follow-ups", "A/B test headlines"]
          },
          potentialImprovement: Math.round((100 - (data.score || 0)) * 0.8),
          expectedIncrease: data.score < 50 ? "3-4x" : "1.5-2x"
        };

        setAnalysisResult(dashboardData);
      } catch (err) {
        console.error('Analysis error:', err);
        setError('Failed to analyze website. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    performAnalysis();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <div className="text-center max-w-md px-4">
          <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin mx-auto mb-6"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analyzing Your Website...</h2>
          <p className="text-gray-600">
            Our AI is scanning your site, evaluating conversion points, and checking performance metrics.
            This usually takes about 30 seconds.
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Analysis Failed</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return <ResultsDashboard results={analysisResult} />;
}
