"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";
import ContactUsPopup from "@/app/components/Common/ContactPopup/ContactPopup";
import { ReactNode } from "react";
import useLockBodyScroll from "@/app/hooks/useLockBodyScroll";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const { isOpen } = useContactPopupStore();

  useLockBodyScroll(isOpen);
  return (
    <>
      {children}
      {isOpen && <ContactUsPopup />}
    </>
  );
}
