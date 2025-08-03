export interface ServicePageItemType {
  icon: string;             // path to icon
  title: string;            // title on card and popup
  subtitle: string;         // small text under title on card
  popup: {
    title: string;
    intro: string;          // short bold/gray intro line
    description: string;    // paragraph under intro
    image: string;          // image shown in popup
    features: string[];     // bullet list
    finalNote: string;      // text above CTA button
    actionText: string;     // CTA button text
  };
}
