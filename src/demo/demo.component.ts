import { Component, OnInit, OnDestroy } from '@angular/core';
import { CloukitStoryService } from '../components/story.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'demo',
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
