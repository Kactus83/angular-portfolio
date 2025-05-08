// src/app/layout/common/languages/languages.component.ts
import { NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    ViewEncapsulation,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import {
    PortfolioNavigationService,
    PortfolioVerticalNavigationComponent,
} from '@portfolio/components/navigation';
import { AvailableLangs, TranslocoService } from '@ngneat/transloco';
import { take } from 'rxjs';

@Component({
    selector: 'languages',
    templateUrl: './languages.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'languages',
    standalone: true,
    imports: [MatButtonModule, MatMenuModule, NgTemplateOutlet],
})
export class LanguagesComponent implements OnInit, OnDestroy {
    availableLangs: AvailableLangs;
    activeLang: string;
    flagCodes: any;

    /**
     * Constructor
     */
    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _portfolioNavigationService: PortfolioNavigationService,
        private _translocoService: TranslocoService
    ) {}

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {

        console.log('LanguagesComponent ngOnInit');

        // Get the available languages from transloco
        this.availableLangs = this._translocoService.getAvailableLangs();

        console.log('availableLangs', this.availableLangs);

        // Apply current active language immediately
        this.activeLang = this._translocoService.getActiveLang();
        this._updateNavigation(this.activeLang);
        console.log('activeLang', this.activeLang);

        // Subscribe to language changes
        this._translocoService.langChanges$.subscribe((activeLang) => {
            // Get the active lang
            this.activeLang = activeLang;

            console.log('activeLang changed', this.activeLang);

            // Update the navigation
            this._updateNavigation(activeLang);
        });

        // Set the country iso codes for languages for flags
        this.flagCodes = {
            en: 'us',
            fr: 'fr',
            zh: 'zh',
        };
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {}

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Set the active lang
     *
     * @param lang
     */
    setActiveLang(lang: string): void {
        // Set the active lang
        this._translocoService.setActiveLang(lang);
    }

    /**
     * Track by function for ngFor loops
     *
     * @param index
     * @param item
     */
    trackByFn(index: number, item: any): any {
        return item.id || index;
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Private methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Update the navigation
     *
     * @param lang
     * @private
     */
    private _updateNavigation(lang: string): void {
        // For demonstration purposes, we will only update the Dashboard names
        // from the navigation but you can swap out the entire navigation data,
        // import from a file or request it from your backend.

        // Get the component -> navigation data -> item
        const navComponent =
            this._portfolioNavigationService.getComponent<PortfolioVerticalNavigationComponent>(
                'mainNavigation'
            );

        // Return if the navigation component does not exist
        if (!navComponent) {
            return;
        }

        // Get the flat navigation data
        const navigation = navComponent.navigation;
        console.log('navigation', navigation);

        // Dynamic translation for all navigation items
        navigation.forEach(item => {
            // Translate the title using key: navigation.<id>.title
            const titleKey = `navigation.${item.id}.title`;
            console.log('titleKey', titleKey);
            this._translocoService
                .selectTranslate(titleKey)
                .pipe(take(1))
                .subscribe(trans => {
                    item.title = trans;
                });
            // If there is a desc field, translate it too
            if ((item as any).desc !== undefined) {
                const descKey = `navigation.${item.id}.desc`;
                this._translocoService
                    .selectTranslate(descKey)
                    .pipe(take(1))
                    .subscribe(trans => {
                        (item as any).desc = trans;
                    });
            }
        });
        // Refresh the navigation component to apply translations
        navComponent.refresh();

        // Get the Project dashboard item and update its title
        const projectDashboardItem = this._portfolioNavigationService.getItem(
            'dashboards.project',
            navigation
        );
        if (projectDashboardItem) {
            this._translocoService
                .selectTranslate('Project')
                .pipe(take(1))
                .subscribe((translation) => {
                    projectDashboardItem.title = translation;
                    navComponent.refresh();
                });
        }

        // Get the Analytics dashboard item and update its title
        const analyticsDashboardItem = this._portfolioNavigationService.getItem(
            'dashboards.analytics',
            navigation
        );
        if (analyticsDashboardItem) {
            this._translocoService
                .selectTranslate('Analytics')
                .pipe(take(1))
                .subscribe((translation) => {
                    analyticsDashboardItem.title = translation;
                    navComponent.refresh();
                });
        }
    }
}
