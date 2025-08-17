import { Metadata } from "next";
import AboutUsSection from "../sections/Home/AboutUs";
import CaseStudiesSection from "../sections/Home/CaseStudies";
import ContactUsSection from "../sections/Home/ContactUs";
import HeroSection from "../sections/Home/Hero";
import HowDoWeWorkSection from "../sections/Home/HowDoWeWork";
import IndustriesSection from "../sections/Home/Industries";
import ProjectCalculatorSection from "../sections/Home/ProjectCalculator";
import ServicesSection from "../sections/Home/Services";
import TechnologiesSection from "../sections/Home/Technologies";
import { pageMeta } from "../lib/pageMeta";



export default function Home() {
  return (
    <>
      <HeroSection/>
      <HowDoWeWorkSection/>
      <ProjectCalculatorSection/>
      <ServicesSection/>
      <TechnologiesSection/>
      <IndustriesSection/>
      <CaseStudiesSection/>
      <AboutUsSection/>
      <ContactUsSection/>
    </>
  );
}
