import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProbdbService } from 'src/app/services/core/probdb.service';

@Component({
  selector: 'app-show-probdb',
  templateUrl: './show-probdb.page.html',
  styleUrls: ['./show-probdb.page.scss'],
})
export class ShowProbdbPage implements OnDestroy {
  get selectedDbName() : Observable<string> {
    return this.service.watchName();
  }

  setSelectedDbName(event) {
    console.log(event);
  }

  private subscription: Subscription;

  constructor(private service: ProbdbService) {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  reset() {
    this.service.reset();
  }

}
