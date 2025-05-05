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
    imageUrl: 'images/projects/space-invaders.png',
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
      'images/projects/si-screen1.png',
      'images/projects/si-screen2.png',
      'images/projects/si-screen3.png'
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
    imageUrl: 'images/projects/custom-logger.png',
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
    imageUrl: 'images/projects/test-html.png',
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
    summary: 'Un outil web pour générer dynamiquement des thèmes CSS (variables primaires, secondaires, nuances…) avec aperçu en temps réel.',
    description:
      'Le Theme Color Generator permet de créer des palettes de couleurs personnalisées (HEX, RGB…), d’avoir un aperçu en temps réel et de générer automatiquement le code CSS associé.',
    technologies: ['TypeScript', 'Webpack', 'CSS Variables', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/Kactus83/theme-color-generator',
    demoUrl: '',
    imageUrl: 'images/projects/theme-color-generator-cover.png',
    videoUrl: 'videos/projects/color-generator/demo.mp4',
    languageUsage: [
      { name: 'TypeScript', percent: 84.5 },
      { name: 'HTML', percent: 7.9 },
      { name: 'CSS', percent: 6.1 },
      { name: 'JavaScript', percent: 1.5 }
    ],
    history:
      'Créé le 23 octobre 2023 pour centraliser la génération de thèmes colorés CSS, puis mis à jour le 5 mai 2025 pour améliorer l’ergonomie et le design.',
    architecture:
      'Entrypoint `main.ts` initialise les services : `ColorsService`, `ColorsPaletteService`, `ThemeColorsService` et `ThemeDisplayService`. Structure DDD avec `models`, `services`, `value-objects` et `ThemeCSSGenerator`, packagés via Webpack.',
    technicalChoices:
      'TypeScript pour le typage strict, HTML/CSS pour l’interface, Webpack avec ts-loader pour bundler, architecture en services et value-objects pour séparer logiques métier et présentation.',
    technicalReflections:
      'À l’avenir : proposer des export adaptés à Tailwind ou autres frameworks, permettre la configuration de templates de sortie (SCSS, JSON), et offrir une CLI pour intégration CI/CD.',
    difficulties:
      'Pas de défis majeurs, le projet étant volontairement simple. À améliorer : tests unitaires, workflow CI, gestion avancée des formats de sortie.',
    gallery: [
      'images/projects/color-generator-1.png',
      'images/projects/color-generator-2.png',
      'images/projects/color-generator-3.png'
    ]
  },
  {
    id: 'book-2023',
    title: 'Book 2023',
    summary: 'Portfolio web multi-pages responsive, avec animations et thème personnalisable.',
    description:
      'Site de portfolio statique composé de plusieurs pages (landing, home, CV, compétences, projets GitHub), servi via un mini-serveur Node.js maison. Intègre un curseur personnalisé, gestion de thèmes via CSS variables et chargement dynamique des données projets.',
    technologies: [
      'HTML5',
      'CSS3 (variables, Flexbox, Grid)',
      'JavaScript ES6 (modules, DOM, fetch)',
      'Node.js (HTTP, routing fait à la main)'
    ],
    repoUrl: 'https://github.com/Kactus83/test-html',
    demoUrl: 'https://kactus83.github.io/test-html/pages/landing/landing.html',
    imageUrl: 'images/projects/book-2023/portfolio-cover.png',
    videoUrl: 'videos/projects/book-2023/demo.mp4',
    languageUsage: [
      { name: 'JavaScript', percent: 50 },
      { name: 'CSS', percent: 30 },
      { name: 'HTML', percent: 20 }
    ],
    history:
      'Créé le mardi 24 octobre 2023 comme template de portfolio anonyme, développé en quasi-one-shot sans mises à jour majeures par la suite.',
    architecture:
      'Architecture « multi-page » : chaque page (landing, home, CV, compétences, projets) est autonome (HTML/CSS/JS). Le `server.js` orchestre le routage et sert les fichiers statiques, tandis que `main.js` gère le curseur, le theming et la redirection initiale.',
    technicalChoices:
      'Vanilla JS et CSS sans frameworks pour garantir légèreté et accès direct au DOM ; CSS variables pour le theming ; mini-serveur Node.js maison pour apprendre le routing HTTP sans Express.',
    technicalReflections:
      'Le découpage en pages autonomes facilite la maintenance, mais un bundler (Webpack/Rollup) ou un framework léger (Vite/Next.js) améliorerait le workflow. Passer à un SPA pourrait aussi fluidifier la navigation.',
    difficulties:
      'Implémentation d’un curseur personnalisé cross-browser, gestion fine des CSS variables et des animations, mise en place d’une redirection sans FOUC et structuration d’un mini-serveur Node.js sans dépendance externe.',
    gallery: [
      'images/projects/book-2023/portfolio-cover.png'
    ]
  }
];
