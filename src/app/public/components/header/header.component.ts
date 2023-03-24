import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService/auth.service';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  opened!: boolean;
  userLogged: boolean = false;
  isAdmin: boolean = false;

  constructor(private authService: AuthService, private crudService: CrudService) { 
  }

  ngOnInit(): void {
    this.userLogged = JSON.parse(localStorage.getItem('userIsLoggedIn') ?? JSON.stringify(false));
    this.authService.userLoggedIn.subscribe(val => {
      if (val) {
        this.userLogged = val;
      }
    })
    this.authService.isAdmin.subscribe(val => {
      this.isAdmin = val;
    })
    
    this.isAdmin = this.authService.exctractKeyJwt("role") == "ADMIN";
  }

  logout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('userIsLoggedIn');
    localStorage.removeItem('userEmail');
    this.userLogged = false;
    this.isAdmin = false;
  }
}
