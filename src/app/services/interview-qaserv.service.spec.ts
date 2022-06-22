import { TestBed } from '@angular/core/testing';

import { InterviewQaservService } from './interview-qaserv.service';

describe('InterviewQaservService', () => {
  let service: InterviewQaservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterviewQaservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
