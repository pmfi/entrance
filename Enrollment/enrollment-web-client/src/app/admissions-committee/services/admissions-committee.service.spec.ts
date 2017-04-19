import { TestBed, inject } from '@angular/core/testing';

import { AdmissionsCommitteeService } from './admissions-committee.service';

describe('AdmissionsCommitteeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdmissionsCommitteeService]
    });
  });

  it('should ...', inject([AdmissionsCommitteeService], (service: AdmissionsCommitteeService) => {
    expect(service).toBeTruthy();
  }));
});
