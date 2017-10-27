/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloukitStoryComponent } from './story.component';
import { CloukitStoryService } from './story.service';
import { CustomSafeHtmlPipe } from './children/custom-safe-html.pipe';
import { CloukitStoryPrismCssWrapperComponent } from './children/prism-css-wrapper.component';

@NgModule({
  imports: [ CommonModule ],
  exports: [ CloukitStoryComponent ],
  declarations: [ CloukitStoryComponent, CustomSafeHtmlPipe, CloukitStoryPrismCssWrapperComponent ],
  providers: [ CloukitStoryService ],
  entryComponents: [ ],
})
export class CloukitStoryModule {
}
