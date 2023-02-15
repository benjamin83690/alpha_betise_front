import { Component, Inject, OnInit } from '@angular/core';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { EventConfig, EVENT_CONF } from 'src/app/configs/EventConfig';
import { CrudService } from 'src/app/services/crudService/crud.service';
import { RencontresService } from 'src/app/services/rencontresService/rencontres.service';

@Component({
  selector: 'app-rencontres',
  templateUrl: './rencontres.component.html',
  styleUrls: ['./rencontres.component.css'],
})
export class RencontresComponent implements OnInit {
  eventConfig!: EventConfig;
  evenement: any = {};
  teaserEvents!: any[];
  myFilter!: (date: Date) => boolean;

  constructor(
    @Inject(EVENT_CONF) conf: EventConfig,
    public eventService: RencontresService,
    private crudService: CrudService
  ) {
    this.setEventConfig(conf);
  }

  setEventConfig(conf: EventConfig) {
    this.eventConfig = conf;
  }

  ngOnInit(): void {
    this.crudService.getAll(this.eventConfig.ApiRoute).subscribe((data) => {
      // data.forEach(item => this.eventConfig.evenements.push(item));
      this.eventConfig.evenements = data;
      this.evenement = this.eventService.defaultEvent(
        this.eventConfig.evenements,
        this.eventConfig.isPast,
        history.state
      );

      this.myFilter = (d: Date | null): boolean => {
        return this.eventService.myFilter(d, this.eventConfig.evenements);
      };

      this.teaserEvents = this.eventService.teaserEvents(
        this.eventConfig.isPast,
        this.eventConfig.evenements
      );
    });
  }

  formatDate(str: string) {
    return new Date(str);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      return this.eventConfig.evenements.filter(
        (event) =>
          new Date(event.date).toLocaleDateString('fr-FR') ==
          cellDate.toLocaleDateString('fr-FR')
      ).length > 0
        ? `${this.eventConfig.customClass}`
        : '';
    }

    return '';
  };

  selectedEvent(date: Date | null) {
    this.evenement = this.eventService.selectedEvent(
      date,
      this.eventConfig.evenements
    );
  }

  isNotEmpty(obj: any) {
    return Object.keys(obj).length;
  }

  getFullDate(d: Date) {
    this.eventService.getFullDate(d);
  }
}
