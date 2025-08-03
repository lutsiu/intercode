import AboutUsSection from "./sections/Home/AboutUs";
import HeroSection from "./sections/Home/Hero";
import HowDoWeWorkSection from "./sections/Home/HowDoWeWork";
import IndustriesSection from "./sections/Home/Industries";
import ProjectCalculatorSection from "./sections/Home/ProjectCalculator";
import ServicesSection from "./sections/Home/Services";
import TechnologiesSection from "./sections/Home/Technologies";


export default function Home() {
  return (
    <>
      <HeroSection/>
      <HowDoWeWorkSection/>
      <ProjectCalculatorSection/>
      <ServicesSection/>
      <TechnologiesSection/>
      <IndustriesSection/>
      <AboutUsSection/>
    </>
  );
}
