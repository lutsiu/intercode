import SectionTitle from "@/app/components/Common/SectionTitle";
import processSteps from "@/app/data/ProcessStepData";

export default function HowDoWeWork() {

  return (
    <section 
      aria-label="How do we work section"
      className="pt-[8rem] px-[3.4rem] lg:px-[6rem] xl:px-[12rem]"

    >
      <div className="pb-[2rem] lg:pb-[3rem]">
        <SectionTitle title="Як ми працюємо" paddingBottom={0}/>
      </div>
      <p className="text-[1.4rem] sm:text-[1.9rem] lg:text-[2.4rem] font-medium text-center">
        Почнемо роботу над твоїм завданням протягом <strong>3 днів</strong>
      </p>
      <ul className="mt-[2.4rem] lg:mt-[7rem] flex flex-col md:flex-row 
                     items-center justify-center 
                     gap-[1.6rem] md:gap-[5rem] lg:gap-[10.2rem]">
        {processSteps.map((step, i) => {
          return (
            <li className="flex flex-col items-center gap-[0.8rem] md:gap-[2rem]" key={i}>
              <span className="block text-[12.8rem] md:text-[4rem] lg:text-[5rem]">{step.emoji}</span>
              <p className="font-bold text-[1.8rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.4rem] text-center">{step.title}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}