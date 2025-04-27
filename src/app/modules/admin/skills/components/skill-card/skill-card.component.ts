import { Component, Input }             from '@angular/core';
import { CommonModule }                 from '@angular/common';
import { MatDialog, MatDialogModule }   from '@angular/material/dialog';
import { MatIconModule }                from '@angular/material/icon';
import { FuseCardComponent }            from '@fuse/components/card';
import { Skill, MasteryLevel }          from '../../skills.types';
import { Project }                      from 'app/modules/admin/projects/projects.types';
import { SkillDetailDialogComponent }   from '../skill-detail-dialog/skill-detail-dialog.component';

@Component({
  selector: 'app-skill-card',
  standalone: true,
  imports: [
    CommonModule,
    FuseCardComponent,
    MatIconModule,
    MatDialogModule
  ],
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss']
})
export class SkillCardComponent {
  @Input() skill!: Skill;
  @Input() projects: Project[] = [];

  /**
   * Nombre de segments à colorer selon le niveau global.
   */
  segmentCount(): number {
    switch (this.skill.masteryLevel) {
      case MasteryLevel.Beginner:     return 1;
      case MasteryLevel.Intermediate: return 2;
      case MasteryLevel.Advanced:     return 3;
      case MasteryLevel.Expert:       return 4;
      default:                        return 0;
    }
  }

  openDetail(): void {
    this._dialog.open(SkillDetailDialogComponent, {
      data: { skill: this.skill, projects: this.projects },
      panelClass: 'skill-detail-fullscreen',
      backdropClass: 'skill-detail-backdrop',
      width: '100vw', height: '100vh',
      maxWidth: '100vw', maxHeight: '100vh'
    });
  }

  constructor(private _dialog: MatDialog) {}
}
