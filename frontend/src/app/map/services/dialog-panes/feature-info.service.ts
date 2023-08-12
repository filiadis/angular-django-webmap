import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureInfoService {
  featureInfoSubject = new BehaviorSubject<boolean>(false);
  featureInfoPane$ = this.featureInfoSubject.asObservable();

  getFeatureInfoPane(): boolean {
    return this.featureInfoSubject.getValue();
  }
  setFeatureInfoPane(value: boolean): void {
    this.featureInfoSubject.next(value);
  }
}
