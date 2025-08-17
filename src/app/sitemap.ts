
import { site } from "@/app/lib/seo";

export default async function sitemap() {
  const staticPaths = ["/", "/services", "/case-studies", "/rent-it", "/contact"];
  const now = new Date();

  return staticPaths.flatMap((p) =>
    site.locales.map((l) => ({
      url: `${site.url}/${l}${p}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1 : 0.7
    }))
  );
}
