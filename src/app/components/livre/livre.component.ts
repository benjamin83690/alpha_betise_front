import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  @Input() livre: any = {};
  index!: number;

  constructor() { }

  ngOnInit(): void {
    this.livre = {
      photosLivre: ['https://loremflickr.com/640/360', 'https://loremflickr.com/640/360']
    }
  }

}
