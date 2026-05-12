export interface Project {
  name: string;
  url: string;
  description: string;
  shortDescription: string;
  image: string;
  sector: string[];
  isVideo?: boolean;
}

export interface Work {
  title: string;
  stack: string;
  description: string;
  link: string;
}
