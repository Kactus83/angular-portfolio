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
    imageUrl: 'project-ressources/space-invaders/space-invaders.png',
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
      'project-ressources/space-invaders/si-screen1.png',
      'project-ressources/space-invaders/si-screen2.png',
      'project-ressources/space-invaders/si-screen3.png'
    ]
  },
  {
    id: 'custom-logger',
    title: 'Custom Logger',
    summary: 'Package NPM modulaire de logging pour Node.js, configurable et extensible.',
    description:
      'Custom Logger est un module TypeScript pour Node.js fournissant un service de journalisation centralisé : gestion de niveaux (TRACE à ERROR), hiérarchie main/sub-process, styles colorés ou classiques, et configuration fine via une API fluent. Il s’intègre facilement dans toute application Node.js et se prête à l’enrichissement par de nouveaux transports.',
    technologies: [
      'Node.js',
      'TypeScript',
      'ANSI-Escapes (styles console)',
      'Commander / prompts (packaging CLI)',
      'JSON (config)'
    ],
    repoUrl: 'https://github.com/Kactus83/custom-logger',
    demoUrl: 'https://github.com/Kactus83/custom-logging-module-TEST',
    imageUrl: 'project-ressources/logger/logger-cover.png',
    videoUrl: 'project-ressources/logger/demo.mp4',
    languageUsage: [
      { name: 'TypeScript', percent: 100 }
    ],
    history:
      'Créé le 28 février 2024 et publié peu après sur NPM (v0.1.11) pour expérimenter la création d’un package modulable de logging en TypeScript.',
    architecture:
      'Module mono‑package avec un singleton `LoggingService` orchestrant plusieurs services internes (ProcessDatabase, RegistrationService, StyleManager, TreeVisualizer). Deux clients (`MainProcessLoggerClient` et `SubProcessLoggerClient`) héritent d’une base abstraite pour s’enregistrer et produire des logs hiérarchisés.',
    technicalChoices:
      '– Pattern Singleton pour le service global de logs ;  \n' +
      '– Composition de petits services pour séparer responsabilités (format, couleurs, arborescence) ;  \n' +
      '– Enums et interfaces TypeScript pour garantir la cohérence des niveaux et modes ;  \n' +
      '– Sortie console via `console.log` avec styles ANSI, sans dépendance externe pour minimiser la footprint.',
    technicalReflections:
      'Le choix d’un singleton simplifie l’usage mais limite les instances multiples. La séparation en services est vertueuse, mais l’utilisation de l’héritage pour les clients aurait pu être remplacée par de la composition pour plus de flexibilité. L’ajout de transports (fichiers, HTTP) et de formats (JSON, CSV) est la prochaine étape logique.',
    difficulties:
      '– Publication NPM et gestion du packaging (ESM vs CommonJS) ;  \n' +
      '– Choix entre héritage et composition pour les clients logger (l’héritage s’est avéré trop rigide) ;  \n' +
      '– Conception d’une API de configuration intuitive tout en conservant la richesse des options ;  \n' +
      '– Absence de tests unitaires au démarrage, nécessitant un mock manuel pour valider le format des messages.',
    gallery: [
      'project-ressources/logger/logger-1.png'
    ]
  },
  {
    id: 'color-generator',
    title: 'Theme Color Generator',
    summary:
      'Un outil web pour générer dynamiquement des thèmes CSS (variables primaires, secondaires, nuances…) avec aperçu en temps réel.',
    description:
      'Le Theme Color Generator permet de créer des palettes de couleurs personnalisées (HEX, RGB…), d’avoir un aperçu en temps réel et de générer automatiquement le code CSS associé.',
    technologies: ['TypeScript', 'Webpack', 'CSS Variables', 'HTML', 'CSS'],
    repoUrl: 'https://github.com/Kactus83/color-generator',
    demoUrl: 'https://kactus83.github.io/theme-color-generator/',
    imageUrl: 'project-ressources/color-generator/color-generator-cover.png',
    videoUrl: 'project-ressources/color-generator/demo.mp4',
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
      'project-ressources/color-generator/color-generator-1.png',
      'project-ressources/color-generator/color-generator-2.png',
      'project-ressources/color-generator/color-generator-3.png'
    ]
  },
  {
    id: 'portfolio',
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
    imageUrl: 'project-ressources/portfolio/portfolio-cover.png',
    videoUrl: 'project-ressources/portfolio/demo.mp4',
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
    gallery: ['project-ressources/portfolio/portfolio-cover.png']
  },
  {
    id: 'idlesaur',
    title: 'The idlesaur',
    summary:
      'Idle game web où l’on suit des cycles de vie d’un dinosaure virtuel — gestion de ses besoins, progression par niveaux, karma influençant des événements aléatoires et boutique intégrée.',
    description:
      'The idlesaur est un idle game full-stack composé d’un frontend React 18 et d’un backend Express / TypeScript, persistant sur MariaDB. Le joueur gère la faim, l’expérience et le karma de son dinosaure à travers des cycles de vingt minutes, avec des actions (chasse, cueillette, exploration…) générant ressources, expérience et soul points. Un système de karma “bright/neutral/dark” module les événements aléatoires, et une boutique interne permet l’achat d’objets et compétences, remises à zéro à chaque renaissance pour maintenir l’équilibre du gameplay.',
    technologies: [
      'React 18',
      'Express.js',
      'TypeScript / JavaScript ES6',
      'MariaDb',
      'Docker & Docker Compose',
      'Terraform (HCL)',
      'PowerShell',
      'YAML',
      'AWS App Runner'
    ],
    repoUrl: 'https://github.com/Kactus83/thedelsaur',
    demoUrl: 'https://the-idlesaur.fmorena.com',
    imageUrl: 'project-ressources/idlesaur/idlesaur-cover.png',
    languageUsage: [
      { name: 'TypeScript', percent: 60 },
      { name: 'JavaScript', percent: 20 },
      { name: 'SQL', percent: 10 },
      { name: 'YAML / HCL / PowerShell', percent: 10 }
    ],
    history:
      'Développé de 2024 à 2025 dans le cadre du BTS SLAM à Campus Eductive Toulon. Initialement conçu à trois puis forké en projet personnel pour finaliser les modules de gameplay et l’infrastructure automatisée.',
    architecture:
      'Architecture 3-tiers conteneurisée : un frontend React 18, un backend Express / TypeScript et une base MariaDB, chacun déployé dans son propre container Docker et orchestré via Docker Compose, avec provisioning infra-as-code (Terraform) vers AWS App Runner.',
    technicalChoices:
      'Choix de React 18 et Express.js pour un découpage clair client/serveur, TypeScript pour le typage strict, scripts Docker multi-stage pour optimiser les images, et Terraform pour garantir la reproductibilité et la montée en charge automatique.',
    technicalReflections:
      'L’usage de scripts SQL brut (mysql2) facilite la transparence des requêtes, mais l’introduction future d’un ORM (Prisma) pourrait accélérer le développement de migrations. La mise en place d’un bus d’événements (Kafka / RabbitMQ) permettrait de découpler davantage les modules métier.',
    difficulties:
      'Implémenter un service d’authentification interne robuste (AuthService + AuthMiddleware) et gérer les rôles admin/user, configurer HTTPS via certificats AWS, automatiser les backups RDS et orchestrer un pipeline CI/CD sans outil dédié (scripts PowerShell + Dockerfiles).',
    gallery: [
      'project-ressources/idlesaur/idlesaur-1.png',
      'project-ressources/idlesaur/idlesaur-2.png',
      'project-ressources/idlesaur/idlesaur-3.png'
    ]
  },
  {
    id: 'app-template',
    title: 'App Template',
    summary:
      'Template d’application full-stack avec CLI, wizard desktop et infra-as-code pour accélérer la création, le développement et le déploiement d’apps professionnelles.',
    description:
      'App Template fournit un backend NestJS modulaire, un frontend Angular 16 responsive, un CLI “appwizard” et un setup-wizard desktop (Tauri + Rust) pour initialiser l’environnement. Tous les services (PostgreSQL, Vault, MailHog, Ganache/Hardhat, blockchain) sont conteneurisés via Docker Compose, avec provisioning cloud automatisé via Terraform vers AWS ou GCP.',
    technologies: [
      'NestJS',
      'TypeScript',
      'Angular 20',
      'Tauri + Rust',
      'Solidity',
      'HTML5',
      'CSS3 / SCSS',
      'Docker & Docker Compose',
      'PostgreSQL',
      'Vault (HashiCorp)',
      'Ganache/Hardhat',
      'Prisma ORM',
      'Terraform (AWS & GCP)',
      'YAML / HCL',
      'PowerShell & Bash',
      'Commander / prompts'
    ],
    repoUrl: 'https://github.com/Kactus83/app-template',
    demoUrl: 'https://app-template.fmorena.com',
    imageUrl: 'project-ressources/app-template/app-template-logo.png',
    languageUsage: [
      { name: 'TypeScript', percent: 60 },
      { name: 'Rust', percent: 10 },
      { name: 'Solidity', percent: 10 },
      { name: 'HTML', percent: 5 },
      { name: 'CSS / SCSS', percent: 5 },
      { name: 'YAML / HCL', percent: 5 },
      { name: 'Shell (PS/Bash)', percent: 5 },
      { name: 'SQL', percent: 5 }
    ],
    history:
      'Fruit de plus de cinq années d’itérations (anciennement Auth-Boilerplate), unifié en monorepo via Git submodules pour template, CLI et wizard, et développé en 2024–2025 pour répondre aux attentes SLAM et aux standards de déploiement automatisé.',
    architecture:
      'Monorepo Git avec trois submodules (app-template, app-tooling, setup-wizard). Architecture 3-tiers conteneurisée : Backend NestJS + Prisma, Frontend Angular, services de support (DB, Vault, MailHog, blockchain), orchestrés via Docker Compose. Le CLI orchestre clone, build et deploy (Terraform + AWS/GCP), et le wizard Tauri gère l’installation des prérequis.',
    technicalChoices:
      '– Passport-JWT & AuthGuard/RolesGuard dans NestJS pour sécuriser API & CLI;\n– Prisma pour migrations et typage BD;\n– Angular PWA-ready + Tailwind/SCSS pour le front;\n– Solidity pour smart contracts blockchain;\n– Docker multi-stage et Terraform pour CI/CD reproductible;\n– Tauri/Rust pour UX native multi-plateforme.',
    technicalReflections:
      'J’envisage de refondre le domaine d’auth du backend pour utiliser uniformément les stratégies Passport (OAuth, JWT, etc.), et de réécrire le frontend en tant qu’“add-on” pour Fuse afin d’assurer une intégration transparente et pérenne.',
    difficulties:
      '– Taille croissante du monorepo et complexité du déploiement en production;\n– Fréquence élevée des mises à jour Angular/CLI/Dépendances;\n– Charge de maintenance documentaire et code, notamment pour la synchronisation des submodules et la compatibilité infra;\n– Orchestration zéro-touch du provisioning cloud via Terraform & scripts.',
    gallery: []
  },
  {
    id: "memory-game",
    title: "Memory Game",
    summary: "Jeu de mémoire implémenté en React (créé avec Create React App). Les cartes (ici des émojis) sont mélangées et présentées en grille ; l'utilisateur retourne deux cartes successivement pour trouver des paires correspondantes.",
    description: `Implémenté de manière simple, il génère un jeu de paires de cartes (valeurs emoji) et affiche un message de victoire ou défaite lorsque les conditions sont atteintes.`,
    technologies: [
      "React",
      "JavaScript (ES6+ / JSX)",
      "CSS3",
      "HTML5 (Create React App)"
    ],
    repoUrl: "https://github.com/Kactus83/memory-game",
    demoUrl: "",
    imageUrl: "project-ressources/memory/memory-cover.png",
    languageUsage: [
      { name: "JavaScript", percent: 53 },
      { name: "CSS", percent: 42 },
      { name: "HTML", percent: 5 }
    ],
    history: `Projet initié le 22 octobre 2024 comme exercice pédagogique pour découvrir React et les composants fonctionnels. Version v1, sans démo publique (clone du dépôt et \`npm start\`).`,
    architecture: `Organisation initiale “tout-en-vrac” dans **src/** : tous les composants (MemoryGame, Card, Controls, GameOver) et la logique métier sont au même niveau, sans structure de dossiers claire. C’est l’un des premiers points à refondre pour améliorer la maintenabilité et la modularisation.`,
    technicalChoices: `– Composants fonctionnels React avec hooks (*useState*, *useEffect*) pour la gestion d’état et les effets asynchrones.  
  – Animation de retournement des cartes en CSS3 (transition + transform).  
  – Séparation simple en quatre composants (MemoryGame, Card, Controls, GameOver) pour faciliter la lecture du code.`,
    technicalReflections: `Cette v1 est stable mais minimaliste : le code “tout-en-vrac” doit être réorganisé (dossiers par feature), et on peut enrichir le jeu avec profils, niveaux de difficulté et stockage local des scores.`,
    difficulties: `– Synchroniser le flip des cartes et le timer sans bloquer l’UI (management des clean-ups setTimeout/setInterval).  
  – Désactiver temporairement les clics durant l’animation pour éviter les états incohérents.  
  – Gérer le GameOver via plusieurs états combinés (timer et nombre de paires) de façon fiable.`,
    gallery: [
      "project-ressources/memory/memory-1.png"
    ]
  },
  {
    id: 'vf-robber',
    title: 'VF Robber (Very Fast Robber)',
    summary:
      'Application desktop multiplateforme (Tauri) Angular+Rust pour renommer massivement fichiers, dossiers et occurrences de texte dans un projet, avec suivi de progression en temps réel.',
    description:
      'VF Robber (VeryfastRobber) est la refonte en Angular 16 + SCSS + Rust/Tauri d’un utilitaire initialement écrit en Python il y a deux ans. Commencée le 3 mai 2025, cette version offre une interface riche pour :\n' +
      '1. Copier un dossier source vers une nouvelle destination (horodatée ou nommée).  \n' +
      '2. Scanner tous les fichiers (texte) pour rechercher/remplacer des paires de mots/expressions (avec variants de casse).  \n' +
      '3. Renommer automatiquement fichiers et répertoires en fonction des mêmes paires.  \n' +
      '4. Afficher une barre de progression et des logs en temps réel via les événements Tauri.',
    technologies: [
      'Angular 20',
      'Rust 1.71 + Tauri',
      'HTML5',
      'CSS3',
      'Node.js / npm'
    ],
    repoUrl: 'https://github.com/Kactus83/rust-robber',
    demoUrl: 'project-ressources/robber/vf-robber-03-05-2025.exe',
    imageUrl: 'project-ressources/robber/robber-logo.png',
    // Pas de vidéo pour l’instant
    languageUsage: [
      { name: 'TypeScript', percent: 45 },
      { name: 'Rust', percent: 35 },
      { name: 'SCSS', percent: 10 },
      { name: 'HTML', percent: 10 }
    ],
    history:
      'Refonte complète entamée le 3 mai 2025, basée sur un script Python de renommage de classes/template WordPress. Objectif : passer d’un proof-of-concept à un outil structuré et évolutif.',
    architecture:
      'Monorepo Tauri + Angular :\n' +
      '- **src-tauri/** (Rust) : gestion des commandes, accès au filesystem, moteur de renommage, émission d’événements de progression.  \n' +
      '- **src/app/** (Angular) : UI en TypeScript/SCSS/HTML, modules et composants pour la configuration de la paire source/destination, la liste des remplacements et l’affichage en live de l’avancement.\n' +
      'Le front déclenche les commandes Tauri via IPC et s’abonne aux événements pour mettre à jour la barre de progression et les logs.',
    technicalChoices:
      '– **Tauri + Rust** pour un exécutable natif et performant, garantissant la sûreté mémoire et un accès direct au filesystem.  \n' +
      '– **Angular 16** pour bénéficier d’un framework structuré, du binding réactif et de SCSS pour le style.  \n' +
      '– **Événements IPC** entre Rust et Angular pour un retour d’état temps réel et une UX fluide.  \n' +
      '– **npm & Cargo** pour gérer les builds frontend et backend dans un seul repo.',
    technicalReflections:
      'Cette version prouve la viabilité d’un outil Tauri/Angular pour des tâches de refactoring de code. À l’avenir, on pourrait :\n' +
      '- Ajouter la génération de rapports (CSV/JSON) des remplacements.  \n' +
      '- Intégrer un mode CLI pur Rust pour usage sans interface.  \n' +
      '- Proposer des presets de renommage pour frameworks (WordPress, Laravel, etc.).',
    difficulties:
      '– Configurer Tauri pour Windows (VS Build Tools, GTK) et macOS/Linux.  \n' +
      '– Synchroniser les événements IPC à haute fréquence sans bloquer l’UI.  \n' +
      '– Gérer les cas de fichiers verrouillés ou de permissions restreintes.  \n' +
      '– Disposer d’un exécutable multiplateforme packagé (signatures, auto-updates).',
    gallery: [
      'project-ressources/robber/robber-1.png',
      'project-ressources/robber/robber-2.png',
      'project-ressources/robber/robber-3.png',
      'project-ressources/robber/robber-4.png'
    ]
  }
  
  
];
