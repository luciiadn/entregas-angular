import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Elementos1Component } from './elementos1.component';

describe('Elementos1Component', () => {
  let component: Elementos1Component;
  let fixture: ComponentFixture<Elementos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Elementos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elementos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
