import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Experience } from './experiences.types';
import { ENTREPRENEUR_EXPS, CHESS_EXPS } from './experiences.data';

const ALL_EXPS: Experience[] = [...ENTREPRENEUR_EXPS, ...CHESS_EXPS];

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  getEntrepreneurExperiences(): Observable<Experience[]> {
    return of(ENTREPRENEUR_EXPS);
  }

  getChessExperiences(): Observable<Experience[]> {
    return of(CHESS_EXPS);
  }

  // Nouveau : récupérer une expérience par son ID
  getExperienceById(id: string): Observable<Experience | undefined> {
    const exp = ALL_EXPS.find(e => e.id === id);
    return of(exp);
  }
}
