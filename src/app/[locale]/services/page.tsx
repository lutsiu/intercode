import { Metadata } from "next";
import { pageMeta } from "@/app/lib/pageMeta";
import ServicesPageClient from "./ServicesPageClient";

export async function generateMetadata(
  {params}: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const {locale} = await params;
  return pageMeta(locale, "services", "/services");
}

export default function Page() {
  return <ServicesPageClient />;
}