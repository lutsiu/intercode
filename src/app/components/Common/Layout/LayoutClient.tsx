"use client";

import { useContactPopupStore } from "@/app/store/contactPopupStore";
import ContactUsPopup from "@/app/components/Common/ContactPopup/ContactPopup";
import { ReactNode } from "react";
import useLockBodyScroll from "@/app/hooks/useLockBodyScroll";
import { Toaster } from "react-hot-toast";

export default function LayoutClient({ children }: { children: ReactNode }) {
  const { isOpen } = useContactPopupStore();

  useLockBodyScroll(isOpen);
  return (
    <>
      <Toaster position="top-center" toastOptions={{ duration: 4000 }} />
      {children}
      {isOpen && <ContactUsPopup />}
    </>
  );
}
