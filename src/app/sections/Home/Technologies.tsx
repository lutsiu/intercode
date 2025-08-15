import SectionTitle from "@/app/components/Common/SectionTitle";
import TechnologyCard from "@/app/components/Home/Technologies/TechnologyCard";
import technologies from "@/app/data/TechnologiesData";

export default function Technologies() {
  return (
    <section
      aria-label="Technologies"
      className="pt-[6.4rem] lg:pt-[12rem] px-[3.4rem] lg:px-[6rem] 2xl:px-[8rem]"
    >
      <div className="hidden sm:block pb-[3.2rem] lg:pb-[4rem]">
        <SectionTitle title="Технології, з якими ми працюємо" paddingBottom={0} />
      </div>
      <div className="block sm:hidden pb-[3.2rem] lg:pb-[4rem]">
        <SectionTitle title="Технології," paddingBottom={0} />
        <SectionTitle title="з якими ми працюємо" paddingBottom={0} />
      </div>

      <ul className="hidden lg:flex justify-center lg:gap-[6.4rem]">
        {technologies.map((t, i) => {
          return (
          <TechnologyCard key={i} {...t}/>
        )
        })}
      </ul>
      
      <div>
        <ul className="lg:hidden flex justify-center gap-[1rem]">
          {technologies.slice(0,3).map((t, i) => {
            return (
              <TechnologyCard key={i} {...t}/>
            )
            })}
        </ul>
        <ul className="lg:hidden flex justify-center gap-[1rem]">
          {technologies.slice(3,5).map((t, i) => {
            return (
              <TechnologyCard key={i} {...t}/>
            )
            })}
        </ul>
      </div>
      
      <p className="text-center font-semibold text-[2rem] mt-[3rem] sm:mt-[5rem] sm:mr-[3rem]">Та інші</p>
    </section>
  );
}
