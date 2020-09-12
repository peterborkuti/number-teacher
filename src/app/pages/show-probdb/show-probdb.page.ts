import { Component, OnInit } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';

@Component({
  selector: 'app-show-probdb',
  templateUrl: './show-probdb.page.html',
  styleUrls: ['./show-probdb.page.scss'],
})
export class ShowProbdbPage implements OnInit {
  set selectedDbName(name: string) {
    this.probdbService.setActive(name);
    this.probdb = this.probdbService.getProbabilities();
  }

  get selectedDbName() : string {
    return this.probdbService.getName();
  }

  dbNames: string[] = [];

  probdb: number[][] = [[]]

  constructor(private probdbService: ProbdbService) { }

  ngOnInit() {
    this.dbNames = this.probdbService.getNames();
    this.selectedDbName = this.probdbService.getName();
    this.probdb = this.probdbService.getProbabilities()
  }

}
