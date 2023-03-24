import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { CrudService } from '../crudService/crud.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  
  token!: string;
  loggedUser!:string;
  isloggedIn: boolean = false;
  roles!:string[];
  userLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isAdmin:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  user:BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private helper = new JwtHelperService();

  constructor(private router: Router, private crudService: CrudService) {}

  saveToken(jwt: string) {
    localStorage.setItem('jwt', JSON.stringify(jwt));
    localStorage.setItem('userIsLoggedIn', JSON.stringify(true));
    this.token = jwt;
    this.isloggedIn = true;
    this.userLoggedIn.next(true);
    this.decodeJWT();
  }

  decodeJWT() {
    if (this.token == undefined) return;
    const decodedToken = this.helper.decodeToken(this.token);
    this.roles = decodedToken.role;
    this.loggedUser = decodedToken.sub;
    this.crudService.getUser('/utilisateur', this.loggedUser).subscribe(data => {
      localStorage.setItem('userEmail', JSON.stringify(data.email));
      if(data.role == 'ADMIN'){
        this.isAdmin.next(true);
      }
    })
  }

  getToken():string {
    let token = localStorage.getItem('jwt')  ? JSON.parse(localStorage.getItem('jwt') || '') : '';
    if(token != '')
    {
      return token;
    }
    return this.token;
  }

  exctractKeyJwt(key: any) {
    let token = localStorage.getItem('jwt')  ? JSON.parse(localStorage.getItem('jwt') || '') : '';
    let result;
    if (token != '') {
      const decodedToken = this.helper.decodeToken(token);
      result = decodedToken[key];

      return result;
    }
    return null;
  }

  getUser() {
    return this.crudService.getUser('/utilisateur', this.exctractKeyJwt("sub"))
  }
}
