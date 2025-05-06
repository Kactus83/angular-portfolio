import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewEncapsulation,
    inject,
} from '@angular/core';
import { custom-portfolioAnimations } from '@custom-portfolio/animations';
import { CustomPortfolioNavigationService } from '@custom-portfolio/components/navigation/navigation.service';
import { CustomPortfolioNavigationItem } from '@custom-portfolio/components/navigation/navigation.types';
import { CustomPortfolioUtilsService } from '@custom-portfolio/services/utils/utils.service';
import { ReplaySubject, Subject } from 'rxjs';
import { CustomPortfolioHorizontalNavigationBasicItemComponent } from './components/basic/basic.component';
import { CustomPortfolioHorizontalNavigationBranchItemComponent } from './components/branch/branch.component';
import { CustomPortfolioHorizontalNavigationSpacerItemComponent } from './components/spacer/spacer.component';

@Component({
    selector: 'custom-portfolio-horizontal-navigation',
    templateUrl: './horizontal.component.html',
    styleUrls: ['./horizontal.component.scss'],
    animations: custom-portfolioAnimations,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    exportAs: 'custom-portfolioHorizontalNavigation',
    standalone: true,
    imports: [
        CustomPortfolioHorizontalNavigationBasicItemComponent,
        CustomPortfolioHorizontalNavigationBranchItemComponent,
        CustomPortfolioHorizontalNavigationSpacerItemComponent,
    ],
})
export class CustomPortfolioHorizontalNavigationComponent
    implements OnChanges, OnInit, OnDestroy
{
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _custom-portfolioNavigationService = inject(CustomPortfolioNavigationService);
    private _custom-portfolioUtilsService = inject(CustomPortfolioUtilsService);

    @Input() name: string = this._custom-portfolioUtilsService.randomId();
    @Input() navigation: CustomPortfolioNavigationItem[];

    onRefreshed: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        // Navigation
        if ('navigation' in changes) {
            // Mark for check
            this._changeDetectorRef.markForCheck();
        }
    }

    /**
     * On init
     */
    ngOnInit(): void {
        // Make sure the name input is not an empty string
        if (this.name === '') {
            this.name = this._custom-portfolioUtilsService.randomId();
        }

        // Register the navigation component
        this._custom-portfolioNavigationService.registerComponent(this.name, this);
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Deregister the navigation component from the registry
        this._custom-portfolioNavigationService.deregisterComponent(this.name);

        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Refresh the component to apply the changes
     */
    refresh(): void {
        // Mark for check
        this._changeDetectorRef.markForCheck();

        // Execute the observable
        this.onRefreshed.next(true);
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
}
