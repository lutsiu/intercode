import { pageMeta } from '@/app/lib/pageMeta';
import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';


export async function generateMetadata(
  {params}: { params: Promise<{ locale: string }> }
): Promise<Metadata> {
  const {locale} = await params;
  return pageMeta(locale, "contact", "/contact");
}

export default function Page() {
  return <ContactPageClient />;
}