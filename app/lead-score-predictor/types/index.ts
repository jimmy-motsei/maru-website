// Lead Score Predictor Types

export interface LeadData {
  email: string;
  name: string;
  company: string;
  website?: string;
}

export interface QuestionData {
  websiteUrl: string;
  role: string;
  companySize: string;
  monthlyVisitors: string;
  leadGenMethods: string[];
  challenges: string[];
  budget: string;
  goal: string;
}

export interface AssessmentData extends LeadData, QuestionData {}

export interface ScoreBreakdown {
  websiteQuality: number;
  conversionPoints: number;
  leadCapture: number;
  followupSystem: number;
}

export interface AnalysisResults {
  analysisId: string;
  score: number;
  subscores: ScoreBreakdown;
  strengths: string[];
  gaps: string[];
  recommendations: {
    phase1: string[];
    phase2: string[];
    phase3: string[];
  };
  potentialImprovement: number;
  expectedIncrease: string;
}

export interface Question {
  id: keyof QuestionData;
  question: string;
  type: 'text' | 'single' | 'multi';
  options?: string[];
  placeholder?: string;
  required?: boolean;
}

export interface EmailCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface QuestionFlowProps {
  leadData: LeadData;
}

export interface AnalysisProgressProps {
  assessmentData: AssessmentData;
  onComplete: (analysisId: string) => void;
}