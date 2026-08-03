import type { MetadataRoute } from "next";
import postsData from "@/data/posts.json";

export const dynamic = "force-static";

const SITE_URL = "https://iambarabbas.github.io/barabbas-road";

const STATIC_PAGES = [
  { path: "/",                          priority: 1.0, changeFrequency: "weekly"  as const },
  { path: "/new-here/",                 priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/sermons/",                  priority: 0.9, changeFrequency: "weekly"  as const },
  { path: "/life-groups/",              priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/contact/",                  priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/about/",                    priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about/what-we-believe/",    priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/about/elders/",            priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/kids/",                     priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/youth/",                    priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/missions/",                 priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/classes/",                  priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/baptism/",                  priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/blog/",                     priority: 0.8, changeFrequency: "weekly"  as const },
  { path: "/about/church-history/",     priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about/church-government/",  priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about/distinctives/",       priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/about/the-name-barabbas/",  priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/give/",                     priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/team/",                     priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/calendar/",                 priority: 0.7, changeFrequency: "weekly"  as const },
  { path: "/livestream/",               priority: 0.7, changeFrequency: "weekly"  as const },
  { path: "/app-download/",            priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/resources/",               priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/podcast/",                  priority: 0.8, changeFrequency: "weekly"  as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const today = new Date().toISOString().split("T")[0];

  const staticEntries = STATIC_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: today,
    changeFrequency,
    priority,
  }));

  const posts = postsData as Array<{ slug: string; date?: string }>;
  const blogEntries = posts.map((post) => ({
    url: `${SITE_URL}/${post.slug}/`,
    lastModified: post.date ?? today,
    changeFrequency: "monthly" as const,
    priority: 0.5 as number,
  }));

  return [...staticEntries, ...blogEntries];
}
