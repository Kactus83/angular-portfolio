import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector       : 'app-experiences-list',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent, TranslocoModule],
  templateUrl    : './experiences-list.component.html',
  providers: [
    provideTranslocoScope('profile')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesListComponent {
  @Input() experiences!: Experience[];
}
