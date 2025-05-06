import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

import {
    Component,
    HostBinding,
    Input,
    OnChanges,
    SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import { custom-portfolioAnimations } from '@custom-portfolio/animations';
import { CustomPortfolioCardFace } from '@custom-portfolio/components/card/card.types';

@Component({
    selector: 'custom-portfolio-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: custom-portfolioAnimations,
    exportAs: 'custom-portfolioCard',
    standalone: true,
    imports: [],
})
export class CustomPortfolioCardComponent implements OnChanges {
    /* eslint-disable @typescript-eslint/naming-convention */
    static ngAcceptInputType_expanded: BooleanInput;
    static ngAcceptInputType_flippable: BooleanInput;
    /* eslint-enable @typescript-eslint/naming-convention */

    @Input() expanded: boolean = false;
    @Input() face: CustomPortfolioCardFace = 'front';
    @Input() flippable: boolean = false;

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    /**
     * Host binding for component classes
     */
    @HostBinding('class') get classList(): any {
        /* eslint-disable @typescript-eslint/naming-convention */
        return {
            'custom-portfolio-card-expanded': this.expanded,
            'custom-portfolio-card-face-back': this.flippable && this.face === 'back',
            'custom-portfolio-card-face-front': this.flippable && this.face === 'front',
            'custom-portfolio-card-flippable': this.flippable,
        };
        /* eslint-enable @typescript-eslint/naming-convention */
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On changes
     *
     * @param changes
     */
    ngOnChanges(changes: SimpleChanges): void {
        // Expanded
        if ('expanded' in changes) {
            // Coerce the value to a boolean
            this.expanded = coerceBooleanProperty(
                changes.expanded.currentValue
            );
        }

        // Flippable
        if ('flippable' in changes) {
            // Coerce the value to a boolean
            this.flippable = coerceBooleanProperty(
                changes.flippable.currentValue
            );
        }
    }
}
