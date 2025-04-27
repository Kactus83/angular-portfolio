import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfo } from '../../profile.service';

@Component({
  selector       : 'app-profile-header',
  standalone     : true,
  imports        : [CommonModule],
  templateUrl    : './profile-header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileHeaderComponent {
  @Input() personal!: PersonalInfo;
}
