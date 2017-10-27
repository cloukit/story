import { Component } from '@angular/core';
import { CloukitStoryService } from '../components/story.service';
import demoStoriesSource from './demo-stories-source.json';

@Component({
  selector: 'demo',
  templateUrl: './demo.component.html',
  styles: [ ],
})
export class DemoComponent {
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
