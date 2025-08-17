import { pageMeta } from "@/app/lib/pageMeta";
import { Metadata } from "next";
import RentItPageClient from "./RentItPageClient";

export async function generateMetadata(
  {params}: {params: {locale: string}}
): Promise<Metadata> {
  return pageMeta(params.locale, "rentIt", "/rent-it");
}

export default function Page() {
  return <RentItPageClient />;
}