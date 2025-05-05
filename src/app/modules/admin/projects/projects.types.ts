export interface LanguageUsage {
  name: string;
  percent: number;
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  repoUrl?: string;
  demoUrl?: string;
  imageUrl?: string;
  videoUrl?: string;
  languageUsage?: LanguageUsage[];
  // Nouveaux champs optionnels
  history?: string;
  architecture?: string;
  technicalChoices?: string;
  technicalReflections?: string;
  difficulties?: string;
  gallery?: string[];      // URLs additionnelles
}
