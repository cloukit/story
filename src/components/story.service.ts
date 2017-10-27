/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';

@Injectable()
export class CloukitStoryService {

  /** Holds all registered sources */
  private _sources = new Map<string, string>();

  public addSource(filename: string, source: string) {
    this._sources.set(filename, source);
  }

  public getSource(filename: string) {
    return this._sources.get(filename);
  }
}
