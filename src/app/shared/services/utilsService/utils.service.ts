import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  averageNote(arrayNotes: any[]): number {
    return arrayNotes.length > 0 ? (Math.round(arrayNotes.reduce((acc, val) => acc + val) / arrayNotes.length)): 0;
  }

  itemIsInArray(item: any, tab: any[]) {
    for (let i = 0; i < tab.length; i++) {
      const element = tab[i];
      if (item == element) {
        return false;
      }
    }
    return true;
  }

  filledStars(comsLivre: any[]) {
    return Array(this.averageNote(comsLivre.map((com:any) => com.note))).fill(1).map((x,i)=>i);
  }

  emptyStars(comsLivre: any[]) {
    return Array( 5 - this.averageNote(comsLivre.map((com:any) => com.note))).fill(1).map((x,i)=>i);
  }
}
