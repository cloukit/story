import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';
import { Story00Component } from './stories/story-00';
import { CloukitStoryService, CloukitStoryModule } from '../../../projects/cloukit/story/src/public_api';


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
    // INITIALIZE STORY SOURCES
    //
    let baseUrl = '/';
    if (document.getElementsByTagName('base') && document.getElementsByTagName('base')[0]) {
      // in Karma tests we do not have that dom element present
      baseUrl = document.getElementsByTagName('base')[0].href;
    }
    // File is auto generated by build chain 'yarn pre'
    const storySourceJsonUrl = `${baseUrl}assets/demo-stories-source.json`;
    this.cloukitStoryService.loadStoryJson(storySourceJsonUrl);
  }
}
