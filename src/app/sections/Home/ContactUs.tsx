import ContactUsForm from "@/app/components/Home/ContactUs/ContactUsForm";
import ContactUsPitch from "@/app/components/Home/ContactUs/ContactUsPitch";

export default function ContactUs() {

  return (
    <section
      aria-label="Contact Us section"
      className="relative mt-[8rem] bg-gradient-to-b from-[#1839DE] to-[#09165D] 
                 pt-[7.6rem] pb-[7.1rem] pl-[9.6rem] pr-[11.8rem]"
    >
      <div className="flex justify-between gap-[9.9rem]">
        <ContactUsForm/>
        <ContactUsPitch/>
      </div>
    </section>
  )
}