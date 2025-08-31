import { Routes } from '@angular/router';
import { authGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  {
    path: '',
    loadChildren: () => import('./components/auth/auth.routes').then(route => route.AUTHROUTES)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./components/fields/fields.route').then(route => route.FIELDSROUTES),
    canActivate: [authGuard]
  }
];
