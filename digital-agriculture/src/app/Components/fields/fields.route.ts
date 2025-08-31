import { Routes } from '@angular/router';
import { FieldsDashboardComponent } from './fields-dashboard/fields-dashboard.component';
import { NewFieldComponent } from './new-field/new-field.component';

export const FIELDSROUTES: Routes = [
  {
    path: '',
    component: FieldsDashboardComponent,
  },
  {
    path: 'novo',
    component: NewFieldComponent
  }
];
