import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './features/next-flights/next-flights.component';
import { CheckinComponent } from "./ui/checkin/checkin.component";
import { NextFlightsService } from './data-access/next-flights.service';
import { FlightCardComponent } from '../flight-booking/ui/flight-card/flight-card.component';



@NgModule({
  declarations: [
    NextFlightsComponent
  ],
  imports: [
    CommonModule,
    CheckinComponent,
    FlightCardComponent
  ],
  providers: [
    NextFlightsService
  ],
  exports: [
    NextFlightsComponent
  ]
})
export class NextFlightsModule { }
