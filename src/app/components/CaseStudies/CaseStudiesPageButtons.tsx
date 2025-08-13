import { Icon } from "@iconify/react";
import type { EmblaCarouselType } from "embla-carousel";

type ArrowProps = {
  embla?: EmblaCarouselType; 
};

export function PrevButton({ embla }: ArrowProps) {
  const disabled = !embla;
  return (
    <button
      type="button"
      disabled={disabled}
      className="hidden md:block border border-black/50 p-[0.8rem] rounded-full hover:bg-black/10 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
      onClick={() => embla?.scrollPrev()}
    >
      <Icon icon="mdi-light:chevron-left" width={36} height={36} />
    </button>
  );
}

export function NextButton({ embla }: ArrowProps) {
  const disabled = !embla;
  return (
    <button
      type="button"
      disabled={disabled}
      className="hidden md:block border border-black/50 p-[0.8rem] rounded-full hover:bg-black/10 disabled:opacity-50 disabled:cursor-not-allowed transition cursor-pointer"
      onClick={() => embla?.scrollNext()}
    >
      <Icon icon="mdi-light:chevron-right" width={36} height={36} />
    </button>
  );
}
