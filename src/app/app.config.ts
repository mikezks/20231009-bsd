import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { FlightService } from './flight-search/flight.service';
import { DefaultFlightService } from './flight-search/default-flight.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    {
      provide: FlightService,
      useClass: DefaultFlightService,
    }
  ]
};
