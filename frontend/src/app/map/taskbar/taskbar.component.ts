import { Component, OnDestroy, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { MapService } from '../services/map.service';
import proj4 from 'proj4';

@Component({
  selector: 'app-taskbar',
  templateUrl: './taskbar.component.html',
  styleUrls: ['./taskbar.component.css'],
})
export class TaskbarComponent implements OnInit, OnDestroy {
  Xcoord: number = 0;
  Ycoord: number = 0;

  // Define the projection strings for WGS84 and the Greek coordinate system
  WGS84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs ';
  GreekCoords =
    '+proj=tmerc +lat_0=0 +lon_0=24 +k=0.9996 +x_0=500000 +y_0=0 +ellps=GRS80 +towgs84=-199.87,74.79,246.62,0,0,0,0 +units=m +no_defs +type=crs';

  constructor(private mapService: MapService) {}

  ngOnInit() {
    const map: L.Map = this.mapService.getMap();
    map.on('mousemove', this.getCoords, this);

    //Add scalebar
    L.control.scale({ position: 'bottomright', imperial: false }).addTo(map);
  }

  ngOnDestroy() {
    const map: L.Map = this.mapService.getMap();
    map.off('mousemove', this.getCoords, this);
  }

  getCoords(event: L.LeafletMouseEvent) {
    const lngLat = [event.latlng.lng, event.latlng.lat];

    // Perform the coordinate transformation using proj4
    const transformedCoords = proj4(this.WGS84, this.GreekCoords, lngLat);

    this.Xcoord = transformedCoords[0];
    this.Ycoord = transformedCoords[1];
  }
}
