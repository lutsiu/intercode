import { useContactPopupStore } from "@/app/store/contactPopupStore";

export default function PlanCardButton() {

  const {open} = useContactPopupStore();

  return (
    <button
      onClick={open}
      className="
        mt-auto rounded-full bg-black text-white py-[2.1rem]
        flex justify-center items-center w-[30.8rem] h-[6.6rem]
        text-[1.8rem] font-bold cursor-pointer"
    >
      Обрати
    </button>
  );
}
