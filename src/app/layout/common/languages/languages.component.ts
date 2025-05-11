import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    AfterViewInit,
    OnDestroy,
    OnInit,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
    PortfolioNavigationService,
    PortfolioVerticalNavigationComponent,
} from '@portfolio/components/navigation';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { NavigationService } from 'app/core/navigation/navigation.service';
import { Subject, take, skip } from 'rxjs';
import { provideTranslocoScope } from '@ngneat/transloco';

// Clé pour stocker le la langue préférée dans le local storage
const STORAGE_KEY = 'preferredLang';

/**
 * Composant de sélection de la langue et traduction de la navigation
 */
@Component({
    selector: 'languages',
    templateUrl: './languages.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'languages',
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, NgTemplateOutlet],
    providers: [
      provideTranslocoScope('navigation'), 
    ]
})
export class LanguagesComponent implements OnInit, AfterViewInit, OnDestroy {
    /** Liste des langues disponibles */
    availableLangs: AvailableLangs;

    /** Langue active */
    activeLang: string;

    /** Codes ISO des drapeaux pour chaque langue */
    flagCodes: Record<string, string>;

    /** Référence au composant de navigation (mainNavigation) */
    @ViewChild(PortfolioVerticalNavigationComponent, { static: false })
    private _navComponent: PortfolioVerticalNavigationComponent;

    /** Subject pour nettoyer les abonnements */
    private _unsubscribeAll = new Subject<void>();

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _portfolioNavigationService: PortfolioNavigationService,
        private _navigationService: NavigationService,
        private _translocoService: TranslocoService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    ngOnInit(): void {

        // 0) Vérifie si une langue préférée est déjà enregistrée dans le local storage
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved && this._translocoService.getAvailableLangs().some(l => l.id === saved)) {
          this._translocoService.setActiveLang(saved);
        }

        // 1) Récupère les langues disponibles et initialise les drapeaux
        this.availableLangs = this._translocoService.getAvailableLangs();
        // Penser ajouter it et es quand traduit
        this.flagCodes = { en: 'us', fr: 'fr', zh: 'zh', es: 'es', it: 'it' };

        // 2) Langue active actuelle
        this.activeLang = this._translocoService.getActiveLang();

        // 3) Écoute le premier événement de changement de langue pour init
        this._translocoService.langChanges$
            .pipe(take(1))
            .subscribe((lang) => {
                this._doTranslate(lang);
            });

        // 4) Écoute les changements suivants de langue
        this._translocoService.langChanges$
            .pipe(skip(1))
            .subscribe((lang) => {
                this._doTranslate(lang);
            });
    }

    ngAfterViewInit(): void {
        // Dès que la view est ready, répète la traduction pour être sûr
        this._doTranslate(this.activeLang);
    }

    ngOnDestroy(): void {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Change la langue active de Transloco
     */
    setActiveLang(lang: string): void {
        console.log('[Languages] setActiveLang requested:', lang);
        console.log('[Languages] current activeLang before set:', this.activeLang, 'current flag:', this.flagCodes[this.activeLang]);
        this._translocoService.setActiveLang(lang);
        localStorage.setItem(STORAGE_KEY, lang);
    }

    /**
     * trackBy pour ngFor
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Traduit tous les items de navigation pour la langue donnée
     */
    private _doTranslate(lang: string): void {
        this.activeLang = lang;

        const navComponent =
            this._navComponent ||
            this._portfolioNavigationService.getComponent<PortfolioVerticalNavigationComponent>('mainNavigation');

        if (!navComponent) {
            console.warn('[Languages] navComponent non trouvé');
            return;
        }

        const navigation = navComponent.navigation;

        // Traduction **asynchrone** des titres et descriptions
        navigation.forEach((item) => {
            const titleKey = `navigation.${item.id}.title`;
            this._translocoService.selectTranslate(titleKey, {}, 'navigation')
                .pipe(take(1))
                .subscribe(translatedTitle => {
                    item.title = translatedTitle;
                    navComponent.refresh();
                });

            if ((item as any).desc !== undefined) {
                const descKey = `navigation.${item.id}.desc`;
                this._translocoService.selectTranslate(descKey, {}, 'navigation')
                    .pipe(take(1))
                    .subscribe(translatedDesc => {
                        (item as any).desc = translatedDesc;
                        navComponent.refresh();
                    });
            }
        });

        // Traduction asynchrone des tableaux de bord spécifiques
        // Pensern a adapter si beosin, mais pas sûr car normalement, 
        // j'ai réussi a gérer cela dans els composants eux memes
        const dashboards = [
            { id: 'dashboards.project', key: 'Project' },
            { id: 'dashboards.analytics', key: 'Analytics' },
        ];
        dashboards.forEach(({ id, key }) => {
            const dashItem = this._portfolioNavigationService.getItem(id, navigation);
            if (dashItem) {
                this._translocoService.selectTranslate(key)
                    .pipe(take(1))
                    .subscribe(translated => {
                        console.debug(`[Languages] translating ${key} =>`, translated);
                        dashItem.title = translated;
                        navComponent.refresh();
                    });
            }
        });

        // Marque pour vérification finale
        this._changeDetectorRef.markForCheck();
        console.log('[Languages] Navigation traduite et rafraîchie, activeLang:', this.activeLang, 'flag:', this.flagCodes[this.activeLang]);
    }
}
