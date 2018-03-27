/*!
 * @license MIT
 * Copyright (c) 2017 Bernhard Grünewaldt - codeclou.io
 * https://github.com/cloukit/legal
 */
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/of';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CloukitStoryService {

  private _isReady = new ReplaySubject<boolean>();

  /** Holds all registered sources */
  private _sources = new Map<string, string>();

  constructor(private http: HttpClient) {}

  public addSource(filename: string, source: string) {
    this._sources.set(filename, source);
  }

  public getSource(filename: string): Observable<string> {
    return this._isReady.flatMap(() => {
      return Observable.of(this._sources.get(filename));
    });
  }

  public isReady(): Observable<boolean> {
    return this._isReady.asObservable();
  }

  public loadStoryJson(jsonUrl: string): void {
    console.log('loading story sources from', jsonUrl);
    this.http.get(jsonUrl).subscribe((json: any) => {
      const keys = Object.keys(json);
      for (let i=0; i<keys.length; i++) {
        this.addSource(keys[i], json[keys[i]]);
      }
      this._isReady.next(true);
      this._isReady.complete();
    });
  }
}
