'use client';

import { useState } from 'react';

interface IntegrationData {
  email: string;
  contactInfo?: any;
  assessmentType: string;
  assessmentData: any;
}

export function useIntegrations() {
  const [isProcessing, setIsProcessing] = useState(false);

  const syncToHubSpot = async (data: IntegrationData) => {
    try {
      const response = await fetch('/api/hubspot/sync', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: data.email,
          assessmentType: data.assessmentType,
          assessmentData: data.assessmentData,
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('HubSpot sync error:', error);
      return { success: false, message: 'Failed to sync to HubSpot' };
    }
  };

  const generatePDFReport = async (data: IntegrationData) => {
    try {
      const response = await fetch('/api/reports/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          assessmentType: data.assessmentType,
          assessmentData: data.assessmentData,
          contactInfo: data.contactInfo,
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('PDF generation error:', error);
      return { success: false, message: 'Failed to generate PDF' };
    }
  };

  const sendEmail = async (data: IntegrationData, emailType: 'assessment_complete' | 'follow_up' = 'assessment_complete') => {
    try {
      const response = await fetch('/api/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: emailType,
          email: data.email,
          contactInfo: data.contactInfo,
          assessmentType: data.assessmentType,
          assessmentData: data.assessmentData,
        }),
      });

      const result = await response.json();
      return result;
    } catch (error) {
      console.error('Email sending error:', error);
      return { success: false, message: 'Failed to send email' };
    }
  };

  const processAssessmentCompletion = async (data: IntegrationData) => {
    setIsProcessing(true);
    
    try {
      const results = {
        hubspot: { success: false, message: '' },
        pdf: { success: false, message: '' },
        email: { success: false, message: '' },
      };

      // 1. Sync to HubSpot
      results.hubspot = await syncToHubSpot(data);

      // 2. Generate PDF report
      results.pdf = await generatePDFReport(data);

      // 3. Send completion email
      results.email = await sendEmail(data, 'assessment_complete');

      // Track completion
      if (typeof window !== 'undefined' && window.trackConversion) {
        window.trackConversion('assessment_processing_complete', {
          assessment_type: data.assessmentType,
          hubspot_success: results.hubspot.success,
          pdf_success: results.pdf.success,
          email_success: results.email.success,
        });
      }

      return results;
    } catch (error) {
      console.error('Assessment processing error:', error);
      return {
        hubspot: { success: false, message: 'Processing failed' },
        pdf: { success: false, message: 'Processing failed' },
        email: { success: false, message: 'Processing failed' },
      };
    } finally {
      setIsProcessing(false);
    }
  };

  const scheduleFollowUp = async (data: IntegrationData, delayDays: number = 3) => {
    // In a real implementation, you'd use a job queue or cron job
    // For now, we'll just send immediately for testing
    return await sendEmail(data, 'follow_up');
  };

  return {
    isProcessing,
    syncToHubSpot,
    generatePDFReport,
    sendEmail,
    processAssessmentCompletion,
    scheduleFollowUp,
  };
}

// Utility function to download PDF content as file
export function downloadPDF(content: string, filename: string) {
  // Create a temporary HTML page for PDF conversion
  const printWindow = window.open('', '_blank');
  if (printWindow) {
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.focus();
    
    // Trigger print dialog (user can save as PDF)
    setTimeout(() => {
      printWindow.print();
    }, 250);
  }
}

// Utility function to format assessment data for integrations
export function formatAssessmentData(assessmentType: string, rawData: any) {
  switch (assessmentType) {
    case 'lead_score':
      return {
        score: rawData.score || 0,
        recommendations: rawData.recommendations || [],
        factors: rawData.factors || {},
      };
    
    case 'pipeline_leak':
      return {
        revenueAtRisk: rawData.revenueAtRisk || 0,
        stalledDeals: rawData.stalledDeals || 0,
        bottlenecks: rawData.bottlenecks || [],
        recommendations: rawData.recommendations || [],
      };
    
    case 'proposal':
      return {
        sections: rawData.sections || {},
        estimatedValue: rawData.estimatedValue || 0,
        timeline: rawData.timeline || '',
      };
    
    case 'tech_audit':
      return {
        efficiencyScore: rawData.efficiencyScore || 0,
        potentialSavings: rawData.potentialSavings || 0,
        redundancies: rawData.redundancies || [],
        recommendations: rawData.recommendations || [],
      };
    
    default:
      return rawData;
  }
}