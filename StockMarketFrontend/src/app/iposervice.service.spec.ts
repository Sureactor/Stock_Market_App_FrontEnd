import { TestBed } from '@angular/core/testing';

import { IposerviceService } from './iposervice.service';

describe('IposerviceService', () => {
  let service: IposerviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IposerviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
