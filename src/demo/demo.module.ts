import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitStoryModule } from '../index';
import { DemoComponent } from './demo.component';
import { Story00Component } from './stories/story-00';

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
export class DemoModule {}
