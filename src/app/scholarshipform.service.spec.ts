import { TestBed } from '@angular/core/testing';

import { ScholarshipformService } from './scholarshipform.service';

describe('ScholarshipformService', () => {
  let service: ScholarshipformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScholarshipformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
