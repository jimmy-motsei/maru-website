
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'conversion optimization | Maru Knowledge',
  description: 'Detailed guide on conversion optimization.',
};

export default function ArticlePage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl text-white">
      <h1 className="text-4xl font-bold mb-6 capitalize">conversion optimization</h1>
      <div className="prose prose-invert max-w-none">
        <p className="lead text-xl text-zinc-300 mb-8">
          This comprehensive guide is coming soon. We are currently updating our documentation to better serve your needs.
        </p>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Need immediate help?</h3>
          <p className="text-zinc-400">
            Contact our support team directly if you have specific questions about this topic while we finalize this guide.
          </p>
        </div>
      </div>
    </div>
  );
}
