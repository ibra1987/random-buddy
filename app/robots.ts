import type { MetadataRoute } from 'next'
import { baseUrl } from './sitemap'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      disallow: '/_next',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}