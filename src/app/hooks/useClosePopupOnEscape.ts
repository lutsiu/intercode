import { useEffect } from "react";

export default function useClosePopupOnEscape(onClose: () => void) {
  useEffect(() => {

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      console.log("exc")
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);
}