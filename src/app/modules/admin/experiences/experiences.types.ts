export interface Step {
  title: string;
  description?: string;
  subSteps?: Step[];
}

export interface Experience {
  id: string;
  title: string;
  summary: string;
  description: string;
  longDescription?: string;        // Texte plus complet
  skills?: string[];               // Compétences travaillées
  difficulties?: string;           // Difficultés rencontrées
  gallery?: string[];              // URLs d’images
  steps?: Step[];                  // Arborescence d’étapes du projet
  technologies: string[];
  startDate: string;               // 'YYYY-MM'
  endDate?: string;                // 'YYYY-MM' ou absent = Présent
}
