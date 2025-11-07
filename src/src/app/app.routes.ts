import { Routes } from '@angular/router';
import { WelcomeComponent } from './features/welcome/welcome';
import { HomeComponent } from './features/home/home';
import { WelcomeLayoutComponent } from './layout/welcome-layout/welcome-layout.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { authGuard } from './core/auth/auth.guard'; // The refactored guard

export const routes: Routes = [
  {
    path: '',
    canMatch: [authGuard],
    children: [
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
    ],
  },
  {
    path: 'home',
    component: AppLayoutComponent,
    canMatch: [authGuard],
    children: [
      { path: '', component: HomeComponent },
    ],
  },
  // Future protected routes will follow this pattern:
  // { 
  //   path: 'orders',
  //   component: AppLayoutComponent,
  //   canMatch: [authGuard],
  //   children: [
  //     { path: '', component: OrdersListComponent },
  //     { path: ':id', component: OrderDetailComponent },
  //     { path: ':id/edit', component: OrderEditComponent },
  //   ],
  // },
  {
    path: '**',
    redirectTo: '',
  },
];
