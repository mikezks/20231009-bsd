import { Routes } from "@angular/router";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";

export const FLIGHT_BOOKING_ROUTES: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'flight-search',
        pathMatch: 'full'
      },
      {
        path: 'flight-search',
        component: FlightSearchComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
    ]
  }
];
