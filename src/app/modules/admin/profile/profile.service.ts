import { Injectable } from '@angular/core';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
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

// Nouveau : modèle pour vos compétences langagières
export interface LanguageSkill {
  code        : string; // 'fr', 'en', 'it', 'es', 'zh'
  labelKey    : string; // clé de traduction, ex. 'profile.languages.fr'
  proficiency : number; // 0–100
  iconUrl     : string; // chemin vers l'icône SVG
}

@Injectable({ providedIn: 'root' })
export class ProfileService {
  private readonly _scope = 'profile';

  constructor(private _transloco: TranslocoService) {}

  getPersonal(): Observable<PersonalInfo> {
    const title$   = this._transloco.selectTranslate('personal.title',   {}, this._scope);
    const summary$ = this._transloco.selectTranslate('personal.summary', {}, this._scope);

    return combineLatest([ title$, summary$ ]).pipe(
      map(([ title, summary ]) => ({
        name      : 'Florian Morena',
        title,
        summary,
        avatarUrl : 'images/avatars/perso.jpg',
        coverUrl  : 'images/pages/profile/cover.jpg'
      }))
    );
  }

  getContact(): Observable<ContactInfo> {
    const phone$   = this._transloco.selectTranslate('contactInfo.phone',   {}, this._scope);
    const email$   = this._transloco.selectTranslate('contactInfo.email',   {}, this._scope);
    const address$ = this._transloco.selectTranslate('contactInfo.address', {}, this._scope);

    return combineLatest([ phone$, email$, address$ ]).pipe(
      map(([ phone, email, address ]) => ({ phone, email, address }))
    );
  }

  getSkills(): Observable<SkillGroup[]> {
    const catProg$   = this._transloco.selectTranslate('skills.programming',      {}, this._scope);
    const itemsProg$ = this._transloco.selectTranslate('skills.programmingItems', {}, this._scope);
    const catNet$    = this._transloco.selectTranslate('skills.network',          {}, this._scope);
    const itemsNet$  = this._transloco.selectTranslate('skills.networkItems',    {}, this._scope);
    const catMisc$   = this._transloco.selectTranslate('skills.misc',             {}, this._scope);
    const itemsMisc$ = this._transloco.selectTranslate('skills.miscItems',       {}, this._scope);

    return combineLatest([
      catProg$, itemsProg$,
      catNet$,  itemsNet$,
      catMisc$, itemsMisc$
    ]).pipe(
      map(([ category1, items1, category2, items2, category3, items3 ]) => [
        { category: category1, items: [...items1] },
        { category: category2, items: [...items2] },
        { category: category3, items: [...items3] }
      ])
    );
  }

  getExperiences(): Observable<Experience[]> {
    const devPole$     = this._transloco.selectTranslate('experiences.dev.pole',      {}, this._scope);
    const devCo$       = this._transloco.selectTranslate('experiences.dev.companies', {}, this._scope);
    const devPeriod$   = this._transloco.selectTranslate('experiences.dev.period',    {}, this._scope);
    const devDetails$  = this._transloco.selectTranslate('experiences.dev.details',   {}, this._scope);

    const sasuPole$    = this._transloco.selectTranslate('experiences.sasu.pole',      {}, this._scope);
    const sasuCo$      = this._transloco.selectTranslate('experiences.sasu.companies', {}, this._scope);
    const sasuPeriod$  = this._transloco.selectTranslate('experiences.sasu.period',    {}, this._scope);
    const sasuDetails$ = this._transloco.selectTranslate('experiences.sasu.details',   {}, this._scope);

    const educPole$    = this._transloco.selectTranslate('experiences.educ.pole',      {}, this._scope);
    const educCo$      = this._transloco.selectTranslate('experiences.educ.companies', {}, this._scope);
    const educPeriod$  = this._transloco.selectTranslate('experiences.educ.period',    {}, this._scope);
    const educDetails$ = this._transloco.selectTranslate('experiences.educ.details',   {}, this._scope);

    const elecPole$    = this._transloco.selectTranslate('experiences.elec.pole',      {}, this._scope);
    const elecCo$      = this._transloco.selectTranslate('experiences.elec.companies', {}, this._scope);
    const elecPeriod$  = this._transloco.selectTranslate('experiences.elec.period',    {}, this._scope);
    const elecDetails$ = this._transloco.selectTranslate('experiences.elec.details',   {}, this._scope);

    return combineLatest([
      devPole$,   devCo$,   devPeriod$,   devDetails$,
      sasuPole$,  sasuCo$,  sasuPeriod$,  sasuDetails$,
      educPole$,  educCo$,  educPeriod$,  educDetails$,
      elecPole$,  elecCo$,  elecPeriod$,  elecDetails$
    ]).pipe(
      map(vals => {
        const [
          pole1, co1, per1, det1,
          pole2, co2, per2, det2,
          pole3, co3, per3, det3,
          pole4, co4, per4, det4
        ] = vals as [string, string[], string, string[],
                     string, string[], string, string[],
                     string, string[], string, string[],
                     string, string[], string, string[]];
        return [
          { pole: pole1, companies: co1, period: per1, details: det1 },
          { pole: pole2, companies: co2, period: per2, details: det2 },
          { pole: pole3, companies: co3, period: per3, details: det3 },
          { pole: pole4, companies: co4, period: per4, details: det4 }
        ];
      })
    );
  }

