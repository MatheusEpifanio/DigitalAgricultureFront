import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { catchError, of } from 'rxjs';
import { DialogSnakBarService } from '../../../shared/dialog-snack-bar.service';


@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  public form!: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private snackBar: DialogSnakBarService,
    private route: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(50)]],
      password: ['', [Validators.required]],
    });
  }

  public clickRegister() {
    if(this.form.invalid){
      this.form.markAllAsTouched;
      return;
    }

    this.authService.register(this.form.value).pipe(
      catchError(error => {
        this.snackBar.showMenssage(error.error);
        return of(null);
      })

    ).subscribe();
    this.route.navigate(['/login'], {relativeTo: this.activatedRoute});
  }
}
