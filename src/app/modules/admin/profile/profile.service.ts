import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

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
  getPersonal(): Observable<PersonalInfo> {
    return of({
      name      : 'Florian Morena',
      title     : 'Apprenti BTS SIO',
      summary   : 'Autodidacte passionné par l’informatique, fondateur d’une SASU de services numériques, j’aspire à renforcer mes compétences au sein d’équipes expérimentées.',
      avatarUrl : 'images/avatars/perso.jpg',
      coverUrl  : 'images/pages/profile/cover.jpg'
    });
  }

  getContact(): Observable<ContactInfo> {
    return of({
      phone   : '06 20 93 33 90',
      email   : 'florian.morena@gmail.com',
      address : '12 rue Pierre Renaudel, 83210 Solliès Pont'
    });
  }

  getSkills(): Observable<SkillGroup[]> {
    return of([
      {
        category: 'Programmation',
        items   : ['WordPress','Algorithmique','Git & Docker','TypeScript & Angular','C / C++ (débutant)','Web3 (Solidity)']
      },
      {
        category: 'Réseau & Sécurité',
        items   : ['Modèle OSI','Composants hardware','Communication sans fil']
      },
      {
        category: 'Divers',
        items   : ['Adobe CC','AutoDesk (en cours)']
      }
    ]);
  }

  getExperiences(): Observable<Experience[]> {
    return of([
      {
        pole      : 'DÉVELOPPEMENT FRONTEND/BACKEND',
        companies : ['CHESS MARITIME'],
        period    : '2023 – 2024',
        details   : [
          'Gestion CMS WordPress interne',
          'Outils informatiques divers',
          'Développement d’un CMS maritime'
        ]
      },
      {
        pole      : 'SERVICES NUMÉRIQUES (S.A.S.U.)',
        companies : ['Ma propre SASU'],
        period    : '2020 – 2022',
        details   : [
          'Sites WordPress & E-commerce',
          'Scripts (mailing, scrapping…) ',
          'Référencement/SEO & Google Tools',
          'Graphisme & Packaging',
          'Vie réseau & dépannage'
        ]
      },
      {
        pole      : 'ÉDUCATION SPÉCIALISÉE',
        companies : ['M.E.C.S. La Valbourdine','M.E.C.S. La Déferlante','S.A.M.S.A.H. - S.A.M.V.A. A.D.A.P.E.I.'],
        period    : '2015 – 2019',
        details   : [
          'Accompagnement de personnes en difficulté',
          'Ateliers techniques & animation',
          'Rédaction de rapports & comptes rendus',
          'Animation de réunions'
        ]
      },
      {
        pole      : 'ÉLECTRICITÉ INDUSTRIELLE & DOMESTIQUE',
        companies : ['Sud Elec Industrie','Centre Var Électricité',"Entreprise générale d'électricité MORENA"],
        period    : '2011 – 2015',
        details   : [
          'Création/Rénovation d’installations électriques',
          'Domotique & Automatismes',
          'Réseaux informatiques & Courant faible'
        ]
      }
    ]);
  }

  getEducation(): Observable<Education[]> {
    return of([
      {
        period       : '2023 – en cours',
        institution  : 'Maestris BTS',
        qualification: 'BTS SIO'
      },
      {
        period       : '2015 – 2019',
        institution  : 'IRFSS Croix Rouge',
        qualification: 'Éducateur spécialisé'
      },
      {
        period       : '2011 – 2013',
        institution  : 'CFA du Bâtiment',
        qualification: 'CAP & BP Électricité'
      },
      {
        period       : '2007 – 2010',
        institution  : 'Lycée du Coudon',
        qualification: 'Baccalauréat Général'
      }
    ]);
  }
}
