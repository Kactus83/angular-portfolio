import { Component }            from '@angular/core';
import { CommonModule }         from '@angular/common';
import { ProjectsService }      from './projects.service';
import { Observable }           from 'rxjs';
import { Project }              from './projects.types';
import { ProjectCardComponent } from './components/project-card/project-card.component';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

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
export class ProjectsComponent {
  projects$: Observable<Project[]> = this._projectsService.getProjects();
  constructor(private _projectsService: ProjectsService) {}
}
