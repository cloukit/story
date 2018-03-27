/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Input, Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/take';
import { CloukitStoryService } from './story.service';
import * as Prism from 'prismjs';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'cloukit-story',
  template: `
<div class="story-box">
  <div class="story-box-header">
    <div class="story-box-header-title">
      {{title}}
    </div>
    <div
      [class]="_activeTab === 'preview' ? 'button active' : 'button'"
      (click)="_activeTab='preview'"
    >
      preview
    </div>
    <div
      [class]="_activeTab === 'source' ? 'button active' : 'button'"
      (click)="_activeTab='source'"
    >
      source
    </div>
    <div
      [class]="_activeTab === 'template' ? 'button active' : 'button'"
      (click)="_activeTab='template'"
    >
      template
    </div>
  </div>
  <div class="story-box-content">
    <cloukit-story-prism-css-wrapper>
      <div class="code-box" *ngIf="_activeTab === 'source'">
        <pre
          class="language-typescript"><code
          class="language-typescript"
          [innerHtml]="_componentSource | customSafeHtml"></code></pre>
      </div>
      <div class="code-box" *ngIf="_activeTab === 'template'">
        <pre
          class="language-html"><code
          class="language-html"
          [innerHtml]="_componentTemplate | customSafeHtml"></code></pre>
      </div>
    </cloukit-story-prism-css-wrapper>
    <div class="preview-box" *ngIf="_activeTab === 'preview'">
      <ng-content></ng-content>
    </div>
  </div>
</div>
`,
  styles: [
    '.story-box { border: 3px solid #e6e6e6; }',
    '.story-box-header { background-color: #e6e6e6; display:flex; }',
    '.story-box-header-title { flex-grow:3; color: #710ECC; padding:10px; font-weight: bold; font-size:1.2rem; margin-right:40px;}',
    '.button { padding:10px; cursor: pointer; width: 75px; text-align: center; user-select: none; }',
    '.button:hover { background-color: #d9d9d9; }',
    '.active { border-bottom:8px solid #710ECC; font-weight:bold;}',
    '.preview-box { padding:20px; }',
    '.code-box { background-color: #333; }',
  ]
})
export class CloukitStoryComponent implements OnInit {

  _componentSource = '';
  _componentTemplate = '';
  _activeTab = 'preview';

  @Input()
  title: string;

  @Input()
  story: string;

  constructor(private cloukitStoryService: CloukitStoryService) { }

  ngOnInit() {
    this.cloukitStoryService.getSource(`${this.story}.ts`).take(1).subscribe(source => {
      this._componentSource = Prism.highlight(source, Prism.languages['typescript']);
    })
    this.cloukitStoryService.getSource(`${this.story}.html`).take(1).subscribe(source => {
      this._componentTemplate = Prism.highlight(source, Prism.languages['html']);
    })
  }
}
