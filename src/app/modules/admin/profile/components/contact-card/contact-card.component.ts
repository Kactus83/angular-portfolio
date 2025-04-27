import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactInfo } from '../../profile.service';
import { FuseCardComponent } from '@fuse/components/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector       : 'app-contact-card',
  standalone     : true,
  imports        : [CommonModule, FuseCardComponent, MatIconModule],
  templateUrl    : './contact-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactCardComponent {
  @Input() contact!: ContactInfo;
}
