import { Component, OnInit, Input } from '@angular/core';
import { ProbdbService } from 'src/app/services/core/probdb.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'probdb-map',
  templateUrl: './probdb-map.component.html',
  styleUrls: ['./probdb-map.component.scss'],
})
export class ProbdbMapComponent implements OnInit {
  @Input()
  probdb: number[][] = [[]]

  constructor(private probdbService: ProbdbService) { }

  ngOnInit() {
  }

  selectProbDb() {

  }





}
