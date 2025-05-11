import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioCardComponent } from '@portfolio/components/card';
import { Experience } from '../../experiences.types';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    PortfolioCardComponent,
    TranslocoModule
  ],
  providers: [
    provideTranslocoScope('experiences')
  ],
  templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
}
