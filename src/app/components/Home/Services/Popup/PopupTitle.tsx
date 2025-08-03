import SectionTitle from "../../../Common/SectionTitle";

interface Props {
  title: string;
  intro: string;
  description: string;
}

export default function PopupTitle({ title, intro, description }: Props) {
  return (
    <>
      <SectionTitle title={title} paddingBottom={0} />
      <div className="text-center">
        <p className="text-[2.4rem] font-medium">{intro}</p>
        <p className="text-[1.6rem] font-light mt-[3rem] leading-[2.1rem]">{description}</p>  
      </div>
    </>
  );
}
