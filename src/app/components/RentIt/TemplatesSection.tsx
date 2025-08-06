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
      <div className="flex gap-[7.6rem] mt-[6.4rem] justify-center">
        {rentItTemplates.map((r, i) => (
          <RentItTemplate 
            key={i} 
            item={r}
            onClick={() => setActivePopup(rentItPopups[i])} />
        ))}
      </div>

      {activePopup && (
        <TemplatePopup
          item={activePopup}
          onClose={() => setActivePopup(null)}
        />
      )}
    </>
  );
}
