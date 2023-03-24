import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css'],
})
export class AddLivreComponent implements OnInit {
  livreForm!: FormGroup;
  pending: boolean = false;
  categories: any = [];
  langues: any = [];
  etats: any = [];
  auteurs: any = [];
  editeurs:any = [];
  collections: any = [];
  

  constructor(
    private _formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router
  ) {
    this.livreForm = this._formBuilder.group({
      titre: null,
      prix: null,
      resume: null,
      nbPages: null,
      datePublication: null,
      poids: null,
      nbExemplaires: null,
      longueur: null,
      largeur: null,
      epaisseur: null,
      categorieLivre: null,
      collectionLivre: null,
      editeur: null,
      photoLivre: null,
      langue: null,
      etatStock: null,
      auteurs: [],
      isbn: null
    });
  }

  ngOnInit(): void {
    this.crudService.getAll('/categorie-livre').subscribe(data => {
      this.categories = data;
    })

    this.crudService.getAll('/langue').subscribe(data => {
      this.langues = data;
    })

    this.crudService.getAll('/etat-stock').subscribe(data => {
      this.etats = data;
    })

    this.crudService.getAll('/auteur').subscribe(data => {
      this.auteurs = data;
    })

    this.crudService.getAll('/editeur').subscribe(data => {
      this.editeurs = data;
    })

    this.crudService.getAll('/collection').subscribe(data => {
      this.collections = data;
    })

  }

  submitLivre() {
    this.pending = true;
    console.log(this.livreForm.value);
    
    this.crudService
      .save('/livre', this.livreForm.value)
      .subscribe((data) => {
        this.router.navigate(['/back-office/gestion-livre']);
      });
  }
}
