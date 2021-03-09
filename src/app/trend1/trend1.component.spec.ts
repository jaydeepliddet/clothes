import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trend1Component } from './trend1.component';

describe('Trend1Component', () => {
  let component: Trend1Component;
  let fixture: ComponentFixture<Trend1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trend1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trend1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
