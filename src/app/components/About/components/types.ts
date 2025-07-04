// types.ts

export interface Skill {
    name: string;
    level: string;
  }
  
  export interface Education {
    school: string;
    degree: string;
    year: string;
  }
  
  export interface Project {
    name: string;
    description: string;
    techStack: string[];
  }
  
  // Discriminated Union for InfoItem
  export type InfoItem =
    | {
        title: 'Skills';
        content: Skill[];
        icon: string;
      }
    | {
        title: 'Education';
        content: Education[];
        icon: string;
      }
    | {
        title: 'Projects' | 'Projects & Tools';
        content: Project[];
        icon: string;
      };
  