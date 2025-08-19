import Image from "next/image";
import robot from "../../../../../public/smal-robot.webp"
export default function ContactUsImage() {

  return (
    <Image 
      src={robot} 
      alt="Robot" 
      width={324} 
      height={284}
      className=" lg:absolute lg:bottom-[0rem] lg:right-[8rem] xl:right-[10rem] 2xl:right-[17.4rem]"
      priority
    />
  )
}