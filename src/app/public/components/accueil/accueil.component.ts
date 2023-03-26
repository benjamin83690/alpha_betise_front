import { Component, OnInit } from '@angular/core';
import { Evenement } from 'src/app/shared/models/EvenementModel';
import { Livre } from 'src/app/shared/models/LivreModel';
import { AuthService } from 'src/app/shared/services/authService/auth.service';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit{

  livres!: Livre[];
  evenements!: Evenement[];
  userLoggedIn:boolean = false;

  constructor(private crudService: CrudService, private authService: AuthService) { }

  ngOnInit(): void {
    this.crudService.getAll('/livre').subscribe((data: Livre[]) => this.livres = data);
    this.crudService.getAll('/evenements').subscribe((data: Evenement[]) => this.evenements = data);

  }

}
