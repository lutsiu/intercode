import SectionTitle from "../../Common/SectionTitle";

interface Props {
  title: string;
  intro: string;
  description: string;
}

export default function PopupTitle({ title, intro, description }: Props) {

  return (
    <>
      <SectionTitle title={title} paddingBottom={0} />
      <div className="text-center px-[.4rem] sm:px-0">
        <p className="text-[1.4rem] sm:text-[1.9rem] lg:text-[2.4rem] font-medium">{intro}</p>
        <p className="text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] font-light mt-[3rem] leading-[2.1rem]">{description}</p>  
      </div>
    </>
  );
}
