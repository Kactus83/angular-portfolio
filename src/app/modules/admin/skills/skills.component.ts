import { Component, OnInit } from '@angular/core';
import { CommonModule }               from '@angular/common';
import { MatDialogModule }            from '@angular/material/dialog';
import { SkillsService }              from './skills.service';
import { ProjectsService }            from '../projects/projects.service';
import { Skill }                      from './skills.types';
import { Project }                    from '../projects/projects.types';
import { Observable, combineLatest }  from 'rxjs';
import { map }                        from 'rxjs/operators';
import { SkillCardComponent }         from './components/skill-card/skill-card.component';
import { SkillDetailDialogComponent } from './components/skill-detail-dialog/skill-detail-dialog.component';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

interface SkillsByCategory {
  category: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    SkillCardComponent,
    SkillDetailDialogComponent,
    TranslocoModule
  ],
  providers: [
    provideTranslocoScope('skills')
  ],
  templateUrl: './skills.component.html'
})

export class SkillsComponent implements OnInit {
  vm$!: Observable<{ groups: SkillsByCategory[]; projects: Project[] }>;

  constructor(
    private _skillsService: SkillsService,
    private _projectsService: ProjectsService
  ) {}

  ngOnInit(): void {
    const skills$   = this._skillsService.getSkills();
    const projects$ = this._projectsService.getProjects();

    const groups$ = skills$.pipe(
      map(skills => {
        const cats = Array.from(new Set(skills.map(s => s.category)));
        return cats.map(cat => ({
          category: cat,
          skills: skills.filter(s => s.category === cat)
        }));
      })
    );

    this.vm$ = combineLatest([groups$, projects$]).pipe(
      map(([groups, projects]) => ({ groups, projects }))
    );
  }

  /** Récupère les projets liés pour chaque skill. */
  getRelatedProjects(skill: Skill, projects: Project[]): Project[] {
    return skill.relatedProjectIds
      ? projects.filter(p => skill.relatedProjectIds!.includes(p.id))
      : [];
  }
}
