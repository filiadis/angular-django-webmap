import { Component, OnInit } from '@angular/core';
import { MeasureAreaService } from '../../services/dialog-panes/measure-area.service';
import { SelectedDialogService } from '../../services/dialog-panes/selected-dialog.service';

@Component({
  selector: 'app-measure-area',
  templateUrl: './measure-area.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class MeasureAreaComponent implements OnInit {
  measureAreaState: boolean = false;

  constructor(
    private measureArea: MeasureAreaService,
    private selectedDialog: SelectedDialogService
  ) {
    this.measureAreaState = this.measureArea.getMeasureAreaPane();
  }

  ngOnInit() {
    this.measureAreaState = this.measureArea.getMeasureAreaPane();
  }

  toggleMeasureArea() {
    const newValue = !this.measureArea.getMeasureAreaPane();
    this.measureArea.setMeasureAreaPane(newValue);
    this.selectedDialog.selectedDialogBtn('measure-area');
  }
}
