import { Routes } from "@angular/router";
import { FlightEditReactiveComponent } from "./features/flight-edit-reactive/flight-edit-reactive.component";
import { FlightSearchComponent } from "./features/flight-search/flight-search.component";
import { PassengerSearchComponent } from "./features/passenger-search/passenger-search.component";

const FLIGHT_BOOKING_ROUTES: Routes = [
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
        path: 'flight-edit/:id',
        component: FlightEditReactiveComponent
      },
      {
        path: 'passenger-search',
        component: PassengerSearchComponent
      },
    ]
  }
];

export default FLIGHT_BOOKING_ROUTES;
