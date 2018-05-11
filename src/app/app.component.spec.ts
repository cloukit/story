import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DemoModule } from './demo/demo.module';
import { CloukitStoryModule } from '../../projects/cloukit/story/src/public_api';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
      ],
      imports: [
        DemoModule,
        CloukitStoryModule,
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
