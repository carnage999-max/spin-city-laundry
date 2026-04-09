import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.primaryUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${siteConfig.primaryUrl}${siteConfig.ogImagePath}`],
    },
  ];
}
