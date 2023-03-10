import { Component, Input, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utilsService/utils.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css']
})
export class LivreComponent implements OnInit {

  @Input() livre: any = {};
  index!: number;

  constructor(private utils: UtilsService) { }

  ngOnInit(): void {
    console.log(this.livre);
    
  }


  filledStars(comments: any[]) {
    return this.utils.filledStars(comments);
  }

  emptyStars(comments: any[]) {
    return this.utils.emptyStars(comments);
  }
}
