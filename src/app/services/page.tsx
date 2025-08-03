import SectionTitle from "../components/Common/SectionTitle";
import ServicePageCard from "../components/Services/ServicePageCard";
import serviceItems from "../data/ServicePageItems";

export default function Services() {

  return (
    <section 
      aria-label="Services page" 
      className="px-[8rem] pt-[7rem] pb-[8rem]"
    >
      <SectionTitle title="Послуги, які працюють" paddingBottom={20}/>
      <h4 className="text-[2.4rem] font-medium text-center">
        Мінімум “можемо зробити все”. Максимум — що справді потрібно твоєму бізнесу.
      </h4>
      <div className="mt-[6.5rem] flex flex-col gap-[1rem]">
        <div className="grid grid-cols-2 gap-[1rem]">
          {serviceItems.slice(0,2).map((it, i) => {
            return (
              <ServicePageCard
                      key={i}
                      icon={it.icon}
                      title={it.title}
                      subtitle={it.subtitle}
              />
            )
          })}
        </div>
        <div className="grid grid-cols-3 gap-[1rem]">
          {serviceItems.slice(2, 5).map((it, i) => {
            return (
              <ServicePageCard
                      key={i}
                      icon={it.icon}
                      title={it.title}
                      subtitle={it.subtitle}
              />
            )
          })}
        </div>
      </div>
    </section>
  )
}