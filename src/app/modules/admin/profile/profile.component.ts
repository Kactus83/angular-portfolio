import { Component, ChangeDetectionStrategy, OnInit, OnDestroy } from '@angular/core';
import { CommonModule }            from '@angular/common';
import { RouterLink }              from '@angular/router';
import { Observable, Subscription }              from 'rxjs';

import {
  ProfileService,
  PersonalInfo,
  ContactInfo,
  SkillGroup,
  Experience,
  Education,
  LanguageSkill
} from './profile.service';

import { ProfileHeaderComponent }   from './components/profile-header/profile-header.component';
import { ContactCardComponent }     from './components/contact-card/contact-card.component';
import { SkillsCardComponent }      from './components/skills-card/skills-card.component';
import { ExperiencesListComponent } from './components/experiences-list/experiences-list.component';
import { EducationListComponent }   from './components/education-list/education-list.component';
import { TranslocoService, TranslocoModule, provideTranslocoScope } from '@ngneat/transloco';
import { LanguagesCardComponent } from './components/langage-card/languages-card.component';
import { ChangeDetectorRef } from '@angular/core';

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
    EducationListComponent,
    LanguagesCardComponent,
    TranslocoModule
  ],
  templateUrl    : './profile.component.html',
  providers: [
    provideTranslocoScope('profile')
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent implements OnInit, OnDestroy
{
  personal$   !: Observable<PersonalInfo>;
  contact$     !: Observable<ContactInfo>;
  skills$      !: Observable<SkillGroup[]>;
  experiences$ !: Observable<Experience[]>;
  education$   !: Observable<Education[]>;
  languages$   !: Observable<LanguageSkill[]>;

  private _sub = new Subscription();

  constructor(
    private _svc: ProfileService,
    private _transloco: TranslocoService,
    private _cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Initial load
    this._loadAll();

    // À chaque changement de langue, on recharge toutes les données
    this._sub.add(
      this._transloco.langChanges$.subscribe(() => {
        this._loadAll();
        this._cdr.markForCheck();
      })
    );
  }

  ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  /** (Re)charge tous les Observables depuis le service */
  private _loadAll(): void {
    this.personal$    = this._svc.getPersonal();
    this.contact$     = this._svc.getContact();
    this.skills$      = this._svc.getSkills();
    this.experiences$ = this._svc.getExperiences();
    this.education$   = this._svc.getEducation();
    this.languages$   = this._svc.getLanguages();
  }
}
