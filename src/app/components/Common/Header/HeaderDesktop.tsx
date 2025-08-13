import Link from "next/link"
import Image from "next/image"
import ContactUsButton from "../ContactUsButton"
import logo from "../../../../../public/Logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function HeaderDesktop({bgColor}: {bgColor: string}) {
  return (
    <header className={`${bgColor} w-full 
                      lg:px-[4rem] 2xl:px-[6.4rem] 
                      py-[2.3rem] 
                      hidden lg:flex items-center justify-between`}>
      <Link href="/" className="block py-[0.9rem]">
        <Image 
          src={logo} 
          alt="Logo"
          className="lg:w-[20rem] 2xl:w-[26.4rem]
                     lg:h-[3.5rem]  2xl:h-[3.9rem]
                    " 
          width={264} height={39} 
         />
      </Link>

      <nav className="flex mt-[0.5rem] lg:items-center 2xl:items-start">
        <div className="py-[2.4rem] px-[2.4rem] flex gap-[3.3rem]">
          <Link href="/" className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">Про нас</Link>
          <Link href="/services" className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">Послуги, які працюють</Link>
          <Link href="/case-studies" className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">Case Studies</Link>
          <Link href="/rent-it" className="lg:text-center xl:text-left lg:text-[1.5rem] xl:text-[1.6rem] 2xl:text-[1.8rem] font-normal">Rent an IT Solution</Link>
          <LanguageSwitcher/>
        </div>
        <ContactUsButton/>
      </nav>
    </header>
  )
}