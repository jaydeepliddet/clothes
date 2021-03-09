import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trend4Component } from './trend4.component';

describe('Trend4Component', () => {
  let component: Trend4Component;
  let fixture: ComponentFixture<Trend4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Trend4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Trend4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
