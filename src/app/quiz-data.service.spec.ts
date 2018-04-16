import { TestBed, inject } from '@angular/core/testing';

import { QuizDataService } from './quiz-data.service';

describe('QuizDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuizDataService]
    });
  });

  it('should be created', inject([QuizDataService], (service: QuizDataService) => {
    expect(service).toBeTruthy();
  }));
});
