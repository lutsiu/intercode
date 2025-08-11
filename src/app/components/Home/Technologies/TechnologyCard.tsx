import Image, { StaticImageData } from "next/image";

type Props = {
  title: string;
  icon: StaticImageData | string;
  className?: string;
};

export default function TechnologyCard({ title, icon, className = "" }: Props) {
  return (
    <li
      className={[
        "flex flex-col items-center justify-center",
        "gap-[1.2rem] xl:gap-[2rem]",
        "py-[1.6rem] px-[1.8rem] md:px-[2.8rem]",
        className,
      ].join(" ")}
    >
      <Image
        src={icon}
        alt={title}
        width={80}
        height={80}
        className="min-w-[6rem] min-h-[6rem] max-w-[6rem] max-h-[6rem] xl:max-w-[8rem] xl:max-h-[8rem] xl:w-[8rem] xl:h-[8rem]"
      />
      <p className="font-medium text-[1.4rem] md:text-[1.8rem] xl:text-[2.4rem] text-center text-nowrap">{title}</p>
    </li>
  );
}
