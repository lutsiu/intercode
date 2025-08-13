import { Icon } from "@iconify/react";
import Image from "next/image";
import callImage from "../../../../../public/contact-us-icon.svg";
import logo from "../../../../../public/Logo.svg";
import { useContactPopupStore } from "@/app/store/contactPopupStore";
import BurgerMenu from "./BurgerMenu";
export default function HeaderMobile() {

  const {open} = useContactPopupStore();

  return (
    <header
      className={`lg:hidden flex items-center
                  justify-between
                bg-[#8CD1F5] w-full
                  px-[1.2em] sm:px-[2.8rem] 
                  pt-[3.2rem] pb-[2.4rem]
                  relative
      `}   
    >
      <div>
        <Icon
          icon={"iconamoon:menu-burger-horizontal"}
          className="mt-[0.5rem] w-[2.4rem] sm:w-[4rem] h-[2.4rem] sm:h-[4rem] text-white"
        />
      </div>
      
      <div>
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={30}
          className="w-[20rem] sm:w-[30rem] h-[2.5rem] sm:h-[4rem]"
        />
      </div>
      <div
        onClick={open}
      >
        <Image
          src={callImage}
          alt="Call button"
          width={32}
          height={32}
          className="w-[3.2rem] sm:w-[4rem] h-[3.2rem] sm:h-[4rem]"
        />
      </div>
      
      <BurgerMenu/>
    </header>
  )
}