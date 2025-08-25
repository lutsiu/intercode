import Image from "next/image";
import Link from "next/link";
import facebook from '../../../../../public/socials/Facebook.svg'
import linkedin from '../../../../../public/socials/LinkedIn.svg'
import instagram from '../../../../../public/socials/Instagram.svg'
import telegram from '../../../../../public/socials/Telegram.svg'

export default function FooterSocials() {

  return (
    <div className="flex gap-[1.6rem] mt-[2.4rem] 2xl:mt-0">
      <Link href="/" className="w-[2.4rem] sm:w-[3.6rem] h-[2.4rem] sm:h-[3.6rem] duration-300 hover:bg-black bg-white rounded-[0.5rem] sm:rounded-[1rem] flex items-center justify-center">
        <Image
          src={instagram}
          alt="Instagram logo"
          width={18}
          height={18}
          className="h-[1.2rem] w-[1.2rem] sm:h-[1.8rem] sm:w-[1.8rem]"
        />
      </Link>
      
      <Link href="/" className="w-[2.4rem] sm:w-[3.6rem] h-[2.4rem] sm:h-[3.6rem] duration-300 hover:bg-black bg-white rounded-[0.5rem] sm:rounded-[1rem] flex items-center justify-center">
        <Image
          src={facebook}
          alt="Facebook logo"
          width={10}
          height={18}
          className="h-[1.2rem] w-auto sm:h-[1.8rem] sm:w-[1.0rem]"
        />
      </Link>

      <Link href="/" className="w-[2.4rem] sm:w-[3.6rem] h-[2.4rem] sm:h-[3.6rem] duration-300 hover:bg-black bg-white rounded-[0.5rem] sm:rounded-[1rem] flex items-center justify-center">
        <Image
          src={telegram}
          alt="Telegram logo"
          width={19}
          height={16}
          className="h-[1.1rem] w-auto sm:h-[1.6rem] sm:w-[1.9rem]"
        />
      </Link>

      <Link href="/https://icon-sets.iconify.design/" target="_blank" className="w-[2.4rem] sm:w-[3.6rem] h-[2.4rem] sm:h-[3.6rem] duration-300 hover:bg-black bg-white rounded-[0.5rem] sm:rounded-[1rem] flex items-center justify-center">
        <Image
          src={linkedin}
          alt="LinkedIn logo"
          width={18}
          height={17}
          className="h-[1.143rem] w-[1.2rem] sm:h-[1.7rem] sm:w-[1.8rem]"
        />
      </Link>
    </div>
  )
}