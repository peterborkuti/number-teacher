import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ProbdbService } from 'src/app/services/core/probdb.service';

@Component({
  selector: 'app-show-probdb',
  templateUrl: './show-probdb.page.html',
  styleUrls: ['./show-probdb.page.scss'],
})
export class ShowProbdbPage implements OnDestroy {
  set selectedDbName(name: string) {
    this.probdbService.setActive(name);
    this.probdb = this.probdbService.getProbabilities();
  }

  get selectedDbName() : string {
    return this.probdbService.getName();
  }

  dbNames: string[] = [];
  probdb: number[][] = [[]]

  private subscription: Subscription;

  constructor(private probdbService: ProbdbService) {
    this.subscription = probdbService.$ready.subscribe( ready => ready && this.init());
  }

  ionViewDidEnter() {
    if (this.probdbService.ready) {
      this.init();
    }
  }

  init() {
    this.dbNames = this.probdbService.getNames();
    this.selectedDbName = this.probdbService.getName();
    this.probdb = this.probdbService.getProbabilities()
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reset() {
    this.probdbService.reset(this.selectedDbName);
    this.init();
  }

}
