import { Metadata } from 'next';
import ProposalPage from './ProposalPageNew';

export const metadata: Metadata = {
  title: 'Proposal Accelerator | Maru Online',
  description: 'Generate professional business proposals in minutes with AI-powered customization. Perfect for service providers and consultants.',
  keywords: 'business proposal, proposal generator, AI proposal, sales automation, business development',
  openGraph: {
    title: 'Proposal Accelerator | Maru Online',
    description: 'AI-powered business proposal generation in minutes',
    type: 'website',
  },
};

export default function Page() {
  return <ProposalPage />;
}