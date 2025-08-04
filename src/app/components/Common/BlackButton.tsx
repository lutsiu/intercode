interface Props {
  text: string;
  onClick: () => void;
}
export default function BlackButton({text, onClick}: Props) {

  return (
    <button className="bg-black text-white cursor-pointer rounded-full 
                      h-[6.6rem] w-fit py-[2.1rem] px-[3.6rem] text-[1.8rem] font-bold "
            onClick={onClick}
    >
      {text}
    </button>
  ) 
}