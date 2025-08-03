"use client";

import SectionTitle from "@/app/components/Common/SectionTitle";
import CaseStudyCarousel from "@/app/components/Home/CaseStudy/CaseStudyCarousel";
export default function CaseStudies() {

  return (
    <section
      aria-label="Case studies"
      className="pt-[11rem] px-[8rem] "
    >
      <SectionTitle title="Case studies" paddingBottom={30} />
      <h5 className="font-medium text-[2.4rem] text-center">Менше слів — більше кейсів. Результати — найкращий аргумент</h5>
      <CaseStudyCarousel/>
      
    </section>
  );
}
