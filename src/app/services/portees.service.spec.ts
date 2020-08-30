import { TestBed } from '@angular/core/testing';

import { PorteesService } from './portees.service';

describe('PorteesServiceService', () => {
  let service: PorteesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorteesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
