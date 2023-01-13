import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PanierService } from 'src/app/services/panierService/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  prixByQuantity: number = 0;
  opened!: boolean;
  detail: any = {};
  detailsStorage: any = localStorage.getItem('details') || null;
  itemsStorage: any = localStorage.getItem('items') || 0;
  detailsCommande: any[] = JSON.parse(this.detailsStorage) ?? [];
  nbItems!: number;

  constructor(private panierService: PanierService) {
    panierService.nbItems.next(JSON.parse(this.itemsStorage));
    panierService.nbItems.subscribe((val) => {
      this.nbItems = val;
      localStorage.setItem('items', JSON.stringify(this.nbItems));
    });

    panierService.produit.subscribe((val) => {
      if (val) {
        if (this.alreadyAdded(this.detailsCommande, val)) {
          this.detail.quantite++;
        } else {
          this.detail.livre = val;
          this.detail.quantite = 1;
          this.detailsCommande.push(this.detail);
        }
        localStorage.setItem('details', JSON.stringify(this.detailsCommande));
      }
    });
  }

  alreadyAdded(details: any[], val: any) {
    for (let i = 0; i < details.length; i++) {
      if (details[i].livre.isbn == val.isbn) {
        return true;
      }
    }
    return false;
  }

  ngOnInit(): void {
    this.nbItems = JSON.parse(this.itemsStorage) ?? 0;
  }

  closeNav() {
    this.sidenav.close();
  }

  total() {
    if (this.detailsCommande.length > 0)
      return this.detailsCommande
        .map((detail: any) => detail.livre.prix * detail.quantite)
        .reduce((acc: any, val: any) => acc + val);
    return 0;
  }

  isNotEmpty() {
    return Object.keys(this.detailsCommande).length;
  }

  clearPanier() {
    this.panierService.cleanItems();
    this.detailsCommande = [];
    localStorage.clear();
  }
}
