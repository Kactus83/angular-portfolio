export interface Experience {
  id: string;
  title: string;
  summary: string;
  description: string;
  technologies: string[];
  startDate: string; // 'YYYY-MM'
  endDate?: string;  // 'YYYY-MM' ou absent = Présent
}
