import Image from "next/image";
import Link from "next/link";
import facebook from '../../../../../public/socials/Facebook.svg'
import linkedin from '../../../../../public/socials/LinkedIn.svg'
import instagram from '../../../../../public/socials/Instagram.svg'
import telegram from '../../../../../public/socials/Telegram.svg'

export default function FooterSocials() {

  return (
    <div className="flex gap-[1.6rem]">
      <Link href={"/"} 
        className="w-[3.6rem] h-[3.6rem] bg-white rounded-[1rem] 
                  flex items-center justify-center cursor-pointer ">
        <Image src={linkedin} alt="Linkedin logo" width={18} height={17} />
      </Link>
      <Link href={"/"} className="w-[3.6rem] h-[3.6rem] bg-white rounded-[1rem] flex items-center justify-center cursor-pointer">
        <Image src={facebook} alt="Facebook logo" width={10} height={18}/>
      </Link>
      <Link href={"/"} className="w-[3.6rem] h-[3.6rem] bg-white rounded-[1rem] flex items-center justify-center cursor-pointer">
        <Image src={telegram} alt="Telegram logo" width={19} height={16}/>
      </Link>
      <Link href={"/"} className="w-[3.6rem] h-[3.6rem] bg-white rounded-[1rem] flex items-center justify-center cursor-pointer">
        <Image src={instagram} alt="Instagram logo" width={18} height={18}/>
      </Link>
    </div>
  )
}