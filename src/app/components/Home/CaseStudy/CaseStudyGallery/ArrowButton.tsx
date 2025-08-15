"use client";

import { Icon } from "@iconify/react";
import clsx from "clsx";

type Props = {
  side: "left" | "right";
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function ArrowButton({ side, disabled, onClick, className }: Props) {
  return (
    <button
      type="button"
      aria-label={side === "left" ? "Previous image" : "Next image"}
      disabled={disabled}
      onClick={onClick}
      className={clsx(
        "rounded-full border border-white/60 p-[0.8rem]",
        "bg-white/10 hover:bg-white/20",
        "disabled:opacity-40 disabled:pointer-events-none",
        className
      )}
    >
      <Icon
        className="w-[2.2rem] h-[2.2rem] text-white"
        icon={side === "left" ? "mdi:chevron-left" : "mdi:chevron-right"}
      />
    </button>
  );
}
