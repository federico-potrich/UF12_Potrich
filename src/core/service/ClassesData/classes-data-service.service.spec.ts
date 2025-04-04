import { TestBed } from '@angular/core/testing';

import { ClassesDataServiceService } from './classes-data-service.service';

describe('ClassesDataServiceService', () => {
  let service: ClassesDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassesDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
