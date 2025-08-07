interface Props {
  title: string;
  paddingBottom: number;
}
export default function SectionTitle({title, paddingBottom}: Props) {

  return (
    <h3 
      className={`text-[2.4rem] sm:text-[3rem] lg:text-[4rem] font-bold text-center`} 
      style={{paddingBottom}}>
        {title}
    </h3>
  )
}