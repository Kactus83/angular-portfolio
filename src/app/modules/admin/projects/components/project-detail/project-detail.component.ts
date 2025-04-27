import { Component, OnInit }        from '@angular/core';
import { CommonModule }              from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatButtonModule }           from '@angular/material/button';
import { MatIconModule }             from '@angular/material/icon';
import { MatProgressBarModule }      from '@angular/material/progress-bar';
import { FuseCardComponent }         from '@fuse/components/card';
import { Observable }                from 'rxjs';
import { switchMap }                 from 'rxjs/operators';
import { Project }                   from '../../projects.types';
import { ProjectsService }           from '../../projects.service';

@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    FuseCardComponent
  ],
  templateUrl: './project-detail.component.html'
})
export class ProjectDetailComponent implements OnInit {
  project$!: Observable<Project | undefined>;

  constructor(
    private _route: ActivatedRoute,
    private _projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    this.project$ = this._route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this._projectsService.getProjectById(id);
      })
    );
  }
}
