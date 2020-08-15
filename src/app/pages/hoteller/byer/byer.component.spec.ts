import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ByerComponent } from './byer.component';

describe('ByerComponent', () => {
  let component: ByerComponent;
  let fixture: ComponentFixture<ByerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ByerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ByerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
