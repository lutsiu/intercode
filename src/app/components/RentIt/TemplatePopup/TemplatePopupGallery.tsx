import Image from "next/image";

export default function TemplatePopupGallery() {
  return (
    <div className="flex flex-col items-center gap-[3.2rem]">
      {[1, 2, 3].map((_, i) => (
        <div key={i} className="w-full h-[38.4rem] relative overflow-hidden rounded-[1.5rem]">
          <Image
            src="/cat.png"
            alt={`Preview ${i + 1}`}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
