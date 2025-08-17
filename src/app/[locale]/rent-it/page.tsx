import { pageMeta } from "@/app/lib/pageMeta";
import { Metadata } from "next";
import RentItPageClient from "./RentItPageClient";

export async function generateMetadata(
  {params}: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const {locale} = await params;
  return pageMeta(locale, "rentIt", "/rent-it");
}

export default function Page() {
  return <RentItPageClient />;
}