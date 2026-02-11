import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/services";
import { getAreaSlugs } from "@/lib/areas-data";
import { getBlogSlugs } from "@/lib/blog";

const SITE_URL = "https://newdecorating.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  /* Individual service pages */
  const servicePages: MetadataRoute.Sitemap = getServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  /* Individual area landing pages */
  const areaPages: MetadataRoute.Sitemap = getAreaSlugs().map((slug) => ({
    url: `${SITE_URL}/area/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${SITE_URL}/gallery`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/area`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...areaPages,
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...getBlogSlugs().map((slug) => ({
      url: `${SITE_URL}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    {
      url: `${SITE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
