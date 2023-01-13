import { Component, Input, OnInit, ViewChild, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit, OnChanges {

  @ViewChild('sidenav') sidenav!: MatSidenav;
  @Input() isExpanded!: boolean;
  @Output() toggleValue = new EventEmitter<boolean>();
  @Input() detailsCommande: any = {};
  prixByQuantity: number = 0;

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.isExpanded = changes['isExpanded'].currentValue;
  }
  
  ngOnInit(): void {
  }

  closeNav() {
    this.sidenav.close();
    this.isExpanded = false;
    this.toggleValue.emit(this.isExpanded);
  }

  total() {
    return (this.detailsCommande.map((detail:any) => detail.prix * detail.quantite).reduce((acc:any, val:any) => acc + val));
  }

}
