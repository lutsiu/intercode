import { Icon } from "@iconify/react";

export function PrevButton({ embla }: { embla: any }) {
  return (
    <button
      className="absolute left-[-3.7rem] top-[8.8rem] transform  border-[1px]
                 flex items-center justify-start rounded-full cursor-pointer"
      style={{borderColor: 'rgba(0,0,0,0.5)'}}
      onClick={() => embla && embla.scrollPrev()}
    >
      <Icon icon={"mdi-light:chevron-left"} width={36} height={36}/>
    </button>
  );
}

export function NextButton({ embla }: { embla: any }) {
  return (
    <button
      className="absolute right-[-3.7rem] top-[8.8rem] transform  border-[1px] 
                 flex items-center justify-end rounded-full cursor-pointer"
      style={{borderColor: 'rgba(0,0,0,0.5)'}}
      onClick={() => embla && embla.scrollNext()}
    >
      <Icon icon={"mdi-light:chevron-right"} width={36} height={36}/>
    </button>
  );
}
