"use client";

import { usePathname } from "next/navigation";
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterSocials from "./FooterSocials";

export default function Footer() {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  const bgColor = isMainPage ? "bg-blue-500" : "bg-[#8CD1F5]";
  const textColor = isMainPage ? "white" : "black";

  return (
    <footer className={`${bgColor} text-${textColor} px-[10rem] pt-[7.2rem] pb-[5.8rem]`}>
      <div className="flex justify-between items-center">
        <FooterLogo />
        <FooterLinks />
        <FooterSocials />
      </div>
      <FooterCopyright dividerColor={textColor} />
    </footer>
  );
}
