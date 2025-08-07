import { useContactPopupStore } from "@/app/store/contactPopupStore";

interface Props {
  actionText: string;
  onClick: () => void;
}
export default function PopupButton({actionText, onClick}: Props) {

  const {open} = useContactPopupStore();

  function handleClick() {
    onClick();
    open();
  }

  return (
    <button 
      onClick={handleClick}
      className="bg-black text-white cursor-pointer rounded-full 
                 h-[6.6rem] w-fit py-[2.1rem] px-[3.6rem] text-[1.8rem] font-bold mx-auto">
            {actionText}
    </button>
  )
}