import { Routes } from "@angular/router";
import { HomeComponent } from "./core/features/home/home.component";
import { FlightSearchComponent } from "./flight-booking/features/flight-search/flight-search.component";
import { FLIGHT_BOOKING_ROUTES } from "./flight-booking/flight-booking.routes";

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking',
    children: FLIGHT_BOOKING_ROUTES
  }
];
