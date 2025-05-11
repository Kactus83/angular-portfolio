import { Component, OnInit, OnDestroy }  from '@angular/core';
import { CommonModule }                   from '@angular/common';
import { ProjectsService }                from './projects.service';
import { Observable, Subscription }       from 'rxjs';
import { filter }                         from 'rxjs/operators';
import { Project }                        from './projects.types';
import { ProjectCardComponent }           from './components/project-card/project-card.component';
import {
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope
} from '@ngneat/transloco';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    CommonModule,
    ProjectCardComponent,
    TranslocoModule
  ],
  providers: [
    provideTranslocoScope("projects")
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects$!: Observable<Project[]>;
  private _sub = new Subscription();

  constructor(
    private _projectsService: ProjectsService,
    private _transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    this._loadProjects();

    // Après que le fichier de traduction soit réellement chargé, recharger la liste
    this._sub.add(
      this._transloco.events$
        .pipe(filter(e => e.type === 'translationLoadSuccess'))
        .subscribe(() => {
          this._loadProjects();
        })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  /** (Re)charge la liste des projets */
  private _loadProjects(): void {
    this.projects$ = this._projectsService.getProjects();
  }
}