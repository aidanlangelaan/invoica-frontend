import { Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome';
import { HomeComponent } from './features/home/home';
import { authGuard } from './core/auth/auth.guard';
import { WelcomeLayoutComponent } from './layout/welcome-layout/welcome-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: WelcomeLayoutComponent,
    children: [
      {
        path: '',
        component: WelcomeComponent,
      },
    ],
  },
  {
    path: 'app',
    component: AppLayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: HomeComponent,
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
    ],
  },
  // Redirect any other path to the welcome page
  {
    path: '**',
    redirectTo: '',
  },
];
