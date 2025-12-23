import { Metadata } from 'next';
import DocLayout from '@/components/docs/DocLayout';
import { Play, Clock, Users, Settings, Code } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Video Tutorials Coming Soon | Maru Lead Generation Engine',
  description: 'Professional video tutorials are coming soon. Get notified when they launch.',
};

const upcomingVideos = [
  {
    title: 'Quick Start: Your First Lead Assessment',
    duration: '3 min',
    description: 'Get your first lead score in under 3 minutes',
    icon: Play,
    category: 'Getting Started'
  },
  {
    title: 'Lead Score Predictor Explained',
    duration: '4 min', 
    description: 'Discover your website\'s lead generation potential',
    icon: Users,
    category: 'Assessment Tools'
  },
  {
    title: 'Admin Dashboard Tour',
    duration: '4 min',
    description: 'Monitor and manage your leads effectively',
    icon: Settings,
    category: 'Dashboard'
  },
  {
    title: 'API Integration Tutorial',
    duration: '6 min',
    description: 'Integrate assessments into your website',
    icon: Code,
    category: 'Technical'
  }
];

export default function VideoTutorialsPage() {
  return (
    <DocLayout
      title="Video Tutorials Coming Soon"
      description="Professional step-by-step video guides are in production. Get notified when they launch."
      category="FAQ & Support"
      readTime="2 min"
      lastUpdated="December 23, 2024"
      breadcrumbs={[
        { label: 'FAQ & Support', href: '/knowledge/faq-support' },
        { label: 'Video Tutorials', href: '/knowledge/faq-support/video-tutorials' },
      ]}
    >
      <div className="text-center mb-12">
        <div className="bg-gradient-to-r from-accent to-blue-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
          <Play className="w-12 h-12 text-white" />
        </div>
        <h2 className="text-3xl font-bold text-dark mb-4">Professional Video Tutorials Coming Soon</h2>
        <p className="text-dark/60 text-lg max-w-2xl mx-auto">
          We're creating high-quality video tutorials to help you master the Maru Lead Generation Engine. 
          Get step-by-step guidance for every feature.
        </p>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-12">
        <h3 className="text-lg font-semibold text-dark mb-4">🎬 What's Coming</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {upcomingVideos.map((video, index) => {
            const IconComponent = video.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="bg-accent/10 p-2 rounded-lg flex-shrink-0">
                  <IconComponent className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark mb-1">{video.title}</h4>
                  <p className="text-dark/60 text-sm mb-2">{video.description}</p>
                  <div className="flex items-center gap-4 text-xs text-dark/50">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {video.duration}
                    </span>
                    <span className="bg-gray-200 px-2 py-1 rounded">{video.category}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bg-gradient-to-r from-accent to-blue-600 rounded-lg p-8 text-white text-center mb-8">
        <h3 className="text-xl font-bold mb-4">Get Notified When Videos Launch</h3>
        <p className="text-blue-100 mb-6">
          Be the first to access our comprehensive video tutorial library.
        </p>
        <div className="max-w-md mx-auto flex gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg text-dark"
          />
          <button className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Notify Me
          </button>
        </div>
        <p className="text-blue-200 text-sm mt-3">
          We'll send you one email when the videos are ready. No spam.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-3">📚 In the Meantime</h4>
          <p className="text-dark/60 mb-4">
            Explore our comprehensive written documentation while you wait.
          </p>
          <a href="/knowledge/getting-started/quick-start-guide" className="text-accent hover:underline">
            Read the Quick Start Guide →
          </a>
        </div>
        
        <div className="border border-gray-200 rounded-lg p-6">
          <h4 className="font-semibold text-dark mb-3">🚀 Try the Tools</h4>
          <p className="text-dark/60 mb-4">
            Start using the assessment tools right away with our written guides.
          </p>
          <a href="/assessments/lead-score" className="text-accent hover:underline">
            Try Lead Score Predictor →
          </a>
        </div>
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-dark mb-2">📅 Expected Timeline</h4>
        <p className="text-dark/60">
          <strong>Videos launching:</strong> January 2025<br />
          <strong>Total content:</strong> 7 comprehensive tutorials<br />
          <strong>Total runtime:</strong> ~30 minutes of focused training
        </p>
      </div>
    </DocLayout>
  );
}