
export const site = {
  url: "https://example.com",
  name: "Intercode",
  description:
    "Software that earns. We build websites, apps, bots and MVPs fast.",
  locales: ["uk", "en", "pl"] as const,
  defaultLocale: "uk" as const,
}

export type Locale = (typeof site.locales)[number];

export function canonical(path = "/") {
  return new URL(path, site.url);
}

export function languageAlternates(path = "/") {
  const map: Record<string, string> = {};
  for (const l of site.locales) map[l] = new URL(`/${l}${path}`, site.url).toString();
  return map;
}