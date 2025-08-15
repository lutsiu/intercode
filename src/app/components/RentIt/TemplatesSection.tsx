// TemplatesSection.tsx
import { useState } from "react";
import RentItTemplate from "./RentItTemplate";
import { rentItTemplates } from "@/app/data/RentItTemplatesData";
import { RentItPopupInfoType } from "@/app/types/RentItPopupInfoType";
import TemplatePopup from "./TemplatePopup/TemplatePopup";
import { rentItPopups } from "@/app/data/RentItPopupInfoData";
import useLockBodyScroll from "@/app/hooks/useLockBodyScroll";

export default function TemplatesSection() {
  const [activePopup, setActivePopup] = useState<RentItPopupInfoType | null>(null);
  useLockBodyScroll(!!activePopup);

  return (
    <>
      <div className="mt-[3.2rem] sm:mt-[5.5rem] lg:mt-[6.4rem]
                      grid grid-cols-1 lg:grid-cols-3
                      gap-[3.2rem] lg:gap-[7.6rem] justify-items-center">
        {rentItTemplates.map((r, i) => (
          <div key={i} className="w-full max-w-[36rem]">
            <RentItTemplate item={r} onClick={() => setActivePopup(rentItPopups[i])} />
          </div>
        ))}
      </div>

      {activePopup && (
        <TemplatePopup item={activePopup} onClose={() => setActivePopup(null)} />
      )}
    </>
  );
}
