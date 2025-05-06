import { Component, Input }           from '@angular/core';
import { CommonModule }               from '@angular/common';
import { RouterModule, RouterLink }   from '@angular/router';
import { MatIconModule }              from '@angular/material/icon';
import { PortfolioCardComponent }          from '@portfolio/components/card';
import { Project }                    from '../../projects.types';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterLink,
    MatIconModule,
    PortfolioCardComponent
  ],
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent {
  @Input() project!: Project;
}
