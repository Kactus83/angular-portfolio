import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    forwardRef,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PortfolioNavigationService } from '@portfolio/components/navigation/navigation.service';
import { PortfolioNavigationItem } from '@portfolio/components/navigation/navigation.types';
import { PortfolioVerticalNavigationBasicItemComponent } from '@portfolio/components/navigation/vertical/components/basic/basic.component';
import { PortfolioVerticalNavigationCollapsableItemComponent } from '@portfolio/components/navigation/vertical/components/collapsable/collapsable.component';
import { PortfolioVerticalNavigationDividerItemComponent } from '@portfolio/components/navigation/vertical/components/divider/divider.component';
import { PortfolioVerticalNavigationSpacerItemComponent } from '@portfolio/components/navigation/vertical/components/spacer/spacer.component';
import { PortfolioVerticalNavigationComponent } from '@portfolio/components/navigation/vertical/vertical.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'portfolio-vertical-navigation-group-item',
    templateUrl: './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatIconModule,
        PortfolioVerticalNavigationBasicItemComponent,
        PortfolioVerticalNavigationCollapsableItemComponent,
        PortfolioVerticalNavigationDividerItemComponent,
        forwardRef(() => PortfolioVerticalNavigationGroupItemComponent),
        PortfolioVerticalNavigationSpacerItemComponent,
    ],
})
export class PortfolioVerticalNavigationGroupItemComponent
    implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _portfolioNavigationService = inject(PortfolioNavigationService);

    @Input() autoCollapse: boolean;
    @Input() item: PortfolioNavigationItem;
    @Input() name: string;

    private _portfolioVerticalNavigationComponent: PortfolioVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._portfolioVerticalNavigationComponent =
            this._portfolioNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._portfolioVerticalNavigationComponent.onRefreshed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                // Mark for check
                this._changeDetectorRef.markForCheck();
            });
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next(null);
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

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
