import { Component } from '@angular/core';
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

  constructor(public service: ProbdbService) {
  }

  reset() {
    this.service.reset();
  }

}
