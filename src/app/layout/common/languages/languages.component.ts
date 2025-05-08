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
        console.log('[Languages] ngOnInit');

        // 1) Récupère les langues disponibles et initialise les drapeaux
        this.availableLangs = this._translocoService.getAvailableLangs();
        this.flagCodes = { en: 'us', fr: 'fr', zh: 'zh' };

        // 2) Langue active actuelle
        this.activeLang = this._translocoService.getActiveLang();
        console.log('[Languages] Langue initiale:', this.activeLang);

        // 3) Écoute le premier événement de changement de langue pour init
        this._translocoService.langChanges$
            .pipe(take(1))
            .subscribe((lang) => {
                console.log('[Languages] Initial langChange:', lang);
                this._doTranslate(lang);
            });

        // 4) Écoute les changements suivants de langue
        this._translocoService.langChanges$
            .pipe(skip(1))
            .subscribe((lang) => {
                console.log('[Languages] langChange ultérieur:', lang);
                this._doTranslate(lang);
            });
    }

    ngAfterViewInit(): void {
        // Dès que la view est ready, répète la traduction pour être sûr
        console.log('[Languages] ngAfterViewInit');
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
        console.log('[Languages] setActiveLang ->', lang);
        this._translocoService.setActiveLang(lang);
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
        const navComponent =
            this._navComponent ||
            this._portfolioNavigationService.getComponent<PortfolioVerticalNavigationComponent>('mainNavigation');

        if (!navComponent) {
            console.warn('[Languages] navComponent non trouvé');
            return;
        }

        const navigation = navComponent.navigation;
        console.log('[Languages] Translation nav for', lang, navigation);

        // Traduction synchrone des titres et descriptions
        navigation.forEach((item) => {
            const titleKey = `navigation.${item.id}.title`;
            item.title = this._translocoService.translate(titleKey);
            console.debug(`[Languages] ${titleKey} ->`, item.title);

            if ((item as any).desc !== undefined) {
                const descKey = `navigation.${item.id}.desc`;
                (item as any).desc = this._translocoService.translate(descKey);
                console.debug(`[Languages] ${descKey} ->`, (item as any).desc);
            }
        });

        // Traduction des tableaux de bord spécifiques
        const dashboards = [
            { id: 'dashboards.project', key: 'Project' },
            { id: 'dashboards.analytics', key: 'Analytics' },
        ];
        dashboards.forEach(({ id, key }) => {
            const dashItem = this._portfolioNavigationService.getItem(id, navigation);
            if (dashItem) {
                dashItem.title = this._translocoService.translate(key);
                console.debug(`[Languages] ${key} ->`, dashItem.title);
            }
        });

        // Refresh et markForCheck pour afficher les changements
        navComponent.refresh();
        this._changeDetectorRef.markForCheck();
        console.log('[Languages] Navigation traduite et rafraîchie');
    }
}
