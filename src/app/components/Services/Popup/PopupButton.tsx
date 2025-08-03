
export default function PopupButton({actionText}: {actionText: string}) {

  return (
    <button className="bg-black text-white cursor-pointer rounded-full 
                      h-[6.6rem] w-fit py-[2.1rem] px-[3.6rem] text-[1.8rem] font-bold mx-auto">
            {actionText}
    </button>
  )
}