import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TranslocoService } from '@ngneat/transloco';

export interface PersonalInfo {
  name      : string;
  title     : string;
  summary   : string;
  avatarUrl : string;
  coverUrl  : string;
}
export interface ContactInfo {
  phone   : string;
  email   : string;
  address : string;
}
export interface SkillGroup {
  category: string;
  items   : string[];
}
export interface Experience {
  pole        : string;
  companies   : string[];
  period      : string;
  details     : string[];
}
export interface Education {
  period       : string;
  institution  : string;
  qualification: string;
}

@Injectable({ providedIn: 'root' })
export class ProfileService
{
  constructor(private _transloco: TranslocoService) {}

  getPersonal(): Observable<PersonalInfo> {
    return of({
      name      : 'Florian Morena',
      title     : this._transloco.translate('pages.profile.personal.title'),
      summary   : this._transloco.translate('pages.profile.personal.summary'),
      avatarUrl : 'images/avatars/perso.jpg',
      coverUrl  : 'images/pages/profile/cover.jpg'
    });
  }

  getContact(): Observable<ContactInfo> {
    return of({
      phone   : this._transloco.translate('pages.profile.contactInfo.phone'),
      email   : this._transloco.translate('pages.profile.contactInfo.email'),
      address : this._transloco.translate('pages.profile.contactInfo.address')
    });
  }

  getSkills(): Observable<SkillGroup[]> {
    return of([
      {
        category: this._transloco.translate('pages.profile.skills.programming'),
        items   : [
          ...JSON.parse(this._transloco.translate('pages.profile.skills.programmingItems'))
        ]
      },
      {
        category: this._transloco.translate('pages.profile.skills.network'),
        items   : [
          ...JSON.parse(this._transloco.translate('pages.profile.skills.networkItems'))
        ]
      },
      {
        category: this._transloco.translate('pages.profile.skills.misc'),
        items   : [
          ...JSON.parse(this._transloco.translate('pages.profile.skills.miscItems'))
        ]
      }
    ]);
  }

  getExperiences(): Observable<Experience[]> {
    return of([
      {
        pole      : this._transloco.translate('pages.profile.experiences.dev.pole'),
        companies : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.dev.companies'))
        ],
        period    : this._transloco.translate('pages.profile.experiences.dev.period'),
        details   : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.dev.details'))
        ]
      },
      {
        pole      : this._transloco.translate('pages.profile.experiences.sasu.pole'),
        companies : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.sasu.companies'))
        ],
        period    : this._transloco.translate('pages.profile.experiences.sasu.period'),
        details   : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.sasu.details'))
        ]
      },
      {
        pole      : this._transloco.translate('pages.profile.experiences.educ.pole'),
        companies : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.educ.companies'))
        ],
        period    : this._transloco.translate('pages.profile.experiences.educ.period'),
        details   : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.educ.details'))
        ]
      },
      {
        pole      : this._transloco.translate('pages.profile.experiences.elec.pole'),
        companies : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.elec.companies'))
        ],
        period    : this._transloco.translate('pages.profile.experiences.elec.period'),
        details   : [
          ...JSON.parse(this._transloco.translate('pages.profile.experiences.elec.details'))
        ]
      }
    ]);
  }

  getEducation(): Observable<Education[]> {
    return of([
      {
        period       : this._transloco.translate('pages.profile.education.current.period'),
        institution  : this._transloco.translate('pages.profile.education.current.institution'),
        qualification: this._transloco.translate('pages.profile.education.current.qualification')
      },
      {
        period       : this._transloco.translate('pages.profile.education.past1.period'),
        institution  : this._transloco.translate('pages.profile.education.past1.institution'),
        qualification: this._transloco.translate('pages.profile.education.past1.qualification')
      },
      {
        period       : this._transloco.translate('pages.profile.education.past2.period'),
        institution  : this._transloco.translate('pages.profile.education.past2.institution'),
        qualification: this._transloco.translate('pages.profile.education.past2.qualification')
      },
      {
        period       : this._transloco.translate('pages.profile.education.past3.period'),
        institution  : this._transloco.translate('pages.profile.education.past3.institution'),
        qualification: this._transloco.translate('pages.profile.education.past3.qualification')
      }
    ]);
  }
}
