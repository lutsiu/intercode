import ServiceCard from "@/app/components/Home/Services/ServiceCard";
import serviceCardData from "../../../data/ServiceCardsData";
export default function ServiceCards() {

  return (
    <div className="w-full  flex flex-col gap-[1.8rem]">
      <div className="w-full hidden lg:flex justify-center gap-[1.9rem]">
        {serviceCardData.slice(0,2).map((s, i) => {
          return (
            <ServiceCard
              key={i}  
              {...s}
            />
          )
        })}
      </div>
      <div className="w-full hidden lg:flex justify-center gap-[1.9rem]">
        {serviceCardData.slice(2).map((s, i) => {
          return (
            <ServiceCard
              key={i}  
              {...s}
            />
          )
        })}
      </div>
      <div className="w-full flex flex-col items-center lg:hidden  gap-[1.9rem]">
        {serviceCardData.map((s, i) => {
          return (
            <ServiceCard
              key={i}  
              {...s}
            />
          )
        })}
      </div>
    </div>
  )
}