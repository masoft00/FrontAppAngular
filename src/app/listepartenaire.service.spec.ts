import { TestBed } from '@angular/core/testing';

import { ListepartenaireService } from './listepartenaire.service';

describe('ListepartenaireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListepartenaireService = TestBed.get(ListepartenaireService);
    expect(service).toBeTruthy();
  });
});
