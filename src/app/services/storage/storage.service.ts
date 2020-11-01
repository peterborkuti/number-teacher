import { Injectable, OnDestroy } from '@angular/core';
import { ProbDB } from '../core/prob-db';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { StorageWrapperService } from './storage-wrapper.service';
import { takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements OnDestroy{
  private probdb: ProbDB;

  private unsubscribe = new Subject();

  constructor(private storage: StorageWrapperService) {
    storage.watchActiveProbDB().pipe(takeUntil(this.unsubscribe)).subscribe(db => this.probdb = db);
  }

  clearAll() {
    this.storage.clearStorage();
  }

  save(nameOfDB: string, probabilities: number[][]) {
    this.storage.save(new ProbDB(nameOfDB, JSON.parse(JSON.stringify(probabilities))));
  }

  setActive(nameOfDB: string) {
      this.storage.setActiveName(nameOfDB);
  }

  getName(): string {
    return this.probdb.name;
  }

  watchNames(): Observable<string[]> {
    return this.storage.watchProbDBNames();
  }

  watchActiveProbDB(): Observable<ProbDB> {
    return this.storage.watchActiveProbDB();
  }

  watchNoSavedProbDBs(): Observable<boolean> {
    return this.storage.watchNoSavedProbDBs();
  }

  setProb(exp: number, digit: number, probability: number) {
    if (this.existsProb(exp, digit)) {
      this.probdb.probabilities[exp][digit] = probability;
      this.storage.save(this.probdb);
    }
  }

  private existsProb(exp: number, digit: number): boolean {
    return !!this.probdb.probabilities[exp] && (this.probdb.probabilities[exp].length > digit);
  }

  getProb(exp: number, digit: number): number {
    return this.existsProb(exp, digit) ? this.probdb.probabilities[exp][digit] : 0;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
