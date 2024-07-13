import { TestBed } from '@angular/core/testing';

import { InfosellersService } from './infosellers.service';

describe('InfosellersService', () => {
  let service: InfosellersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfosellersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
