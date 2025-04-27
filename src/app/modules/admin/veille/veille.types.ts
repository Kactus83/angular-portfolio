/** Un paragraphe de l’article */
export interface Paragraph {
  /** Titre du paragraphe (peut être vide) */
  title: string;
  /** Sous-titre optionnel */
  subtitle?: string;
  /** Intro italique optionnelle */
  intro?: string;
  /** Contenu HTML ou markdown transformé */
  content: string;
  /** Image optionnelle */
  imageUrl?: string;
}

/** Un article de veille */
export interface Article {
  id:          string;
  imageUrl?:    string;        // image à afficher
  title:       string;
  subtitle?:   string;
  summary:     string;        // court résumé
  paragraphs:  Paragraph[];   // contenu typé
  relatedProjectIds?: string[];
}

/** Un secteur de veille, avec ses articles */
export interface Sector {
  id:          string;
  title:       string;
  subtitle?:   string;
  icon:        string;        // svgIcon à afficher
  description: string;        // intro du secteur
  articles:    Article[];
}
