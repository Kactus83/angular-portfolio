import { Experience } from './experiences.types';

export const ENTREPRENEUR_EXPS: Experience[] = [
  {
    id: 'barong-cbd-web',
    title: 'Création & Management - Barong CBD Shop',
    summary: 'Site e-commerce WordPress pour Barong CBD Shop',
    description:
      'Conception, développement, maintenance et optimisation SEO du site e-commerce Barong CBD Shop.',
    longDescription:
      `Remplacement d’une boutique Shopify jugée trop limitée par un site WordPress sur-mesure,  
       développé from scratch avec Divi comme page-builder. Plus de 100 références produits,  
       réécriture complète du thème, puis refonte graphique après 1 an, et intégration  
       d’un module temporaire de « cartes à gratter » virtuelles pour Noël.  
       Site maintenu deux ans avant passation à un autre prestataire.`,
    skills: [
      'WordPress',
      'PHP',
      'Divi',
      'SEO',
      'e-commerce',
      'Responsive design',
      'Performance web'
    ],
    difficulties:
      'Assurer une transition fluide de Shopify à WordPress sans perte SEO, maintenir un rendu responsive sur tous appareils et garantir des temps de chargement optimaux durant les pics de trafic.',
    steps: [
      { title: 'Audit et migration depuis Shopify' },
      { title: 'Développement du thème from scratch sous Divi' },
      { title: 'Optimisation SEO & responsive design' },
      { title: 'Refonte graphique complète (après 1 an)' },
      { title: 'Ajout d’un module « cartes à gratter » pour Noël' },
      { title: 'Passation de maintenance vers un autre prestataire' }
    ],
    technologies: ['WordPress', 'PHP', 'Divi', 'SEO'],
    startDate: '2019-10',
    endDate: '2021-10'
  },
  {
    id: 'barong-cbd-comm',
    title: 'Communication Visuelle - Barong CBD Shop',
    summary: 'Supports print & signalétique',
    description:
      'Réalisation de packaging, enseignes de magasin, flyers et autres supports pour Barong CBD Shop.',
    longDescription:
      `Prise en charge totale de la communication visuelle et sociale :  
       • Création de tous les supports print (flyers, catalogues destinés aux professionnels)  
       • Conception des enseignes pour les trois premiers points de vente  
       • Community management sur Instagram & Facebook pour animer la marque`,
    skills: [
      'Illustrator',
      'Photoshop',
      'InDesign',
      'Signalétique',
      'Packaging',
      'Community Management'
    ],
    difficulties:
      'Produire un volume élevé de visuels cohérents dans des délais serrés tout en respectant la charte et les impératifs marketing.',
    steps: [
      { title: 'Conception des supports print (flyers, packaging, catalogues pro)' },
      { title: 'Design des enseignes pour les trois magasins' },
      { title: 'Création et publication des visuels réseaux sociaux' },
      { title: 'Mise à jour régulière des visuels pour les promotions' }
    ],
    technologies: ['Illustrator', 'Photoshop', 'InDesign'],
    startDate: '2019-10',
    endDate: '2021-10'
  },
  {
    id: 'douma-automobiles',
    title: 'Site Vitrine – Douma Automobiles',
    summary: "Vitrine e-commerce sans paiement en ligne pour véhicules haut de gamme",
    description:
      'Développement d’un site vitrine sur mesure pour Douma Automobiles, intégrant filtres avancés et gestion de catalogue.',
    longDescription:
      `Mise en place d’un catalogue en ligne via WooCommerce, sans module de paiement,  
       permettant de présenter des voitures de luxe avec filtres par marque, modèle, année, kilométrage…  
       De nombreux modules JavaScript sur mesure pour la gestion dynamique des listings.`,
    skills: [
      'WordPress',
      'WooCommerce',
      'JavaScript',
      'HTML',
      'CSS',
      'UX/UI Filters'
    ],
    difficulties:
      'Adapter un thème existant à un usage catalogue sans paiement, en développant des modules JS pour des filtres personnalisés tout en garantissant une navigation fluide.',
    steps: [
      { title: 'Recueil des besoins : parcours et filtres utilisateur' },
      { title: 'Choix et adaptation du thème WooCommerce' },
      { title: 'Développement des modules JS pour filtres' },
      { title: 'Tests cross-browser et optimisation performance' }
    ],
    technologies: ['WordPress', 'WooCommerce', 'JavaScript', 'SCSS'],
    startDate: '2019-09',
    endDate: '2019-09'
  },
  {
    id: 'international-events',
    title: 'Site Vitrine – International Events',
    summary: 'Vente de packages événementiels de luxe (route 66, treks, etc.)',
    description:
      'Création d’un site vitrine WordPress pour une agence d’événementiel de luxe, interrompu par le confinement.',
    longDescription:
      `Thème WordPress construit from scratch, avec mise en avant de vidéos et photos grand format,  
       stratégie esthétique proche de celle d’une agence yachting de luxe. Prototypes graphiques validés avant interruption due au COVID-19.`,
    skills: ['WordPress', 'PHP', 'UX/UI Design', 'Media-rich Layouts'],
    difficulties:
      'Gérer un site hautement visuel tout en assurant performance et adaptabilité mobile ; projet stoppé net par le confinement.',
    steps: [
      { title: 'Wireframes et maquettes grand format' },
      { title: 'Développement du thème WordPress from scratch' },
      { title: 'Intégration des médias (vidéos, photos HD)' },
      { title: 'Validation client puis arrêt du projet (COVID-19)' }
    ],
    technologies: ['WordPress', 'PHP'],
    startDate: '2020-02',
    endDate: '2020-03'
  },
  {
    id: 'envergure-events',
    title: 'Site Vitrine – Envergure Events',
    summary: 'Vitrine mariage pour auto-entrepreneur',
    description:
      'Développement d’un site WordPress et formation à la maintenance autonome.',
    longDescription:
      `Conception du site sous Elementor et formation du client,  
       suivi d’une tentative de récupération après hack (faille Elementor non mise à jour).  
       Leçon principale : maintenir son site à jour pour éviter les vulnérabilités.`,
    skills: ['WordPress', 'Elementor', 'Sécurité Web', 'Formation Client'],
    difficulties:
      "Incident de sécurité critique suite à un oubli de mise à jour ; gestion du contournement et sensibilisation du client aux bonnes pratiques.",
    steps: [
      { title: 'Développement du site sous Elementor' },
      { title: 'Formation du client à la maintenance' },
      { title: 'Incident de sécurité : faille non patchée' },
      { title: 'Tentative de récupération du compte admin' },
      { title: 'Rédaction des bonnes pratiques de sécurité' }
    ],
    technologies: ['WordPress', 'Elementor'],
    startDate: '2019-08',
    endDate: '2019-08'
  },
  {
    id: 'services-particuliers',
    title: 'Services Numériques & Dépannage – Particuliers',
    summary: 'Création de supports de com’, domotique & outils sur mesure',
    description:
      'Prestations variées : dépannage informatique, supports de communication, installations domotiques, scripts utilitaires.',
    longDescription:
      `Projet fourre-tout pour particuliers :  
       • Dépannage PC & maintenance HomeAssistant  
       • Création de flyers et visuels pour Leboncoin/Vinted  
       • Développement d’extensions Chrome (jeux vidéo, SoundCloud à distance)`,
    skills: [
      'JavaScript',
      'HTML',
      'CSS',
      'HomeAssistant',
      'Dépannage PC',
      'Automation',
      'No-code'
    ],
    difficulties:
      'Cadrer un périmètre très hétéroclite et livrer rapidement des solutions fiables pour chaque demande spécifique.',
    steps: [
      { title: 'Diagnostic et dépannage PC' },
      { title: 'Conception de supports visuels (Leboncoin, Vinted)' },
      { title: 'Installation et configuration HomeAssistant' },
      { title: 'Développement d’extensions Chrome et scripts utilitaires' }
    ],
    technologies: ['JavaScript', 'HTML', 'CSS', 'No-code'],
    startDate: '2020-06',
    endDate: '2021-05'
  }
];