  getEducation(): Observable<Education[]> {
    const cP$  = this._transloco.selectTranslate('education.current.period',       {}, this._scope);
    const cI$  = this._transloco.selectTranslate('education.current.institution',  {}, this._scope);
    const cQ$  = this._transloco.selectTranslate('education.current.qualification',{}, this._scope);
    const p1P$ = this._transloco.selectTranslate('education.past1.period',         {}, this._scope);
    const p1I$ = this._transloco.selectTranslate('education.past1.institution',    {}, this._scope);
    const p1Q$ = this._transloco.selectTranslate('education.past1.qualification',  {}, this._scope);
    const p2P$ = this._transloco.selectTranslate('education.past2.period',         {}, this._scope);
    const p2I$ = this._transloco.selectTranslate('education.past2.institution',    {}, this._scope);
    const p2Q$ = this._transloco.selectTranslate('education.past2.qualification',  {}, this._scope);
    const p3P$ = this._transloco.selectTranslate('education.past3.period',         {}, this._scope);
    const p3I$ = this._transloco.selectTranslate('education.past3.institution',    {}, this._scope);
    const p3Q$ = this._transloco.selectTranslate('education.past3.qualification',  {}, this._scope);

    return combineLatest([ cP$, cI$, cQ$, p1P$, p1I$, p1Q$, p2P$, p2I$, p2Q$, p3P$, p3I$, p3Q$ ]).pipe(
      map(vals => {
        const [
          per0, ins0, qua0,
          per1, ins1, qua1,
          per2, ins2, qua2,
          per3, ins3, qua3
        ] = vals;
        return [
          { period: per0, institution: ins0, qualification: qua0 },
          { period: per1, institution: ins1, qualification: qua1 },
          { period: per2, institution: ins2, qualification: qua2 },
          { period: per3, institution: ins3, qualification: qua3 }
        ];
      })
    );
  }

  getLanguages(): Observable<LanguageSkill[]> {
    const langs: LanguageSkill[] = [
      { code: 'fr', labelKey: 'profile.languages.fr', proficiency: 100, iconUrl: 'images/flags/FR.svg' },
      { code: 'en', labelKey: 'profile.languages.en', proficiency: 70,  iconUrl: 'images/flags/US.svg' }, 
      { code: 'it', labelKey: 'profile.languages.it', proficiency: 40,  iconUrl: 'images/flags/IT.svg' },
      { code: 'es', labelKey: 'profile.languages.es', proficiency: 20,  iconUrl: 'images/flags/ES.svg' },
      { code: 'zh', labelKey: 'profile.languages.zh', proficiency: 15,  iconUrl: 'images/flags/ZH.svg' }
    ];
    return of(langs);
  }
}
