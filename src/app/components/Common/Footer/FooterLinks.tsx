import Link from "next/link";
export default function FooterLinks() {

  return (
    <nav aria-label="Footer navigation">
      <ul  className="flex gap-[3.3rem] text-white text-[1.8rem] mt-[0.5rem]">
        <li>
          <Link href="/about">Про нас</Link>
        </li>
        <li>
          <Link href="/services" className="">Послуги, які працюють</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="/rent-in">Rent an IT Solution</Link>
        </li>
      </ul>
    </nav>
  )
}