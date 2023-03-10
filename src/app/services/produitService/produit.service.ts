import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  livres:BehaviorSubject<any> = new BehaviorSubject<any>([]);
  constructor() { }
}
