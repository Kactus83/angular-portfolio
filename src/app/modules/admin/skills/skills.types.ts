export enum MasteryLevel {
  Beginner    = 'Beginner',
  Intermediate= 'Intermediate',
  Advanced    = 'Advanced',
  Expert      = 'Expert'
}

export interface SubSkill {
  name: string;
  mastery: number; // pourcentage 0–100
}

export interface Skill {
  id: string;
  name: string;
  icon: string;                    // SVG icon key
  masteryLevel: MasteryLevel;      // niveau global
  subSkills?: SubSkill[];          // liste de sous-compétences avec % de maîtrise
  category: string;
  description?: string;
  personalNotes?: string;      // notes personnelles
  relatedProjectIds?: string[];
}
