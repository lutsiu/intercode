
export default function ContactUsForm() {

  return (
    <form className="flex flex-col gap-[1.8rem] ">
      <input 
        type="text" 
        name="name-input"
        placeholder="Ім’я Прізвище" 
        id="name-input" 
        className="bg-blue-500 text-white text-[1.6rem] placeholder-white
                      py-[1.5rem] px-[3.6rem] rounded-full border-[1px] outline-none h-[4.8rem]"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.3)'
        }}
      />
        <input 
        type="email" 
        name="email-input"
        placeholder="Email" 
        id="email-input" 
        className="bg-blue-500 text-white text-[1.6rem] placeholder-white
                      py-[1.5rem] px-[3.6rem] rounded-full border-[1px] outline-none h-[4.8rem]"
        style={{
          borderColor: 'rgba(255, 255, 255, 0.3)'
        }}
      />
      <div className="relative">
        <textarea 
          name="task" 
          id="task"
          placeholder="Що потрібно зробити?" 
          maxLength={2000}
          className="bg-blue-500 text-white text-[1.6rem] placeholder-white h-[12.9rem]
                    py-[1.9rem] pl-[3.6rem] pr-[8rem] rounded-[2.5rem] border-[1px] outline-none w-full scroll-none overflow-y-hidden"
          style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
        />
        <span className="absolute bottom-[1.6rem] right-[1.8rem] text-white font-medium text-[1.6rem]">
          0/2000
        </span>
      </div>
      <div>
        <input 
          type="text" 
          name="promocode-input"
          placeholder="PROMO CODE" 
          id="promocode-input" 
          className="bg-blue-500 text-white text-[1.6rem] placeholder-white
                      py-[1.5rem] px-[3.6rem] rounded-full border-[1px] outline-none h-[6.6rem]"
          style={{
            borderColor: 'rgba(255, 255, 255, 0.3)'
          }}
        />
        <button 
          type="submit"
          className="
                    text-[1.8rem] font-bold py-[2.1rem] px-[3.6rem] rounded-full 
                    h-[6.6rem] w-[30.9rem] text-white bg-black cursor-pointer"
        >
          🚀 Почати спільну справу
        </button>
      </div>
    </form>
  )
}