import { Component, OnInit, OnDestroy }         from '@angular/core';
import { CommonModule }                          from '@angular/common';
import { Observable, Subscription }              from 'rxjs';
import { filter }                                from 'rxjs/operators';
import { ExperiencesService }                    from './experiences.service';
import { Experience }                            from './experiences.types';
import { ExperienceCardComponent }               from './components/experience-card/experience-card.component';
import { PortfolioCardComponent }                from '@portfolio/components/card';
import {
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope,
  TranslocoEvents
} from '@ngneat/transloco';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [
    CommonModule,
    PortfolioCardComponent,
    ExperienceCardComponent,
    TranslocoModule
  ],
  providers: [
    provideTranslocoScope('experiences')
  ],
  templateUrl: './experiences.component.html'
})
export class ExperiencesComponent implements OnInit, OnDestroy {
  entrepreneurExps$!: Observable<Experience[]>;
  chessExps$!: Observable<Experience[]>;
  private _sub = new Subscription();

  constructor(
    private _svc: ExperiencesService,
    private _transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    // Chargement initial
    this._loadAll();

    // Après que le JSON de traduction soit chargé, on recharge les expériences
    this._sub.add(
      this._transloco.events$
        .pipe(filter(e => e.type === 'translationLoadSuccess'))
        .subscribe(() => {
          this._loadAll();
        })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  /** (Re)charge les deux observables d'expériences */
  private _loadAll(): void {
    this.entrepreneurExps$ = this._svc.getEntrepreneurExperiences();
    this.chessExps$        = this._svc.getChessExperiences();
  }
}
