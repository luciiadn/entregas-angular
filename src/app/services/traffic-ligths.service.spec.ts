import { TestBed } from '@angular/core/testing';

import { TrafficLigthsService } from './traffic-ligths.service';

describe('TrafficLigthsService', () => {
  let service: TrafficLigthsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrafficLigthsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
