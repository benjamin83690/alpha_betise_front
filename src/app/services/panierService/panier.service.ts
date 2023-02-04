import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  val: number = 0;
  nbItems: BehaviorSubject<number> = new BehaviorSubject<number>(this.val);

  constructor() { }

  addItem() {
    this.nbItems.next(++this.val);
  }

  removeItem() {
    this.nbItems.next(--this.val);
  }

  cleanItems() {
    this.val = 0;
    this.nbItems.next(this.val);
  }
}
