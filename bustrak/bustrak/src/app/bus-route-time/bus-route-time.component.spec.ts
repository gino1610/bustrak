import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRouteTimeComponent } from './bus-route-time.component';

describe('BusRouteTimeComponent', () => {
  let component: BusRouteTimeComponent;
  let fixture: ComponentFixture<BusRouteTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusRouteTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusRouteTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
