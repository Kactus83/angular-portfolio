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
import { CustomPortfolioHorizontalNavigationBasicItemComponent } from '@custom-portfolio/components/navigation/horizontal/components/basic/basic.component';
import { CustomPortfolioHorizontalNavigationDividerItemComponent } from '@custom-portfolio/components/navigation/horizontal/components/divider/divider.component';
import { CustomPortfolioHorizontalNavigationComponent } from '@custom-portfolio/components/navigation/horizontal/horizontal.component';
import { CustomPortfolioNavigationService } from '@custom-portfolio/components/navigation/navigation.service';
import { CustomPortfolioNavigationItem } from '@custom-portfolio/components/navigation/navigation.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'custom-portfolio-horizontal-navigation-branch-item',
    templateUrl: './branch.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        NgClass,
        MatMenuModule,
        NgTemplateOutlet,
        CustomPortfolioHorizontalNavigationBasicItemComponent,
        forwardRef(() => CustomPortfolioHorizontalNavigationBranchItemComponent),
        CustomPortfolioHorizontalNavigationDividerItemComponent,
        MatTooltipModule,
        MatIconModule,
    ],
})
export class CustomPortfolioHorizontalNavigationBranchItemComponent
    implements OnInit, OnDestroy
{
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_child: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _custom-portfolioNavigationService = inject(CustomPortfolioNavigationService);

    @Input() child: boolean = false;
    @Input() item: CustomPortfolioNavigationItem;
    @Input() name: string;
    @ViewChild('matMenu', { static: true }) matMenu: MatMenu;

    private _custom-portfolioHorizontalNavigationComponent: CustomPortfolioHorizontalNavigationComponent;
    private _unsubscribeAll: Subject<any> = new Subject<any>();

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        // Get the parent navigation component
        this._custom-portfolioHorizontalNavigationComponent =
            this._custom-portfolioNavigationService.getComponent(this.name);

        // Subscribe to onRefreshed on the navigation component
        this._custom-portfolioHorizontalNavigationComponent.onRefreshed
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
