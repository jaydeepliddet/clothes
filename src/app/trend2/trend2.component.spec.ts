import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trend2Component } from './trend2.component';

describe('Trend2Component', () => {
  let component: Trend2Component;
  let fixture: ComponentFixture<Trend2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trend2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trend2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
