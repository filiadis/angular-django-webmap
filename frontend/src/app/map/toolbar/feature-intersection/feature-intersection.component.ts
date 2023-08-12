import { Component, OnInit } from '@angular/core';

import { SelectedDialogService } from '../../services/dialog-panes/selected-dialog.service';
import { FeatureInfoService } from '../../services/dialog-panes/feature-info.service';
import { FeatureIntersectionService } from '../../services/dialog-panes/feature-intersection.service';

@Component({
  selector: 'app-feature-intersection',
  templateUrl: './feature-intersection.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class FeatureIntersectionComponent implements OnInit {
  goToXYState: boolean = false;

  constructor(
    private featureIntersection: FeatureIntersectionService,
    private selectedDialog: SelectedDialogService
  ) {
    this.goToXYState = this.featureIntersection.getFeatureIntersectionPane();
  }

  ngOnInit() {
    this.goToXYState = this.featureIntersection.getFeatureIntersectionPane();
  }

  toggleFeatureIntersection() {
    const newValue = !this.featureIntersection.getFeatureIntersectionPane();
    this.featureIntersection.setFeatureIntersectionPane(newValue);
    this.selectedDialog.selectedDialogBtn('featInt');
  }
}
