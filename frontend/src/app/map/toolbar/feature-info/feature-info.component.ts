import { Component, OnInit } from '@angular/core';

import { SelectedDialogService } from '../../services/dialog-panes/selected-dialog.service';
import { FeatureInfoService } from '../../services/dialog-panes/feature-info.service';

@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class FeatureInfoComponent implements OnInit {
  featureInfoState: boolean = false;

  constructor(
    private featureInfo: FeatureInfoService,
    private selectedDialog: SelectedDialogService
  ) {
    this.featureInfoState = this.featureInfo.getFeatureInfoPane();
  }

  ngOnInit() {
    this.featureInfoState = this.featureInfo.getFeatureInfoPane();
  }
  toggleFeatureInfo() {
    const newValue = !this.featureInfo.getFeatureInfoPane();
    this.featureInfo.setFeatureInfoPane(newValue);
    this.selectedDialog.selectedDialogBtn('featInfo');
  }
}
