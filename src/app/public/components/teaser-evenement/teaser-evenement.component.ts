import { Component, Input, OnInit } from '@angular/core';
import { EventConfig } from '../../configs/EventConfig';
import { RencontresService } from '../../services/rencontresService/rencontres.service';

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
