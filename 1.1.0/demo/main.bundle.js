webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: "<demo></demo>"
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__ = __webpack_require__("../../../../../src/demo/demo.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_3__demo_demo_module__["a" /* DemoModule */]],
        providers: [],
        exports: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/components/children/custom-safe-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomSafeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */


var CustomSafeHtmlPipe = (function () {
    function CustomSafeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    CustomSafeHtmlPipe.prototype.transform = function (html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    };
    return CustomSafeHtmlPipe;
}());
CustomSafeHtmlPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({ name: 'customSafeHtml' }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]) === "function" && _a || Object])
], CustomSafeHtmlPipe);

var _a;
//# sourceMappingURL=custom-safe-html.pipe.js.map

/***/ }),

/***/ "../../../../../src/components/children/prism-css-wrapper.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitStoryPrismCssWrapperComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

/* http://prismjs.com/download.html?themes=prism-okaidia&languages=markup+css+clike+javascript+typescript */
var CloukitStoryPrismCssWrapperComponent = (function () {
    function CloukitStoryPrismCssWrapperComponent() {
    }
    return CloukitStoryPrismCssWrapperComponent;
}());
CloukitStoryPrismCssWrapperComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-story-prism-css-wrapper',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewEncapsulation */].None,
        template: "\n  <div class=\"prism-css-wrapper\">\n    <ng-content></ng-content>\n  </div>",
        styles: ["\n    code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      color: #f8f8f2;\n      background: none;\n      text-shadow: 0 1px rgba(0, 0, 0, 0.3);\n      font-family: 'Roboto Mono', monospace;\n      text-align: left;\n      white-space: pre;\n      word-spacing: normal;\n      word-break: normal;\n      word-wrap: normal;\n      line-height: 1.5;\n      -moz-tab-size: 4;\n      tab-size: 4;\n      -webkit-hyphens: none;\n      -moz-hyphens: none;\n      -ms-hyphens: none;\n      hyphens: none;\n    }\n    \n    /* Code blocks */\n    pre[class*=\"language-\"] {\n      padding: 1em;\n      margin: 0;\n      overflow: auto;\n      border-radius: 0.3em;\n    }\n    \n    :not(pre) > code[class*=\"language-\"],\n    pre[class*=\"language-\"] {\n      background: #272822;\n    }\n    \n    /* Inline code */\n    :not(pre) > code[class*=\"language-\"] {\n      padding: .1em;\n      border-radius: .3em;\n      white-space: normal;\n    }\n    \n    .token.comment,\n    .token.prolog,\n    .token.doctype,\n    .token.cdata {\n      color: slategray;\n    }\n    \n    .token.punctuation {\n      color: #f8f8f2;\n    }\n    \n    .namespace {\n      opacity: .7;\n    }\n    \n    .token.property,\n    .token.tag,\n    .token.constant,\n    .token.symbol,\n    .token.deleted {\n      color: #C076F3;\n    }\n    \n    .token.boolean,\n    .token.number {\n      color: #ae81ff;\n    }\n    \n    .token.selector,\n    .token.attr-name,\n    .token.string,\n    .token.char,\n    .token.builtin,\n    .token.inserted {\n      color: #a6e22e;\n    }\n    \n    .token.operator,\n    .token.entity,\n    .token.url,\n    .language-css .token.string,\n    .style .token.string,\n    .token.variable {\n      color: #f8f8f2;\n    }\n    \n    .token.atrule,\n    .token.attr-value,\n    .token.function {\n      color: #e6db74;\n    }\n    \n    .token.keyword {\n      color: #66d9ef;\n    }\n    \n    .token.regex,\n    .token.important {\n      color: #fd971f;\n    }\n    \n    .token.important,\n    .token.bold {\n      font-weight: 700;\n    }\n    .token.italic {\n      font-style: italic;\n    }\n    \n    .token.entity {\n      cursor: help;\n    }\n  "],
    })
], CloukitStoryPrismCssWrapperComponent);

//# sourceMappingURL=prism-css-wrapper.component.js.map

/***/ }),

