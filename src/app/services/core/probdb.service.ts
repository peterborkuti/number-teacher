import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { NumberGroupsService } from './number-groups.service';
import { ProbDB } from './prob-db';
import { ProbModifierService } from './prob-modifier.service';

@Injectable({
  providedIn: 'root'
})
export class ProbdbService {
  private numGroups: {[key: string]: Function} = {};
  private probdb : ProbDB;

  private score$ = new BehaviorSubject<number>(0);
  private name$ = new BehaviorSubject<string>('');

  private unsubscribe = new Subject();

  constructor(
    private probModifier: ProbModifierService,
    private storage: StorageService,
    numGroupService: NumberGroupsService) {

    this.numGroups = numGroupService.getServices();

    this.storage.watchNoSavedProbDBs().pipe(takeUntil(this.unsubscribe)).
      subscribe((noDbs) => {if (noDbs) this.setDb()});

    this.storage.watchActiveProbDB().pipe(takeUntil(this.unsubscribe),filter(db => !!db && !!db.name))
      .subscribe(db => {
        this.probdb = db;
        this.setMaxExpZeroDigitProb();
        this.setScore();
        this.name$.next(db.name);
      });
  }

  setDb() {
      Object.keys(this.numGroups).forEach(ng => this.reset(ng));
      this.setActive(Object.keys(this.numGroups)[0]);
  }

  reset(nameOfDB?: string) {
    if (!nameOfDB) {
      nameOfDB = this.probdb.name;
    }
    const getDefaultValuesFn = this.numGroups[nameOfDB];
    if (getDefaultValuesFn) {
      this.storage.save(nameOfDB, getDefaultValuesFn());
    }
  }

  setActive(nameOfDB: string) {
      this.storage.setActive(nameOfDB);
  }

  watchName(): Observable<string> {
    return this.name$; 
  }

  watchNames() : Observable<string[]> {
    return this.storage.watchNames();
  }

    /**
   * The score shows how good us the user based on the probability table
   * cells with 0 value will never be in questions, so they are filtered out
   * when score is counted
   * Returns with a number between 0 and 100
   *
   * The closer to zero the better
   */
  private setScore() {
    const flatProbs = [].concat(...this.probdb.probabilities).filter(prob => prob > 0);
    const initialProb = 1;
    const probabilityAfterTwoGoodAnswerWithoutBadAnswer = initialProb/2/2 + 0.01;
    const goodCount = flatProbs.filter(p => p < probabilityAfterTwoGoodAnswerWithoutBadAnswer).length;
    const score = Math.round(goodCount / flatProbs.length * 100);

    this.score$.next(score); 
  }

  watchScore(): Observable<number> {
    return this.score$;
  }

  watchProbabilities(): Observable<number[][]> {
    return this.storage.watchActiveProbDB().pipe(map(db => db.probabilities));
  }

  /**
   * Returns with the number which digits should be asked
   * The number contains all not-leading-zeroes exponents
   * 
   * If it contains only zeroes, it will return the last digit
   */
  getNumberToAsk(): number[] {
    let digits = this.probdb.probabilities.map(exp => this.getRandomOneFromMaxIndexes(exp)).reverse();
    console.log('Raw question:', digits.join(''));

    while (digits.length > 1 && digits[0] == 0) {
      digits = digits.slice(1)
    }

    const len = Math.floor(Math.random() * digits.length) + 1;
    return digits.slice(-len);
  }

  private getMaxValue(arr: number[]): number {
    let maxValue = -1;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > maxValue) {
        maxValue = arr[i];
      }
    }

    return maxValue;
  }

  private getRandomOneFromMaxIndexes(arr: number[], delta = 0.01): number {
    const maxValue = this.getMaxValue(arr);
    delta = Math.min(delta, maxValue / 100.0); 

    const maxIndexes = arr.map((v,i) => ({value:v, index: i}))
        .filter(vi => Math.abs(vi.value - maxValue) < delta)
        .map(vi => vi.index);

    return maxIndexes[Math.floor(Math.random()*maxIndexes.length)];
  }

  bad(exp: number, digit: number) {
    const prob = this.storage.getProb(exp, digit);
    const newProb = this.probModifier.bad(prob);
    this.storage.setProb(exp, digit, newProb);
  }

  good(exp: number, digit: number) {
    this.storage.setProb(exp, digit, this.probModifier.good(exp, this.storage.getProb(exp, digit)));
  }

  private setMaxExpZeroDigitProb() {
    const probs = this.probdb.probabilities;
    const exp = probs.length;
    const maxVal = this.getMaxValue(probs[exp-1]);
    this.storage.setProb(exp, 0, maxVal);
  }

}
