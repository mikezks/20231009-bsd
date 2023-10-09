import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Flight } from '../../../model/flight';
import { ValidationErrorsComponent } from '../../../shared/validation/validation-errors/validation-errors.component';

@Component({
  selector: 'app-flight-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, MatDialogModule, ValidationErrorsComponent],
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
})
export class FlightEditComponent {
  dialogRef = inject(MatDialogRef);
  data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);

  /*
    Alternative:
    type FlightData = { flight: Flight };
    data = inject<FlightData>(MAT_DIALOG_DATA);
  */

  flight = this.data.flight;

  close(): void {
    this.dialogRef.close();
  }
}
