import type {Metadata} from "next";
import {pageMeta} from "@/app/lib/pageMeta";
import CaseStudiesClientPage from "./CaseStudiesPageClient";

export async function generateMetadata(
  { params }: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const { locale } = await params;
  return pageMeta(locale, "cases", "/case-studies");
}

export default function Page() {
  return <CaseStudiesClientPage />;
}
