import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector       : 'app-skills-card',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent, TranslocoModule],
  templateUrl    : './skills-card.component.html',
  providers: [
    provideTranslocoScope('profile')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsCardComponent {
  @Input() skills!: SkillGroup[];
}
