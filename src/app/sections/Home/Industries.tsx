import SectionTitle from "@/app/components/Common/SectionTitle";
import industries from "@/app/data/Industries";
import IndustryCard from "@/app/components/Home/Industries/IndustryCard";
import { useTranslations } from "next-intl";

export default  function Industries() {
  const t = useTranslations("homepage.industries");
  return (
    <section aria-label="Industries" className="pt-[6rem] lg:pt-[12rem] px-[0.7rem] sm:px-[3.4rem] lg:px-[6rem]  2xl:px-[8rem]">
      <div className="pb-[3.2rem] md:pb-[6rem]">
        <div className="hidden sm:block">
          <SectionTitle title={t("title.full")} paddingBottom={60} />
        </div>
        <div className="block sm:hidden">
          <SectionTitle title={t("title.p1")} paddingBottom={0} />
          <SectionTitle title={t("title.p2")} paddingBottom={60} />
        </div>
      </div>

      {/* < 2xl — first 6 in two columns, last 3 full-width rows */}
      <div className="2xl:hidden">
        <div className="grid grid-cols-2 gap-y-[1.3rem] gap-x-[0.4rem]">
          {industries.slice(0, 6).map((ind, i) => (
            <IndustryCard key={i} title={ind.title} />
          ))}
        </div>

        <div className="mt-[1.3rem] grid grid-cols-1 gap-y-[1.3rem] gap-x-[0.4rem]">
          {industries.slice(6, 9).map((ind, i) => (
            <IndustryCard key={i + 6} title={ind.title} />
          ))}
        </div>
      </div>

      {/* 2xl+ — 3×3 grid */}
      <div className="hidden 2xl:grid grid-cols-3 gap-[1.6rem] justify-items-center">
        {industries.map((ind, i) => (
          <IndustryCard key={i} title={ind.title} fixedWidth />
        ))}
      </div>
    </section>
  );
}
