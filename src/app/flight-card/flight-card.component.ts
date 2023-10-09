import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { initFlight } from '../model/flight';
import { CityPipe } from '../shared/city.pipe';
import { MatDialog } from '@angular/material/dialog';
import { FlightEditComponent } from '../flight-edit/flight-edit.component';
import { FlightEditReactiveComponent } from '../flight-edit-reactive/flight-edit-reactive.component';

@Component({
  selector: 'app-flight-card',
  standalone: true,
  imports: [CommonModule, CityPipe],
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
})
export class FlightCardComponent {
  @Input() item = initFlight;
  @Input() selected: boolean = false;
  @Output() selectedChange = new EventEmitter<boolean>();

  private dialog = inject(MatDialog);

  toggleSelection() {
    this.selected = !this.selected;
    this.selectedChange.emit(this.selected);
  }

  edit() {
    this.dialog.open(FlightEditReactiveComponent, {
      data: { flight: { ...this.item } },
      minWidth: '70%',
      panelClass: 'form-dialog'
    });
  }
}
