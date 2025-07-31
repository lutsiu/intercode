import SectionTitle from "@/app/components/Common/SectionTitle";
import industries from "@/app/data/Industries";
import Image from "next/image";

export default function Industries() {
  return (
    <section
      aria-label="Industries"
      className="pt-[12rem] px-[8rem]"
    >
      <SectionTitle title="Індустрії, з якими ми працюємо" paddingBottom={60} />
      <div className="grid grid-cols-3 gap-[1.6rem] justify-items-center">
        {industries.map((ind, i) => {
          return (
            <article 
              key={i} 
              className="w-[41.6rem] px-[4.5rem] py-[1.9rem] rounded-full flex items-center justify-center gap-[2.4rem]
                        bg-gradient-to-b from-[#B9EDFF] to-[#2C95E0] cursor-pointer">
              <Image src={ind.icon} alt={ind.title} width={50} height={50}/>
              <p className="font-bold text-[2.4rem]">{ind.title}</p>
            </article>
          )
        })}
      </div>
    </section>
  );
}
