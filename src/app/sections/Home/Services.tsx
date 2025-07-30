import SectionTitle from "@/app/components/Common/SectionTitle";
import ServiceButton from "@/app/components/Home/Services/ServiceButton";
import ServiceCards from "@/app/components/Home/Services/ServicesCards";


export default function Services() {
  return (
    <section 
      aria-label="Services section"
      className="pt-[11rem] flex flex-col items-center"  
    >
      <SectionTitle title="Послуги" paddingBottom={50}/>
      <ServiceCards/>
      <ServiceButton/>
    </section>
  )
}