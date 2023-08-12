import { AfterViewInit, Component, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../../services/map.service';

@Component({
  selector: 'app-zoom-in-btn',
  templateUrl: './zoom-in-btn.component.html',
  styleUrls: ['../toolbar.component.css'],
})
export class ZoomInBtnComponent implements AfterViewInit {
  public mapZoomLevel: number = 0;

  constructor(private mapService: MapService) {}

  ngAfterViewInit() {
    const map: L.Map = this.mapService.getMap();
    this.mapZoomLevel = map.getZoom();
  }
  zoomIn() {
    const map: L.Map = this.mapService.getMap();
    this.mapZoomLevel = map.getZoom();
    map.setZoom((this.mapZoomLevel += 1));
  }
}
