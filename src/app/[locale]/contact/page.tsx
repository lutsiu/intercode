'use client';

import { useTranslations } from 'next-intl';
import ContactForm from '../../components/Common/ContactPopup/ContactPopupForm';
import SectionTitle from '../../components/Common/SectionTitle';

export default function ContactPage() {
  const t = useTranslations('contactPopup');

  return (
    <section
      aria-label="Contact page"
      className="px-[3.3rem] sm:px-[4rem] lg:px-[8rem] pt-[4.8rem] lg:pt-[7rem] pb-[3.9rem] sm:pb-[5rem] lg:pb-[11rem]"
    >
      <div className="max-w-[30.8rem] sm:max-w-full mx-auto">
        <SectionTitle title={t('title')} paddingBottom={0} />
      </div>

      <div className="max-w-[30.8rem] sm:max-w-full mx-auto text-center leading-[2.1rem] text-black md:text-[#A09F9F] mt-[2.4rem] md:mt-[3.6rem]">
        <h4 className="text-[1.4rem] font-medium lg:font-light leading-[2.4rem] md:leading-[2.1rem]">
          {t('subtitle.p1')}
        </h4>
        <h4 className="text-[1.4rem] font-medium lg:font-light leading-[2.4rem] md:leading-[2.1rem]">
          {t('subtitle.p2')}
        </h4>
      </div>

      <div className="mx-auto w-[90%] sm:w-[80%] md:w-[55%]">
        <ContactForm containerPx={false} />
      </div>
    </section>
  );
}
