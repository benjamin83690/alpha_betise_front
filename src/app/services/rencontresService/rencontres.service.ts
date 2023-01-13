import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RencontresService {

  constructor() { }

  myFilter = (d: Date | null, events: any[]): boolean => {
    const day = d || new Date();
    return (
      events.filter(
        (event) =>
        new Date(event.date).toLocaleDateString('fr-FR') ==
          day.toLocaleDateString('fr-FR')
      ).length > 0
    );
  };

  selectedEvent(date: Date | null, events:any[]) {
    return events.filter(
      (event) =>
        date?.toLocaleDateString('fr-FR') ==
        new Date(event.date).toLocaleDateString('fr-FR')
    )[0];
  }

  colorParticipants(event: any) {
    let ratio = event.maxParticipants <= 10 ? 3 : 5;

    if (event.maxParticipants - event.utilisateurs.length <= ratio)
      return '#ff5d5d';
    return 'lightgreen';
  }

  getFullDate(d: Date) {
    return d.toLocaleDateString('fr-FR');
  }

  firstEvents(events:any[]) {
    return events
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
      .slice(0, 3);
  }

  lastEvents(events: any[]) {
    return events
      .sort((a, b) => Date.parse(a.date) - Date.parse(b.date))
      .reverse()
      .slice(0, 3);
  }

  defaultEvent(events: any[], isPast: boolean, history: any) {
    if (Object.keys(history).length > 1) {
      return history;
    }
    if (isPast) {
      return events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date)).reverse()[0];
    } 
    return events.sort((a, b) => Date.parse(a.date) - Date.parse(b.date))[0];
  }

  teaserEvents(isPast: boolean, events: any[]) {
    return isPast ? this.lastEvents(events) : this.firstEvents(events);
  }

}
