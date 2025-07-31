import SectionTitle from "@/app/components/Common/SectionTitle";
import technologies from "@/app/data/TechnologiesData";
import Image from "next/image";

export default function Technologies() {
  return (
    <section
      aria-label="Technologies"
      className="pt-[12rem] px-[8rem]"
    >
      <SectionTitle title="Технології, з якими ми працюємо" paddingBottom={60} />
      <ul className="flex justify-center gap-[10rem]">
        {technologies.map((t, i) => {
          return (
          <li key={i} className="flex flex-col gap-[2rem] items-center justify-center">
            <Image src={t.icon} alt={t.title} height={80} width={80} />
            <p className="font-medium text-[2.4rem] text-center">{t.title}</p>
          </li>
        )
        })}
      </ul>
    </section>
  );
}
