import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextFlightsComponent } from './next-flights.component';

describe('NextFlightsComponent', () => {
  let component: NextFlightsComponent;
  let fixture: ComponentFixture<NextFlightsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NextFlightsComponent]
    });
    fixture = TestBed.createComponent(NextFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
