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
import { CustomPortfolioNavigationService } from '@custom-portfolio/components/navigation/navigation.service';
import { CustomPortfolioNavigationItem } from '@custom-portfolio/components/navigation/navigation.types';
import { CustomPortfolioVerticalNavigationBasicItemComponent } from '@custom-portfolio/components/navigation/vertical/components/basic/basic.component';
import { CustomPortfolioVerticalNavigationCollapsableItemComponent } from '@custom-portfolio/components/navigation/vertical/components/collapsable/collapsable.component';
import { CustomPortfolioVerticalNavigationDividerItemComponent } from '@custom-portfolio/components/navigation/vertical/components/divider/divider.component';
import { CustomPortfolioVerticalNavigationSpacerItemComponent } from '@custom-portfolio/components/navigation/vertical/components/spacer/spacer.component';
import { CustomPortfolioVerticalNavigationComponent } from '@custom-portfolio/components/navigation/vertical/vertical.component';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'custom-portfolio-vertical-navigation-group-item',
    templateUrl: './group.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatIconModule,
        CustomPortfolioVerticalNavigationBasicItemComponent,
        CustomPortfolioVerticalNavigationCollapsableItemComponent,
        CustomPortfolioVerticalNavigationDividerItemComponent,
        forwardRef(() => CustomPortfolioVerticalNavigationGroupItemComponent),
        CustomPortfolioVerticalNavigationSpacerItemComponent,
    ],
})
export class CustomPortfolioVerticalNavigationGroupItemComponent
    implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_autoCollapse: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _custom-portfolioNavigationService = inject(CustomPortfolioNavigationService);

    @Input() autoCollapse: boolean;
    @Input() item: CustomPortfolioNavigationItem;
    @Input() name: string;

    private _custom-portfolioVerticalNavigationComponent: CustomPortfolioVerticalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._custom-portfolioVerticalNavigationComponent =
            this._custom-portfolioNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._custom-portfolioVerticalNavigationComponent.onRefreshed
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
