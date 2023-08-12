import { Component, OnInit } from '@angular/core';

import { MeasureLineService } from '../../services/dialog-panes/measure-line.service';
import { SelectedDialogService } from '../../services/dialog-panes/selected-dialog.service';

@Component({
  selector: 'app-measure-line',
  templateUrl: './measure-line.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class MeasureLineComponent implements OnInit {
  measureLineState: boolean = false;

  constructor(
    private measureLine: MeasureLineService,
    private selectedDialog: SelectedDialogService
  ) {
    this.measureLineState = this.measureLine.getMeasureLinePane();
  }

  ngOnInit() {
    this.measureLineState = this.measureLine.getMeasureLinePane();
  }

  toggleMeasureLine() {
    const newValue = !this.measureLine.getMeasureLinePane();
    this.measureLine.setMeasureLinePane(newValue);
    this.selectedDialog.selectedDialogBtn('measure-line');
  }
}
