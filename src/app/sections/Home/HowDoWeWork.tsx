import SectionTitle from "@/app/components/Common/SectionTitle";
import processSteps from "@/app/data/ProcessStepData";
import {getTranslations} from "next-intl/server";

export default async function HowDoWeWork() {
  const t = await getTranslations("homepage.howWeWork");
  const stepKeys = ["leaveRequest", "discuss", "signContract", "startNextDay"] as const;

  return (
    <section
      aria-label="How do we work section"
      className="pt-[8rem] px-[3.4rem] lg:px-[6rem] xl:px-[12rem]"
    >
      <div className="pb-[2rem] lg:pb-[3rem]">
        <SectionTitle title={t("title")} paddingBottom={0} />
      </div>

      <p className="text-[1.4rem] sm:text-[1.9rem] lg:text-[2.4rem] font-medium text-center">
        {t.rich("subtitle", { strong: (c) => <strong>{c}</strong> })}
      </p>

      <ul className="mt-[2.4rem] lg:mt-[7rem] flex flex-col md:flex-row items-center justify-center gap-[1.6rem] md:gap-[5rem] lg:gap-[10.2rem]">
        {processSteps.map((step, i) => (
          <li key={i} className="flex flex-col items-center gap-[0.8rem] md:gap-[2rem]">
            <span className="block text-[12.8rem] md:text-[4rem] lg:text-[5rem]">{step.emoji}</span>
            <p className="font-bold text-[1.8rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.4rem] text-center">
              {t(`steps.${stepKeys[i]}`)}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
