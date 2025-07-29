import HeroImage from "@/app/components/Home/Hero/HeroImage";
import HeroText from "@/app/components/Home/Hero/HeroText";
export default function HeroSection() {

  return (
    <section 
      aria-label="Hero section"
      className="bg-gradient-to-b w-full flex relative h-[88.2rem] "
      style={{
        backgroundImage: "linear-gradient(to bottom, #B9EDFF, #2C95E0)",
      }}
    >
      <HeroText/>
      <HeroImage/>
    </section>
  )
}