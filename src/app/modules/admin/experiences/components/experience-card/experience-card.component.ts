import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from '@portfolio/components/card';
import { Experience } from '../../experiences.types';

@Component({
  selector: 'app-experience-card',
  standalone: true,
  imports: [CommonModule, PortfolioCardComponent],
  templateUrl: './experience-card.component.html'
})
export class ExperienceCardComponent {
  @Input() experience!: Experience;
}
