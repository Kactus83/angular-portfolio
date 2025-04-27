import { Project } from './projects.types';

export const PROJECTS: Project[] = [
  {
    id: 'space-invaders',
    title: 'Space Invaders',
    summary: 'Recréation du jeu classique Space Invaders.',
    description:
      'Une version moderne du jeu Space Invaders avec des graphismes améliorés, animations fluides et scores en ligne.',
    technologies: ['TypeScript', 'HTML5 Canvas', 'CSS'],
    repoUrl: 'https://github.com/Kactus83/space-invaders',
    demoUrl: '',
    imageUrl: 'assets/images/projects/space-invaders.png',
    languageUsage: [
      { name: 'TypeScript', percent: 70 },
      { name: 'Canvas API', percent: 20 },
      { name: 'CSS', percent: 10 }
    ],
    history:
      'Développé en 2023 dans le cadre d’un hackathon interne, puis maintenu en tant que projet perso.',
    architecture:
      'Monolithic en Vanilla TS, loop principal séparé des gestionnaires d’input et de rendu.',
    technicalChoices:
      'Utilisation de HTML5 Canvas pour la compatibilité et la performance, sans framework tiers.',
    technicalReflections:
      'Le découpage en modules TS facilite l’ajout de nouvelles entités (ennemis, power-ups).',
    difficulties:
      'Gestion de la physique basique et des collisions optimisées pour ne pas bloquer le framerate.',
    gallery: [
      'assets/images/projects/si-screen1.png',
      'assets/images/projects/si-screen2.png',
      'assets/images/projects/si-screen3.png'
    ]
  },
  {
    id: 'custom-logger',
    title: 'Custom Logger',
    summary: 'Package NPM personnalisé de logging.',
    description:
      'Module de logging flexible pour Node.js, supportant multiples transports et formats.',
    technologies: ['Node.js', 'TypeScript'],
    repoUrl: 'https://github.com/Kactus83/custom-logger',
    demoUrl: 'https://npmjs.com/package/custom-logger',
    imageUrl: 'assets/images/projects/custom-logger.png',
    languageUsage: [{ name: 'TypeScript', percent: 100 }],
    history:
      'Réalisé à titre expérimental puis publié sur NPM fin 2022.',
    architecture:
      'Core en TS, pattern Chain of Responsibility pour les transports de logs.',
    technicalChoices:
      'Support des streams et du JSON Lines pour faciliter l’analyse en pipeline.',
    technicalReflections:
      'L’architecture modulaire permet d’ajouter facilement de nouveaux formats.',
    difficulties:
      'Assurer la compatibilité ESM + CommonJS sans duplication de code.',
    gallery: []
  },
  {
    id: 'test-html',
    title: 'Test HTML',
    summary: 'Mini projet de design web.',
    description:
      'Un projet de design web rapide pour créer une interface responsive inspirée du Test HTML.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/Kactus83/test-html',
    demoUrl: '',
    imageUrl: 'assets/images/projects/test-html.png',
    // sections vides si non fournies
    history: '',
    architecture: '',
    technicalChoices: '',
    technicalReflections: '',
    difficulties: '',
    gallery: []
  },
  {
    id: 'theme-color-generator',
    title: 'Theme Color Generator',
    summary: 'Générateur de thèmes de couleurs CSS.',
    description:
      'Outil pour générer des palettes de couleurs en CSS via des variables, utilisé dans le projet Test HTML.',
    technologies: ['TypeScript', 'CSS Variables'],
    repoUrl: 'https://github.com/Kactus83/theme-color-generator',
    demoUrl: '',
    imageUrl: 'assets/images/projects/theme-color-generator.png',
    languageUsage: [
      { name: 'TypeScript', percent: 80 },
      { name: 'CSS Variables', percent: 20 }
    ],
    history: '',
    architecture: '',
    technicalChoices: '',
    technicalReflections: '',
    difficulties: '',
    gallery: []
  }
];
