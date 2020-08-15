import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MinSideComponent } from './min-side.component';

describe('MinSideComponent', () => {
  let component: MinSideComponent;
  let fixture: ComponentFixture<MinSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MinSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MinSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
