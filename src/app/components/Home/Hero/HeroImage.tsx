import Image from "next/image"
import heroImage from '../../../../../public/hero.webp';
export default function HeroImage() {

  return (
    <Image 
      src={heroImage} 
      alt="Hero image" 
      width={840} 
      height={714} 
      className="absolute right-[9.3rem] bottom-0"
    />
  )
}