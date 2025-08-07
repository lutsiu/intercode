interface Props {
  features: string[];
  finalNote: string;
}

export default function PopupDescription({ features, finalNote }: Props) {
  return (
    <div className="sm:px-[1.85rem] flex flex-col gap-[2.4rem] text-center md:text-left">
      <h6 className="font-bold text-[1.4rem] sm:text-[1.6rem]">Що зробимо:</h6>
      <ul>
        {features.map((f, i) => (
          <li 
            key={i}
            className="leading-[2.4rem] text-[1.2rem] sm:text-[1.4rem] md:text-[1.6rem] mt-[0.5rem]"
          >
            {f}
          </li>
        ))}
      </ul>
      <h6 className="font-bold text-[1.4rem] sm:text-[1.6rem]">{finalNote}</h6>
    </div>
  );
}
