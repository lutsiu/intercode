export interface CaseStudyType {
  image: string;
  title: string;
  subtitle: string;
}

export interface CaseStudyPageCardType {
  client: string;
  projectName: string;
  task: string;
  results: string;
  stack: string[];
  deliverables: string[];
  image: string;
  textColor: "black" | "white";
}