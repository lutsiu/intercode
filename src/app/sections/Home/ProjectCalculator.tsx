import SectionTitle from "@/app/components/Common/SectionTitle";
import Estimator from "@/app/components/Home/ProjectCalculator/Estimator";


export default function ProjectCalculator() {
  return (
    <section
      aria-label="Project's calculator"
      className="pt-[15rem] px-[12rem]"
    >
      <SectionTitle title="Калькулятор проекту" paddingBottom={40} />
      <Estimator/>    
    </section>
  );
}
