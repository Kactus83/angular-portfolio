import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Experience } from './experiences.types';
import { ENTREPRENEUR_EXPS, CHESS_EXPS } from './experiences.data';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  getEntrepreneurExperiences(): Observable<Experience[]> {
    return of(ENTREPRENEUR_EXPS);
  }
  getChessExperiences(): Observable<Experience[]> {
    return of(CHESS_EXPS);
  }
}
