import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { AuthService } from 'src/app/shared/services/authService/auth.service';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  userForm!: FormGroup;
  err: number = 0;
  pending: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private crudService: CrudService,
    private authService: AuthService,
    private router: Router
  ) {
    this.userForm = this._formBuilder.group({
      motDePasse: null,
      email: null,
    });
  }

  ngOnInit(): void {}

  checkUser() {
    this.pending = true;
    this.crudService
      .save('/auth/authentification', this.userForm.value)
      .subscribe({
        next: (data) => {
          this.authService.saveToken(data.token);
          setTimeout(() => {
            this.router.navigate(['/accueil']);
          }, 1500)
        },
        error: () => {
          setTimeout(() => {
            this.pending = false;
          },1000)
        },
      });
  }
}
