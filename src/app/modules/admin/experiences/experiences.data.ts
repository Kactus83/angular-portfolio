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
      'Traduction du logiciel FileMaker (No-code orienté base de données)',
    description: '',
    technologies: ['FileMaker', 'No-code'],
    startDate: '2023-10',
    endDate: '2024-01'
  },
  {
    id: 'chess-standards',
    title: 'Mise aux normes Logiciel Maritime',
    summary:
      'Mise aux normes pour validation par un organisme certification',
    description: '',
    technologies: ['FileMaker', 'No-code'],
    startDate: '2024-03',
    endDate: '2024-07'
  },
  {
    id: 'chess-web-refonte',
    title: 'Refonte site WordPress',
    summary:
      'Refonte du site WordPress avec thème personnalisé from scratch',
    description: 'Création d’un thème sur mesure et optimisation front-end.',
    technologies: ['WordPress', 'PHP', 'Tailwind CSS'],
    startDate: '2024-08',
    endDate: '2024-10'
  },
  {
    id: 'chess-maquette',
    title: 'Maquette Logiciel Maritime',
    summary:
      'Participation à la maquette du nouveau logiciel de gestion Maritime',
    description: '',
    technologies: ['Figma', 'UX'],
    startDate: '2024-07',
    endDate: '2024-10'
  },
  {
    id: 'chess-doc-gen',
    title: 'Générateur de Documents Réglementaires',
    summary:
      'Logiciel FileMaker + JavaScript pour générer des documents réglementaires',
    description: '',
    technologies: ['FileMaker', 'JavaScript'],
    startDate: '2024-10',
    endDate: '2025-01'
  },
  {
    id: 'chess-cms-maritime',
    title: 'Refonte Logiciel Maritime',
    summary:
      'Refonte du logiciel de gestion maritime (FileMaker No-code orienté BD)',
    description: '',
    technologies: ['FileMaker', 'No-code'],
    startDate: '2024-09'
  }
];
