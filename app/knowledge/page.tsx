import { Metadata } from 'next';
import KnowledgeBaseContent from '@/components/docs/KnowledgeBaseContent';

export const metadata: Metadata = {
  title: 'Knowledge Base | Maru Lead Generation Engine',
  description: 'Complete documentation, guides, and resources for the Maru Lead Generation Engine. Learn how to maximize your lead generation potential.',
};

export default function KnowledgeBasePage() {
  return <KnowledgeBaseContent />;
}