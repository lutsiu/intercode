import RentItTemplate from "./RentItTemplate";
import { rentItTemplates } from "@/app/data/RentItTemplatesData";

export default function TemplatesSection() {
  return (
    <div className="flex gap-[7.6rem] mt-[6.4rem] justify-center">
      {rentItTemplates.map((r, i) => (
        <RentItTemplate key={i} {...r} />
      ))}
    </div>
  );
}
