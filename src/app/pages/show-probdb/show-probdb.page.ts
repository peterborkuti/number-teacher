import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ProbdbService } from 'src/app/services/core/probdb.service';

@Component({
  selector: 'app-show-probdb',
  templateUrl: './show-probdb.page.html',
  styleUrls: ['./show-probdb.page.scss'],
})
export class ShowProbdbPage {
  setSelectedDbName(dbName) {
    this.service.setActive(dbName);
  }

  constructor(private service: ProbdbService) {
  }

  reset() {
    this.service.reset();
  }

}
