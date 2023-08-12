import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GoToXyService {
  goToXYPaneSubject = new BehaviorSubject<boolean>(false);
  goToXYPane$ = this.goToXYPaneSubject.asObservable();

  getGoToXYPane(): boolean {
    return this.goToXYPaneSubject.getValue();
  }

  setGoToXYPane(value: boolean): void {
    this.goToXYPaneSubject.next(value);
  }
}
