import { StaticImageData } from 'next/image';

export type SkillContent = {
  filters: string[];
  items: { name: string; type: string }[];
};

export type EducationContent = {
  degree: string;
  school: string;
  date: string;
  grade: string;
}[];

export type ProjectContent = {
  category: string;
  items: { name: string; link?: string }[];
}[];

export type InfoItem = {
  icon: string | StaticImageData;
  iconDark?: string | StaticImageData;
  title: string;
  content: SkillContent | EducationContent | ProjectContent;
};
