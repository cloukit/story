import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CloukitStoryComponent } from './story.component';
import { CustomSafeHtmlPipe } from './children/custom-safe-html.pipe';
import { CloukitStoryPrismCssWrapperComponent } from './children/prism-css-wrapper.component';
import { CloukitStoryService } from './story.service';

describe('StoryComponent', () => {
  let component: CloukitStoryComponent;
  let fixture: ComponentFixture<CloukitStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        CloukitStoryService
      ],
      declarations: [
        CloukitStoryComponent,
        CustomSafeHtmlPipe,
        CloukitStoryPrismCssWrapperComponent,
      ],
      imports: [
        HttpClientModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', inject([HttpClient, HttpTestingController, CloukitStoryService],
    (http: HttpClient, backend: HttpTestingController, service: CloukitStoryService) => {
    expect(component).toBeTruthy();
  }));
});
