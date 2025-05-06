import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillGroup } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';

@Component({
  selector       : 'app-skills-card',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent],
  templateUrl    : './skills-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillsCardComponent {
  @Input() skills!: SkillGroup[];
}
