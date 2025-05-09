import { Injectable } from '@angular/core';
import { Observable, combineLatest, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { TranslocoService } from '@ngneat/transloco';
import { Project } from './projects.types';
import { PROJECTS } from './projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly scope = 'projects';

  constructor(private transloco: TranslocoService) {}

  getProjects(): Observable<Project[]> {
    // Pour chaque projet, on prépare un flux de traductions sur chacun des champs
    return of(PROJECTS).pipe(
      map(list =>
        list.map(p => {
          // Clés statiques pour ce projet
          const id = p.id;
          // On va construire un nouvel objet Project en traduisant champ à champ
          return {
            ...p,
            title: this.transloco.translate(`${id}.title`, {}, this.scope),
            summary: this.transloco.translate(`${id}.summary`, {}, this.scope),
            description: this.transloco.translate(`${id}.description`, {}, this.scope),
            history: this.transloco.translate(`${id}.history`, {}, this.scope),
            architecture: this.transloco.translate(`${id}.architecture`, {}, this.scope),
            technicalChoices: this.transloco.translate(`${id}.technicalChoices`, {}, this.scope),
            technicalReflections: this.transloco.translate(`${id}.technicalReflections`, {}, this.scope),
            difficulties: this.transloco.translate(`${id}.difficulties`, {}, this.scope),
            // subSkills & languageUsage restent bruts, on ne les traduit pas ici
            // car ils viennent d'un scope séparé ou sont déjà en anglais/numériques
          } as Project;
        })
      )
    );
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.getProjects().pipe(
      map(list => list.find(p => p.id === id))
    );
  }
}
