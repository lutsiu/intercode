'use client';

import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "../../components/Common/ImageSkeleton";
import { CaseStudyPageCardType } from "@/app/types/CaesStudyType";
import BlackButton from "../Common/BlackButton";
import { useContactPopupStore } from "@/app/store/contactPopupStore";
import { useTranslations } from "next-intl";

export default function CaseStudyPageCard({
  client, projectName, task, results, stack, deliverables, image, textColor
}: CaseStudyPageCardType) {
  const t = useTranslations(); // <-- root translator (no namespace)
  const { open } = useContactPopupStore();
  const [loaded, setLoaded] = useState(false);

  const clientText = t(client as string, { default: client });
  const taskText = t(task as string, { default: task });
  const resultsText = t(results as string, { default: results });
  const deliverablesText = deliverables.map((d) => t(d as string, { default: d }));

  return (
    <article
      className={`relative overflow-hidden
                  flex flex-col gap-[4rem] sm:gap-[4.8rem] text-${textColor}
                  text-center md:text-left
                  px-[2rem] sm:px-[5rem] lg:px-[9.3rem]
                  pt-[4.9rem] lg:pt-[6.4rem]
                  pb-[4.9rem] lg:pb-[7rem]
                  bg-cover bg-center
                  h-[64.4rem] sm:h-[60rem] rounded-[3.2rem] md:rounded-[8rem]`}
      style={{ color: textColor }}
    >
      {!loaded && <div className="absolute inset-0"><ImageSkeleton /></div>}
      <Image
        src={image}
        alt=""
        fill
        sizes="(max-width:640px) 100vw, (max-width:1024px) 80vw, 1200px"
        className={`object-cover object-center transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoadingComplete={() => setLoaded(true)}
        aria-hidden
      />

      <h4 className="relative z-10 text-[1.8rem] sm:text-[2.5rem] lg:text-[3.6rem] font-bold">
        {projectName}
      </h4>

      <div className="relative z-10 flex flex-col gap-[1.6rem] sm:gap-[2.4rem]">
        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>{t("caseStudiesPage.labels.client")}</strong><br className="block sm:hidden" />&nbsp;{clientText}
        </p>

        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>{t("caseStudiesPage.labels.task")}</strong><br className="block sm:hidden" />&nbsp;{taskText}
        </p>

        <ul className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem] flex flex-col gap-[0.5rem]">
          <p><strong>{t("caseStudiesPage.labels.done")}&nbsp;</strong></p>
          {deliverablesText.map((d, i) => <li key={i}>{d}</li>)}
        </ul>

        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>{t("caseStudiesPage.labels.stack")}</strong><br className="block sm:hidden" />&nbsp;{stack.toString()}
        </p>

        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>{t("caseStudiesPage.labels.result")}</strong><br className="block sm:hidden" />&nbsp;{resultsText}
        </p>
      </div>

      <div className="relative z-10 mx-auto md:mx-0">
        <BlackButton text={t("caseStudiesPage.cta")} onClick={open} />
      </div>
    </article>
  );
}
