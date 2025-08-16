// next-intl.config.ts
export const locales = ['uk', 'en', 'pl'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'uk';           // <- not just string
export const localePrefix = 'always' as const;       // <- literal, not string

const nextIntlConfig = {
  locales,
  defaultLocale,
  localePrefix
};

export default nextIntlConfig;
