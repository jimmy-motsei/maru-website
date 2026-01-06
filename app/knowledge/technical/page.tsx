
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'technical | Knowledge Base',
  description: 'Browse articles in technical',
};

export default function CategoryPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl text-white">
      <h1 className="text-4xl font-bold mb-8 capitalize">technical</h1>
      <p className="text-zinc-400 mb-8">Browse guides and documentation for this section.</p>
      <div className="grid gap-4">
        <p className="text-sm text-zinc-500">Select an article from the sidebar to view details.</p>
      </div>
    </div>
  );
}
