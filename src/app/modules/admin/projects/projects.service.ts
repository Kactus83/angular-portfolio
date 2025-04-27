import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Project } from './projects.types';
import { PROJECTS } from './projects.data';

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  getProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return of(PROJECTS.find((p) => p.id === id));
  }
}
