import { TestBed } from '@angular/core/testing';

import { IpoCompanyService } from './ipo-company.service';

describe('IpoCompanyService', () => {
  let service: IpoCompanyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IpoCompanyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
