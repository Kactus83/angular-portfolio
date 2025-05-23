import { Routes } from '@angular/router';
import { ProjectsComponent } from './projects.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';

const routes: Routes = [
  {
    path: '',
    component: ProjectsComponent
  },
  {
    path: ':id',
    component: ProjectDetailComponent
  }
];

export default routes;
