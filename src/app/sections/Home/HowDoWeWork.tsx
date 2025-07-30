import SectionTitle from "@/app/components/Common/SectionTitle";
import processSteps from "@/app/data/ProcessStepData";

export default function HowDoWeWork() {

  return (
    <section 
      aria-label="How do we work section"
      className="pt-[8rem] px-[12rem]"

    >
      <SectionTitle title="Як ми працюємо" paddingBottom={30}/>
      <p className="text-[2.4rem] font-medium text-center">Почнемо роботу над твоїм завданням протягом <strong>3 днів</strong></p>
      <ul className="mt-[7rem] flex items-center justify-center gap-[10.2rem]">
        {processSteps.map((step, i) => {
          return (
            <li className="flex flex-col items-center gap-[2rem]" key={i}>
              <span className="block text-[5rem]">{step.emoji}</span>
              <p className="font-bold text-[2.4rem] text-center">{step.title}</p>
            </li>
          )
        })}
      </ul>
    </section>
  )
}