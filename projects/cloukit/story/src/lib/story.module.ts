import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CloukitStoryComponent } from './story.component';
import { CustomSafeHtmlPipe } from './children/custom-safe-html.pipe';
import { CloukitStoryPrismCssWrapperComponent } from './children/prism-css-wrapper.component';
import { CloukitStoryService } from './story.service';

@NgModule({
  imports: [ CommonModule, BrowserModule, HttpClientModule, ],
  exports: [ CloukitStoryComponent ],
  declarations: [ CloukitStoryComponent, CustomSafeHtmlPipe, CloukitStoryPrismCssWrapperComponent ],
  providers: [ CloukitStoryService ],
})
export class CloukitStoryModule { }
