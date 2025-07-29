import Link from "next/link";
export default function ContactUsButton() {

  return (
    <Link
      href="/contact"
      className="bg-black text-white font-bold text-[1.8rem] py-[2.1rem] px-[3.8rem] h-[6.6rem] rounded-full block w-fit"
    >
      Contact us
    </Link>
  )
}