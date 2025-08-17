import Image from "next/image";
import { useState } from "react";
import ImageSkeleton from "../../Common/ImageSkeleton";

interface Props {
  image: string;
  title: string;
}

export default function PopupImage({ image, title }: Props) {

  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative w-full aspect-[700/384] rounded-[1.6rem] overflow-hidden">
      {!loaded && <ImageSkeleton/>}
      <Image
        src={image}
        alt={title}
        fill
        className={`object-cover ${loaded ? "opacity-100" : "opacity-0"}`}
        sizes="(max-width: 768px) 100vw, 50vw"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}

