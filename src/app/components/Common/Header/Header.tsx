"use client";


import { usePathname } from "next/navigation";
import HeaderDesktop from "./HeaderDesktop";
import HeaderMobile from "./HeaderMobile";

export default function Header() {
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  
  const bgColor = isMainPage ? "bg-[#B9EDFF]" : "bg-[#8CD1F5]";
  return (
    <>
      <HeaderDesktop bgColor={bgColor}/>
      <HeaderMobile/>
    </>
  )
}