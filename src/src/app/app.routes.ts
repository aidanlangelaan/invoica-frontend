import { Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome';
import { HomeComponent } from './features/home/home';
import { authGuard } from './core/auth/auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  },
  // Redirect any other path to the welcome page
  {
    path: '**',
    redirectTo: '',
  },
];