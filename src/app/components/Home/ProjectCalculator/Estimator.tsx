import Image from "next/image";
import calculatorIcon from "../../../../../public/calculator-icon.svg";
import EstimatedText from "./EstimatedText";
import sackSmall from "../../../../../public/sack-small.webp";

export default function Estimator() {
  return (
    <>
      {/* Gradient version for lg and below */}
      <div
        className="
          lg:hidden flex flex-col items-center
          mx-auto w-full h-[47.2rem] lg:h-[60rem] rounded-[3rem]
          bg-gradient-to-b from-[#B9EDFF] to-[#2C95E0]
          pt-[1.4rem]
          px-[1.6rem] sm:px-0
          pb-[5.3rem] sm:pb-0
          
        "
      >
        <div className="hidden lg:block">
          <Image src={calculatorIcon} alt="Calculator icon" width={80} height={80} />
        </div>

       <div className="flex justify-center">
          <div className="relative w-[15.6rem] h-[17.6rem] aspect-[308/472]">
            <Image
              src={sackSmall}
              alt="Small calculator image"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 24rem"
              priority
            />
          </div>
        </div>

        <EstimatedText />
      </div>

      {/* Image background for xl and up */}
      <div
        className="
          hidden lg:block
          mx-auto w-full h-[60rem] rounded-[3rem]
          bg-no-repeat bg-center bg-cover
          pt-[4.5rem] lg:pl-[5rem] xl:pl-[7.4rem]
        "
        style={{ backgroundImage: "url('/calculator.webp')" }}
      >
        <div className="hidden lg:block">
          <Image src={calculatorIcon} alt="Calculator icon" width={80} height={80} />
        </div>
        <EstimatedText />
      </div>
    </>
  );
}

