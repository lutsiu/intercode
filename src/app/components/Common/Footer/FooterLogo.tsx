import Link from "next/link";
import Image from "next/image";
import logo from "../../../../../public/Logo.svg";
export default function FooterLogo() {

  return (
    <Link href="/" aria-label="Homepage">
      <Image src={logo} alt="Logo" width={264} height={39} />
    </Link>
  )
}