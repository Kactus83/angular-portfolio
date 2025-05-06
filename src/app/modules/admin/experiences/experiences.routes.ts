import { Routes } from '@angular/router';
import { ExperiencesComponent } from './experiences.component';
import { ExperienceDetailComponent } from './components/experience-detail/experience-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ExperiencesComponent
  },
  {
    path: ':id',
    component: ExperienceDetailComponent
  }
];

export default routes;
