import Link from "next/link"
import Image from "next/image"
import ContactUsButton from "./ContactUsButton"
import logo from "../../../../public/Logo.svg";
export default function Header() {

  return (
    <header className="bg-[#B9EDFF] w-full px-[6.4rem] py-[2.3rem] flex items-center justify-between">
      <Link href="/" className="block py-[0.9rem]">
        <Image src={logo} alt="Logo" width={264} height={39} />
      </Link>

      <nav className="flex mt-[0.5rem]">
        <div className="py-[2.4rem] px-[2.4rem] flex gap-[3.3rem]">
          <Link href="/" className="text-[1.8rem] font-normal">Про нас</Link>
          <Link href="/services" className="text-[1.8rem] font-normal">Послуги, які працюють</Link>
          <Link href="/case-studies" className="text-[1.8rem] font-normal">Case Studies</Link>
          <Link href="/rent-in" className="text-[1.8rem] font-normal">Rent an IT Solution</Link>
        </div>
        <ContactUsButton/>
      </nav>
    </header>
  )
}