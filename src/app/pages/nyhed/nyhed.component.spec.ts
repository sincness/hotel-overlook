import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyhedComponent } from './nyhed.component';

describe('NyhedComponent', () => {
  let component: NyhedComponent;
  let fixture: ComponentFixture<NyhedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyhedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyhedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
