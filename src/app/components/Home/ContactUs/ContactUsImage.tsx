import Image from "next/image";

export default function ContactUsImage() {

  return (
    <Image 
      src={"/hero.webp"} 
      alt="Robot" 
      width={324} 
      height={284}
      className=" lg:absolute lg:bottom-[0rem] lg:right-[8rem] xl:right-[10rem] 2xl:right-[17.4rem]"
      priority
    />
  )
}