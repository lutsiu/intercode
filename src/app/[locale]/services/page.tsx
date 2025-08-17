import { Metadata } from "next";
import { pageMeta } from "@/app/lib/pageMeta";
import ServicesPageClient from "./ServicesPageClient";

export async function generateMetadata(
  {params}: {params: {locale: string}}
): Promise<Metadata> {
  return pageMeta(params.locale, "services", "/services");
}

export default function Page() {
  return <ServicesPageClient />;
}