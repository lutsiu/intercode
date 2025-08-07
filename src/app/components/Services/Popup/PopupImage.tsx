import Image from "next/image";

interface Props {
  image: string;
  title: string;
}

export default function PopupImage({ image, title }: Props) {
  return (
    <div className="relative w-full aspect-[700/384] rounded-[1.6rem] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  );
}

