import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { AuthService } from 'src/app/services/authService/auth.service';
import { CrudService } from 'src/app/services/crudService/crud.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css'],
})
export class InscriptionComponent implements OnInit {
  userForm!: FormGroup;
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
      nom: null,
      prenom: null,
    });
  }

  ngOnInit(): void {}

  submitUser() {
    this.crudService
    .save('/auth/inscription', this.userForm.value)
    .subscribe({
      next: data => {
          this.pending = true;
          this.authService.saveToken(data.token);
          this.router.navigate(['/connexion']);  
        },
        error: err => throwError(() => err)
      });
  }
}
