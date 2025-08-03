import Image from "next/image";

interface Props {
  icon: string;           
  title: string; 
  subtitle: string;   
}

export default function ServicePageCard({icon, title, subtitle} : Props) {

  return (
    <article className="flex flex-col justify-between pt-[4.6rem] pb-[5.6rem] px-[4.6rem] 
                        bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] rounded-[4rem]">
      <Image src={icon} alt={icon} width={80} height={80}/>
      <div className="flex flex-col gap-[2.5rem] mt-[8rem]">
        <h3 className="text-white text-[2.4rem]">{title}</h3>
        <p className="text-[1.6rem] leading-[2.4rem] text-white max-w-[51.4rem]">{subtitle}</p>
        <button 
            className="font-extrabold text-[1.8rem] h-[6.6rem] rounded-full
                        w-[18.6rem] border-[1px] border-black cursor-pointer hover:opacity-80 duration-200"
            style={{backgroundColor: "rgba(255,255,255,0.5)"}}
        >
            Детальніше
        </button>
      </div>
    </article>
  )
}