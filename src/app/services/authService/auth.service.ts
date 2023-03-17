import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
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
  private helper = new JwtHelperService();

  constructor(private router: Router, private crudService: CrudService) {}

  saveToken(jwt: string) {
    localStorage.setItem('jwt', jwt);
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
      localStorage.setItem('user', JSON.stringify(data));
      if(data.role == 'ADMIN'){
        this.isAdmin.next(true);
      }
    })
  }

  getToken():string {
    return this.token;
  }

}
