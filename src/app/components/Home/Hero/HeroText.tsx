import ContactUsButton from "@/app/components/Common/ContactUsButton";

export default function HeroText() {

  return (
    <div className="pt-[35rem] pl-[10.4rem]">
      <h1 className="text-[5.2rem] font-extrabold">Софт, що заробляє!</h1>
      <p className="text-[1.8rem] font-semibold mt-[2.4rem]">Компанія з розробки програмного забезпечення <br />для твого бізнесу</p>
      <div className="mt-[3.2rem]">
        <ContactUsButton/>
      </div>
    </div>
  )
}