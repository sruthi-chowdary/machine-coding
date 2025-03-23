import { TestBed } from '@angular/core/testing';

import { MCodingServiceService } from './m-coding-service.service';

describe('MCodingServiceService', () => {
  let service: MCodingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MCodingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
