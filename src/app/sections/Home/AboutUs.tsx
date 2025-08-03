import SectionTitle from "@/app/components/Common/SectionTitle"
import AboutUsCard from "@/app/components/Home/AboutUs/AboutUsCard"
import aboutUsCards from "@/app/data/AboutUsCards"


export default function AboutUs() {

  return (
    <section
      aria-label="About Us section"
      className="pt-[12rem] px-[8rem]"
    >
      <SectionTitle title="Про нас" paddingBottom={30} />
      <h5 className="font-medium text-[2.4rem] text-center">Менше слів — більше кейсів. Результати — найкращий аргумент</h5>
      <div className="grid grid-cols-2 mt-[6rem] gap-[3.6rem]">
        {aboutUsCards.map((c, i) => {
          return (
            <AboutUsCard key={i} {...c}/>
          )
        })}
      </div>
    </section>
  )
}