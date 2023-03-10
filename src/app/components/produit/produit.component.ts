import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from 'src/app/services/crudService/crud.service';
import { PanierService } from 'src/app/services/panierService/panier.service';
import { ProduitService } from 'src/app/services/produitService/produit.service';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  livre: any;

  constructor(
    private panierService: PanierService,
    private route: ActivatedRoute,
    private produitService: ProduitService,
    private crudService: CrudService
  ) {
    let isbn = this.route.snapshot.params['isbn'];
    this.getBookByIsbn(isbn);
    
  }

  ngOnInit(): void {

    // this.livre = {
    //   isbn: 9780125765106,
    //   titre: 'Croire sur les pouvoirs de la littérature',
    //   nbPages: '302',
    //   datePublication: '30-12-2016',
    //   prix: 15,
    //   poids: '142',
    //   longueur: '12',
    //   largeur: '12',
    //   epaisseur: '2',
    //   resume:
    //     "La littérature prend soin des rêves défaits et les attise, dans l'espoir que peut-être, d'une façon mystérieuse, ils puissent cheminer pour en embraser d'autres. Dans une époque prodigue en menaces et en sombres horizons, tandis qu'elle tourne autour d'un livre qui affirmerait la puissance du langage - la capacité des phrases à changer quelque chose au réel, par l'entremise de ceux qui lisent -, Justine Augier voit son projet d'écrire sur la littérature comme lieu de l'engagement entrer en collision avec la maladie et bientôt la mort de sa mère. Alors que la nature même de l'urgence mute, l'intime et l'universel se tressent dans un texte bouleversant de justesse et de clairvoyance. Qui choisit de croire à la force des mots, à la valeur sacrée de leur sens, à leur mise en acte - aux pouvoirs de la littérature. Jusqu'à faire de chaque lecteur un résistant. À l'intersection du littéraire et du politique, un livre bref et fulgurant qui trouve sa place auprès de ceux de Hannah Arendt et Joan Didion.",
    //   libraireCom:
    //     "Un sublime hommage ! A la mère et au lien qui l'unit à sa fille, à la littérature et à sa force d'évocation, à l'écriture et à ses pouvoirs magiques. Le récit de Justine Augier, ponctué de ses riches lectures, est profondément marquant !Un sublime hommage !",
    //   collection: {
    //     nom: 'Gallimard',
    //   },
    //   auteur: {
    //     nom: 'Justine Augier',
    //   },
    //   editeur: {
    //     nom: 'Actes Sud',
    //   },
    //   etatStock: {
    //     etat: 'En stock',
    //   },
    //   langue: {
    //     langue: 'Français',
    //   },
    //   commentaires: {
    //     commentaire:
    //       "Un sublime hommage ! A la mère et au lien qui l'unit à sa fille, à la littérature et à sa force d'évocation, à l'écriture et à ses pouvoirs magiques. Le récit de Justine Augier, ponctué de ses riches lectures, est profondément marquant !Un sublime hommage ! A la mère et au lien qui l'unit à sa fille, à la littérature et à sa force d'évocation, à l'écriture et à ses pouvoirs magiques. Le récit de Justine Augier, ponctué de ses riches lectures, est profondément marquant !Un sublime hommage ! A la mère et au lien qui l'unit à sa fille, à la littérature et à sa force d'évocation, à l'écriture et à ses pouvoirs magiques. Le récit de Justine Augier, ponctué de ses riches lectures, est profondément marquant !Un sublime hommage ! A la mère et au lien qui l'unit à sa fille, à la littérature et à sa force d'évocation, à l'écriture et à ses pouvoirs magiques. Le récit de Justine Augier, ponctué de ses riches lectures, est profondément marquant !Un sublime hommage ! A la mère et au lien qui l'unit à sa fille, à la littérature et à sa force d'évocation, à l'écriture et à ses pouvoirs magiques. Le récit de Justine Augier, ponctué de ses riches lectures, est profondément marquant !",
    //   },
    // };
  }

  addPanier(livre: any) {
    this.panierService.addItem(livre);
  }

  getBookByIsbn(isbn: number) {
    this.crudService.getAll('/livre').subscribe(books => {
      this.livre = books.filter((item: any) => item.isbn == isbn)[0];
      console.log(this.livre);
    })
  }
}
