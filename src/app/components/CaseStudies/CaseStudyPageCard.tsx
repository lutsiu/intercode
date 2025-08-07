'use client';
import { CaseStudyPageCardType } from "@/app/types/CaesStudyType";
import BlackButton from "../Common/BlackButton";
import { useContactPopupStore } from "@/app/store/contactPopupStore";

export default function CaseStudyPageCard(
  { client, projectName, task, results, stack, 
    deliverables, image, textColor
}: CaseStudyPageCardType) {

  const { open } = useContactPopupStore();
  
  return (
    <article 
      className={`flex flex-col gap-[4rem] sm:gap-[4.8rem] text-${textColor}
        text-center md:text-left
        px-[2rem] sm:px-[5rem] lg:px-[9.3rem] 
        pt-[4.9rem] lg:pt-[6.4rem] 
        pb-[4.9rem] lg:pb-[7rem] 
        bg-cover bg-center h-[64.4rem] sm:h-[60rem] rounded-[3.2rem] md:rounded-[8rem]`}
      style={{
        color: textColor,
        backgroundImage: `url(${image})`,
      }}
    >
      <h4 className="text-[1.8rem] sm:text-[2.5rem] lg:text-[3.6rem] font-bold">
        {projectName}
      </h4>

      <div className="flex flex-col gap-[1.6rem] sm:gap-[2.4rem]">
        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>Клієнт:</strong>
          <br className="block sm:hidden" />
          &nbsp;{client}
        </p>

        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>Задача:</strong>
          <br className="block sm:hidden" />
          &nbsp;{task}
        </p>

        <ul className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem] flex flex-col gap-[0.5rem]">
          <p><strong>Що зробили:&nbsp;</strong></p>
          {deliverables.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>

        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>Технології:</strong>
          <br className="block sm:hidden" />
          &nbsp;{stack.toString()}
        </p>

        <p className="text-[1.2rem] sm:text-[1.4rem] lg:text-[1.6rem] leading-[2.1rem] sm:leading-[1.8rem]">
          <strong>Результат:</strong>
          <br className="block sm:hidden" />
          &nbsp;{results}
        </p>
      </div>

      <div className="mx-auto md:mx-0">
        <BlackButton text="Хочу так само!" onClick={open} />
      </div>
    </article>
  )
}
