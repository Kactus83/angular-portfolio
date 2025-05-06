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
import { CustomPortfolioHorizontalNavigationComponent } from '@custom-portfolio/components/navigation/horizontal/horizontal.component';
import { CustomPortfolioNavigationService } from '@custom-portfolio/components/navigation/navigation.service';
import { CustomPortfolioNavigationItem } from '@custom-portfolio/components/navigation/navigation.types';
import { Subject, takeUntil } from 'rxjs';

@Component({
    selector: 'custom-portfolio-horizontal-navigation-spacer-item',
    templateUrl: './spacer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgClass],
})
export class CustomPortfolioHorizontalNavigationSpacerItemComponent
    implements OnInit, OnDestroy
{
    private _changeDetectorRef = inject(ChangeDetectorRef);
    private _custom-portfolioNavigationService = inject(CustomPortfolioNavigationService);

    @Input() item: CustomPortfolioNavigationItem;
    @Input() name: string;

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
}
