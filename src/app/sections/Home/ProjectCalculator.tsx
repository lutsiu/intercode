import SectionTitle from "@/app/components/Common/SectionTitle";
import Estimator from "@/app/components/Home/ProjectCalculator/Estimator";
import {getTranslations} from "next-intl/server";

export default async function ProjectCalculator() {
  const t = await getTranslations("homepage.calculator");

  return (
    <section
      aria-label="Project's calculator"
      className="pt-[6.4rem] lg:pt-[15rem] px-[3.4rem] lg:px-[6rem] 2xl:px-[12rem]"
    >
      <div className="pb-[3.2rem] lg:pb-[4rem]">
        <SectionTitle title={t("title")} paddingBottom={0} />
      </div>
      <Estimator />
    </section>
  );
}
