import Image from "next/image"
import heroImage from '../../../../../public/big-robot.webp';
export default function HeroImage() {

  

  return (
    <Image 
      src={heroImage} 
      alt="Hero image" 
      width={840} 
      height={714} 
      className="absolute right-[50%] lg:right-[3rem] xl:right-[5rem] 2xl:right-[9.3rem]
                 translate-x-[50%] lg:translate-x-0  bottom-[-1.7rem] sm:bottom-[-2rem] md:bottom-[-1.9rem] xl:bottom-[-2.1rem] 2xl:bottom-[-3.1rem] 
                 sm:w-[50rem] xl:w-[60rem] 2xl:w-[84rem] 
                 h-[39rem] sm:h-[45rem] xl:h-[50rem] 2xl:h-[71.4rem]
      "
      priority
    />
  )
}