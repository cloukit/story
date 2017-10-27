import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitStoryModule } from '../index';
import { DemoComponent } from './demo.component';
import { Story00Component } from './stories/story-00';
import { CloukitStoryService } from '../components/story.service';
import demoStoriesSource from './demo-stories-source.json';

@NgModule({
  declarations: [ DemoComponent, Story00Component ],
  exports: [ DemoComponent ],
  imports: [
    CommonModule,
    CloukitStoryModule,
  ],
  providers: [ ],
  bootstrap: [ ],
})
export class DemoModule {
  constructor(private cloukitStoryService: CloukitStoryService) {
    //
    // REGISTER STORY SOURCES
    //
    const keys = Object.keys(demoStoriesSource);
    for (let i=0; i<keys.length; i++) {
      this.cloukitStoryService.addSource(keys[i], demoStoriesSource[keys[i]]);
    }
  }
}
