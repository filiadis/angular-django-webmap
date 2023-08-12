import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureIntersectionService {
  featureIntersectionSubject = new BehaviorSubject<boolean>(false);
  featureIntersectionPane$ = this.featureIntersectionSubject.asObservable();

  getFeatureIntersectionPane(): boolean {
    return this.featureIntersectionSubject.getValue();
  }

  setFeatureIntersectionPane(value: boolean): void {
    this.featureIntersectionSubject.next(value);
  }
}
