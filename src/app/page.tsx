import HeroSection from "./sections/Home/Hero";
import HowDoWeWorkSection from "./sections/Home/HowDoWeWork";
import ProjectCalculatorSection from "./sections/Home/ProjectCalculator";
import ServicesSection from "./sections/Home/Services";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <HowDoWeWorkSection/>
      <ProjectCalculatorSection/>
      <ServicesSection/>
    </>
  );
}
