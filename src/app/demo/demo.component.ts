import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloukitStoryService } from '../../../projects/cloukit/story/src/public_api';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cloukit-demo',
  templateUrl: './demo.component.html',
  styles: [ ],
})
export class DemoComponent implements OnInit, OnDestroy {
  public isReady = false;
  private readySubscription: Subscription;

  constructor(private cloukitStoryService: CloukitStoryService) { }

  ngOnInit() {
    this.readySubscription = this.cloukitStoryService.isReady().subscribe(() => {
      this.isReady = true;
    });
  }

  ngOnDestroy() {
    if (this.readySubscription !== undefined && this.readySubscription !== null && !this.readySubscription.closed) {
      this.readySubscription.unsubscribe();
    }
  }
}
