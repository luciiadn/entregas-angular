import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elementos2Component } from './elementos2.component';

describe('Elementos2Component', () => {
  let component: Elementos2Component;
  let fixture: ComponentFixture<Elementos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elementos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elementos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
