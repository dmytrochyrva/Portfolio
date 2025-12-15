// Libraries Imports
import { Routes } from '@angular/router';

// Project Imports
import { HomePage } from './pages/home-page/home-page';
import { NotFoundPage } from './pages/not-found-page/not-found-page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  { path: '**', component: NotFoundPage },
];
