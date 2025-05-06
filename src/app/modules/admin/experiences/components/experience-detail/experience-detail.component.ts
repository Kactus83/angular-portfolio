import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Experience } from '../../experiences.types';
import { ExperiencesService } from '../../experiences.service';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent implements OnInit {
  experience$!: Observable<Experience | undefined>;

  constructor(
    private _route: ActivatedRoute,
    private _experiencesService: ExperiencesService
  ) {}

  ngOnInit(): void {
    this.experience$ = this._route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this._experiencesService.getExperienceById(id);
      })
    );
  }
}
