import {
  Component,
  Input,
  ChangeDetectionStrategy,
  OnInit,
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioCardComponent } from '@portfolio/components/card';
import {
  TranslocoModule,
  TranslocoService,
  TranslocoEvents,
  Translation
} from '@ngneat/transloco';
import { LanguageSkill } from '../../profile.service';
import { Observable, Subscription, of } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector       : 'app-languages-card',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent, TranslocoModule],
  templateUrl    : './languages-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagesCardComponent implements OnInit, OnDestroy {
  @Input() languages: LanguageSkill[] = [];

  activeLangCode!: string;
  activeSkill?: LanguageSkill;
  phrase$!: Observable<string>;

  private _sub = new Subscription();

  constructor(private transloco: TranslocoService) {}

  ngOnInit(): void {
    // 1) Détermine la langue active au démarrage
    const saved = localStorage.getItem('preferredLang');
    this.activeLangCode = saved && this.transloco
        .getAvailableLangs()
        .some(l => l.id === saved)
      ? saved
      : this.transloco.getActiveLang();

    // 2) Initialise tout de suite
    this.updateActiveSkill();

    // 3) Réagit aux changements de langue
    this._sub.add(
      this.transloco.langChanges$.subscribe(lang => {
        this.activeLangCode = lang;
        this.updateActiveSkill();
      })
    );

    // 4) Réagit au chargement effectif du JSON de traduction
    this._sub.add(
      this.transloco.events$
        .pipe(filter(e => e.type === 'translationLoadSuccess'))
        .subscribe(() => {
          // quand le fichier .json est chargé, on reconstruit la phrase
          this.updateActiveSkill();
        })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  /** Met à jour la skill et la phrase traduite */
  private updateActiveSkill(): void {
    if (!this.languages.length) {
      this.phrase$ = of('');
      return;
    }

    this.activeSkill = this.languages.find(
      l => l.code === this.activeLangCode
    );

    if (this.activeSkill) {
      this.phrase$ = this.transloco.selectTranslate(
        'profile.languages.phrase',
        {
          language: this.transloco.translate(this.activeSkill.labelKey),
          percent: this.activeSkill.proficiency
        }
      );
    } else {
      this.phrase$ = of('');
    }
  }

  /** Style inline pour la jauge conique */
  gaugeStyle(p: number): { [key: string]: string } {
    const angle = p * 3.6;
    return {
      background: `conic-gradient(var(--fuse-primary-500) 0deg, var(--fuse-primary-500) ${angle}deg, #e5e7eb ${angle}deg, #e5e7eb 360deg)`
    };
  }
}
