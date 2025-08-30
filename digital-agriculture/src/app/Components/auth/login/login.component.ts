import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms'
import { AuthService } from '../auth.service';
import { catchError, of, tap } from 'rxjs';
import { DialogSnakBarService } from '../../../shared/dialog-snack-bar.service';
import { RouterLink } from '@angular/router';
import { CommonModule, NgClass } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
    RouterLink,
    NgClass,
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private snackBar: DialogSnakBarService
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  public async clickLogin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.authService
      .login(this.form.value)
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
        }),
        catchError((error) => {
          this.snackBar.showMenssage(error.error);
          return of(null);
        })
      )
      .subscribe();
  }
}
