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
    loadChildren: () => import('./Components/auth/auth.routes').then(route => route.AUTHROUTES)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./Components/fields/fields.route').then(route => route.FIELDSROUTES),
    canActivate: [authGuard]
  }
];
