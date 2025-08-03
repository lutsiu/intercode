import Image from "next/image";

export default function ContactUsPitch() {

  return (
    <div className="text-white mt-[2.8rem]">
      <h4 className="font-extrabold text-[3.6rem]">Є ідея? Ми вже слухаємо.</h4>
      <h6 className="text-[1.6rem] font-bold leading-[2.4rem] mt-[1.6rem]">Форма — проста. Процес — ще простіший. <br />Без зайвих етапів.</h6>
      <Image 
        src={"/hero.webp"} 
        alt="Robot" 
        width={324} 
        height={284}
        className="absolute bottom-[0rem] right-[17.4rem]"
      />
    </div>
  )
}