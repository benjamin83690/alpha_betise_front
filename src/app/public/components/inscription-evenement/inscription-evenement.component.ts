import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RencontresService } from '../../services/rencontresService/rencontres.service';
import { EventConfig, EVENT_CONF } from '../../configs/EventConfig';

@Component({
  selector: 'app-inscription-evenement',
  templateUrl: './inscription-evenement.component.html',
  styleUrls: ['./inscription-evenement.component.css'],
})
export class InscriptionEvenementComponent implements OnInit {
  eventConfig!: EventConfig;
  evenement!: any;

  constructor(
    private route: ActivatedRoute,
    @Inject(EVENT_CONF) conf: EventConfig,
    public eventService: RencontresService,
  ) {
    this.setEventConfig(conf);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params['id'];
    this.evenement = this.getEventById(id)[0];
  }

  setEventConfig(conf: EventConfig) {
    this.eventConfig = conf;
  }

  getEventById(id: number) {
    return this.eventConfig.evenements.filter((item) => item.id == id);
  }

  getFullDate(d: Date) {
    return this.eventService.getFullDate(d);
  }
}
