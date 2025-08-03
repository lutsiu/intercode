import Image from "next/image";

interface Props {
  image: string;
  title: string;
}

export default function PopupImage({ image, title }: Props) {
  return (
    <div className="aspect-[700/384] rounded-[1.6rem] overflow-hidden relative">
      <Image
        src={image}
        alt={title} 
        fill
        className="object-cover"
      />
    </div>
  );
}
