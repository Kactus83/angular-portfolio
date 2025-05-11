import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';
import { Experience, Step } from './experiences.types';
import { ENTREPRENEUR_EXPS, CHESS_EXPS } from './experiences.data';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  private readonly scope = 'experiences';

  constructor(private transloco: TranslocoService) {}

  /**
   * Reconstruit une Experience traduite à partir de l’objet statique + JSON i18n.
   */
  private translateExp(exp: Experience, group: 'entrepreneur' | 'chess'): Experience {
    const prefix = `${group}.${exp.id}`; // e.g. "entrepreneur.barong-cbd-web"

    return {
      id: exp.id,

      // –––––– TEXTES SIMPLES ––––––
      title:           this.transloco.translate(`${prefix}.title`, {}, this.scope),
      summary:         this.transloco.translate(`${prefix}.summary`, {}, this.scope),
      description:     this.transloco.translate(`${prefix}.description`, {}, this.scope),
      longDescription: this.transloco.translate(`${prefix}.longDescription`, {}, this.scope),
      difficulties:    this.transloco.translate(`${prefix}.difficulties`, {}, this.scope),

      // –––––– DATES ––––––
      startDate: this.transloco.translate(`${prefix}.startDate`, {}, this.scope),
      endDate:   this.transloco.translate(`${prefix}.endDate`, {}, this.scope),

      // –––––– LISTES DE CHAÎNES ––––––
      // ici on traduit le tableau complet d’un coup
      skills:       this.transloco.translate<string[]>(`${prefix}.skills`, {}, this.scope),
      technologies: this.transloco.translate<string[]>(`${prefix}.technologies`, {}, this.scope),

      // –––––– ETAPES (TABLEAU D’OBJETS) ––––––
      steps: this.transloco.translate<Step[]>(`${prefix}.steps`, {}, this.scope),

      // –––––– CHAMPS NON-TRADUITS ––––––
      gallery: exp.gallery
    };
  }

  /** Liste traduite des expériences entrepreneuriales */
  getEntrepreneurExperiences(): Observable<Experience[]> {
    return of(ENTREPRENEUR_EXPS).pipe(
      map(list => list.map(exp => this.translateExp(exp, 'entrepreneur')))
    );
  }

  /** Liste traduite des expériences CHESS */
  getChessExperiences(): Observable<Experience[]> {
    return of(CHESS_EXPS).pipe(
      map(list => list.map(exp => this.translateExp(exp, 'chess')))
    );
  }

  /** Recherche une expérience par son id, dans les deux tableaux */
  getExperienceById(id: string): Observable<Experience|undefined> {
    return combineLatest({
      ent: this.getEntrepreneurExperiences(),
      chs: this.getChessExperiences()
    }).pipe(
      map(({ ent, chs }) => [...ent, ...chs].find(e => e.id === id))
    );
  }
}