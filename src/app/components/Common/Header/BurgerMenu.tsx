import { Icon } from "@iconify/react";
import Link from "next/link";
import ContactUsButton from "../ContactUsButton";

export default function BurgerMenu() {

  return (
    <menu 
      className="absolute top-[10.1rem] left-0 z-[1000] rounded-[3rem]"
      style={{backgroundColor: "rgba(255,255,255, 0.9)"}}
    >
      <div className="absolute top-[1rem] right-[2rem]">
        <Icon
          icon={"material-symbols-light:close"}
          className="w-[1.26rem] sm:w-[2rem] h-[1.26rem] sm:h-[2rem]"
        />
      </div>
      <ul className="flex flex-col">
        <Link 
          href="/" 
          className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">
            Про нас
        </Link>
        <Link 
          href="/services" 
          className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">
            Послуги, які працюють
        </Link>
        <Link 
          href="/case-studies" 
          className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">
            Case Studies
        </Link>
        <Link 
          href="/rent-it" 
          className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">
            Rent an IT Solution
        </Link>
      </ul>
      <ul>
        
      </ul>
      <ContactUsButton/>
    </menu>
  )
}