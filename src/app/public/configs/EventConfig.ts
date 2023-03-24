import { InjectionToken } from "@angular/core"

export interface EventConfig {
    evenements: any[],
    selectedEvent: any,
    ApiRoute: string,
    textTitle: string,
    textTime: string,
    text: string
    customClass: string,
    isPast: boolean,
    customColor: string,
}

export const EVENT_CONF = new InjectionToken<EventConfig>('EVENT_CONF');
