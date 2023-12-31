import { Component } from '@angular/core';

@Component({
  selector: 'app-legend',
  templateUrl: './legend.component.html',
  styleUrls: ['./legend.component.css'],
})
export class LegendComponent {
  isLegendVisible = true;

  toggleLegend() {
    this.isLegendVisible = !this.isLegendVisible;
  }
}
