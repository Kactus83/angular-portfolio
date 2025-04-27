import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Education } from '../../profile.service';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector       : 'app-education-list',
  standalone     : true,
  imports        : [CommonModule, FuseCardComponent],
  templateUrl    : './education-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationListComponent {
  @Input() education!: Education[];
}
