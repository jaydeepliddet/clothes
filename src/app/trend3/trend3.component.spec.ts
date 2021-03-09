import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trend3Component } from './trend3.component';

describe('Trend3Component', () => {
  let component: Trend3Component;
  let fixture: ComponentFixture<Trend3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trend3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trend3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
