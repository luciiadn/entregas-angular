import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HpPagesComponent } from './hp-pages.component';

describe('HpPagesComponent', () => {
  let component: HpPagesComponent;
  let fixture: ComponentFixture<HpPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HpPagesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HpPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
