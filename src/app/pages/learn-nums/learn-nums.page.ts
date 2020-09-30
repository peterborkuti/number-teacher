import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProbdbService } from 'src/app/services/core/probdb.service';

@Component({
  selector: 'app-learn-nums',
  templateUrl: './learn-nums.page.html',
  styleUrls: ['./learn-nums.page.scss'],
})
export class LearnNumsPage implements OnInit, OnDestroy {
  reset = 0;
  groupName = '';

  private subscription: Subscription;

  constructor(private probdbService: ProbdbService) {
    this.subscription = this.probdbService.$ready.subscribe(ready => ready && this.init());
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  init() {
    this.groupName = this.probdbService.getName();
    this.reset = this.reset % 2 + 1;
  }

  ionViewDidEnter() {
    if (this.probdbService.ready) {
      this.init();
    }
  }

}
