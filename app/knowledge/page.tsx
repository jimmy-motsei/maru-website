import { Metadata } from 'next';
import { Suspense } from 'react';
import KnowledgeBaseContent from '@/components/docs/KnowledgeBaseContent';
import { OptimizedLoading } from '@/components/ui/OptimizedLoading';

export const metadata: Metadata = {
  title: 'Knowledge Base | Maru Lead Generation Engine',
  description: 'Complete documentation, guides, and resources for the Maru Lead Generation Engine. Learn how to maximize your lead generation potential.',
};

export default function KnowledgeBasePage() {
  return (
    <Suspense fallback={<OptimizedLoading type="default" message="Loading Knowledge Base..." />}>
      <KnowledgeBaseContent />
    </Suspense>
  );
}