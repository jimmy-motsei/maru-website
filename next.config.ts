
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  
  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  
  // Headers for better caching
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy static-site pages (~42% of recorded GA views were bot-hammered
      // .html URLs from the retired site) — permanent redirect to real routes
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path(.+)\\.html',
        destination: '/:path',
        permanent: true,
      },
      {
        source: '/knowledge',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/knowledge/:path*',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/operations-diagnostic',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-readiness',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-implementation-assessment',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/ai-implementation-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      // Short URLs that used to be vercel.json rewrites into /assessments/*.
      // Those routes no longer exist, so the rewrites resolved to nothing —
      // these are redirects now, not internal rewrites. (T7)
      {
        source: '/lead-score',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/pipeline-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/proposal-generator',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/tech-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      // Consolidated scoring tools
      {
        source: '/assessments/lead-score',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/assessments/pipeline-leak',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/assessments/tech-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/assessments/proposal',
        destination: '/operations-assessment',
        permanent: true,
      },
      {
        source: '/website-audit',
        destination: '/operations-assessment',
        permanent: true,
      },
      // Consolidated services
      {
        source: '/services/ai-revenue-diagnostic',
        destination: '/services/operations-diagnostic',
        permanent: true,
      },
      {
        source: '/services/ai-training-capability-building',
        destination: '/services/team-training-handover',
        permanent: true,
      },
      {
        source: '/services/custom-ai-solution-build',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/customer-support-chatbots',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/lead-generation',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/office-automation',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/ongoing-ai-support-optimization',
        destination: '/services/results-optimisation',
        permanent: true,
      },
      {
        source: '/services/sales-systems',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      {
        source: '/services/whatsapp-solutions',
        destination: '/services/workflow-integration',
        permanent: true,
      },
      // Consolidated briefing and admin
      {
        source: '/briefing',
        destination: 'https://maru-briefing-forms.netlify.app',
        permanent: false,
      },
      {
        source: '/briefing/:path*',
        destination: 'https://maru-briefing-forms.netlify.app',
        permanent: false,
      },
      {
        source: '/admin',
        destination: '/',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: '/',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
