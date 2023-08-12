import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeasureLineService {
  measureLinePaneSubject = new BehaviorSubject<boolean>(false);
  measureLinePane$ = this.measureLinePaneSubject.asObservable();

  constructor() {}

  getMeasureLinePane(): boolean {
    return this.measureLinePaneSubject.getValue();
  }

  setMeasureLinePane(value: boolean): void {
    this.measureLinePaneSubject.next(value);
  }
}
