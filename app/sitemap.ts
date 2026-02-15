import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maruonline.com';
  const now = new Date();

  const corePages: MetadataRoute.Sitemap = [
    { url: baseUrl, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/pricing`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${baseUrl}/ai-implementation-assessment`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/ai-implementation-audit`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    { url: `${baseUrl}/website-audit`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/services/ai-revenue-diagnostic`, changeFrequency: 'monthly', priority: 0.8 },
    {
      url: `${baseUrl}/services/custom-ai-solution-build`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ai-training-capability-building`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/ongoing-ai-support-optimization`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    { url: `${baseUrl}/services/lead-generation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/sales-systems`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/office-automation`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/services/whatsapp-solutions`, changeFrequency: 'monthly', priority: 0.7 },
    {
      url: `${baseUrl}/services/customer-support-chatbots`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const assessmentPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/assessments/lead-score`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/assessments/pipeline-leak`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/assessments/tech-audit`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/assessments/proposal`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const legalPages: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, changeFrequency: 'yearly', priority: 0.3 },
  ];

  return [...corePages, ...servicePages, ...assessmentPages, ...legalPages].map((entry) => ({
    ...entry,
    lastModified: now,
  }));
}
