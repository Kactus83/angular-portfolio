import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { VeilleService } from '../../veille.service';
import { Article } from '../../veille.types';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioCardComponent } from '@portfolio/components/card';

@Component({
  selector           : 'app-veille-article',
  standalone         : true,
  imports            : [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    PortfolioCardComponent
  ],
  templateUrl        : './veille-article.component.html',
  changeDetection    : ChangeDetectionStrategy.OnPush
})
export class VeilleArticleComponent
{
  /** Article enrichi avec le titre du secteur */
  readonly article$: Observable<Article & { sectorTitle: string }>;

  constructor(
    private _route: ActivatedRoute,
    private _service: VeilleService,
    private _location: Location
  )
  {
    this.article$ = this._route.paramMap.pipe(
      map(params => params.get('articleId')!),
      switchMap(id =>
        this._service.getSectors().pipe(
          map(sectors => {
            for (const sector of sectors) {
              const found = sector.articles.find(a => a.id === id);
              if (found) {
                return { ...found, sectorTitle: sector.title };
              }
            }
            throw new Error(`Article introuvable : ${id}`);
          })
        )
      )
    );
  }

  /** Revient à la liste des articles */
  goBack(): void {
    this._location.back();
  }
}
