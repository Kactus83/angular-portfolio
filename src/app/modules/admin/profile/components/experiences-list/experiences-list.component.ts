import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Experience } from '../../profile.service';
import { FuseCardComponent } from '@fuse/components/card';

@Component({
  selector       : 'app-experiences-list',
  standalone     : true,
  imports        : [CommonModule, FuseCardComponent],
  templateUrl    : './experiences-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExperiencesListComponent {
  @Input() experiences!: Experience[];
}
