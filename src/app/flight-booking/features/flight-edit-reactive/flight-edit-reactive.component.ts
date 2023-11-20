import { CommonModule } from '@angular/common';
import { Component, Input, effect, inject, numberAttribute, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Flight, initFlight } from 'src/app/model/flight';
import { FlightService } from '../../data-access/flight.service';

export const resolveFlights = (route: ActivatedRouteSnapshot): Observable<Flight> => {
  return inject(FlightService).findById(+(route.paramMap.get('id') ?? 0));
};

export const flightsResolverConfig = {
  flight: resolveFlights
};

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css'],
})
export class FlightEditReactiveComponent {
  private fb = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  @Input() showDetails = false;
  protected id = signal(0);
  @Input({ alias: 'id', transform: numberAttribute })
  private set signalIdSetter(id: number) {
    this.id.set(id);
  }
  protected flight = signal<Flight>(initFlight);
  @Input({ alias: 'flight'})
  private set signalFlightSetter(flight: Flight) {
    this.flight.set(flight);
  }

  form = this.fb.nonNullable.group({
    id: [0],
    from: ['', [Validators.required, Validators.minLength(3)]],
    to: [''],
    date: [''],
    delayed: [false],
  });

  constructor() {
    effect(() => this.form.patchValue(this.flight()));
    effect(() => {
      const id = this.id();
      untracked(() => this.switchFlight(id));
    });
  }

  save(): void {
    console.log('flight', this.form.getRawValue());
  }

  switchFlight(id: number) {
    if (id !== this.form.controls.id.value) {
      this.router.navigate(['../', id], { relativeTo: this.route });
    }
  }
}
