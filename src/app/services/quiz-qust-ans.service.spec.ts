import { TestBed } from '@angular/core/testing';

import { QuizQustAnsService } from './quiz-qust-ans.service';

describe('QuizQustAnsService', () => {
  let service: QuizQustAnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuizQustAnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
