import type { MetadataRoute } from 'next';
import { siteConfig } from '@/data/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${siteConfig.primaryUrl}/sitemap.xml`,
    host: siteConfig.primaryHost,
  };
}
