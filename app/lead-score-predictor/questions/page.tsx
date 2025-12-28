'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import QuestionFlow from '../components/QuestionFlow';

export default function QuestionsPage() {
  const router = useRouter();
  const [leadData, setLeadData] = useState(null);

  useEffect(() => {
    // Check if user has completed email capture
    const storedLeadData = sessionStorage.getItem('leadData');
    if (!storedLeadData) {
      // Redirect back to main page if no lead data
      router.push('/lead-score-predictor');
      return;
    }

    setLeadData(JSON.parse(storedLeadData));
  }, [router]);

  if (!leadData) {
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
      <QuestionFlow leadData={leadData} />
    </main>
  );
}