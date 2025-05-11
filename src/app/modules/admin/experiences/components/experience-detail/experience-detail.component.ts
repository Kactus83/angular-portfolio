import { Component, OnInit, OnDestroy }           from '@angular/core';
import { CommonModule }                            from '@angular/common';
import { RouterModule, ActivatedRoute }            from '@angular/router';
import { MatIconModule }                           from '@angular/material/icon';
import { MatButtonModule }                         from '@angular/material/button';
import { MatDividerModule }                        from '@angular/material/divider';
import { Observable, Subscription }                from 'rxjs';
import { switchMap, filter }                       from 'rxjs/operators';
import { Experience }                              from '../../experiences.types';
import { ExperiencesService }                      from '../../experiences.service';
import {
  TranslocoModule,
  TranslocoService,
  provideTranslocoScope
} from '@ngneat/transloco';

@Component({
  selector: 'app-experience-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    TranslocoModule
  ],
  providers: [
    provideTranslocoScope('experiences')
  ],
  templateUrl: './experience-detail.component.html',
  styleUrls: ['./experience-detail.component.scss']
})
export class ExperienceDetailComponent implements OnInit, OnDestroy {
  experience$!: Observable<Experience | undefined>;
  private _sub = new Subscription();
  private _currentId!: string;

  constructor(
    private _route: ActivatedRoute,
    private _experiencesService: ExperiencesService,
    private _transloco: TranslocoService
  ) {}

  ngOnInit(): void {
    // Chargement initial au démarrage
    this._route.paramMap.pipe(
      switchMap(params => {
        this._currentId = params.get('id')!;
        return this._experiencesService.getExperienceById(this._currentId);
      })
    ).subscribe(() => {
      // Définit ou redéfinit l'observable
      this.experience$ = this._experiencesService.getExperienceById(this._currentId);
    });

    // Après que le fichier JSON de traduction du scope 'experiences' 
    // ait bien été chargé, on recharge les données pour appliquer les traductions
    this._sub.add(
      this._transloco.events$
        .pipe(filter(e => e.type === 'translationLoadSuccess'))
        .subscribe(() => {
          this.experience$ = this._experiencesService.getExperienceById(this._currentId);
        })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }
}
