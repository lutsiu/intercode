// RentItTemplate.tsx
import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "../Common/ImageSkeleton";
import { RentItTemplateType } from "@/app/types/RentItType";

interface Props { item: RentItTemplateType; onClick: () => void; }

export default function RentItTemplate({ item, onClick }: Props) {
  const { title, image, description } = item;
  const [loaded, setLoaded] = useState(false);

  return (
    <article
      className="w-full flex h-full flex-col md:gap-[4rem] items-center
                 px-[1.6rem] md:px-[0.8rem] pt-[1.6rem] md:pt-[0.8rem]
                 pb-[2.4rem] md:pb-[3.6rem]"
    >
      <div className="relative w-full aspect-[326/204] rounded-[2rem] overflow-hidden">
        {!loaded && <ImageSkeleton className="w-full h-full rounded-[2rem]" />}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover rounded-[2rem] transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </div>

      {/* make this the flexible middle block */}
      <div className="mt-[3.2rem] md:mt-0 flex-1 flex flex-col gap-[1.6rem] mb-[1.6rem] text-center">
        <h5 className="text-[2.4rem] lg:text-[2rem] xl:text-[2.4rem] font-extrabold">{title}</h5>
        <p className="text-[1.4rem] text-[#656565]">{description}</p>
      </div>

      {/* stick the button to the bottom of the card */}
      <button
        onClick={onClick}
        className="mt-auto text-[1.8rem] font-bold border-[1px] border-black
                   flex items-center justify-center py-[2.4rem] px-[3.6rem]
                   rounded-full cursor-pointer h-[6.6rem]
                   hover:bg-black hover:text-white duration-300"
      >
        Детальніше
      </button>
    </article>
  );
}
