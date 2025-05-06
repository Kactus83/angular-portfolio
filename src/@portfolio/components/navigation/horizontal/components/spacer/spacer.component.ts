import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    inject,
    Input,
    OnDestroy,
    OnInit,
} from '@angular/core';
import { PortfolioHorizontalNavigationComponent } from '@portfolio/components/navigation/horizontal/horizontal.component';
import { PortfolioNavigationService } from '@portfolio/components/navigation/navigation.service';
import { PortfolioNavigationItem } from '@portfolio/components/navigation/navigation.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'portfolio-horizontal-navigation-spacer-item',
    templateUrl: './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass],
})
export class PortfolioHorizontalNavigationSpacerItemComponent
    implements OnInit, OnDestroy
{
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _portfolioNavigationService = inject(PortfolioNavigationService);

    @Input() item: PortfolioNavigationItem;
    @Input() name: string;

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
}
