import { Component, Inject }                                    from '@angular/core';
import { CommonModule }                                         from '@angular/common';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule }       from '@angular/material/dialog';
import { MatIconModule }                                        from '@angular/material/icon';
import { MatProgressBarModule }                                 from '@angular/material/progress-bar';
import { MatButtonModule }                                      from '@angular/material/button';
import { PortfolioCardComponent }                                    from '@portfolio/components/card';
import { RouterModule }                                         from '@angular/router';
import { Skill, MasteryLevel, SubSkill }                        from '../../skills.types';
import { Project }                                              from 'app/modules/admin/projects/projects.types';
import { TranslocoModule } from '@ngneat/transloco';

interface DialogData {
  skill: Skill;
  projects: Project[];
}

@Component({
  selector: 'app-skill-detail-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    PortfolioCardComponent,
    RouterModule,
    TranslocoModule
  ],
  templateUrl: './skill-detail-dialog.component.html',
  styleUrls: ['./skill-detail-dialog.component.scss']
})
export class SkillDetailDialogComponent {
  constructor(
    private _dialogRef: MatDialogRef<SkillDetailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  close(): void {
    this._dialogRef.close();
  }

  /**
   * Classes pour le badge en fonction du niveau
   */
  getBadgeClasses(): string {
    switch (this.data.skill.masteryLevel) {
      case MasteryLevel.Beginner:     return 'bg-red-100 text-red-800';
      case MasteryLevel.Intermediate: return 'bg-yellow-100 text-yellow-800';
      case MasteryLevel.Advanced:     return 'bg-blue-100 text-blue-800';
      case MasteryLevel.Expert:       return 'bg-green-100 text-green-800';
      default:                        return '';
    }
  }
}
