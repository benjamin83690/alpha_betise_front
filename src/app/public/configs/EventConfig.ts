import { InjectionToken } from "@angular/core"
import { Evenement } from "src/app/shared/models/EvenementModel";

export interface EventConfig {
    evenements: Evenement[],
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
