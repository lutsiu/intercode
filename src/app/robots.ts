import { site } from "@/app/lib/seo";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"]
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url
  };
}