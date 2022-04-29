import { TestBed } from '@angular/core/testing';

import { ZoneCrudService } from './zone-crud.service';

describe('ZoneCrudService', () => {
  let service: ZoneCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
