import { BooleanInput } from '@angular/cdk/coercion';
import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
    forwardRef,
    inject,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PortfolioHorizontalNavigationBasicItemComponent } from '@portfolio/components/navigation/horizontal/components/basic/basic.component';
import { PortfolioHorizontalNavigationDividerItemComponent } from '@portfolio/components/navigation/horizontal/components/divider/divider.component';
import { PortfolioHorizontalNavigationComponent } from '@portfolio/components/navigation/horizontal/horizontal.component';
import { PortfolioNavigationService } from '@portfolio/components/navigation/navigation.service';
import { PortfolioNavigationItem } from '@portfolio/components/navigation/navigation.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'portfolio-horizontal-navigation-branch-item',
    templateUrl: './branch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatMenuModule,
        NgTemplateOutlet,
        PortfolioHorizontalNavigationBasicItemComponent,
        forwardRef(() => PortfolioHorizontalNavigationBranchItemComponent),
        PortfolioHorizontalNavigationDividerItemComponent,
        MatTooltipModule,
        MatIconModule,
    ],
})
export class PortfolioHorizontalNavigationBranchItemComponent
    implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_child: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _portfolioNavigationService = inject(PortfolioNavigationService);

    @Input() child: boolean = false;
    @Input() item: PortfolioNavigationItem;
    @Input() name: string;
    @ViewChild('matMenu', { static: true }) matMenu: MatMenu;

    private _portfolioHorizontalNavigationComponent: PortfolioHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._portfolioHorizontalNavigationComponent =
            this._portfolioNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._portfolioHorizontalNavigationComponent.onRefreshed
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
     * Trigger the change detection
     */
    triggerChangeDetection(): void {
        // Mark for check
        this._changeDetectorRef.markForCheck();
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
