import { Component, OnInit } from '@angular/core';

import { SelectedDialogService } from '../../services/dialog-panes/selected-dialog.service';
import { GoToXyService } from '../../services/dialog-panes/go-to-xy.service';

@Component({
  selector: 'app-go-to-xy',
  templateUrl: './go-to-xy.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class GoToXYComponent implements OnInit {
  goToXYState: boolean = false;

  constructor(
    private goToXY: GoToXyService,
    private selectedDialog: SelectedDialogService
  ) {
    this.goToXYState = this.goToXY.getGoToXYPane();
  }

  ngOnInit() {
    this.goToXYState = this.goToXY.getGoToXYPane();
  }

  toggleGoToXY() {
    const newValue = !this.goToXY.getGoToXYPane();
    this.goToXY.setGoToXYPane(newValue);
    this.selectedDialog.selectedDialogBtn('goToXY');
  }
}
