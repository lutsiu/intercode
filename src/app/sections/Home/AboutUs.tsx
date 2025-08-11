import SectionTitle from "@/app/components/Common/SectionTitle"
import AboutUsCard from "@/app/components/Home/AboutUs/AboutUsCard"
import aboutUsCards from "@/app/data/AboutUsCards"


export default function AboutUs() {

  return (
    <section
      aria-label="About Us section"
      className="pt-[6rem] lg:pt-[12rem] px-[3.4rem]  lg:px-[8rem]"
    >
      <div className="mb-[2rem] lg:mb-[3.2rem]">
        <SectionTitle title="Про нас" paddingBottom={0} />
      </div>
      <h5 className="font-medium text-[1.4rem] lg:text-[2.4rem] mx-auto text-center leading-[3.2rem] w-[30rem] sm:w-full">Менше слів — більше кейсів. Результати — найкращий аргумент</h5>
      <div className="grid grid-cols-1 lg:grid-cols-2 mt-[3.2rem] lg:mt-[6rem] gap-[3.2rem] lg:gap-[3.6rem]">
        {aboutUsCards.map((c, i) => {
          return (
            <AboutUsCard key={i} {...c}/>
          )
        })}
      </div>
    </section>
  )
}