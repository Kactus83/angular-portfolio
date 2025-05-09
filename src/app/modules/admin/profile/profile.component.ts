import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule }            from '@angular/common';
import { RouterLink }              from '@angular/router';
import { Observable }              from 'rxjs';

import {
  ProfileService,
  PersonalInfo,
  ContactInfo,
  SkillGroup,
  Experience,
  Education
} from './profile.service';

import { ProfileHeaderComponent }   from './components/profile-header/profile-header.component';
import { ContactCardComponent }     from './components/contact-card/contact-card.component';
import { SkillsCardComponent }      from './components/skills-card/skills-card.component';
import { ExperiencesListComponent } from './components/experiences-list/experiences-list.component';
import { EducationListComponent }   from './components/education-list/education-list.component';
import { TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';

@Component({
  selector       : 'admin-profile',
  standalone     : true,
  imports        : [
    CommonModule,
    RouterLink,
    ProfileHeaderComponent,
    ContactCardComponent,
    SkillsCardComponent,
    ExperiencesListComponent,
    EducationListComponent
  ],
  templateUrl    : './profile.component.html',
  providers: [
    provideTranslocoScope('profile')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent
{
  personal$   !: Observable<PersonalInfo>;
  contact$     !: Observable<ContactInfo>;
  skills$      !: Observable<SkillGroup[]>;
  experiences$ !: Observable<Experience[]>;
  education$   !: Observable<Education[]>;

  constructor(private _svc: ProfileService) {
    this.personal$    = this._svc.getPersonal();
    this.contact$     = this._svc.getContact();
    this.skills$      = this._svc.getSkills();
    this.experiences$ = this._svc.getExperiences();
    this.education$   = this._svc.getEducation();
  }
}
