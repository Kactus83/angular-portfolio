import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';

@Component({
  selector       : 'app-education-list',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent],
  templateUrl    : './education-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationListComponent {
  @Input() education!: Education[];
}
