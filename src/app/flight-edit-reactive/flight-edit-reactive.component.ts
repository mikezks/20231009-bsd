import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Flight } from '../model/flight';
import { ValidationErrorsComponent } from "../shared/validation-errors/validation-errors.component";
import { validateCity, validateCityWithParams } from '../shared/validators/city-validator';

@Component({
    selector: 'app-flight-edit-reactive',
    standalone: true,
    templateUrl: './flight-edit-reactive.component.html',
    styleUrls: ['./flight-edit-reactive.component.css'],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatDialogModule,
        ValidationErrorsComponent
    ]
})
export class FlightEditReactiveComponent {
  private dialogRef = inject(MatDialogRef);
  private data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);
  private fb = inject(FormBuilder);

  protected flight = this.data.flight;

  protected editForm = this.fb.nonNullable.group({
    id: [0],
    from: ['', [
      Validators.required,
      Validators.minLength(3),
      validateCity
    ]],
    to: ['', [
      Validators.required,
      Validators.minLength(3),
      validateCityWithParams([
        'Graz', 'Berlin', 'London'
      ])
    ]],
    date: [''],
    delayed: [false]
  });

  constructor() {
    this.editForm.patchValue(this.flight);

    this.editForm.valueChanges.subscribe(console.log);
  }

  protected save(): void {
    console.log('value', this.editForm.getRawValue());
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  protected close(): void {
    this.dialogRef.close();
  }
}
