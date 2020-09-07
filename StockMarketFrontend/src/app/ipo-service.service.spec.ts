import { TestBed } from '@angular/core/testing';

import { IpoServiceService } from './ipo-service.service';

describe('IpoServiceService', () => {
  let service: IpoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});