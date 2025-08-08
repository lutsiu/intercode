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
    <footer className={`${bgColor} text-${textColor} px-[3.4rem] lg:px-[6rem]  2xl:px-[10rem]
                        pt-[3.4rem] lg:pt-[7.2rem] 
                        pb-[1.4rem] lg:pb-[5.8rem]`}>
      <div className="flex flex-col  2xl:flex-row justify-between items-center">
        <FooterLogo />
        <FooterLinks />
        <FooterSocials />
      </div>
      <FooterCopyright dividerColor={textColor} />
    </footer>
  );
}
