import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elementos3Component } from './elementos3.component';

describe('Elementos3Component', () => {
  let component: Elementos3Component;
  let fixture: ComponentFixture<Elementos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elementos3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elementos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
