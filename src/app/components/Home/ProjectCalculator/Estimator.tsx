import Image from "next/image";
import calculatorIcon from "../../../../../public/calculator-icon.svg";
import EstimatedText from "./EstimatedText";
export default function Estimator() {

  return (
    <div
      className="mx-auto w-[120rem] h-[60rem] 
                bg-no-repeat bg-center bg-cover rounded-[3rem]
                relative 
                "
      style={{
        backgroundImage: "url('/calculator.webp')",
      }}
    >
      <Image 
        src={calculatorIcon} 
        alt="Calculator icon" 
        width={80} 
        height={80}
        className="absolute left-[6.4rem] top-[4.5rem]"
      />
      <EstimatedText/>
    </div>
  )
}