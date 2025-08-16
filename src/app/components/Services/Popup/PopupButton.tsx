// app/components/Services/Popup/PopupButton.tsx
"use client";

import BlackButton from "../../Common/BlackButton";
import { useRouter } from "next/navigation";

interface Props {
  actionText: string;
  onClick?: () => void;
}

export default function PopupButton({ actionText, onClick }: Props) {
  const router = useRouter();

  const handleClick = () => {
    onClick?.();
    router.push("/contact");
  };

  return (
    <div className="mx-auto">
      <BlackButton onClick={handleClick} text={actionText} />
    </div>
  );
}
