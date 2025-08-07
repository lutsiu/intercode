import serviceItems from "@/app/data/ServicePageItems";
import ServicePageCard from "./ServicePageCard";
import { ServicePageItemType } from "@/app/types/ServicePageItemType";

interface Props {
  setActivePopup: (item: ServicePageItemType) => void;
}

export default function ServicePageCards({ setActivePopup }: Props) {
  return (
    <div className="mt-[3.2rem] sm:mt-[4rem] lg:mt-[6.5rem]">

      {/* 📱 Mobile to lg: 1 column (stacked vertically) */}
      <div className="flex flex-col gap-[3.2rem] lg:hidden">
        {serviceItems.map((it, i) => (
          <ServicePageCard
            key={i}
            icon={it.icon}
            title={it.title}
            subtitle={it.subtitle}
            onClick={() => setActivePopup(it)}
          />
        ))}
      </div>

      {/* 💻 xl+: 2-row layout (2 + 3 columns) */}
      <div className="hidden lg:flex flex-col gap-[1rem]">
        <div className="grid grid-cols-2 gap-[1rem]">
          {serviceItems.slice(0, 2).map((it, i) => (
            <ServicePageCard
              key={i}
              icon={it.icon}
              title={it.title}
              subtitle={it.subtitle}
              onClick={() => setActivePopup(it)}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[1rem]">
          {serviceItems.slice(2, 5).map((it, i) => (
            <ServicePageCard
              key={i + 2}
              icon={it.icon}
              title={it.title}
              subtitle={it.subtitle}
              onClick={() => setActivePopup(it)}
            />
          ))}
        </div>
      </div>

    </div>
  );
}
