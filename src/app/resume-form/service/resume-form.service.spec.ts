import { TestBed, inject } from '@angular/core/testing';

import { ResumeFormService } from './resume-form.service';

describe('ResumeFormService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResumeFormService]
    });
  });

  it('should be created', inject([ResumeFormService], (service: ResumeFormService) => {
    expect(service).toBeTruthy();
  }));
});
