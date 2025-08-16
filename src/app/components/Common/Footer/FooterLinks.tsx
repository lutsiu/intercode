import {useTranslations} from "next-intl";
import {Link} from "@/i18n/navigation";

export default function FooterLinks() {
  const t = useTranslations("header");

  return (
    <nav aria-label="Footer navigation">
      <ul
        className="flex flex-wrap md:flex-nowrap text-nowrap gap-[2.1rem] lg:gap-[3.3rem]
                   justify-center
                   text-[1.2rem] sm:text-[1.6rem] lg:text-[1.8rem]
                   mt-[3.2rem] 2xl:mt-[0.5rem]"
      >
        <li>
          <Link href="/">{t("about")}</Link>
        </li>
        <li>
          <Link href="/services">{t("services")}</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>
        <li>
          <Link href="/rent-it">Rent an IT Solution</Link>
        </li>
      </ul>
    </nav>
  );
}
