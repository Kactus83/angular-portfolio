import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Skill, MasteryLevel, SubSkill } from './skills.types';

const SKILLS: Skill[] = [
  {
    id: 'wordpress-cms',
    name: 'Gestion de CMS (WordPress)',
    icon: 'heroicons_outline:globe-alt',
    masteryLevel: MasteryLevel.Expert,
    subSkills: [
      { name: 'Installation', mastery: 95 },
      { name: 'Configuration', mastery: 90 },
      { name: 'Sécurisation', mastery: 85 },
      { name: 'Optimisation', mastery: 90 }
    ],
    category: 'Programmation Informatique',
    description: 'Installation, configuration, sécurisation et optimisation de sites WordPress.',
    personalNotes: 'J’ai monté et sécurisé plus de 10 sites pour des clients, en gérant hébergement et mises à jour.',
    relatedProjectIds: ['sasu-wordpress-sites', 'chess-wordpress']
  },
  {
    id: 'typescript-angular',
    name: 'TypeScript / Angular',
    icon: 'heroicons_outline:code-bracket-square',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'RxJS', mastery: 80 },
      { name: 'NgRx', mastery: 70 },
      { name: 'Routing', mastery: 85 },
      { name: 'Forms', mastery: 75 }
    ],
    category: 'Programmation Informatique',
    description: 'Développement d’applications Single-Page avec Angular.',
    personalNotes: 'J’ai conçu plusieurs modules réutilisables et optimisé les performances via lazy-loading.',
    relatedProjectIds: ['theme-color-generator', 'chess-frontend-backend']
  },
  {
    id: 'algorithmique',
    name: 'Algorithmique',
    icon: 'heroicons_outline:calculator',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'Complexité', mastery: 80 },
      { name: 'Structures de données', mastery: 85 }
    ],
    category: 'Programmation Informatique',
    description: 'Conception et optimisation d’algorithmes.',
    personalNotes: 'J’ai participé à des challenges de code sur Hackerrank et LeetCode.',
    relatedProjectIds: ['space-invaders']
  },
  {
    id: 'web3-solidity',
    name: 'Notions Web3 (Solidity)',
    icon: 'heroicons_outline:cube',
    masteryLevel: MasteryLevel.Beginner,
    subSkills: [
      { name: 'Smart Contracts', mastery: 30 }
    ],
    category: 'Programmation Informatique',
    personalNotes: 'Expérimentations basiques sur Remix et Truffle.',
  },
  {
    id: 'osi-model',
    name: 'Modèle OSI',
    icon: 'heroicons_outline:server-stack',
    masteryLevel: MasteryLevel.Intermediate,
    subSkills: [
      { name: 'Couche Physique', mastery: 60 },
      { name: 'Couche Réseau', mastery: 55 }
    ],
    category: 'Réseau / Sécurité',
    description: 'Compréhension des 7 couches et de leur rôle.',
    personalNotes: 'Mise en place de firewalls et VLANs en environnement pro.'
  },
  {
    id: 'wireless-comm',
    name: 'Communication sans fil',
    icon: 'heroicons_outline:wifi',
    masteryLevel: MasteryLevel.Intermediate,
    subSkills: [
      { name: 'Wi-Fi', mastery: 50 },
      { name: 'Bluetooth', mastery: 45 }
    ],
    category: 'Réseau / Sécurité',
    personalNotes: 'Déploiement de réseaux Wi-Fi d’entreprise, optimisation de couverture.'
  },
  {
    id: 'adobe-cc',
    name: 'Adobe Creative Cloud',
    icon: 'heroicons_outline:color-swatch',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'Illustrator', mastery: 70 },
      { name: 'Photoshop', mastery: 75 },
      { name: 'InDesign', mastery: 65 }
    ],
    category: 'Divers',
    description: 'Illustrator, Photoshop, InDesign pour supports print & web.',
    personalNotes: 'Conception de chartes graphiques et logos pour startups.',
    relatedProjectIds: ['sasu-communication-graphisme']
  }
];

@Injectable({ providedIn: 'root' })
export class SkillsService {
  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }
}
