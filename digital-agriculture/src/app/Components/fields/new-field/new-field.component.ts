import { Component, OnInit } from '@angular/core';
import { FieldsService } from '../../fields.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { catchError, of, tap } from 'rxjs';
import { DialogSnakBarService } from '../../../shared/dialog-snack-bar.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-new-field',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './new-field.component.html',
  styleUrl: './new-field.component.css'
})
export class NewFieldComponent implements OnInit{
  public form!: FormGroup;

  constructor(private fieldsService: FieldsService, private snackBar: DialogSnakBarService,
    private route: Router, private formBuilder: FormBuilder){}

  ngOnInit(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.max(50)]],
      crop: ['', [Validators.required, Validators.max(30)]],
      areaHectares: ['', [Validators.required, Validators.min(1)]],
      longitude: ['', [Validators.required, Validators.min(-90), Validators.max(90)]],
      latitude: ['', [Validators.required, Validators.min(-180), Validators.max(180)]]
    });
  }

  public clickSave(){
    this.fieldsService.insertField(this.form.value).pipe(
      tap(() =>{
        this.route.navigate(['dashboard'])
      }),
      catchError(error => {
        this.snackBar.showMenssage(error.error);
        return of(null);
      })
    ).subscribe();
  }
}
