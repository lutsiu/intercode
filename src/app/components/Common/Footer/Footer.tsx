
import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";
import FooterLogo from "./FooterLogo";
import FooterSocials from "./FooterSocials";


export default function Footer() {
  return (
    <footer className="bg-blue-500 px-[10rem] pt-[7.2rem] pb-[5.8rem]">
      <div className="flex justify-between items-center ">
        <FooterLogo/>
        <FooterLinks/>
        <FooterSocials/>
      </div>
      <FooterCopyright/>
    </footer>
  );
}
