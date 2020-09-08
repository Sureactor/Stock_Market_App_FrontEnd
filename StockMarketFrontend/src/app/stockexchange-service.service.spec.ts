import { TestBed } from '@angular/core/testing';

import { StockexchangeServiceService } from './stockexchange-service.service';

describe('StockexchangeServiceService', () => {
  let service: StockexchangeServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StockexchangeServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
