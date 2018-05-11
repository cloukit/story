import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { CloukitStoryService } from './story.service';

describe('StoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CloukitStoryService
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([HttpClient, HttpTestingController, CloukitStoryService],
    (http: HttpClient, backend: HttpTestingController, service: CloukitStoryService) => {
    expect(service).toBeTruthy();
    /*
    backend.expectOne({
      url: '/foo/bar',
      method: 'GET'
    });
    */
  }));
});
