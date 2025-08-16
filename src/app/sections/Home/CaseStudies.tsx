// src/app/components/Home/CaseStudy/CaseStudies.tsx
"use client";

import SectionTitle from "@/app/components/Common/SectionTitle";
import CaseStudyCarousel from "@/app/components/Home/CaseStudy/CaseStudyCarousel";
import CaseStudyGallery from "@/app/components/Home/CaseStudy/CaseStudyGallery/CaseStudyGallery";
import { useCaseStudyGalleryStore } from "@/app/store/caseStudyGalleryStore";
import { useTranslations } from "next-intl";

export default function CaseStudies() {
  const { isOpen } = useCaseStudyGalleryStore();
  const t = useTranslations("homepage.cases");

  return (
    <section
      aria-label="Case studies"
      className="pt-[7.2rem] lg:pt-[11rem] px-[3.4rem] lg:px-[6rem] xl:px-[8rem]"
    >
      <SectionTitle title={t("title")} paddingBottom={30} />
      <h5 className="font-medium text-[1.4rem] sm:text-[2.4rem] text-center leading-[3.2rem] sm:leading-[2.4rem]">
        {t("tagline.p1")} <br className="sm:hidden" /> {t("tagline.p2")}
      </h5>
      <CaseStudyCarousel />
      {isOpen && <CaseStudyGallery />}
    </section>
  );
}
