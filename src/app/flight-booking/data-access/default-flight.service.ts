import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Flight } from '../../model/flight';
import { ConfigService } from '../../shared/config/config.service';
import { FlightService } from './flight.service';

@Injectable()
export class DefaultFlightService implements FlightService {
  private http = inject(HttpClient);
  private configService = inject(ConfigService);

  flights: Flight[] = [];

  find(from: string, to: string): Observable<Flight[]> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { from, to };

    return this.http.get<Flight[]>(url, { headers, params }).pipe(
      tap(flights => this.flights = flights)
    );
  }

  findById(id: number): Observable<Flight> {
    const url = `${this.configService.config.baseUrl}/flight`;

    const headers = {
      Accept: 'application/json',
    };

    const params = { id };

    return this.http.get<Flight>(url, { headers, params });
  }
}
