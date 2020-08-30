import { TestBed } from '@angular/core/testing';

import { ChiotService } from './chiot.service';

describe('ChiotServiceService', () => {
  let service: ChiotService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChiotService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
