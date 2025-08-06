export default function PlanCardDivider({ popular }: { popular: boolean }) {
  return (
    <div
      className={`
        ${popular ? "bg-white" : "bg-[#D4D2E3]"}
        w-[30.8rem] h-[1px] mx-auto mt-[1rem]
      `}
    />
  );
}
