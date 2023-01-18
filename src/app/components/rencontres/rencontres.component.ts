import { Component, Inject, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { EventConfig, EVENT_CONF } from 'src/app/configs/EventConfig';
import { RencontresService } from 'src/app/services/rencontresService/rencontres.service';

@Component({
  selector: 'app-rencontres',
  templateUrl: './rencontres.component.html',
  styleUrls: ['./rencontres.component.css'],
})
export class RencontresComponent implements OnInit {
  eventConfig!: EventConfig;
  selected!: Date | null;
  evenement: any = {};
  teaserEvents!: any[];

  constructor(@Inject(EVENT_CONF) conf: EventConfig, public eventService: RencontresService) {
    this.setEventConfig(conf);
  }

  setEventConfig(conf: EventConfig) {
    this.eventConfig = conf;
  }

  ngOnInit(): void {
    this.evenement = this.eventService.defaultEvent(this.eventConfig.evenements, this.eventConfig.isPast);
    this.teaserEvents = this.eventService.teaserEvents(this.eventConfig.isPast, this.eventConfig.evenements);    
  }

  myFilter = (d: Date | null): boolean => {
    return this.eventService.myFilter(d, this.eventConfig.evenements);
  };

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      return this.eventConfig.evenements.filter(
        (event) =>
          event.date.toLocaleDateString('fr-FR') ==
          cellDate.toLocaleDateString('fr-FR')
      ).length > 0
        ? `${this.eventConfig.customClass}`
        : '';
    }

    return '';
  };

  selectedEvent(date: Date | null) {
    this.evenement = this.eventService.selectedEvent(date, this.eventConfig.evenements);
  }

  isNotEmpty(obj: any) {
    return Object.keys(obj).length;
  }

  getFullDate(d: Date) {
    this.eventService.getFullDate(d);
  }
}
