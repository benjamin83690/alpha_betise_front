import { Component, Input, OnInit } from '@angular/core';
import { RencontresService } from 'src/app/services/rencontresService/rencontres.service';

@Component({
  selector: 'app-teaser-evenement',
  templateUrl: './teaser-evenement.component.html',
  styleUrls: ['./teaser-evenement.component.css']
})
export class TeaserEvenementComponent implements OnInit {

  @Input() event!:any;

  constructor(public eventService: RencontresService) { }

  ngOnInit(): void {
  }

}
