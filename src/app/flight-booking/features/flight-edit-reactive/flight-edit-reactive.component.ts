import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Component, Input, effect, inject, numberAttribute, signal, untracked } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FlightService } from '../../data-access/flight.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Flight, initFlight } from 'src/app/model/flight';

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
  private flightService = inject(FlightService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  protected id = signal(0);
  @Input({ alias: 'id', transform: numberAttribute })
  private set signalIdSetter(id: number) {
    this.id.set(id);
  }
  @Input() showDetails = false;

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
      const shallLoad = id !== this.form.controls.id.value;
      shallLoad && untracked(() => this.switchFlight(id));
    });

    this.form.valueChanges.subscribe((flightForm) => {
      console.log('flight form changed:', flightForm);
    });

    this.form.controls.from.valueChanges.subscribe((from) => {
      console.log('from changed:', from);
    });
  }

  save(): void {
    console.log('flight', this.form.getRawValue());
  }

  load(id: number): void {
    this.flightService.findById(id).subscribe(
      flight => this.form.patchValue(flight)
    );
  }

  switchFlight(id: number) {
    this.router.navigate(['../', id], { relativeTo: this.route });
  }
}
