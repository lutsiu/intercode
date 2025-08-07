import Image from "next/image";

interface Props {
  icon: string;           
  title: string; 
  subtitle: string; 
  onClick: () => void; 
}

export default function ServicePageCard({icon, title, subtitle, onClick} : Props) {
  return (
    <article className="w-full h-full flex flex-col px-[2rem] md:px-[3.5rem]  xl:px-[4.6rem] 
                        pt-[3.5rem] md:pt-[4.6rem] pb-[3.5rem] md:pb-[5.6rem] 
                        bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] rounded-[4rem] 
                        text-center md:text-left 
                        items-center md:items-start
    ">
      
      {/* Icon + Title + Text */}
      <div className="flex-1 flex flex-col items-center md:items-start">
        <Image src={icon} alt={icon} width={80} height={80} />
        <div className="flex flex-col gap-[1.6rem] md:gap-[2.5rem] mt-[3.2rem] sm:mt-[6rem] lg:mt-[8rem]">
          <h3 className="text-white text-[2.4rem] font-bold">{title}</h3>
          <p className="text-[1.6rem] leading-[2.4rem] text-white max-w-[51.4rem]">{subtitle}</p>
        </div>
      </div>

      {/* Button always at the bottom */}
      <button 
        className="font-extrabold text-[1.8rem] h-[6.6rem] rounded-full w-[18.6rem] border-[1px] border-black 
                   cursor-pointer hover:opacity-80 duration-200 mt-[3.2rem] md:mt-[4rem]"
        style={{ backgroundColor: "rgba(255,255,255,0.5)" }}
        onClick={onClick}
      >
        Детальніше
      </button>
    </article>
  );
}