export const CHESS_EXPS: Experience[] = [
  {
    id: 'chess-translation',
    title: 'Traduction Logiciel Maritime',
    summary:
      'Localisation en français et anglais d’une application FileMaker Pro 20',
    description: '',
    longDescription: `
      Sur FileMaker Pro 20, j’ai assuré la traduction de plus d’une centaine de composants UI  
      (interfaces, scripts, listes de valeurs) du français vers l’anglais et réciproquement.  
      N’étant pas prévu nativement dans FileMaker, j’ai conçu un système de “magic value list”  
      réadapté pour gérer dynamiquement les chaînes, tout en gardant le module maintenable et évolutif.`,
    skills: [
      'FileMaker Pro 20',
      'Localisation / L10n',
      'Magic Value List Pattern',
      'Gestion de listes de valeurs',
      'Automatisation de scripts'
    ],
    difficulties:
      'Contourner les limitations de FileMaker Pro pour la gestion des listes de valeurs et des textes dynamiques, tout en garantissant une facilité de maintenance et d’évolution.',
    steps: [
      { title: 'Étude des possibilités de traduction natives et tests de plusieurs approches' },
      { title: 'Implémentation initiale d’un prototype de magic value list' },
      { title: 'Extension du prototype pour couvrir les listes de valeurs internes' },
      { title: 'Validation du système par l’équipe projet' },
      { title: 'Déploiement et généralisation sur l’ensemble des bases en production' }
    ],
    technologies: ['FileMaker Pro 20', 'JavaScript (scripts d’automatisation)'],
    startDate: '2023-10',
    endDate: '2024-01'
  },
  {
    id: 'chess-standards',
    title: 'Mise aux normes Logiciel Maritime',
    summary:
      'Conformité Bureau Veritas d’un CMS FileMaker pour le secteur maritime',
    description: '',
    longDescription: `
      Pour le Bureau Veritas Maritime, j’ai piloté l’audit et l’adaptation d’un logiciel CMS  
      sous FileMaker Pro 20 afin de satisfaire plus de cinquante points de non-conformité.  
      Livraison d’une version demo, corrections ciblées, puis revalidation du logiciel.`,
    skills: [
      'FileMaker Pro 20',
      'Audit de conformité',
      'Documentation technique',
      'Gestion de correctifs'
    ],
    difficulties:
      'Respecter des normes strictes et assurer la traçabilité des modifications sans perturber les fonctionnalités existantes.',
    steps: [
      { title: 'Préparation d’une version démo pour vérification initiale' },
      { title: 'Audit par le Bureau Veritas et recueil de la liste de 50+ points à corriger' },
      { title: 'Implémentation des correctifs dans le CMS FileMaker' },
      { title: 'Revue et validation finale par le Bureau Veritas' },
      { title: 'Livraison du manuel utilisateur (rédigé par ma collègue)' }
    ],
    technologies: ['FileMaker Pro 20'],
    startDate: '2024-03',
    endDate: '2024-07'
  },
  {
    id: 'chess-web-refonte',
    title: 'Refonte site WordPress',
    summary:
      'Double vitrine maritime et yachting sous un thème WordPress 100 % sur-mesure',
    description: 'Création d’un thème et d’un mode « switch » pour basculer entre services maritimes et yachting.',
    longDescription: `
      Développement d’un thème WordPress entièrement construit from scratch  
      permettant de passer d’une navigation « shipping » à un univers « yachting » via un simple switch.  
      Workflow : wireframes sur Figma → intégration locale → migration vers l’hébergement en place.`,
    skills: [
      'WordPress',
      'PHP',
      'Thème sur-mesure',
      'Multimode navigation',
      'Figma → prototypage'
    ],
    difficulties:
      'Gérer un contenu dynamique et bilingue selon le mode choisi, tout en maintenant la compatibilité mobile et des performances optimales.',
    steps: [
      { title: 'Conception de la maquette double-mode sur Figma' },
      { title: 'Intégration du thème WordPress en local' },
      { title: 'Développement du switch de contenu et de menu dynamique' },
      { title: 'Tests cross-device et optimisation' },
      { title: 'Migration et mise en ligne sur le serveur existant' }
    ],
    technologies: ['WordPress', 'PHP', 'JavaScript'],
    startDate: '2024-08',
    endDate: '2024-10'
  },
  {
    id: 'chess-maquette',
    title: 'Maquette Logiciel Maritime',
    summary:
      'Prototype Figma (~150 vues) pour validation interne de la future interface',
    description: '',
    longDescription: `
      Réalisation d’environ 150 écrans sur Figma pour modéliser les workflows du nouveau logiciel  
      de gestion maritime. Destiné à l’équipe interne pour tests et itérations rapides.`,
    skills: ['Figma', 'Design System', 'Prototypage'],
    difficulties: 'Aucun retour négatif, itérations fluides avec l’équipe projet.',
    steps: [
      { title: 'Brief et définition du périmètre (~150 vues)' },
      { title: 'Création du Design System et guide de style' },
      { title: 'Production des écrans sur Figma' },
      { title: 'Validation par l’équipe et export des assets' }
    ],
    technologies: ['Figma'],
    startDate: '2024-07',
    endDate: '2024-10'
  },
  {
    id: 'chess-doc-gen',
    title: 'Générateur de Documents Réglementaires',
    summary:
      'Assemblage XML/CSV pour export vers systèmes tiers, en FileMaker + JS',
    description: '',
    longDescription: `
      Développement d’un moteur de génération de documents maritimes  
      (SMS/PMS) basé sur des templates textuels avec balises, export XML/CSV  
      directement exploitables par FileMaker Pro ou autres logiciels clients.`,
    skills: [
      'FileMaker Pro 20',
      'JavaScript',
      'XML/CSV',
      'Logic Business Rules'
    ],
    difficulties:
      'Implémenter des logiques métiers complexes de législation maritime et optimiser le traitement de gros volumes de données.',
    steps: [
      { title: 'Modélisation des templates avec balises et structure hiérarchique' },
      { title: 'Script d’assemblage des morceaux de texte selon les données saisies' },
      { title: 'Gestion des exports XML/CSV synchronisés avec SMS/PMS du client' },
      { title: 'Tests de performance et correction des cas complexes' }
    ],
    technologies: ['FileMaker Pro 20', 'JavaScript'],
    startDate: '2024-10',
    endDate: '2025-01'
  },
  {
    id: 'chess-cms-maritime',
    title: 'Refonte CMS Logiciel Maritime',
    summary:
      'Refonte UI/UX et architecture d’un CMS FileMaker Pro, modules métier complets',
    description: '',
    longDescription: `
      Participation aux premières phases d’un projet de refonte totale du CMS  
      (gestion maintenance, équipage, finances, documents réglementaires, frais).  
      Objectif : améliorer l’ergonomie et réduire la dette technique.`,
    skills: [
      'FileMaker Pro 20',
      'No-code',
      'UI/UX Design',
      'Architecture logicielle'
    ],
    difficulties:
      'Concevoir une architecture modulable dans les contraintes de FileMaker tout en planifiant la migration des données existantes.',
    steps: [
      { title: 'Atelier de cadrage et design de l’architecture' },
      { title: 'Prototype des nouveaux modules UI/UX' },
      { title: 'Plan de migration et formation des utilisateurs' }
    ],
    technologies: ['FileMaker Pro 20'],
    startDate: '2024-09'
  }
];