import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';

@Component({
  selector       : 'app-experiences-list',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent],
  templateUrl    : './experiences-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesListComponent {
  @Input() experiences!: Experience[];
}
