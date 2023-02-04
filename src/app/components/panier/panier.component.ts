import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { PanierService } from 'src/app/services/panierService/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css'],
})
export class PanierComponent implements OnInit {
  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() detailsCommande: any = [];
  prixByQuantity: number = 0;
  opened!: boolean;
  nbItems!: number;

  constructor(private panierService: PanierService) {
    panierService.nbItems.subscribe(val => {
      this.nbItems = val;
    })
  }

  ngOnInit(): void {}

  closeNav() {
    this.sidenav.close();
  }

  total() {
    if (this.isNotEmpty())
      return this.detailsCommande
        .map((detail: any) => detail.prix * detail.quantite)
        .reduce((acc: any, val: any) => acc + val);
    return 0;
  }

  isNotEmpty() {
    return Object.keys(this.detailsCommande).length;
  }
}
