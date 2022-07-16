import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHolidayBookingComponent } from './edit-holiday-booking.component';

describe('EditHolidayBookingComponent', () => {
  let component: EditHolidayBookingComponent;
  let fixture: ComponentFixture<EditHolidayBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHolidayBookingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHolidayBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
