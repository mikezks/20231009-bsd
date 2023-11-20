import { effect } from '@angular/core';
import { signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component, Input, inject, numberAttribute } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../../data-access/flight.service';
import { initFlight } from 'src/app/model/flight';

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

  private id = signal(0);
  @Input({ alias: 'id', transform: numberAttribute})
  private set signalIdSetter(id: number) {
    this.id.set(id);
  }
  @Input() showDetails = false;

  protected flight = initFlight;

  form = this.fb.nonNullable.group({
    id: [0],
    from: ['', [Validators.required, Validators.minLength(3)]],
    to: [''],
    date: [''],
    delayed: [false],
  });

  constructor() {
    this.form.patchValue(this.flight);

    effect(() => this.load(this.id()));

    this.form.valueChanges.subscribe((flightForm) => {
      console.log('flight form changed:', flightForm);
    });

    this.form.controls.from.valueChanges.subscribe((from) => {
      console.log('from changed:', from);
    });
  }

  save(): void {
    this.flight = this.form.getRawValue();
    console.log('flight', this.flight);
  }

  load(id: number): void {
    this.flightService.findById(id).subscribe(
      flight => this.form.patchValue(flight)
    );
  }
}
