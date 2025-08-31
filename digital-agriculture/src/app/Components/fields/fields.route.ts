import { Routes } from '@angular/router';
import { FieldsDashboardComponent } from './fields-dashboard/fields-dashboard.component';
import { NewFieldComponent } from './new-field/new-field.component';
import { FieldActivitiesComponent } from './field-activities/field-activities.component';

export const FIELDSROUTES: Routes = [
  {
    path: '',
    component: FieldsDashboardComponent
  },
  {
    path: 'novo',
    component: NewFieldComponent
  },
  {
    path: 'detalhes/:id',
    component: FieldActivitiesComponent
  }
];
