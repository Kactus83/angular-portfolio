import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';
import { Skill, MasteryLevel, SubSkill } from './skills.types';

const RAW_SKILLS: Skill[] = [
  {
    id: 'wordpress-cms',
    name: 'skills.wordpressCms.name',
    icon: 'heroicons_outline:globe-alt',
    masteryLevel: MasteryLevel.Expert,
    subSkills: [
      { name: 'skills.wordpressCms.subSkills.installation', mastery: 95 },
      { name: 'skills.wordpressCms.subSkills.configuration', mastery: 90 },
      { name: 'skills.wordpressCms.subSkills.securisation', mastery: 85 },
      { name: 'skills.wordpressCms.subSkills.optimisation', mastery: 90 }
    ],
    category: 'categories.programming',
    description: 'skills.wordpressCms.description',
    personalNotes: 'skills.wordpressCms.personalNotes',
    relatedProjectIds: ['sasu-wordpress-sites', 'chess-wordpress']
  },
  {
    id: 'typescript-angular',
    name: 'skills.typescriptAngular.name',
    icon: 'heroicons_outline:code-bracket-square',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'skills.typescriptAngular.subSkills.rxjs', mastery: 80 },
      { name: 'skills.typescriptAngular.subSkills.ngrx', mastery: 70 },
      { name: 'skills.typescriptAngular.subSkills.routing', mastery: 85 },
      { name: 'skills.typescriptAngular.subSkills.forms', mastery: 75 }
    ],
    category: 'categories.programming',
    description: 'skills.typescriptAngular.description',
    personalNotes: 'skills.typescriptAngular.personalNotes',
    relatedProjectIds: ['theme-color-generator', 'chess-frontend-backend']
  },
  {
    id: 'algorithmique',
    name: 'skills.algorithmique.name',
    icon: 'heroicons_outline:calculator',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'skills.algorithmique.subSkills.complexite', mastery: 80 },
      { name: 'skills.algorithmique.subSkills.structures', mastery: 85 }
    ],
    category: 'categories.programming',
    description: 'skills.algorithmique.description',
    personalNotes: 'skills.algorithmique.personalNotes',
    relatedProjectIds: ['space-invaders']
  },
  {
    id: 'web3-solidity',
    name: 'skills.web3Solidity.name',
    icon: 'heroicons_outline:cube',
    masteryLevel: MasteryLevel.Beginner,
    subSkills: [
      { name: 'skills.web3Solidity.subSkills.smartContracts', mastery: 30 }
    ],
    category: 'categories.programming',
    description: 'skills.web3Solidity.description',
    personalNotes: 'skills.web3Solidity.personalNotes',
    relatedProjectIds: []
  },
  {
    id: 'osi-model',
    name: 'skills.osiModel.name',
    icon: 'heroicons_outline:server-stack',
    masteryLevel: MasteryLevel.Intermediate,
    subSkills: [
      { name: 'skills.osiModel.subSkills.physique', mastery: 60 },
      { name: 'skills.osiModel.subSkills.reseau', mastery: 55 }
    ],
    category: 'categories.security',
    description: 'skills.osiModel.description',
    personalNotes: 'skills.osiModel.personalNotes',
    relatedProjectIds: []
  },
  {
    id: 'wireless-comm',
    name: 'skills.wirelessComm.name',
    icon: 'heroicons_outline:wifi',
    masteryLevel: MasteryLevel.Intermediate,
    subSkills: [
      { name: 'skills.wirelessComm.subSkills.wifi', mastery: 50 },
      { name: 'skills.wirelessComm.subSkills.bluetooth', mastery: 45 }
    ],
    category: 'categories.security',
    description: 'skills.wirelessComm.description',
    personalNotes: 'skills.wirelessComm.personalNotes',
    relatedProjectIds: []
  },
  {
    id: 'adobe-cc',
    name: 'skills.adobeCc.name',
    icon: 'heroicons_outline:color-swatch',
    masteryLevel: MasteryLevel.Advanced,
    subSkills: [
      { name: 'skills.adobeCc.subSkills.illustrator', mastery: 70 },
      { name: 'skills.adobeCc.subSkills.photoshop', mastery: 75 },
      { name: 'skills.adobeCc.subSkills.indesign', mastery: 65 }
    ],
    category: 'categories.misc',
    description: 'skills.adobeCc.description',
    personalNotes: 'skills.adobeCc.personalNotes',
    relatedProjectIds: ['sasu-communication-graphisme']
  }
];

@Injectable({ providedIn: 'root' })
export class SkillsService {
  constructor(private transloco: TranslocoService) {}

  getSkills(): Observable<Skill[]> {
    return of(RAW_SKILLS).pipe(
      map(skills =>
        skills.map(skill => ({
          ...skill,
          // Traduction des champs via Transloco en scope "skills"
          name: this.transloco.translate(skill.name, {}, 'skills'),
          category: this.transloco.translate(skill.category, {}, 'skills'),
          description: this.transloco.translate(skill.description, {}, 'skills'),
          personalNotes: this.transloco.translate(skill.personalNotes, {}, 'skills'),
          subSkills: skill.subSkills.map((ss: SubSkill) => ({
            ...ss,
            name: this.transloco.translate(ss.name, {}, 'skills')
          }))
        }))
      )
    );
  }
}
