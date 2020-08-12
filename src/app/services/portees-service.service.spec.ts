import { TestBed } from '@angular/core/testing';

import { PorteesServiceService } from './portees-service.service';

describe('PorteesServiceService', () => {
  let service: PorteesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorteesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
