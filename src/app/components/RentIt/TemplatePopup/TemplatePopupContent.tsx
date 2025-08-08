import { RentItPopupInfoType } from "@/app/types/RentItPopupInfoType";

interface Props {
  item: RentItPopupInfoType;
}

export default function TemplatePopupContent({ item }: Props) {
  const { who, includes, style, feature, results } = item;

  return (
    <div className="flex flex-col gap-[1.5rem] md:gap-[2.4rem] text-center lg:text-left">
      <ContentBlock title="🧑 Кому підійде:" text={who} />
      <ContentList title="⚙️ Що входить:" items={includes} />
      <ContentBlock title="🎨 Стиль:" text={style} />
      <ContentBlock title="💡 Фішка:" text={feature} />
      <ContentList title="🚀 Що отримаєш:" items={results} />
    </div>
  );
}

function ContentBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="flex flex-col gap-[1.5rem] md:gap-[2.4rem]">
      <h5 className="font-bold text-[1.4rem] md:text-[1.6rem]">{title}</h5>
      <p className="text-[1.4rem] md:text-[1.6rem] leading-[2.4rem]">{text}</p>
    </div>
  );
}

function ContentList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="flex flex-col gap-[1.5rem] md:gap-[2.4rem]">
      <h5 className="font-bold text-[1.6rem]">{title}</h5>
      <ul className="flex flex-col md:pl-[1rem]">
        {items.map((item, i) => (
          <li key={i} className="text-[1.4rem] md:text-[1.6rem] leading-[2.4rem]">• {item}</li>
        ))}
      </ul>
    </div>
  );
}
