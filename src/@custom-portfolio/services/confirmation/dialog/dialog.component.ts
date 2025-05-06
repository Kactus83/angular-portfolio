import { NgClass } from '@angular/common';
import { Component, ViewEncapsulation, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { CustomPortfolioConfirmationConfig } from '@custom-portfolio/services/confirmation/confirmation.types';

@Component({
    selector: 'custom-portfolio-confirmation-dialog',
    templateUrl: './dialog.component.html',
    styles: [
        `
            .custom-portfolio-confirmation-dialog-panel {
                @screen md {
                    @apply w-128;
                }

                .mat-mdc-dialog-container {
                    .mat-mdc-dialog-surface {
                        padding: 0 !important;
                    }
                }
            }
        `,
    ],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [MatButtonModule, MatDialogModule, MatIconModule, NgClass],
})
export class CustomPortfolioConfirmationDialogComponent {
    data: CustomPortfolioConfirmationConfig = inject(MAT_DIALOG_DATA);
}
