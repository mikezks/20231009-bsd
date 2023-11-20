import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './flight-edit-reactive.component.html',
  styleUrls: ['./flight-edit-reactive.component.css'],
})
export class FlightEditReactiveComponent {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  protected flight = {
    id: 999,
    from: 'Rom',
    to: 'Oslo',
    date: '',
    delayed: true
  };
  protected showDetails = false;

  form = this.fb.nonNullable.group({
    id: [0],
    from: ['', [Validators.required, Validators.minLength(3)]],
    to: [''],
    date: [''],
    delayed: [false],
  });

  constructor() {
    this.form.patchValue(this.flight);

    this.route.paramMap.subscribe(params => {
      this.form.patchValue({
        id: +(params.get('id') || 0)
      });
      this.showDetails = params.get('showDetails') === 'true';
    });

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
}
