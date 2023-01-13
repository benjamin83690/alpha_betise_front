import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  val: number = 0;
  nbItems: BehaviorSubject<number> = new BehaviorSubject<number>(this.val);
  produit: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() { }

  addItem(item: any) {
    this.nbItems.next(++this.val);
    this.produit.next(item);
  }

  removeItem() {
    this.nbItems.next(--this.val);
  }

  cleanItems() {
    this.val = 0;
    this.nbItems.next(this.val);
  }
}
