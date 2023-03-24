import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/authService/auth.service';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit, AfterViewInit {

  livres!: any;
  evenements!: any;
  userLoggedIn:boolean = false;

  constructor(private crudService: CrudService, private authService: AuthService) { }

  ngAfterViewInit(): void {
    // this.authService.userLoggedIn.subscribe(data => {
    //   console.log(data);
    // })
  }

  ngOnInit(): void {
    this.crudService.getAll('/livre').subscribe(data => this.livres = data);
    this.crudService.getAll('/evenements').subscribe(data => this.evenements = data);

  }

}
