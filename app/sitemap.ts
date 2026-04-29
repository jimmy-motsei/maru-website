import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maruonline.com';
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/process`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/insights`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/resources`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${baseUrl}/operations-assessment`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/booking`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/careers`, changeFrequency: 'monthly', priority: 0.5 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/ai-revenue-diagnostic`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/custom-ai-solution-build`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ai-training-capability-building`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/ongoing-ai-support-optimization`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/operations-assessment`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/workflow-integration`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services/team-training-handover`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/results-optimisation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/lead-generation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/sales-systems`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/office-automation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/whatsapp-solutions`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/customer-support-chatbots`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const assessmentPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/assessments/lead-score`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/assessments/pipeline-leak`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/assessments/tech-audit`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/assessments/proposal`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const resourcePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/resources/popia-ai-checklist`, changeFrequency: 'yearly', priority: 0.5 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [...corePages, ...servicePages, ...assessmentPages, ...resourcePages, ...legalPages].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
