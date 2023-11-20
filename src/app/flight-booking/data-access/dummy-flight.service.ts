import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Flight } from '../../model/flight';
import { FlightService } from './flight.service';

@Injectable()
export class DummyFlightService implements FlightService {
  flights: Flight[] = [];
  find(from: string, to: string): Observable<Flight[]> {
    const date = new Date().toISOString();

    return of([
      { id: 7, from: 'here', to: 'there', date, delayed: false },
      { id: 8, from: 'here', to: 'there', date, delayed: false },
      { id: 9, from: 'here', to: 'there', date, delayed: false },
    ]).pipe(
      tap(flights => this.flights = flights)
    );
  }

  findById(id: number): Observable<Flight> {
    const date = new Date().toISOString();

    return of(
      { id: 7, from: 'here', to: 'there', date, delayed: false }
    );
  }
}
