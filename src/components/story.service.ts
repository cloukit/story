/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CloukitStoryService {

  private _isReady = new Subject<boolean>();

  /** Holds all registered sources */
  private _sources = new Map<string, string>();

  public addSource(filename: string, source: string) {
    this._sources.set(filename, source);
  }

  public getSource(filename: string) {
    return this._sources.get(filename);
  }

  public isReady(): Observable<boolean> {
    return this._isReady.asObservable();
  }

  public setReady(): void {
    this._isReady.next(true);
    this._isReady.complete();
  }
}
