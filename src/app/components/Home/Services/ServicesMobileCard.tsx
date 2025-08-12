import Image from "next/image";
import serviceCardData from "../../../data/ServiceCardsData";

export default function ServicesMobileCard() {

  return (
    <ul className={
      `
      rounded-[3rem] py-[3.2rem] px-[1.6rem]
      w-[33.9rem] h-[48.2rem]
      sm:hidden flex flex-col gap-[3.2rem]
      bg-gradient-to-b from-[#9BC3FF] to-[#186AE5]
      `   
    }>
      {serviceCardData.map((card, i) => {
        return (
          <li
            key={i}
            className="flex items-center gap-[0.8rem]"
          >
            <div>
              <Image
                src={card.icon}
                alt={card.title}
                width={44}
                height={44}
            />
            </div>
            <div className="flex flex-col justify-between">
              <h5 className="text-white text-[2.4rem] font-bold">{card.title}</h5>
              <h5 className="text-[1.4rem] font-bold text-[#C7CEF9]">{card.duration}</h5>
            </div>
          </li>
        )
      })}
    </ul>
  )
}