import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotellerComponent } from './hoteller.component';

describe('HotellerComponent', () => {
  let component: HotellerComponent;
  let fixture: ComponentFixture<HotellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
