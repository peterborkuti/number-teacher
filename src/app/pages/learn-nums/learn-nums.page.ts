import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProbdbService } from 'src/app/services/core/probdb.service';

@Component({
  selector: 'app-learn-nums',
  templateUrl: './learn-nums.page.html',
  styleUrls: ['./learn-nums.page.scss'],
})
export class LearnNumsPage {
  reset = 0;

  constructor(private service: ProbdbService) {
  }

  init() {
    this.reset = this.reset % 2 + 1;
  }

}
