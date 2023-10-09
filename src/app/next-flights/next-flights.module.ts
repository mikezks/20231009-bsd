import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NextFlightsComponent } from './next-flights.component';
import { CheckinComponent } from "./checkin/checkin.component";
import { NextFlightsService } from './next-flights.service';
import { FlightCardComponent } from '../flight-card/flight-card.component';



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
