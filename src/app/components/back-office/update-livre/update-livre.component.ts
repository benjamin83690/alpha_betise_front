import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crudService/crud.service';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {

  livreForm!: FormGroup;
  pending: boolean = false;
  categories: any = [];
  langues: any = [];
  etats: any = [];
  auteurs: any = [];
  editeurs:any = [];
  collections: any = [];
  livre: any = {};

  constructor(
    private _formBuilder: FormBuilder,
    private crudService: CrudService,
    private router: Router,
    private route: ActivatedRoute,
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
      categorieLivre: [],
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
    let isbn = this.route.snapshot.params['isbn'];
    this.getBookById(isbn);
  }


  submitLivre() {
    this.pending = true;
    
    this.crudService
      .save('/livre', this.livreForm.value)
      .subscribe((data) => {
        this.router.navigate(['/back-office/gestion-livre']);
      });
  }

  getBookById(isbn: number) {
    this.crudService.get('/livre', isbn).subscribe(data => {
      this.livre = data;
      this.livreForm.patchValue(data);
    })
  }

  compareFn(o1: any, o2: any) {
    return o1 && o2 ? o1.id === o2.id : o1 === o2;
  }
}
