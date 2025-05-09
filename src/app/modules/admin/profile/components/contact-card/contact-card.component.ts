import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfo } from '../../profile.service';
import { PortfolioCardComponent } from '@portfolio/components/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector       : 'app-contact-card',
  standalone     : true,
  imports        : [CommonModule, PortfolioCardComponent, MatIconModule, TranslocoModule],
  templateUrl    : './contact-card.component.html',
  providers: [
    provideTranslocoScope('profile')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCardComponent {
  @Input() contact!: ContactInfo;
}