/***/ "../../../../../src/components/story.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitStoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__story_service__ = __webpack_require__("../../../../../src/components/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs__ = __webpack_require__("../../../../prismjs/prism.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prismjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prismjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_css__ = __webpack_require__("../../../../prismjs/components/prism-css.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prismjs_components_prism_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown__ = __webpack_require__("../../../../prismjs/components/prism-markdown.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prismjs_components_prism_markdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript__ = __webpack_require__("../../../../prismjs/components/prism-typescript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_prismjs_components_prism_typescript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitStoryComponent = (function () {
    function CloukitStoryComponent(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        this._componentSource = '';
        this._componentTemplate = '';
        this._activeTab = 'preview';
    }
    CloukitStoryComponent.prototype.ngOnInit = function () {
        this._componentSource = __WEBPACK_IMPORTED_MODULE_2_prismjs__["highlight"](this.cloukitStoryService.getSource(this.story + ".ts"), __WEBPACK_IMPORTED_MODULE_2_prismjs__["languages"]['typescript']);
        this._componentTemplate = __WEBPACK_IMPORTED_MODULE_2_prismjs__["highlight"](this.cloukitStoryService.getSource(this.story + ".html"), __WEBPACK_IMPORTED_MODULE_2_prismjs__["languages"]['html']);
    };
    return CloukitStoryComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitStoryComponent.prototype, "title", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", String)
], CloukitStoryComponent.prototype, "story", void 0);
CloukitStoryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cloukit-story',
        template: "\n<div class=\"story-box\">\n  <div class=\"story-box-header\">\n    <div class=\"story-box-header-title\">\n      {{title}}\n    </div>\n    <div\n      [class]=\"_activeTab === 'preview' ? 'button active' : 'button'\"\n      (click)=\"_activeTab='preview'\"\n    >\n      preview\n    </div>\n    <div\n      [class]=\"_activeTab === 'source' ? 'button active' : 'button'\"\n      (click)=\"_activeTab='source'\"\n    >\n      source\n    </div>\n    <div\n      [class]=\"_activeTab === 'template' ? 'button active' : 'button'\"\n      (click)=\"_activeTab='template'\"\n    >\n      template\n    </div>\n  </div>\n  <div class=\"story-box-content\">\n    <cloukit-story-prism-css-wrapper>\n      <div class=\"code-box\" *ngIf=\"_activeTab === 'source'\">\n        <pre\n          class=\"language-typescript\"><code\n          class=\"language-typescript\"\n          [innerHtml]=\"_componentSource | customSafeHtml\"></code></pre>\n      </div>\n      <div class=\"code-box\" *ngIf=\"_activeTab === 'template'\">\n        <pre\n          class=\"language-html\"><code\n          class=\"language-html\"\n          [innerHtml]=\"_componentTemplate | customSafeHtml\"></code></pre>\n      </div>\n    </cloukit-story-prism-css-wrapper>\n    <div class=\"preview-box\" *ngIf=\"_activeTab === 'preview'\">\n      <ng-content></ng-content>  \n    </div>    \n  </div>\n</div>\n",
        styles: [
            '.story-box { border: 3px solid #e6e6e6; }',
            '.story-box-header { background-color: #e6e6e6; display:flex; }',
            '.story-box-header-title { color: #710ECC; padding:10px; font-weight: bold; font-size:1.2rem; margin-right:40px;}',
            '.button { padding:10px; cursor: pointer; width: 75px; text-align: center; }',
            '.active { border-bottom:8px solid #710ECC; font-weight:bold;}',
            '.preview-box { padding:20px; }',
            '.code-box { background-color: #333; }',
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* CloukitStoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__story_service__["a" /* CloukitStoryService */]) === "function" && _a || Object])
], CloukitStoryComponent);

var _a;
//# sourceMappingURL=story.component.js.map

/***/ }),

/***/ "../../../../../src/components/story.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitStoryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__story_component__ = __webpack_require__("../../../../../src/components/story.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__story_service__ = __webpack_require__("../../../../../src/components/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__children_custom_safe_html_pipe__ = __webpack_require__("../../../../../src/components/children/custom-safe-html.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__children_prism_css_wrapper_component__ = __webpack_require__("../../../../../src/components/children/prism-css-wrapper.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */






var CloukitStoryModule = (function () {
    function CloukitStoryModule() {
    }
    return CloukitStoryModule;
}());
CloukitStoryModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__story_component__["a" /* CloukitStoryComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__story_component__["a" /* CloukitStoryComponent */], __WEBPACK_IMPORTED_MODULE_4__children_custom_safe_html_pipe__["a" /* CustomSafeHtmlPipe */], __WEBPACK_IMPORTED_MODULE_5__children_prism_css_wrapper_component__["a" /* CloukitStoryPrismCssWrapperComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_3__story_service__["a" /* CloukitStoryService */]],
        entryComponents: [],
    })
], CloukitStoryModule);

