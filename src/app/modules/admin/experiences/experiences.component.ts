import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperiencesService } from './experiences.service';
import { Experience } from './experiences.types';
import { Observable } from 'rxjs';
import { ExperienceCardComponent } from './components/experience-card/experience-card.component';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule, FuseCardComponent, ExperienceCardComponent],
  templateUrl: './experiences.component.html'
})
export class ExperiencesComponent implements OnInit {
  entrepreneurExps$!: Observable<Experience[]>;
  chessExps$!: Observable<Experience[]>;

  constructor(private _svc: ExperiencesService) {}

  ngOnInit(): void {
    this.entrepreneurExps$ = this._svc.getEntrepreneurExperiences();
    this.chessExps$ = this._svc.getChessExperiences();
  }
}
