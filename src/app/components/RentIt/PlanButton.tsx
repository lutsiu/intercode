interface Props {
  title: string;
  isActive: boolean;
  onClick: () => void;
}

export default function PlanButton({ title, isActive, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className={`
        h-[5.4rem] w-[16.1rem] px-[2.4rem] py-[1.8rem] 
        flex items-center justify-center
        rounded-[1.8rem] cursor-pointer text-[1.6rem]
        border-[1px] transition-all duration-300 text-nowrap
        ${isActive 
          ? "bg-gradient-to-b from-[#9BC3FF] to-[#186AE5] border-[#D4D2E3] text-white font-extrabold"
          : "bg-white text-black font-light border-[#D4D2E3]"}
      `}
    >
      {title}
    </button>
  );
}
