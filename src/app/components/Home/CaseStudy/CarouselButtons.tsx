import { Icon } from "@iconify/react";
import type { EmblaCarouselType } from "embla-carousel";

export function PrevButton({ embla }: { embla: EmblaCarouselType }) {
  return (
    <button
      className="absolute left-[-2.7rem] lg:left-[-3.7rem] md:top-[10rem] lg:top-[8.8rem] transform  border-[1px]
                 hidden md:flex items-center justify-center rounded-full cursor-pointer w-[3.6rem] h-[3.6rem]"
      style={{borderColor: 'rgba(0,0,0,0.5)'}}
      onClick={() => embla && embla.scrollPrev()}
    >
      <Icon icon={"mdi-light:chevron-left"} 
            className="w-[2.4rem] h-[2.4rem]"/>
    </button>
  );
}

export function NextButton({ embla }: { embla: EmblaCarouselType }) {
  return (
    <button
      className="absolute right-[-2.7rem] lg:right-[-3.7rem] md:top-[10rem] lg:top-[8.8rem] transform  border-[1px] 
                 hidden md:flex items-center justify-center rounded-full cursor-pointer w-[3.6rem] h-[3.6rem]"
      style={{borderColor: 'rgba(0,0,0,0.5)'}}
      onClick={() => embla && embla.scrollNext()}
    >
      <Icon icon={"mdi-light:chevron-right"} 
            className="w-[2.4rem] h-[2.4rem]"/>
    </button>
  );
}
