import { TestBed } from '@angular/core/testing';

import { TaskFormService } from '../services/task-form.service';

describe('TaskFormService', () => {
  let service: TaskFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
