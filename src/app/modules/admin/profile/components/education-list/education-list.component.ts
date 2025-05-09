import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector       : 'app-education-list',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent, TranslocoModule],
  templateUrl    : './education-list.component.html',
  providers: [
    provideTranslocoScope('profile')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationListComponent {
  @Input() education!: Education[];
}
