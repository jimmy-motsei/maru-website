import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://maruonline.com'
  
  // Static routes with priorities
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ai-readiness`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
  ]

  // Service pages
  const servicePages = [
    'lead-generation',
    'office-automation',
    'sales-systems',
    'whatsapp-solutions',
  ].map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Knowledge/Blog articles
  const knowledgeArticles = [
    'genai-adoption-smbs-2025',
    'ai-adoption-south-african-smbs',
    'ai-business-transformation',
    'ai-customer-service-smb-2024',
    'ai-mastery-workshops',
    'ai-regulation-human-security',
    'bridging-ai-skills-gap-sa-2025',
    'sa-national-ai-policy-2024',
    'top-ai-tools-smb-productivity-2025',
    'african-union-ai-strategy-2025',
  ].map((article) => ({
    url: `${baseUrl}/knowledge/${article}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...routes, ...servicePages, ...knowledgeArticles]
}
