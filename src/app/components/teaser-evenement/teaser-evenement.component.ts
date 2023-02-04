import { Component, Input, OnInit } from '@angular/core';
import { EventConfig } from 'src/app/configs/EventConfig';
import { RencontresService } from 'src/app/services/rencontresService/rencontres.service';

@Component({
  selector: 'app-teaser-evenement',
  templateUrl: './teaser-evenement.component.html',
  styleUrls: ['./teaser-evenement.component.css']
})
export class TeaserEvenementComponent implements OnInit {

  @Input() evenement!:any;
  @Input() eventConfig!: EventConfig;

  constructor(public eventService: RencontresService) { }

  ngOnInit(): void {
  }

}
