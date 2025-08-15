"use client";

import ArrowButton from "./ArrowButton";
import clsx from "clsx";

type Props = {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  className?: string;
};

export default function MobileControls({ canPrev, canNext, onPrev, onNext, className }: Props) {
  return (
    <div className={clsx("flex items-center gap-[3rem]", className)}>
      <ArrowButton side="left" disabled={!canPrev} onClick={onPrev} />
      <ArrowButton side="right" disabled={!canNext} onClick={onNext} />
    </div>
  );
}
