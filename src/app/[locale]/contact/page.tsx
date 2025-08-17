import { pageMeta } from '@/app/lib/pageMeta';
import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';


export async function generateMetadata(
  {params}: {params: {locale: string}}
): Promise<Metadata> {
  return pageMeta(params.locale, "contact", "/contact");
}

export default function Page() {
  return <ContactPageClient />;
}