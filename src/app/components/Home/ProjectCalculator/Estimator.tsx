"use client";

import Image from "next/image";
import { useState } from "react";
import calculatorIcon from "../../../../../public/calculator-icon.svg";
import EstimatedText from "./EstimatedText";
import sackSmall from "../../../../../public/sack-small.webp";
import ImageSkeleton from "../../Common/ImageSkeleton";

export default function Estimator() {
  const [smallLoaded, setSmallLoaded] = useState(false);
  const [bgLoaded, setBgLoaded] = useState(false);

  return (
    <>
      {/* Gradient version for lg and below */}
      <div
        className="
          lg:hidden flex flex-col items-center
          mx-auto w-[30.8rem] sm:w-full h-[47.2rem] lg:h-[60rem] rounded-[3rem]
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
          <div className="relative w-[15.6rem] h-[17.6rem] aspect-[308/472] overflow-hidden">
            {!smallLoaded && (
              <div className="absolute inset-0">
                <ImageSkeleton className="w-full h-full" />
              </div>
            )}
            <Image
              src={sackSmall}
              alt="Small calculator image"
              fill
              className={`object-contain transition-opacity duration-300 ${
                smallLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 1024px) 24rem"
              priority
              onLoad={() => setSmallLoaded(true)}
            />
          </div>
        </div>

        <EstimatedText />
      </div>

      {/* Image background for xl and up (same container, real image inside) */}
      <div
        className="
          hidden lg:block relative overflow-hidden
          mx-auto w-full h-[60rem] rounded-[8rem]
          bg-no-repeat bg-center bg-cover
          pt-[4.5rem] lg:pl-[5rem] xl:pl-[7.4rem]
        "
      >
        {!bgLoaded && (
          <div className="absolute inset-0">
            <ImageSkeleton className="w-full h-[60rem] rounded-[8rem]" />
          </div>
        )}

        <Image
          src="/calculator.webp"
          alt=""
          fill
          className={`object-cover transition-opacity duration-300 ${
            bgLoaded ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => setBgLoaded(true)}
          priority={false}
        />

        <div className="hidden lg:block relative z-10">
          <Image src={calculatorIcon} alt="Calculator icon" width={80} height={80} />
        </div>
        <div className="relative z-10">
          <EstimatedText />
        </div>
      </div>
    </>
  );
}
