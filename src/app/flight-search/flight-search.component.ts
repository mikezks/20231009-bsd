import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../model/flight';
import { CityPipe } from '../shared/city.pipe';
import { FlightService } from './flight.service';
import { FlightCardComponent } from "../flight-card/flight-card.component";

@Component({
    selector: 'app-flight-search',
    standalone: true,
    templateUrl: './flight-search.component.html',
    styleUrls: ['./flight-search.component.css'],
    imports: [CommonModule, FormsModule, CityPipe, FlightCardComponent]
})
export class FlightSearchComponent {
  from = 'Hamburg';
  to = 'Graz';
  flights: Array<Flight> = [];
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  private flightService = inject(FlightService);

  search(): void {
    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights = flights;
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }
}
