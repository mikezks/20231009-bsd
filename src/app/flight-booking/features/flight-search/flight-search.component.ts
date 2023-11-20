import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Flight } from '../../../model/flight';
import { CityPipe } from '../../../shared/pipes/city.pipe';
import { FlightService } from '../../data-access/flight.service';
import { FlightCardComponent } from '../../ui/flight-card/flight-card.component';

@Component({
  selector: 'app-flight-search',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    CityPipe,
    FlightCardComponent
  ],
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent {
  private flightService = inject(FlightService);

  from = 'Hamburg';
  to = 'Graz';
  flights =  signal<Array<Flight>>(
    this.flightService.flights
  );
  basket: Record<number, boolean> = {
    3: true,
    5: true,
  };

  search(): void {
    const url = 'https://demo.angulararchitects.io/api/flight';

    const headers = {
      Accept: 'application/json',
    };

    const params = {
      from: this.from,
      to: this.to,
    };

    this.flightService.find(this.from, this.to).subscribe({
      next: (flights) => {
        this.flights.set(flights);
      },
      error: (errResp) => {
        console.error('Error loading flights', errResp);
      },
    });
  }
}
