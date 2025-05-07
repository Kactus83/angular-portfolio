import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Skill, MasteryLevel, SubSkill } from './skills.types';

const SKILLS: Skill[] = [
  {
    id: 'wordpress-cms',
    name: 'pages.skills.skills.wordpressCms.name',
    icon: 'heroicons_outline:globe-alt',
    masteryLevel: MasteryLevel.Expert,
    subSkills: [
      { name: 'pages.skills.skills.wordpressCms.subSkills.installation', mastery: 95 },
      { name: 'pages.skills.skills.wordpressCms.subSkills.configuration', mastery: 90 },
      { name: 'pages.skills.skills.wordpressCms.subSkills.securisation', mastery: 85 },
      { name: 'pages.skills.skills.wordpressCms.subSkills.optimisation', mastery: 90 }
    ],
    category: 'pages.skills.categories.programming',
    description: 'pages.skills.skills.wordpressCms.description',
    personalNotes: 'pages.skills.skills.wordpressCms.personalNotes',
    relatedProjectIds: ['sasu-wordpress-sites', 'chess-wordpress']
  },
  {
    id: 'typescript-angular',
    name: 'pages.skills.skills.typescriptAngular.name',
    icon: 'heroicons_outline:code-bracket-square',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'pages.skills.skills.typescriptAngular.subSkills.rxjs', mastery: 80 },
      { name: 'pages.skills.skills.typescriptAngular.subSkills.ngrx', mastery: 70 },
      { name: 'pages.skills.skills.typescriptAngular.subSkills.routing', mastery: 85 },
      { name: 'pages.skills.skills.typescriptAngular.subSkills.forms', mastery: 75 }
    ],
    category: 'pages.skills.categories.programming',
    description: 'pages.skills.skills.typescriptAngular.description',
    personalNotes: 'pages.skills.skills.typescriptAngular.personalNotes',
    relatedProjectIds: ['theme-color-generator', 'chess-frontend-backend']
  },
  {
    id: 'algorithmique',
    name: 'pages.skills.skills.algorithmique.name',
    icon: 'heroicons_outline:calculator',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'pages.skills.skills.algorithmique.subSkills.complexite', mastery: 80 },
      { name: 'pages.skills.skills.algorithmique.subSkills.structures', mastery: 85 }
    ],
    category: 'pages.skills.categories.programming',
    description: 'pages.skills.skills.algorithmique.description',
    personalNotes: 'pages.skills.skills.algorithmique.personalNotes',
    relatedProjectIds: ['space-invaders']
  },
  {
    id: 'web3-solidity',
    name: 'pages.skills.skills.web3Solidity.name',
    icon: 'heroicons_outline:cube',
    masteryLevel: MasteryLevel.Beginner,
    subSkills: [
      { name: 'pages.skills.skills.web3Solidity.subSkills.smartContracts', mastery: 30 }
    ],
    category: 'pages.skills.categories.programming',
    description: 'pages.skills.skills.web3Solidity.description',
    personalNotes: 'pages.skills.skills.web3Solidity.personalNotes',
    relatedProjectIds: []
  },
  {
    id: 'osi-model',
    name: 'pages.skills.skills.osiModel.name',
    icon: 'heroicons_outline:server-stack',
    masteryLevel: MasteryLevel.Intermediate,
    subSkills: [
      { name: 'pages.skills.skills.osiModel.subSkills.physique', mastery: 60 },
      { name: 'pages.skills.skills.osiModel.subSkills.reseau', mastery: 55 }
    ],
    category: 'pages.skills.categories.security',
    description: 'pages.skills.skills.osiModel.description',
    personalNotes: 'pages.skills.skills.osiModel.personalNotes',
    relatedProjectIds: []
  },
  {
    id: 'wireless-comm',
    name: 'pages.skills.skills.wirelessComm.name',
    icon: 'heroicons_outline:wifi',
    masteryLevel: MasteryLevel.Intermediate,
    subSkills: [
      { name: 'pages.skills.skills.wirelessComm.subSkills.wifi', mastery: 50 },
      { name: 'pages.skills.skills.wirelessComm.subSkills.bluetooth', mastery: 45 }
    ],
    category: 'pages.skills.categories.security',
    description: 'pages.skills.skills.wirelessComm.description',
    personalNotes: 'pages.skills.skills.wirelessComm.personalNotes',
    relatedProjectIds: []
  },
  {
    id: 'adobe-cc',
    name: 'pages.skills.skills.adobeCc.name',
    icon: 'heroicons_outline:color-swatch',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'pages.skills.skills.adobeCc.subSkills.illustrator', mastery: 70 },
      { name: 'pages.skills.skills.adobeCc.subSkills.photoshop', mastery: 75 },
      { name: 'pages.skills.skills.adobeCc.subSkills.indesign', mastery: 65 }
    ],
    category: 'pages.skills.categories.misc',
    description: 'pages.skills.skills.adobeCc.description',
    personalNotes: 'pages.skills.skills.adobeCc.personalNotes',
    relatedProjectIds: ['sasu-communication-graphisme']
  }
];

@Injectable({ providedIn: 'root' })
export class SkillsService {
  getSkills(): Observable<Skill[]> {
    return of(SKILLS);
  }
}