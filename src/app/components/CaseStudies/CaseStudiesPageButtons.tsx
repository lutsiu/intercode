import { Icon } from "@iconify/react";

export function PrevButton({ embla }: { embla: any }) {
  return (
    <button
      className="hidden md:block border border-black/50 p-[0.8rem] rounded-full hover:bg-black/10 transition cursor-pointer"
      onClick={() => embla && embla.scrollPrev()}
    >
      <Icon icon="mdi-light:chevron-left" width={36} height={36} />
    </button>
  );
}

export function NextButton({ embla }: { embla: any }) {
  return (
    <button
      className="hidden md:block border border-black/50 p-[0.8rem] rounded-full hover:bg-black/10 transition cursor-pointer"
      onClick={() => embla && embla.scrollNext()}
    >
      <Icon icon="mdi-light:chevron-right" width={36} height={36} />
    </button>
  );
}
