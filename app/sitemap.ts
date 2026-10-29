import type { MetadataRoute } from "next";
import { blogArticles } from "./blog/blog-data";
import { services } from "./services/service-data";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://clickaisolutions.in";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      priority: 1,
    },
    {
      url: `${siteUrl}/blog`,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      priority: 0.6,
    },
    ...blogArticles.map((article) => ({
      url: `${siteUrl}/blog/${article.slug}`,
      lastModified: article.dateValue,
      priority: 0.7,
    })),
    ...services.map((service) => ({
      url: `${siteUrl}/services/${service.slug}`,
      priority: 0.8,
    })),
  ];
}