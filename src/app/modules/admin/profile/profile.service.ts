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
      title     : this._transloco.translate('profile.personal.title'),
      summary   : this._transloco.translate('profile.personal.summary'),
      avatarUrl : 'images/avatars/perso.jpg',
      coverUrl  : 'images/pages/profile/cover.jpg'
    });
  }

  getContact(): Observable<ContactInfo> {
    return of({
      phone   : this._transloco.translate('profile.contactInfo.phone'),
      email   : this._transloco.translate('profile.contactInfo.email'),
      address : this._transloco.translate('profile.contactInfo.address')
    });
  }

  getSkills(): Observable<SkillGroup[]> {
    return of([
      {
        category: this._transloco.translate('profile.skills.programming'),
        items   : [
          ...this._transloco.translate('profile.skills.programmingItems')
        ]
      },
      {
        category: this._transloco.translate('profile.skills.network'),
        items   : [
          ...this._transloco.translate('profile.skills.networkItems')
        ]
      },
      {
        category: this._transloco.translate('profile.skills.misc'),
        items   : [
          ...this._transloco.translate('profile.skills.miscItems')
        ]
      }
    ]);
  }

  getExperiences(): Observable<Experience[]> {
    return of([
      {
        pole      : this._transloco.translate('profile.experiences.dev.pole'),
        companies : [
          ...this._transloco.translate('profile.experiences.dev.companies')
        ],
        period    : this._transloco.translate('profile.experiences.dev.period'),
        details   : [
          ...this._transloco.translate('profile.experiences.dev.details')
        ]
      },
      {
        pole      : this._transloco.translate('profile.experiences.sasu.pole'),
        companies : [
          ...this._transloco.translate('profile.experiences.sasu.companies')
        ],
        period    : this._transloco.translate('profile.experiences.sasu.period'),
        details   : [
          ...this._transloco.translate('profile.experiences.sasu.details')
        ]
      },
      {
        pole      : this._transloco.translate('profile.experiences.educ.pole'),
        companies : [
          ...this._transloco.translate('profile.experiences.educ.companies')
        ],
        period    : this._transloco.translate('profile.experiences.educ.period'),
        details   : [
          ...this._transloco.translate('profile.experiences.educ.details')
        ]
      },
      {
        pole      : this._transloco.translate('profile.experiences.elec.pole'),
        companies : [
          ...this._transloco.translate('profile.experiences.elec.companies')
        ],
        period    : this._transloco.translate('profile.experiences.elec.period'),
        details   : [
          ...this._transloco.translate('profile.experiences.elec.details')
        ]
      }
    ]);
  }

  getEducation(): Observable<Education[]> {
    return of([
      {
        period       : this._transloco.translate('profile.education.current.period'),
        institution  : this._transloco.translate('profile.education.current.institution'),
        qualification: this._transloco.translate('profile.education.current.qualification')
      },
      {
        period       : this._transloco.translate('profile.education.past1.period'),
        institution  : this._transloco.translate('profile.education.past1.institution'),
        qualification: this._transloco.translate('profile.education.past1.qualification')
      },
      {
        period       : this._transloco.translate('profile.education.past2.period'),
        institution  : this._transloco.translate('profile.education.past2.institution'),
        qualification: this._transloco.translate('profile.education.past2.qualification')
      },
      {
        period       : this._transloco.translate('profile.education.past3.period'),
        institution  : this._transloco.translate('profile.education.past3.institution'),
        qualification: this._transloco.translate('profile.education.past3.qualification')
      }
    ]);
  }
}
