'use client';
import { CaseStudyPageCardType } from "@/app/types/CaesStudyType";
import BlackButton from "../Common/BlackButton";
import { useContactPopupStore } from "@/app/store/contactPopupStore";

export default function CaseStudyPageCard(
  { client, projectName, task, results, stack, 
    deliverables, image, textColor
}: CaseStudyPageCardType) {

  const {open} = useContactPopupStore();
  
  return (
    <article 
      className=
        {`flex flex-col gap-[4.8rem] text-${textColor}
          pl-[9.3rem] pt-[6.4rem] pb-[7rem] bg-cover bg-center h-[60rem] `}
      style={{
        color: textColor,
        backgroundImage: `url(${image})`,
  
      }}
    >
      <h4 className="text-[3.6rem] font-bold">{projectName}</h4>
      <div className="flex flex-col gap-[2.4rem]">
        <p className="text-[1.6rem] leading-[1.8rem]"><strong>Клієнт:&nbsp;</strong>{client}</p>
        <p className="text-[1.6rem] leading-[1.8rem]"><strong>Задача:&nbsp;</strong>{task}</p>
        <ul className="text-[1.6rem] leading-[1.8rem] flex flex-col gap-[0.5rem]">
          <p><strong>Що зробили:&nbsp;</strong></p>
          {deliverables.map((d, i) => {
            return (
              <li key={i}>{d}</li>
            )
          })}
        </ul>
        <p className="text-[1.6rem] leading-[1.8rem]"><strong>Технології:&nbsp;</strong>{stack.toString()}</p>
        <p className="text-[1.6rem] leading-[1.8rem]"><strong>Результат:&nbsp;</strong>{results}</p>
      </div>
      <BlackButton text="Хочу так само!" onClick={open}/>
    </article>
  )
}