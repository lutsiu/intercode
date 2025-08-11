import ContactUsForm from "@/app/components/Home/ContactUs/ContactUsForm";
import ContactUsImage from "@/app/components/Home/ContactUs/ContactUsImage";
import ContactUsPitch from "@/app/components/Home/ContactUs/ContactUsPitch";

export default function ContactUs() {

  return (
    <section
      aria-label="Contact Us section"
      className="relative mt-[8rem] bg-gradient-to-b from-[#1839DE] to-[#09165D] 
                 pt-[5.6rem] lg:pt-[7.6rem] lg:pb-[7.1rem] px-[3.4rem] lg:px-[6rem] 2xl:px-[10rem]"
    >
      <div className="hidden lg:flex justify-between gap-[9.9rem]">
        <ContactUsForm/>
        <ContactUsPitch/>
      </div>
      <div className="flex items-start big-mobile:items-center flex-col lg:hidden ">
        <ContactUsPitch/>
        <ContactUsForm/>

        <div>
        <ContactUsImage/>
        </div>
      </div>
      
    </section>
  )
}