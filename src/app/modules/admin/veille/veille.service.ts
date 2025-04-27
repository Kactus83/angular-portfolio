import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sector } from './veille.types';

import { CODE_QUALITY_ARTICLES }       from './data/code-quality.articles';
import { ARCHITECTURE_ARTICLES }      from './data/architecture-logicielle.articles';
import { IOT_ARTICLES }               from './data/iot.articles';
import { IA_ARTICLES }                from './data/ia.articles';
import { LANG_NEW_TECH_ARTICLES }     from './data/languages-new-tech.articles';

@Injectable({ providedIn: 'root' })
export class VeilleService
{
  getSectors(): Observable<Sector[]> {
    return of([
      {
        id:          'code-quality',
        title:       'Qualité de code',
        subtitle:    'Clean Code & best practices',
        icon:        'heroicons_solid:academic-cap',
        description:
          `Lecture approfondie de "Clean Code", linters, revues de code…`,
        articles:    CODE_QUALITY_ARTICLES
      },
      {
        id:          'architecture-logicielle',
        title:       'Architecture logicielle',
        subtitle:    'SOLID & Design Patterns',
        icon:        'heroicons_solid:puzzle-piece',
        description:
          `Principes SOLID, Clean Architecture, patterns courants…`,
        articles:    ARCHITECTURE_ARTICLES
      },
      {
        id:          'iot',
        title:       'IoT & Micro-contrôleurs',
        subtitle:    'Arduino, ESP32, Particle…',
        icon:        'heroicons_solid:cpu-chip',
        description:
          `Prototypes hardware, communication MQTT, capteurs…`,
        articles:    IOT_ARTICLES
      },
      {
        id:          'intelligence-artificielle',
        title:       'Intelligence Artificielle',
        subtitle:    'Modèles & Prompt-Engineering',
        icon:        'heroicons_solid:light-bulb',
        description:
          `Comparaisons de LLM, prompt engineering, fine-tuning…`,
        articles:    IA_ARTICLES
      },
      {
        id:          'langages-nouvelles-techno',
        title:       'Langages & nouvelles techno',
        subtitle:    'Rust, Go, NestJS…',
        icon:        'heroicons_solid:code-bracket',
        description:
          `Rust vs Go, découverte de NestJS, etc.`,
        articles:    LANG_NEW_TECH_ARTICLES
      }
    ]);
  }
}