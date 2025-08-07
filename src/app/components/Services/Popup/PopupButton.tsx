import { useContactPopupStore } from "@/app/store/contactPopupStore";
import BlackButton from "../../Common/BlackButton";

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
    <div className="mx-auto">
      <BlackButton onClick={handleClick} text={actionText}/>
    </div>
  )
}