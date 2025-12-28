'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import AnalysisProgress from '../components/AnalysisProgress';

export default function AnalysisPage() {
  const router = useRouter();
  const [assessmentData, setAssessmentData] = useState(null);

  useEffect(() => {
    // Check if user has completed questions
    const storedData = sessionStorage.getItem('assessmentData');
    if (!storedData) {
      router.push('/lead-score-predictor');
      return;
    }

    setAssessmentData(JSON.parse(storedData));
  }, [router]);

  const handleAnalysisComplete = (analysisId: string) => {
    // Store analysis ID and redirect to results
    sessionStorage.setItem('analysisId', analysisId);
    router.push('/lead-score-predictor/results');
  };

  if (!assessmentData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <AnalysisProgress 
        assessmentData={assessmentData}
        onComplete={handleAnalysisComplete}
      />
    </main>
  );
}