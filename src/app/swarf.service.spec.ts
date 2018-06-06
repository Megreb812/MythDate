import { TestBed, inject } from '@angular/core/testing';

import { SwarfService } from './swarf.service';

describe('SwarfService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwarfService]
    });
  });

  it('should be created', inject([SwarfService], (service: SwarfService) => {
    expect(service).toBeTruthy();
  }));
});
