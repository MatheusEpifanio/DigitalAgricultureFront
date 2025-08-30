import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: ''
  },
  {
    path: '', loadChildren: () => import('./Components/auth/auth.routes').then(route => route.AUTHROUTES)
  }
];
