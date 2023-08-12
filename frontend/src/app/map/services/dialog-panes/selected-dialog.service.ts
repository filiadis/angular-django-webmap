import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MeasureLineService } from './measure-line.service';
import { MeasureAreaService } from './measure-area.service';
import { GoToXyService } from './go-to-xy.service';
import { FeatureInfoService } from './feature-info.service';
import { FeatureIntersectionService } from './feature-intersection.service';

@Injectable({
  providedIn: 'root',
})
export class SelectedDialogService {
  selectedDialogSubject = new BehaviorSubject<string>('');
  selectedDialog$ = this.selectedDialogSubject.asObservable();

  constructor(
    private measureLine: MeasureLineService,
    private measureArea: MeasureAreaService,
    private goToXY: GoToXyService,
    private featureInfo: FeatureInfoService,
    private featureIntersection: FeatureIntersectionService
  ) {}

  selectedDialogBtn(btn: string): void {
    if (btn === 'measure-line') {
      this.measureArea.setMeasureAreaPane(false);
      this.goToXY.setGoToXYPane(false);
      this.featureInfo.setFeatureInfoPane(false);
      this.featureIntersection.setFeatureIntersectionPane(false);
    } else if (btn === 'measure-area') {
      this.measureLine.setMeasureLinePane(false);
      this.goToXY.setGoToXYPane(false);
      this.featureInfo.setFeatureInfoPane(false);
      this.featureIntersection.setFeatureIntersectionPane(false);
    } else if (btn === 'goToXY') {
      this.measureLine.setMeasureLinePane(false);
      this.measureArea.setMeasureAreaPane(false);
      this.featureInfo.setFeatureInfoPane(false);
      this.featureIntersection.setFeatureIntersectionPane(false);
    } else if (btn === 'featInfo') {
      this.measureLine.setMeasureLinePane(false);
      this.measureArea.setMeasureAreaPane(false);
      this.goToXY.setGoToXYPane(false);
      this.featureIntersection.setFeatureIntersectionPane(false);
    } else if (btn === 'featInt') {
      this.measureLine.setMeasureLinePane(false);
      this.measureArea.setMeasureAreaPane(false);
      this.goToXY.setGoToXYPane(false);
      this.featureInfo.setFeatureInfoPane(false);
    }
  }
}
