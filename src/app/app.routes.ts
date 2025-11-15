import { Routes } from '@angular/router';

import { HomePage } from './pages/home-page/home-page';
import { ProjectsPage } from './pages/projects-page/projects-page';
import { AboutPage } from './pages/about-page/about-page';
import { ServicesPage } from './pages/services-page/services-page';
import { ContactPage } from './pages/contact-page/contact-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: 'projects', component: ProjectsPage },
  { path: 'about', component: AboutPage },
  { path: 'services', component: ServicesPage },
  { path: 'contact', component: ContactPage },
  { path: '**', component: NotFoundPage },
];
