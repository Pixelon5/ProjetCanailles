import { TestBed } from '@angular/core/testing';

import { ReproducteurService } from './reproducteur.service';

describe('ReproducteurService', () => {
  let service: ReproducteurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReproducteurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
