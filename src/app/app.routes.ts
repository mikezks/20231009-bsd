import { Routes } from "@angular/router";
import { HomeComponent } from "./core/features/home/home.component";
import { FlightSearchComponent } from "./flight-booking/features/flight-search/flight-search.component";

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
    path: 'flights',
    component: FlightSearchComponent
  }
];
