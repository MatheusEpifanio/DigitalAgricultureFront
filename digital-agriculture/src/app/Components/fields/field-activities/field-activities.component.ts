import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../fields.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogSnakBarService } from '../../../shared/dialog-snack-bar.service';
import { ActivitiesService } from './activities.service';
import { FieldDetailsResponse } from '../../../shared/model/response/FieldDetailsResponse';
import { catchError, Observable, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule }     from '@angular/material/select';
import { MatOptionModule }     from '@angular/material/core';
import { TypeActivities } from '../../../shared/model/TypeActivities';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivitiesResponse } from '../../../shared/model/response/ActivitiesResponse';

@Component({
  selector: 'app-field-activities',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './field-activities.component.html',
  styleUrl: './field-activities.component.css'
})
export class FieldActivitiesComponent implements OnInit{
  private fieldId!: number;
  public field$!: Observable<FieldDetailsResponse | null>;
  public activities: ActivitiesResponse[] = [];
  public typeActivities: string[] = [];
  public form!: FormGroup;

  constructor(private fieldsServices: FieldsService, private activitiesService: ActivitiesService, private snackBar: DialogSnakBarService,
    private router: Router, private activateRoute: ActivatedRoute, private formBuilder: FormBuilder){ }

  ngOnInit(){
    this.fieldId = this.activateRoute.snapshot.params['id'];
    Object.keys(TypeActivities).map(key => { this.typeActivities.push(TypeActivities[key as keyof typeof TypeActivities])});

    this.startForm();

    this.getDetailsField();
  }

  private startForm(){
    this.form = this.formBuilder.group({
      type: ['', [Validators.required]],
      date: ['', [Validators.required]],
      observations: ['', [Validators.maxLength(500)]],
    });
  }

  private getDetailsField(){
    this.field$ = this.fieldsServices.getDetailsField(this.fieldId).pipe(
      tap(response => {
        this.activities = response.activities;
      }),
      catchError(error => {
        this.snackBar.showMenssage(error.erro);
        return of(null);
      })
    );
  }

  public clickAddActivity(){
    this.activitiesService.insertActivities(this.fieldId, this.form.value).pipe(
      tap(() => {
        this.refreshActivities();
        this.form.reset();
      }),
      catchError(error => {
        this.snackBar.showMenssage(error.erro);
        return of(null);
      })
    ).subscribe();
  }

  public refreshActivities(){
    this.activitiesService.getActivities(this.fieldId).pipe(
      tap(response => {
        this.activities = response;
      }),
      catchError(error => {
        this.snackBar.showMenssage(error.erro);
        return of(null);
      })
    ).subscribe();
  }

  public redirectToDashBoard(){
    this.router.navigate(['/dashboard']);
  }

}
