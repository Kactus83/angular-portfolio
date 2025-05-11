import { Component, OnInit, OnDestroy }          from '@angular/core';
import { CommonModule }                           from '@angular/common';
import { RouterModule, ActivatedRoute }           from '@angular/router';
import { MatButtonModule }                        from '@angular/material/button';
import { MatIconModule }                          from '@angular/material/icon';
import { MatProgressBarModule }                   from '@angular/material/progress-bar';
import { PortfolioCardComponent }                 from '@portfolio/components/card';
import { Observable, Subscription }               from 'rxjs';
import { switchMap }                              from 'rxjs/operators';
import { filter }                                 from 'rxjs/operators';
import { Project }                                from '../../projects.types';
import { ProjectsService }                        from '../../projects.service';
import {
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope
} from '@ngneat/transloco';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    PortfolioCardComponent,
    TranslocoModule
  ],
  providers: [
    provideTranslocoScope("projects")
  ],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit, OnDestroy {
  project$!: Observable<Project | undefined>;
  private _sub = new Subscription();
  private _currentId!: string;

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectsService,
    private _transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    // Chargement initial
    this._route.paramMap.pipe(
      switchMap(params => {
        this._currentId = params.get('id')!;
        return this._projectsService.getProjectById(this._currentId);
      })
    ).subscribe(proj => {
      this.project$ = this._projectsService.getProjectById(this._currentId);
    });

    // Après que le fichier de traduction soit vraiment chargé, recharger le détail
    this._sub.add(
      this._transloco.events$
        .pipe(filter(e => e.type === "translationLoadSuccess"))
        .subscribe(() => {
          this.project$ = this._projectsService.getProjectById(this._currentId);
        })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}