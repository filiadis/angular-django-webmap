import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-zoom-out-btn',
  templateUrl: './zoom-out-btn.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class ZoomOutBtnComponent implements AfterViewInit {
  private mapZoomLevel: number = 0;

  constructor(private mapService: MapService) {}

  ngAfterViewInit() {
    const map: L.Map = this.mapService.getMap();
    this.mapZoomLevel = map.getZoom();
  }
  zoomOut() {
    const map: L.Map = this.mapService.getMap();
    this.mapZoomLevel = map.getZoom();
    map.setZoom((this.mapZoomLevel -= 1));
  }
}
