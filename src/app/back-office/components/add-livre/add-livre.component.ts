import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Auteur } from 'src/app/shared/models/AuteurModel';
import { Categorie } from 'src/app/shared/models/CategorieModel';
import { Collection } from 'src/app/shared/models/CollectionModel';
import { Editeur } from 'src/app/shared/models/EditeurModel';
import { EtatStock } from 'src/app/shared/models/EtatStockModel';
import { Langue } from 'src/app/shared/models/LangueModel';
import { Livre } from 'src/app/shared/models/LivreModel';
import { CrudService } from 'src/app/shared/services/crudService/crud.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.css'],
})
export class AddLivreComponent implements OnInit {
  livreForm!: FormGroup;
  pending: boolean = false;
  categories: Categorie[] = [];
  langues: Langue[] = [];
  etats: EtatStock[] = [];
  auteurs: Auteur[] = [];
  editeurs:Editeur[] = [];
  collections: Collection[] = [];
  

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
    this.crudService.getAll('/categorie-livre').subscribe((data: Categorie[]) => {
      this.categories = data;
    })

    this.crudService.getAll('/langue').subscribe((data: Langue[]) => {
      this.langues = data;
    })

    this.crudService.getAll('/etat-stock').subscribe((data: EtatStock[]) => {
      this.etats = data;
    })

    this.crudService.getAll('/auteur').subscribe((data: Auteur[]) => {
      this.auteurs = data;
    })

    this.crudService.getAll('/editeur').subscribe((data: Editeur[]) => {
      this.editeurs = data;
    })

    this.crudService.getAll('/collection').subscribe((data: Collection[]) => {
      this.collections = data;
    })

  }

  submitLivre() {
    this.pending = true;

    this.crudService
      .save('/livre', this.livreForm.value)
      .subscribe((data) => {
        this.router.navigate(['/back-office/gestion-livre']);
      });
  }
}
