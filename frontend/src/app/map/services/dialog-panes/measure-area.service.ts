import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MeasureAreaService {
  measureAreaPaneSubject = new BehaviorSubject<boolean>(false);
  measureAreaPane$ = this.measureAreaPaneSubject.asObservable();

  getMeasureAreaPane(): boolean {
    return this.measureAreaPaneSubject.getValue();
  }

  setMeasureAreaPane(value: boolean): void {
    this.measureAreaPaneSubject.next(value);
  }
}
