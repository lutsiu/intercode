import type {Metadata} from "next";
import {NextIntlClientProvider, hasLocale} from "next-intl";
import {setRequestLocale} from "next-intl/server";
import {notFound} from "next/navigation";
import {routing} from "@/i18n/routing";

import {Geist, Geist_Mono} from "next/font/google";
import {Montserrat} from "next/font/google";
import "@/app/globals.css";

import Header from "@/app/components/Common/Header/Header";
import Footer from "@/app/components/Common/Footer/Footer";
import LayoutClient from "@/app/components/Common/Layout/LayoutClient";
import {site, canonical} from "@/app/lib/seo"
const geistSans = Geist({variable: "--font-geist-sans", subsets: ["latin"]});
const geistMono = Geist_Mono({variable: "--font-geist-mono", subsets: ["latin"]});
const montserrat = Montserrat({subsets: ["latin"], variable: "--font-montserrat", display: "swap"});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.name, template: "%s — " + site.name },
  description: site.description,
  keywords: ["web development","mobile apps","MVP","telegram bots","outstaffing"],
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.name,
    description: site.description,
    images: [{ url: "/Logo.png", width: 1200, height: 630, alt: site.name }], // ← raster
    locale: "uk_UA"
  },
  alternates: { canonical: canonical("/") },
  icons: {
      icon: [
        { url: "/favicons/favicon.svg", type: "image/svg+xml" },
        { url: "/favicons/favicon.ico" },
        { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" }
      ],
      apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
      other: [{ rel: "mask-icon", url: "/favicons/safari-pinned-tab.svg", color: "#000000" }]
    },
    manifest: "/site.webmanifest",
 
    
};


export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>; // per docs: awaitable
}) {
  // validate locale
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) notFound();

  // make locale available to all Server Components
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable}
                    font-sans h-screen flex flex-col antialiased`}
      >

        <NextIntlClientProvider>
          <Header />
          <main className="flex-1">
            <LayoutClient>{children}</LayoutClient>
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
