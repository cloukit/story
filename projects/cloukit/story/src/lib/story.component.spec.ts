import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloukitStoryComponent } from './story.component';

describe('StoryComponent', () => {
  let component: CloukitStoryComponent;
  let fixture: ComponentFixture<CloukitStoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloukitStoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloukitStoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
