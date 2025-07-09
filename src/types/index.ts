export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  outcomes: string[];
  link?: string;
  github?: string;
}

export interface PersonalInfo {
  name: string;
  techTitle: string;
  productTitle: string;
  email: string;
  linkedin: string;
  github: string;
  location: string;
}

export type Mode = 'tech' | 'product';