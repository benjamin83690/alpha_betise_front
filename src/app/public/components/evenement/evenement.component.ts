import { Component, Input, OnInit } from '@angular/core';
import { EventConfig } from '../../configs/EventConfig';
import { RencontresService } from '../../services/rencontresService/rencontres.service';

@Component({
  selector: 'app-evenement',
  templateUrl: './evenement.component.html',
  styleUrls: ['./evenement.component.css'],
})
export class EvenementComponent implements OnInit {
  @Input() evenement!: any;
  @Input() eventConfig!: EventConfig;

  constructor(public eventService: RencontresService) {}

  ngOnInit(): void {}

  isNotEmpty(obj: any) {
    return Object.keys(obj).length;
  }

  isNotFull(event: any): boolean {
    if (!event.maxParticipants) return true;
    if (event.utilisateurs.length < event.maxParticipants) return true;
    return false;
  }
}
