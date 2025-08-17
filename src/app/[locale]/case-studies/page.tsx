import { pageMeta } from "@/app/lib/pageMeta";
import { Metadata } from "next";
import CaseStudiesClientPage from "./CaseStudiesPageClient";


export async function generateMetadata(
  {params}: {params: {locale: string}}
): Promise<Metadata> {
  return pageMeta(params.locale, "cases", "/case-studies");
}

export default function Page() {
  return <CaseStudiesClientPage />;
}