import { TestBed, inject } from '@angular/core/testing';

import { CloukitStoryService } from './story.service';

describe('StoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloukitStoryService]
    });
  });

  it('should be created', inject([CloukitStoryService], (service: CloukitStoryService) => {
    expect(service).toBeTruthy();
  }));
});
