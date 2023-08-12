import { Component, OnInit } from '@angular/core';

import { MapService } from '../../services/map.service';
import L from 'leaflet';
import proj4 from 'proj4';
import { GoToXyService } from '../../services/dialog-panes/go-to-xy.service';

@Component({
  selector: 'app-dialog-go-to-xy',
  templateUrl: './dialog-go-to-xy.component.html',
  styleUrls: [
    './dialog-go-to-xy.component.css',
    '../dialog-panes.component.css',
  ],
})
export class DialogGoToXyComponent implements OnInit {
  goToXYState: boolean = false;

  Xcoord: number = 0;

  Ycoord: number = 0;

  markerGroup = L.layerGroup();
  // Define the projection strings for WGS84 and the Greek coordinate system
  WGS84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ';
  GreekCoords =
    '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs +type=crs';

  constructor(private goToXY: GoToXyService, private mapService: MapService) {}

  ngOnInit() {
    this.goToXY.goToXYPane$.subscribe((value) => {
      this.goToXYState = value;
    });
    const map: L.Map = this.mapService.getMap();
    this.markerGroup.addTo(map);
  }

  goToXYInput() {
    const map: L.Map = this.mapService.getMap();

    this.markerGroup.clearLayers();

    // Perform the coordinate transformation using proj4
    const transformedCoords = proj4(this.GreekCoords, this.WGS84, [
      this.Xcoord,
      this.Ycoord,
    ]);

    let pj = proj4(this.GreekCoords, this.WGS84, [this.Xcoord, this.Ycoord]);

    map.setView([pj[1], pj[0]], 17);

    L.marker([pj[1], pj[0]]).addTo(this.markerGroup);
  }

  closegoToXY() {
    const newValue = !this.goToXY.getGoToXYPane;
    this.goToXY.setGoToXYPane(newValue);
    this.markerGroup.clearLayers();
    this.Xcoord = 0;
    this.Ycoord = 0;
  }
}
