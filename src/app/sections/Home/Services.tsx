import SectionTitle from "@/app/components/Common/SectionTitle";
import ServiceButton from "@/app/components/Home/Services/ServiceButton";
import ServiceCards from "@/app/components/Home/Services/ServicesCards";
import ServicesMobileCard from "@/app/components/Home/Services/ServicesMobileCard";
import { useTranslations } from "next-intl";


export default function Services() {
  const t = useTranslations("homepage.services");
  return (
    <section 
      aria-label="Services section"
      className="pt-[5.6rem] lg:pt-[11rem] flex flex-col items-center
                 px-[1.8rem] sm:px-[3.4rem] lg:px-[6rem]  2xl:px-[8rem]"  
    >
      <div className="pb-[3.2rem] lg:pb-[5rem]">
        <SectionTitle title={`${t("title")}`} paddingBottom={0}/>
      </div>
      <div className="hidden sm:block w-full">
        <ServiceCards/>
      </div>
      <ServicesMobileCard/>
      <ServiceButton/>
    </section>
  )
}