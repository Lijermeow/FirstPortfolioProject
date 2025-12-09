import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../public/app/app.config';
import { App } from '../public/app/app';
import {Routes, provideRouter} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home',
  loadComponent: () =>
  import('../public/app/home-page/home-page').then(m => m.HomePage)},
  {path: 'hobbies',
  loadComponent: () =>
  import('../public/app/hobbies-page/hobbies-page').then(m => m.HobbiesPage)},
  {path: 'contacts',
  loadComponent: () =>
  import('../public/app/contacts-page/contacts-page').then(m => m.ContactsPage)},
  {path: 'about',
  loadComponent: () =>
  import('../public/app/about-page/about-page').then(m => m.AboutPage)},
  {path: 'projects',
  loadComponent: () =>
  import('../public/app/projects-page/projects-page').then(m => m.ProjectsPage)},

]

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
})
  .catch((err) => console.error(err));
