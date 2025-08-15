"use client";

import SectionTitle from "@/app/components/Common/SectionTitle";
import CaseStudyCarousel from "@/app/components/Home/CaseStudy/CaseStudyCarousel";
import CaseStudyGallery from "@/app/components/Home/CaseStudy/CaseStudyGallery/CaseStudyGallery";
import { useCaseStudyGalleryStore } from "@/app/store/caseStudyGalleryStore";
export default function CaseStudies() {

  const {isOpen} = useCaseStudyGalleryStore();

  return (
    <section
      aria-label="Case studies"
      className="pt-[7.2rem] lg:pt-[11rem] px-[3.4rem] lg:px-[6rem] xl:px-[8rem]"
    >
      <SectionTitle title="Case studies" paddingBottom={30} />
      <h5 className="font-medium text-[1.4rem] sm:text-[2.4rem] 
                    text-center leading-[3.2rem] sm:leading-[2.4rem]">
          Менше слів — більше кейсів. <br className="sm:hidden"/> Результати — найкращий аргумент
      </h5>
      <CaseStudyCarousel/>
      {isOpen && <CaseStudyGallery/>}
    </section>
  );
}