//# sourceMappingURL=story.module.js.map

/***/ }),

/***/ "../../../../../src/components/story.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CloukitStoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */

var CloukitStoryService = (function () {
    function CloukitStoryService() {
        /** Holds all registered sources */
        this._sources = new Map();
    }
    CloukitStoryService.prototype.addSource = function (filename, source) {
        this._sources.set(filename, source);
    };
    CloukitStoryService.prototype.getSource = function (filename) {
        return this._sources.get(filename);
    };
    return CloukitStoryService;
}());
CloukitStoryService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
], CloukitStoryService);

//# sourceMappingURL=story.service.js.map

/***/ }),

/***/ "../../../../../src/demo/demo-stories-source.json":
/***/ (function(module, exports) {

module.exports = {"story-00.ts":"import { Component } from '@angular/core';\n@Component({\n  selector: 'story-00',\n  templateUrl: './story-00.html',\n  styles: [ ],\n})\nexport class Story00Component { }","story-00.html":"<div>foo bar</div>"}

/***/ }),

/***/ "../../../../../src/demo/demo.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding:10px\">\n\n  <cloukit-story\n    title=\"Showcase 123\"\n    story=\"story-00\"\n  >\n    <story-00></story-00>\n  </cloukit-story>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/demo/demo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DemoComponent = (function () {
    function DemoComponent() {
    }
    return DemoComponent;
}());
DemoComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'demo',
        template: __webpack_require__("../../../../../src/demo/demo.component.html"),
        styles: [],
    })
], DemoComponent);

//# sourceMappingURL=demo.component.js.map

/***/ }),

/***/ "../../../../../src/demo/demo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index__ = __webpack_require__("../../../../../src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demo_component__ = __webpack_require__("../../../../../src/demo/demo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stories_story_00__ = __webpack_require__("../../../../../src/demo/stories/story-00.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_story_service__ = __webpack_require__("../../../../../src/components/story.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_stories_source_json__ = __webpack_require__("../../../../../src/demo/demo-stories-source.json");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demo_stories_source_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__demo_stories_source_json__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DemoModule = (function () {
    function DemoModule(cloukitStoryService) {
        this.cloukitStoryService = cloukitStoryService;
        //
        // REGISTER STORY SOURCES
        //
        var keys = Object.keys(__WEBPACK_IMPORTED_MODULE_6__demo_stories_source_json___default.a);
        for (var i = 0; i < keys.length; i++) {
            this.cloukitStoryService.addSource(keys[i], __WEBPACK_IMPORTED_MODULE_6__demo_stories_source_json___default.a[keys[i]]);
        }
    }
    return DemoModule;
}());
DemoModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */], __WEBPACK_IMPORTED_MODULE_4__stories_story_00__["a" /* Story00Component */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__demo_component__["a" /* DemoComponent */]],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__index__["a" /* CloukitStoryModule */],
        ],
        providers: [],
        bootstrap: [],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__components_story_service__["a" /* CloukitStoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__components_story_service__["a" /* CloukitStoryService */]) === "function" && _a || Object])
], DemoModule);

var _a;
//# sourceMappingURL=demo.module.js.map

/***/ }),

/***/ "../../../../../src/demo/stories/story-00.html":
/***/ (function(module, exports) {

module.exports = "<div>foo bar</div>\n"

/***/ }),

/***/ "../../../../../src/demo/stories/story-00.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Story00Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Story00Component = (function () {
    function Story00Component() {
    }
    return Story00Component;
}());
Story00Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'story-00',
        template: __webpack_require__("../../../../../src/demo/stories/story-00.html"),
        styles: [],
    })
], Story00Component);

//# sourceMappingURL=story-00.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_story_module__ = __webpack_require__("../../../../../src/components/story.module.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__components_story_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_story_service__ = __webpack_require__("../../../../../src/components/story.service.ts");
/* unused harmony namespace reexport */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map